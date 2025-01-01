import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TeacherLayout from '../../components/Teacher/TeacherLayout';

const Container = styled.div`
  padding: 20px;
  font-family: 'Nunito', sans-serif;
  background-color: #e6f7f9;
  color: #2c3e50;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0f2f42;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #084265;
  }
`;

const ResourceList = styled.div`
  margin-top: 20px;
`;

const ResourceItem = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const TeacherResources = () => {
  const [resources, setResources] = useState([]);
  const [form, setForm] = useState({ title: '', file: null });

  useEffect(() => {
    // Fetch resources from the backend
    const fetchResources = async () => {
      try {
        const response = await axios.get(
          'https://schoolbridge-project-server.onrender.com/api/teacher/resources',
          {
            withCredentials: true,
          },
        );
        setResources(response.data);
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };

    fetchResources();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('file', form.file);

    try {
      const response = await axios.post(
        'https://schoolbridge-project-server.onrender.com/api/teacher/resources',
        formData,
        {
          withCredentials: true,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      setResources((prevResources) => [...prevResources, response.data]);
      setForm({ title: '', file: null });
    } catch (error) {
      console.error('Error uploading resource:', error);
    }
  };
  return (
    <>
      <TeacherLayout>
        <Container>
          <Title>Teacher Resources</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="title"
              placeholder="Resource Title"
              value={form.title}
              onChange={handleChange}
              required
            />
            <Input type="file" name="file" onChange={handleChange} required />
            <Button type="submit">Upload Resource</Button>
          </Form>
          <ResourceList>
            {resources.map((resource) => (
              <ResourceItem key={resource._id}>
                <h3>{resource.title}</h3>
                <a
                  href={`https://schoolbridge-project-server.onrender.com/${resource.filePath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </ResourceItem>
            ))}
          </ResourceList>
        </Container>
      </TeacherLayout>
    </>
  );
};

export default TeacherResources;

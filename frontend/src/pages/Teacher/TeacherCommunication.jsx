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

const Textarea = styled.textarea`
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

const MessageList = styled.div`
  margin-top: 20px;
`;

const MessageItem = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const TeacherCommunication = () => {
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState({ recipient: '', subject: '', message: '' });

  useEffect(() => {
    // Fetch messages from the backend
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/teacher/messages',
          {
            withCredentials: true,
          },
        );
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/api/teacher/messages',
        form,
        {
          withCredentials: true,
        },
      );
      setMessages((prevMessages) => [...prevMessages, response.data]);
      setForm({ recipient: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <>
      <TeacherLayout>
        <Container>
          <Title>Teacher Communication</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="recipient"
              placeholder="Recipient"
              value={form.recipient}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <Button type="submit">Send Message</Button>
          </Form>
          <MessageList>
            {messages.map((message) => (
              <MessageItem key={message._id}>
                <h3>{message.subject}</h3>
                <p>To: {message.recipient}</p>
                <p>{message.message}</p>
              </MessageItem>
            ))}
          </MessageList>
        </Container>
      </TeacherLayout>
    </>
  );
};

export default TeacherCommunication;

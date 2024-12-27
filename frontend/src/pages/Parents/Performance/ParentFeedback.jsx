import { useState } from 'react';
import styled from 'styled-components';

const FeedbackContainer = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.h2`
  color: #0f2f42;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  background-color: #0f2f42;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #084265;
  }
`;

const ParentFeedback = () => {
  const [feedback, setFeedback] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }),
      });

      if (response.ok) {
        setSuccessMessage('Feedback submitted successfully!');
        setFeedback('');
      } else {
        console.error('Error submitting feedback');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <FeedbackContainer>
      <SectionTitle>Parent Feedback</SectionTitle>
      <form onSubmit={handleSubmit}>
        <TextArea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback..."
          rows="5"
        />
        <SubmitButton type="submit">Submit Feedback</SubmitButton>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </FeedbackContainer>
  );
};

export default ParentFeedback;

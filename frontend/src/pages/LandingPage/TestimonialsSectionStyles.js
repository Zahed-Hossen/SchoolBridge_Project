import styled from 'styled-components';

export const TestimonialsSectionContainer = styled.section`
  padding: 2rem 1rem;
  background-color: #c1e5f6;
  text-align: center;
`;

export const SectionHeading = styled.h2`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  margin-bottom: 2rem;
  color: #155677;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TestimonialCard = styled.div`
  background: #e3f1fb;
  border: 1px solid #c1e5f6;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const TestimonialImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const TestimonialInfo = styled.div`
  text-align: center;
`;

export const TestimonialName = styled.h3`
  font-size: 1.25rem;
  font-family: "Poppins", sans-serif;
  margin-bottom: 0.5rem;
  color: #155677;
`;

export const TestimonialRole = styled.p`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  margin-bottom: 0.5rem;
  color: #155677;
`;

export const TestimonialText = styled.p`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  color: #155677;
`;
import sarahLImage from "../../assets/image/sarahL.png";
import markPImage from "../../assets/image/MarkP.avif";
import emilyRImage from "../../assets/image/EmilyR.avif";
import {
  TestimonialsSectionContainer,
  SectionHeading,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialImage,
  TestimonialInfo,
  TestimonialName,
  TestimonialRole,
  TestimonialText
} from './TestimonialsSectionStyles';

const testimonials = [
  {
    name: "Sarah L.",
    role: "Teacher",
    text: "SchoolBridge has transformed how I manage my class. Its intuitive and saves me so much time!",
    image: sarahLImage,
  },
  {
    name: "Mark P.",
    role: "Parent",
    text: "As a parent, I appreciate the seamless communication with teachers and administrators. Highly recommended!",
    image: markPImage,
  },
  {
    name: "Emily R.",
    role: "Administrator",
    text: "SchoolBridge has streamlined our school management processes like never before. A true game-changer!",
    image: emilyRImage,
  },
];

const TestimonialsSection = () => {
  return (
    <TestimonialsSectionContainer>
      <SectionHeading>What Our Users Are Saying</SectionHeading>
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <TestimonialImage
              src={testimonial.image}
              alt={`${testimonial.name}'s profile`}
            />
            <TestimonialInfo>
              <TestimonialName>{testimonial.name}</TestimonialName>
              <TestimonialRole>{testimonial.role}</TestimonialRole>
              <TestimonialText>&quot;{testimonial.text}&quot;</TestimonialText>
            </TestimonialInfo>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsSectionContainer>
  );
};

export default TestimonialsSection;
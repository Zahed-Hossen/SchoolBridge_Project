import {
  Container,
  Header,
  MenuIcon,
  InfoIcon,
  Title,
  ImageContainer,
  SectionTitle,
  SectionDescription,
  ButtonGroup,
  Button,
  FormGroup,
  Label,
  Input,
  Select,
  Textarea,
  SubmitButton,
  FAQSection,
  FAQItem,
  SocialMedia,
  SocialItem,
  SocialButton,
  MapContainer,
  Footer,
  FooterIcons,
  Icon,
} from './ContactUsPageStyles';
import {
  FaBars,
  FaInfoCircle,
  FaChevronRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import meeting from '../../assets/image/meeting.avif';

const ContactUs = () => {
  return (
    <Container>
      <Header>
        <MenuIcon>
          <FaBars />
        </MenuIcon>
        <Title>Contact Us</Title>
        <InfoIcon>
          <FaInfoCircle />
        </InfoIcon>
      </Header>
      <ImageContainer>
        <img
          src={meeting}
          alt="A group of people working in an office environment"
        />
      </ImageContainer>
      <SectionTitle>Choose your role for quick support</SectionTitle>
      <SectionDescription>
        For general inquiries, you can reach us via email at
        support@schoolbridge.com or call us at +1(123) 456-7890 during business
        hours (Mon-Fri, 9AM-6PM GMT). For role-specific support, please use the
        buttons below.
      </SectionDescription>
      <ButtonGroup>
        <Button>Parents Support</Button>
        <Button>Students Support</Button>
        <Button>Teachers Support</Button>
        <Button>Admins Support</Button>
      </ButtonGroup>
      <SectionTitle>Inquiry Form</SectionTitle>
      <SectionDescription>
        Please fill out the form below with your details and a brief description
        of your issue. Our support team will get back to you as soon as
        possible. For urgent matters, please include your phone number.
      </SectionDescription>
      <FormGroup>
        <Label htmlFor="role">Role Selection</Label>
        <Select id="role">
          <option>Select...</option>
          <option>Parent</option>
          <option>Student</option>
          <option>Teacher</option>
          <option>Admin</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="Enter your full name" type="text" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="Enter your email" type="email" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" placeholder="Enter your phone number" type="tel" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" placeholder="Enter the subject" type="text" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Describe your issue" rows="4" />
      </FormGroup>
      <SubmitButton>Submit Inquiry</SubmitButton>
      <FAQSection>
        <SectionTitle>Role FAQs</SectionTitle>
        <FAQItem>
          <span>Parents: How to Access the Account</span>
          <FaChevronRight />
        </FAQItem>
        <FAQItem>
          <span>Students: Assignment Submission</span>
          <FaChevronRight />
        </FAQItem>
      </FAQSection>
      <SocialMedia>
        <SectionTitle>Social Media</SectionTitle>
        <SocialItem>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/tewHAu4ZMK3RVyzNqUcYtNAgUjSjVhvwdJyiaY1wEjSFq69JA.jpg"
              alt="Facebook logo"
            />
            <span>Facebook</span>
          </div>
          <SocialButton>Follow</SocialButton>
        </SocialItem>
        <SocialItem>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/5yf1QXqvUKTSKKnLtzNxQXnUQOgLqIfiXYNu0UEFp0oLU17TA.jpg"
              alt="Twitter logo"
            />
            <span>Twitter</span>
          </div>
          <SocialButton>Follow</SocialButton>
        </SocialItem>
        <SocialItem>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/l6j5ykGzcTKYEVNX7QDwO5NhWvlekKKMcxH2JvaP51uEq69JA.jpg"
              alt="LinkedIn logo"
            />
            <span>LinkedIn</span>
          </div>
          <SocialButton>Follow</SocialButton>
        </SocialItem>
      </SocialMedia>
      <MapContainer>
        <img
          src="https://storage.googleapis.com/a1aa/image/3kkc6rWUPho8DBGJ3AatO57uYCVhnefAxAWXvlAaLN7IU17TA.jpg"
          alt="Map showing the location of the office"
        />
      </MapContainer>
      <Footer>
        <FooterIcons>
          <Icon>
            <FaPhone />
          </Icon>
          <Icon>
            <FaEnvelope />
          </Icon>
          <Icon>
            <FaMapMarkerAlt />
          </Icon>
        </FooterIcons>
        Need Help? Contact Now!
      </Footer>
    </Container>
  );
};

export default ContactUs;

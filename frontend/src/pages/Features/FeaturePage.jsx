import { useNavigate } from 'react-router-dom';
import {
  FeaturesPageContainer,
  Header,
  MenuIcon,
  PageTitle,
  Navbar,
  NavLinks,
  NavItem,
  NavLink,
  HeroSection,
  HeroContent,
  HeroHeading,
  HeroSubheading,
  CTAButton,
  FeaturesSection,
  FeaturesHeading,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  TestimonialsSection,
  TestimonialsHeading,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
  FAQSection,
  FAQHeading,
  FAQ,
  FAQTitle,
  FAQText,
  Footer,
  FooterContent,
  FooterLinks,
  FooterLink,
  Button,
} from './FeaturePageStyles';

const FeaturesPage = () => {
  const navigate = useNavigate();

  return (
    <FeaturesPageContainer>
      <Header>
        <MenuIcon className="fas fa-bars" />
        <PageTitle>Features</PageTitle>
      </Header>
      <Navbar>
        <NavLinks>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/features">Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/pricing">Pricing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
        </NavLinks>
      </Navbar>
      <HeroSection>
        <HeroContent>
          <HeroHeading>Discover Our Features</HeroHeading>
          <HeroSubheading>Explore the amazing features we offer</HeroSubheading>
          <CTAButton>Get Started</CTAButton>
        </HeroContent>
      </HeroSection>
      <FeaturesSection>
        <FeaturesHeading>Our Features</FeaturesHeading>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon className="fas fa-cogs" />
            <FeatureTitle>Feature One</FeatureTitle>
            <FeatureDescription>Description of feature one.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon className="fas fa-chart-line" />
            <FeatureTitle>Feature Two</FeatureTitle>
            <FeatureDescription>Description of feature two.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon className="fas fa-users" />
            <FeatureTitle>Feature Three</FeatureTitle>
            <FeatureDescription>
              Description of feature three.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
      <TestimonialsSection>
        <TestimonialsHeading>What Our Users Say</TestimonialsHeading>
        <TestimonialsGrid>
          <TestimonialCard>
            <TestimonialText>
              &quot;This is the best service I have ever used!&quot;
            </TestimonialText>
            <TestimonialAuthor>John Doe</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialText>
              &quot;Amazing features and great support.&quot;
            </TestimonialText>
            <TestimonialAuthor>Jane Smith</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialText>
              &quot;I highly recommend this to everyone.&quot;
            </TestimonialText>
            <TestimonialAuthor>Bob Johnson</TestimonialAuthor>
          </TestimonialCard>
        </TestimonialsGrid>
      </TestimonialsSection>
      <FAQSection>
        <FAQHeading>Frequently Asked Questions</FAQHeading>
        <FAQ>
          <FAQTitle>Is there a free trial available?</FAQTitle>
          <FAQText>
            Yes, we offer a 30-day free trial for new users. You can sign up and
            start exploring the features right away.
          </FAQText>
        </FAQ>
      </FAQSection>
      <Footer>
        <FooterContent>
          <Button
            className="btn btn-primary"
            onClick={() => navigate('/signup')}
          >
            Get Started
          </Button>
          <Button
            className="btn btn-secondary"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </Button>
          <FooterLinks>
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            <FooterLink href="/contact-us">Contact Us</FooterLink>
          </FooterLinks>
        </FooterContent>
      </Footer>
    </FeaturesPageContainer>
  );
};

export default FeaturesPage;

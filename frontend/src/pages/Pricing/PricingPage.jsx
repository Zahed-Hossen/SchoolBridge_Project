import {
  Container,
  Header,
  MenuIcon,
  InfoIcon,
  Title,
  MainImage,
  SectionTitle,
  SectionSubtitle,
  Plans,
  PlanCard,
  PlanImage,
  PlanDescription,
  ComparePlans,
  CompareCard,
  Date,
  Teams,
  Team,
  TeamImage,
  Score,
  HelpSection,
  HelpText,
  Buttons,
  Button,
  Footer,
  FooterIcons,
  Icon,
} from "./PricingPageStyles";
import { FaBars, FaInfoCircle, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Pricing = () => {
  return (
    <Container>
      <Header>
        <MenuIcon>
          <FaBars />
        </MenuIcon>
        <Title>Pricing</Title>
        <InfoIcon>
          <FaInfoCircle />
        </InfoIcon>
      </Header>
      <MainImage
        src="https://storage.googleapis.com/a1aa/image/1Y8nj79Q54b4FNFo3NxGb5KyFXRbpjjetuPOwkMzR5Rw169JA.jpg"
        alt="A busy classroom with students and teachers interacting"
      />
      <SectionTitle>Flexible Pricing for Every School Needs</SectionTitle>
      <SectionSubtitle>
        Choose a plan that fits your school’s size and goals—simple, transparent, and scalable.
      </SectionSubtitle>
      <Plans>
        <PlanCard>
          <PlanImage
            src="https://storage.googleapis.com/a1aa/image/IgzXr1xzqQZvHhmlB33Lkduu0eUQZPKjsUMzOciPRb7v169JA.jpg"
            alt="Starter Plan image"
          />
          <PlanDescription>Starter Plan</PlanDescription>
          <PlanDescription>Designed for small schools or...</PlanDescription>
        </PlanCard>
        <PlanCard>
          <PlanImage
            src="https://storage.googleapis.com/a1aa/image/egmvVEWdiH2jFizuLGToh0gsuDf1dY0lPvd0wVdtOKYnr17TA.jpg"
            alt="Standard Plan image"
          />
          <PlanDescription>Standard Plan</PlanDescription>
          <PlanDescription>Tailored for mids...</PlanDescription>
        </PlanCard>
      </Plans>
      <SectionTitle>Compare Plans</SectionTitle>
      <ComparePlans>
        <CompareCard>
          <Date>Mon 1 Jul, 03:00</Date>
          <Teams>
            <Team>
              <TeamImage
                src="https://storage.googleapis.com/a1aa/image/7UeSd3G2s0wzKa9z3p38jTZUcSBr8omW0eqPdaoefkCYuWvPB.jpg"
                alt="USA flag"
              />
              <span>USA</span>
            </Team>
            <Score>3</Score>
            <Team>
              <TeamImage
                src="https://storage.googleapis.com/a1aa/image/JrzCu9KAqqIGP9XM4Vn6FNdJbuK2epDZICqOJM0F2TW1169JA.jpg"
                alt="UK flag"
              />
              <span>UK</span>
            </Team>
            <Score>2</Score>
          </Teams>
        </CompareCard>
        <CompareCard>
          <Date>Tue 2 Jul, 03:00</Date>
          <Teams>
            <Team>
              <TeamImage
                src="https://storage.googleapis.com/a1aa/image/f4xY7uoSuKTwRSFC2qPByLxaderyY36qGLRui83V9UPhr17TA.jpg"
                alt="Canada flag"
              />
              <span>Canada</span>
            </Team>
            <Score>1</Score>
            <Team>
              <TeamImage
                src="https://storage.googleapis.com/a1aa/image/pGhptjDKilanAN8VQ96XNAYLSisNt35mbMkTYjnMARU6a9eJA.jpg"
                alt="Australia flag"
              />
              <span>Australia</span>
            </Team>
            <Score>4</Score>
          </Teams>
        </CompareCard>
        <CompareCard>
          <Date>Wed 3 Jul, 03:00</Date>
          <Teams>
            <Team>
              <TeamImage
                src="https://storage.googleapis.com/a1aa/image/RfH9uLSvrfngAkt3EuDTJ6Ogiz0Y4UYrSgD834ki7f3KXr3nA.jpg"
                alt="Germany flag"
              />
              <span>Germany</span>
            </Team>
            <Score>2</Score>
            <Team>
              <TeamImage
                src="https://storage.googleapis.com/a1aa/image/U9D51qPaORLfXKd3FsP4Bm7bPehwksNQvwuLEm43OJnir17TA.jpg"
                alt="France flag"
              />
              <span>France</span>
            </Team>
            <Score>3</Score>
          </Teams>
        </CompareCard>
        <CompareCard>
          <Date>Thu 4 Jul, 03:00</Date>
          <Teams>
            <Team>
              <TeamImage
                src="https://storage.googleapis.com/a1aa/image/hwOmieKjI0RbRaVw637TEgveQdnRhkS3cDx9J5CDf7dXXr3nA.jpg"
                alt="Japan flag"
              />
              <span>Japan</span>
            </Team>
            <Score>1</Score>
            <Team>
              <TeamImage
                src="https://storage.googleapis.com/a1aa/image/FWsi33bVmE5FMJczC9tRcJmpzctbINIPNzuLZO9H0ZK5a9eJA.jpg"
                alt="Brazil flag"
              />
              <span>Brazil</span>
            </Team>
            <Score>2</Score>
          </Teams>
        </CompareCard>
        <CompareCard>
          <Date>Mon 8 Jul, 03:00</Date>
          <Teams>
            <Team>
              <TeamImage
                src="https://storage.googleapis.com/a1aa/image/7UeSd3G2s0wzKa9z3p38jTZUcSBr8omW0eqPdaoefkCYuWvPB.jpg"
                alt="USA flag"
              />
              <span>USA</span>
            </Team>
            <Score>3</Score>
            <Team>
              <TeamImage
                src="https://storage.googleapis.com/a1aa/image/f4xY7uoSuKTwRSFC2qPByLxaderyY36qGLRui83V9UPhr17TA.jpg"
                alt="Canada flag"
              />
              <span>Canada</span>
            </Team>
            <Score>2</Score>
          </Teams>
        </CompareCard>
        <CompareCard>
          <Date>Tue 9 Jul, 03:00</Date>
          <Teams>
            <Team>
              <TeamImage
                src="https://storage.googleapis.com/a1aa/image/RfH9uLSvrfngAkt3EuDTJ6Ogiz0Y4UYrSgD834ki7f3KXr3nA.jpg"
                alt="Germany flag"
              />
              <span>Germany</span>
            </Team>
            <Score>2</Score>
            <Team>
              <TeamImage
                src="https://storage.googleapis.com/a1aa/image/hwOmieKjI0RbRaVw637TEgveQdnRhkS3cDx9J5CDf7dXXr3nA.jpg"
                alt="Japan flag"
              />
              <span>Japan</span>
            </Team>
            <Score>3</Score>
          </Teams>
        </CompareCard>
      </ComparePlans>
      <HelpSection>
        <SectionTitle>Need Help Choosing the Right Plan?</SectionTitle>
        <HelpText>
          Our team is here to assist you in selecting the best plan for your school. Whether you need more information or a personalized demo, we are ready to help.
        </HelpText>
        <Buttons>
          <Button className="contact">Contact</Button>
          <Button className="demo">Demo</Button>
        </Buttons>
      </HelpSection>
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

export default Pricing;

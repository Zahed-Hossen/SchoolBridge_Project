import {
  AboutContainer,
  Section,
  ImageContainer,
  Caption,
  Grid,
  Timeline,
  Button,
  Footer,
  FooterIcons,
  Icon,
  Card
} from './AboutPageStyles';

const About = () => {
  return (
    <AboutContainer>
      <Section>
        <h1>About SchoolBridge</h1>
        <Card>
        <ImageContainer>
          <img
            src="https://storage.googleapis.com/a1aa/image/ELtqxYdDGxJNH9clBeWg9G8weacvdeT4jkymHAhUzyWZzp3nA.jpg"
            alt="Group of students and teachers in a classroom"
          />
          <Caption>
            <h3>About SchoolBridge</h3>
            <p>Transforming Education</p>
          </Caption>
        </ImageContainer>
        </Card>
      </Section>
      <Section>
        <h2>Mission & Vision</h2>
        <p>
          Mission: Provide seamless tools to simplify school operations and elevate education. Vision: Worldwide most trusted platform connecting schools through technology.
        </p>
        <Grid>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/NHSlpcBfkwX6dS22peA07yaiUO2poWVRO5Qed678M1SLzp3nA.jpg"
              alt="Parents interacting with children"
            />
            <p>Parents</p>
          </div>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/zRiche6gS9WeEU4jea1zUXeniVj1FyUNfnoH84VaohD1MneeJA.jpg"
              alt="Students in a classroom"
            />
            <p>Students</p>
          </div>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/TsVINj0wZe0jYK9nfsVe4sSoYWiOSFD98QsfPBbxl8v5mTvPB.jpg"
              alt="Teacher writing on a whiteboard"
            />
            <p>Teachers</p>
          </div>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/t37edBEeFcgaDk0InwCUGh4t1Id7UH68Z2nq0rxq4Bgq507TA.jpg"
              alt="Admins working in an office"
            />
            <p>Admins</p>
          </div>
        </Grid>
      </Section>
      <Section>
        <h2>Journey</h2>
        <Timeline>
          <ul>
            <li>2024: Founded for school management</li>
            <li>2025: Core features launch</li>
            <li>2026: 10,000+ global users</li>
            <li>2027: AI features, 1M+ users goal</li>
          </ul>
        </Timeline>
      </Section>
      <Section>
        <h2>Values</h2>
        <p>
          Innovation: Reimagining edtech. Collaboration: Co-creating solutions. Transparency: Open communication. Empathy: User-focused design.
        </p>
        <Grid>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/hKfu3d3DK0XAXCrK4oAnJzOvCXrZE7NSD233jPmvxaxxc69JA.jpg"
              alt="Parents discussing with teachers"
            />
            <p>Parents</p>
          </div>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/3HKZHQpE4yZoDJp9C5Bl2ijRYr9JHSqc9eap1EI81Hx3c69JA.jpg"
              alt="Students collaborating on a project"
            />
            <p>Students</p>
          </div>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/2lxdAbaR3MYGG96GEiEvfeuM5mTylG50WOt7oJEAMeWazp3nA.jpg"
              alt="Teachers in a meeting"
            />
            <p>Teachers</p>
          </div>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/iM04v5AwzP78Mpi3vYla5UpIP0peM8pwE7CS30EvXb04c69JA.jpg"
              alt="Admins working together"
            />
            <p>Admins</p>
          </div>
        </Grid>
      </Section>
      <Section>
        <h2>Benefits</h2>
        <p>
          Parents: Track progress & events. Students: Access dashboard. Teachers: Efficient management. Admins: Integrated analytics.
        </p>
        <Grid>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/IACN2aivfx1EXayQZU6rvsjZuLV7jn21UiEBOYF6XShzc69JA.jpg"
              alt="Group photo of the team"
            />
            <p>Photos</p>
          </div>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/wkfvaCaypExEeUCESXf7xzwIs6eEjbXKKgOK98KbVMfsOneeJA.jpg"
              alt="Team members discussing roles"
            />
            <p>Roles</p>
          </div>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/TZCNelbRhuUcdKaXZATDjeDEfX12ft9doOR4bAfDff6S7c69JA.jpg"
              alt="Team collaborating on a project"
            />
            <p>Collaboration</p>
          </div>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/LDRL840LNXreNScjP7gPsufTmhdV6ICXRjFQRoOfdGCSzp3nA.jpg"
              alt="Team working on solutions"
            />
            <p>Solutions</p>
          </div>
        </Grid>
      </Section>
      <Section>
        <h2>Testimonials</h2>
        <p>
          Parent: Updated and engaged. Student: Easy access to assignments. Teacher: Simplified communication.
        </p>
        <Grid>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/B6xffP1mUTvXyUjS7YAuPeuBQdGFoMFyo98A1e0mZ6QOnTvPB.jpg"
              alt="Parent with children"
            />
            <p>Parent: Updated and engaged</p>
          </div>
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/Rmwea0RMfbk1aEeh10KfRYtW6jIL8E8b4NkEmnENjOtTnTvPB.jpg"
              alt="Student in a classroom"
            />
            <p>Student: Easy access to assignments</p>
          </div>
        </Grid>
      </Section>
      <Button href="#">Be Part of the Educational Revolution</Button>
      <Button href="#" secondary>Learn More</Button>
      <Footer>
        <p>© 2024 SchoolBridge</p>
        <FooterIcons>
          <Icon className="fas fa-home" />
          <Icon className="fas fa-calendar-alt" />
          <Icon className="fas fa-user" />
        </FooterIcons>
      </Footer>
    </AboutContainer>
  );
};

export default About;











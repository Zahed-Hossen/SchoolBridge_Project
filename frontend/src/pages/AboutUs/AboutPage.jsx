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
  Card,
} from './AboutPageStyles';
import meeting from '../../assets/image/meeting.avif';
import gossiping from '../../assets/image/gossiping.avif';
import interaction from '../../assets/image/interaction.webp';
import teamWork from '../../assets/image/teamWork.webp';
const About = () => {
  return (
    <AboutContainer>
      <Section>
        <h1>About SchoolBridge</h1>
        <Card>
          <ImageContainer>
            <img
              src={meeting}
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
          Mission: Provide seamless tools to simplify school operations and
          elevate education. Vision: Worldwide most trusted platform connecting
          schools through technology.
        </p>
        <Grid>
          <div>
            <img src={gossiping} alt="Gossiping" width={200} />
            <p>Parents</p>
          </div>
          <div>
            <img src={teamWork} alt="Students in a classroom" />
            <p>Students</p>
          </div>
          <div>
            <img src={interaction} alt="Teacher writing on a whiteboard" />
            <p>Teachers</p>
          </div>
          <div>
            <img src={teamWork} alt="Admins working in an office" />
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
          Innovation: Reimagining edtech. Collaboration: Co-creating solutions.
          Transparency: Open communication. Empathy: User-focused design.
        </p>
        <Grid>
          <div>
            <img src={teamWork} alt="Parents discussing with teachers" />
            <p>Parents</p>
          </div>
          <div>
            <img src={interaction} alt="Students collaborating on a project" />
            <p>Students</p>
          </div>
          <div>
            <img src={teamWork} alt="Teachers in a meeting" />
            <p>Teachers</p>
          </div>
          <div>
            <img src={teamWork} alt="Admins working together" />
            <p>Admins</p>
          </div>
        </Grid>
      </Section>
      <Section>
        <h2>Benefits</h2>
        <p>
          Parents: Track progress & events. Students: Access dashboard.
          Teachers: Efficient management. Admins: Integrated analytics.
        </p>
        <Grid>
          <div>
            <img src={teamWork} alt="Group photo of the team" />
            <p>Photos</p>
          </div>
          <div>
            <img src={interaction} alt="Team members discussing roles" />
            <p>Roles</p>
          </div>
          <div>
            <img src={teamWork} alt="Team collaborating on a project" />
            <p>Collaboration</p>
          </div>
          <div>
            <img src={teamWork} alt="Team working on solutions" />
            <p>Solutions</p>
          </div>
        </Grid>
      </Section>
      <Section>
        <h2>Testimonials</h2>
        <p>
          Parent: Updated and engaged. Student: Easy access to assignments.
          Teacher: Simplified communication.
        </p>
        <Grid>
          <div>
            <img src={teamWork} alt="Parent with children" />
            <p>Parent: Updated and engaged</p>
          </div>
          <div>
            <img src={interaction} alt="Student in a classroom" />
            <p>Student: Easy access to assignments</p>
          </div>
        </Grid>
      </Section>
      <Button href="#">Be Part of the Educational Revolution</Button>
      <Button href="#" secondary>
        Learn More
      </Button>
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

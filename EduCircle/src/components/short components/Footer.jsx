import styled from "styled-components";
import { FaBookReader, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: white;
  border-top: 1px solid #e5e7eb;
  padding: 2rem 0;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #3b82f6;
  font-size: 1.125rem;
  font-weight: bold;
`;

const Description = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #4b5563;
`;

const Section = styled.div``;

const SectionTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const List = styled.ul`
  margin-top: 1rem;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const StyledAnchor = styled.a`
  color: #4b5563;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #3b82f6;
  }
`;

const IconGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const IconLink = styled.a`
  color: #6b7280;
  transition: color 0.3s;

  &:hover {
    color: #3b82f6;
  }
`;

const BottomBar = styled.div`
  margin-top: 2rem;
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Grid>
          <Brand>
            <Logo>
              <FaBookReader size={24} />
              EduCircle
            </Logo>
            <Description>
              Connecting learners through virtual study groups.
            </Description>
          </Brand>

          <Section>
            <SectionTitle>Platform</SectionTitle>
            <List>
              <ListItem>
                <StyledAnchor href="#">Home</StyledAnchor>
              </ListItem>
              <ListItem>
                <StyledAnchor href="#">Study Groups</StyledAnchor>
              </ListItem>
              <ListItem>
                <StyledAnchor href="#">Resources</StyledAnchor>
              </ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>Features</SectionTitle>
            <List>
              <ListItem>
                <StyledAnchor href="#">Schedule Sessions</StyledAnchor>
              </ListItem>
              <ListItem>
                <StyledAnchor href="#">Join Groups</StyledAnchor>
              </ListItem>
              <ListItem>
                <StyledAnchor href="#">Create Group</StyledAnchor>
              </ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>Connect</SectionTitle>
            <IconGroup>
              <IconLink href="#">
                <FaGithub size={20} />
              </IconLink>
              <IconLink href="#">
                <FaTwitter size={20} />
              </IconLink>
              <IconLink href="#">
                <FaLinkedin size={20} />
              </IconLink>
            </IconGroup>
          </Section>
        </Grid>

        <BottomBar>
          &copy; {new Date().getFullYear()} EduCircle. All rights reserved.
        </BottomBar>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

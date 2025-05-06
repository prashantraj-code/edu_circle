import React from "react";
import styled from "styled-components";
import heroImage from "../../assets/world-map.png"; // Replace with your image path

const Wrapper = styled.div`
  padding: 2rem;
  background: #f9fafb;
`;

const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #377dff, #30c59c);
  border-radius: 16px;
  padding: 2rem;
  color: white;
  margin-bottom: 4rem;
  flex-wrap: wrap;
`;

const HeroContent = styled.div`
  max-width: 500px;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;

  button {
    padding: 0.75rem 1.25rem;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  .browse {
    background-color: #f97316;
    color: white;
  }

  .create {
    background-color: white;
    color: #3b82f6;
    border: 1px solid #d1d5db;
  }
`;

const HeroImage = styled.img`
  max-width: 400px;
  border-radius: 8px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);

  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;
  }
`;

const HomePage = () => {
  return (
    <Wrapper>
      <HeroSection>
        <HeroContent>
          <h1>Connect, Study, and Excel Together</h1>
          <p>
            Join virtual study groups, share resources, and collaborate with
            peers on EduCircle—your online learning community.
          </p>
          <HeroButtons>
            <button className="browse">Browse Study Groups</button>
            <button className="create">Create New Group</button>
          </HeroButtons>
        </HeroContent>
        <HeroImage src={heroImage} alt="World map with plane" />
      </HeroSection>

      <SectionTitle>How EduCircle Works</SectionTitle>
      <FeaturesGrid>
        <FeatureCard>
          <img src="/icons/group-icon.png" alt="Join Study Groups" width="32" />
          <h4>Join Study Groups</h4>
          <p>
            Find groups that match your interests or create your own to connect
            with peers.
          </p>
        </FeatureCard>
        <FeatureCard>
          <img src="/icons/book-icon.png" alt="Share Resources" width="32" />
          <h4>Share Resources</h4>
          <p>
            Easily share Google Docs, notes, and study materials with your group
            members.
          </p>
        </FeatureCard>
        <FeatureCard>
          <img
            src="/icons/calendar-icon.png"
            alt="Schedule Sessions"
            width="32"
          />
          <h4>Schedule Sessions</h4>
          <p>
            Plan and organize study sessions with an easy-to-use calendar
            interface.
          </p>
        </FeatureCard>
        <FeatureCard>
          <img src="/icons/video-icon.png" alt="Meet Virtually" width="32" />
          <h4>Meet Virtually</h4>
          <p>
            Connect via Zoom meetings to collaborate and study together in
            real-time.
          </p>
        </FeatureCard>
      </FeaturesGrid>
    </Wrapper>
  );
};

export default HomePage;

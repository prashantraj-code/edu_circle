import React from "react";
import styled from "styled-components";

const Section = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Column = styled.div`
  flex: 1;
  min-width: 300px;
`;

const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  span {
    font-size: 0.875rem;
    color: #3b82f6;
    cursor: pointer;
  }
`;

const SessionCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.04);

  h4 {
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;
  }

  button {
    margin-top: 0.5rem;
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    border: 1px solid #e5e7eb;
    background: white;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const MeetingCard = styled(SessionCard)`
  .actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.75rem;

    button {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .join {
      background-color: #6366f1;
      color: white;
      border: none;
    }
  }

  .tag {
    background: #e0e7ff;
    color: #4338ca;
    font-size: 0.75rem;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    float: right;
  }
`;

const Meetings = () => {
  return (
    <Section>
      <Column>
        <ColumnHeader>
          <h3>Upcoming Sessions</h3>
          <span>View Calendar →</span>
        </ColumnHeader>
        <SessionCard>
          <h4>Limits and Continuity Review</h4>
          <p>Tuesday, May 6 at 6:00 PM</p>
          <p>Calculus Masters</p>
          <button>Join Session</button>
        </SessionCard>
        <SessionCard>
          <h4>Intro to Data Science with Python</h4>
          <p>Thursday, May 8 at 2:00 PM</p>
          <p>Python Programming Club</p>
          <button>Join Session</button>
        </SessionCard>
      </Column>

      <Column>
        <ColumnHeader>
          <h3>Active Meetings</h3>
          <span>Schedule Meeting →</span>
        </ColumnHeader>
        <MeetingCard>
          <h4>
            Calculus Study Session <span className="tag">Upcoming</span>
          </h4>
          <p>Hosted by Alex Johnson</p>
          <p>Time: May 6, 2025, 5:48:46 PM</p>
          <p>Duration: 60 min</p>
          <div className="actions">
            <button className="join">📹 Join Meeting</button>
            <button>📋 Copy Link</button>
          </div>
        </MeetingCard>
        <MeetingCard>
          <h4>
            Python Programming Workshop <span className="tag">Upcoming</span>
          </h4>
          <p>Hosted by David Chen</p>
          <p>Time: May 7, 2025, 3:48:46 PM</p>
          <p>Duration: 90 min</p>
          <div className="actions">
            <button className="join">📹 Join Meeting</button>
            <button>📋 Copy Link</button>
          </div>
        </MeetingCard>
      </Column>
    </Section>
  );
};

export default Meetings;

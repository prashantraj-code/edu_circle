import React from "react";
import styled from "styled-components";
import groupImage1 from "../../assets/calculus.jpeg";
import groupImage2 from "../../assets/python.jpeg";
import groupImage3 from "../../assets/literature.jpeg";

const Section = styled.div`
  padding: 2rem;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const GroupCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
`;

const GroupImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;

  .tag {
    display: inline-block;
    background: #6366f1;
    color: white;
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 0.75rem;
  }

  .info {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: #6b7280;
    margin-bottom: 0.75rem;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;

    button {
      border: none;
      padding: 0.5rem 0.75rem;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: background 0.2s, color 0.2s;
    }
    button:first-child {
      background: #6366f1;
      color: white;
    }
    button:last-child {
      background: #22c55e;
      color: white;
    }
  }
`;

import { useState } from "react";

const BottomThing = () => {
  const initialGroups = [
    {
      tag: "Mathematics",
      title: "Calculus Masters",
      desc: "A group dedicated to mastering calculus concepts...",
      members: 12,
      time: "Tomorrow, 6:00 PM",
      img: groupImage1,
    },
    {
      tag: "Computer Science",
      title: "Python Programming Club",
      desc: "Learn Python from basics to advanced topics...",
      members: 28,
      time: "Saturday, 2:00 PM",
      img: groupImage2,
    },
    {
      tag: "Literature",
      title: "Literature Analysis Group",
      desc: "Discussing classical and contemporary literature...",
      members: 15,
      time: "Monday, 7:00 PM",
      img: groupImage3,
    },
  ];

  const [groups, setGroups] = useState(initialGroups);

  const handleDelete = (idx) => {
    setGroups((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <Section>
      <CardsGrid>
        {groups.map((group, idx) => (
          <GroupCard key={idx}>
            <GroupImage src={group.img} alt={group.title} />
            <CardContent>
              <div className="tag">{group.tag}</div>
              <h4>{group.title}</h4>
              <p>{group.desc}</p>
              <div className="info">
                <span>👥 {group.members} members</span>
                <span>📅 {group.time}</span>
              </div>
              <div className="actions">
                <button>View Group 📖</button>
                <button>Join Group</button>
                <button
                  style={{ background: "#ef4444", color: "white" }}
                  onClick={() => handleDelete(idx)}
                >
                  Delete
                </button>
              </div>
            </CardContent>
          </GroupCard>
        ))}
      </CardsGrid>
    </Section>
  );
};

export default BottomThing;

import React, { useRef, useState } from "react";
import styled from "styled-components";
import NavBar from "./short components/NavBar";
import BottomThing from "./short components/BottomThing";
import groupImage1 from "./short components/../../assets/calculus.jpeg";
import groupImage2 from "./short components/../../assets/python.jpeg";
import groupImage3 from "./short components/../../assets/literature.jpeg";

const PageWrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TopOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

const OptionCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.07);
  padding: 1.5rem 2rem;
  min-width: 220px;
  text-align: center;
  transition: box-shadow 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 16px rgba(91, 60, 196, 0.12);
  }
  h3 {
    color: #5b3cc4;
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: #6b7280;
    font-size: 0.95rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
`;

const Feature = styled.div`
  background: #f9fafb;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: left;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.04);
  h4 {
    color: #377dff;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  p {
    color: #374151;
    font-size: 0.95rem;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
const ModalContent = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  min-width: 320px;
  box-shadow: 0 0 16px rgba(91, 60, 196, 0.15);
`;
const FormField = styled.div`
  margin-bottom: 1.25rem;
  label {
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  input,
  textarea {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    font-size: 1rem;
    margin-bottom: 0.25rem;
    box-sizing: border-box;
  }
`;
const SuccessMsg = styled.div`
  color: #22c55e;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

const MyGroupsSection = styled.div`
  margin-bottom: 2.5rem;
`;
const MyGroupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;
const MyGroupCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;
const MyGroupImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;
const MyGroupContent = styled.div`
  padding: 1rem;
  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  p {
    font-size: 0.9rem;
    color: #6b7280;
    margin-bottom: 0.5rem;
  }
`;

const StudyGroups = () => {
  const groupsRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", desc: "", topic: "" });
  const [success, setSuccess] = useState(false);
  const [myGroups, setMyGroups] = useState([
    {
      name: "Calculus Masters",
      topic: "Mathematics",
      desc: "A group dedicated to mastering calculus concepts...",
      img: groupImage1,
      code: "CALC1234",
    },
    {
      name: "Python Programming Club",
      topic: "Computer Science",
      desc: "Learn Python from basics to advanced topics...",
      img: groupImage2,
      code: "PYTH5678",
    },
  ]);

  const [openedGroup, setOpenedGroup] = useState(null);

  const handleCreate = () => {
    setShowModal(true);
    setSuccess(false);
    setForm({ name: "", desc: "", topic: "" });
  };
  const handleJoin = () => {
    if (groupsRef.current) {
      groupsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // Helper to generate a unique code
  const generateGroupCode = (name) => {
    return (
      name.replace(/\s+/g, "").substring(0, 4).toUpperCase() +
      Math.floor(1000 + Math.random() * 9000)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMyGroups([
      ...myGroups,
      {
        name: form.name,
        topic: form.topic,
        desc: form.desc,
        img: groupImage3, // Use a default image for new groups
        code: generateGroupCode(form.name),
      },
    ]);
    setSuccess(true);
    setTimeout(() => setShowModal(false), 1500);
  };

  return (
    <>
      <NavBar />
      <PageWrapper>
        <TopOptions>
          <OptionCard onClick={handleCreate}>
            <h3>Create Group</h3>
            <p>
              Start a new study group and invite others to join your learning
              journey.
            </p>
          </OptionCard>
          <OptionCard onClick={handleJoin}>
            <h3>Join Group</h3>
            <p>
              Browse existing groups and join one that matches your interests.
            </p>
          </OptionCard>
        </TopOptions>

        {showModal && (
          <ModalOverlay onClick={() => setShowModal(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <h2 style={{ marginBottom: "1rem" }}>Create a New Group</h2>
              {success ? (
                <SuccessMsg>Group created successfully!</SuccessMsg>
              ) : (
                <form onSubmit={handleSubmit}>
                  <FormField>
                    <label htmlFor="name">Group Name</label>
                    <input
                      name="name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Calculus Masters"
                    />
                  </FormField>
                  <FormField>
                    <label htmlFor="topic">Topic</label>
                    <input
                      name="topic"
                      id="topic"
                      value={form.topic}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Mathematics"
                    />
                  </FormField>
                  <FormField>
                    <label htmlFor="desc">Description</label>
                    <textarea
                      name="desc"
                      id="desc"
                      value={form.desc}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Describe your group..."
                    />
                  </FormField>
                  <button
                    type="submit"
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      background: "#5b3cc4",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Create Group
                  </button>
                  <button
                    type="button"
                    style={{
                      marginLeft: "1rem",
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      background: "#e5e7eb",
                      color: "#374151",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </form>
              )}
            </ModalContent>
          </ModalOverlay>
        )}

        <MyGroupsSection>
          <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            My Groups
          </h2>
          <MyGroupsGrid>
            {myGroups.map((group, idx) => (
              <MyGroupCard key={idx}>
                <MyGroupImage src={group.img} alt={group.name} />
                <MyGroupContent>
                  <h4>{group.name}</h4>
                  <p>
                    <b>Topic:</b> {group.topic}
                  </p>
                  <p>{group.desc}</p>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      style={{
                        padding: "0.4rem 1rem",
                        borderRadius: "8px",
                        background: "#5b3cc4",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onClick={() => setOpenedGroup(group)}
                    >
                      Open Group
                    </button>
                    <button
                      style={{
                        padding: "0.4rem 1rem",
                        borderRadius: "8px",
                        background: "#ef4444",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setMyGroups(myGroups.filter((_, i) => i !== idx));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </MyGroupContent>
              </MyGroupCard>
            ))}
          </MyGroupsGrid>

          {openedGroup && (
            <ModalOverlay onClick={() => setOpenedGroup(null)}>
              <ModalContent onClick={(e) => e.stopPropagation()}>
                <h2 style={{ marginBottom: "1rem" }}>{openedGroup.name}</h2>
                <p>
                  <b>Topic:</b> {openedGroup.topic}
                </p>
                <p>{openedGroup.desc}</p>
                <div
                  style={{
                    marginTop: "1.5rem",
                    padding: "1rem",
                    background: "#f3f4f6",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <b>Group Code:</b>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      marginTop: "0.5rem",
                      color: "#6366f1",
                      letterSpacing: "2px",
                    }}
                  >
                    {openedGroup.code}
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#374151",
                      marginTop: "0.5rem",
                    }}
                  >
                    Share this code to let others join your group!
                  </p>
                </div>
                <button
                  style={{
                    marginTop: "1.5rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    background: "#5b3cc4",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenedGroup(null)}
                >
                  Close
                </button>
              </ModalContent>
            </ModalOverlay>
          )}
        </MyGroupsSection>

        <div ref={groupsRef} />
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Explore Study Groups
        </h2>
        <BottomThing />

        <h2 style={{ textAlign: "center", margin: "2.5rem 0 1.5rem" }}>
          Why Join a Study Group?
        </h2>
        <FeaturesGrid>
          <Feature>
            <h4>Collaborative Learning</h4>
            <p>
              Work together with peers to solve problems, share resources, and
              deepen understanding.
            </p>
          </Feature>
          <Feature>
            <h4>Expert Guidance</h4>
            <p>Get help from experienced members and mentors in your group.</p>
          </Feature>
          <Feature>
            <h4>Flexible Scheduling</h4>
            <p>Organize sessions that fit your timetable and learning style.</p>
          </Feature>
          <Feature>
            <h4>Resource Sharing</h4>
            <p>
              Access notes, practice problems, and study materials shared by
              group members.
            </p>
          </Feature>
        </FeaturesGrid>
      </PageWrapper>
    </>
  );
};

export default StudyGroups;

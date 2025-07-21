import React, { useState } from "react";
import NavBar from "./short components/NavBar";

const initialEvents = [
  {
    group: "Calculus Masters",
    title: "Integration Techniques",
    date: "2025-07-22",
    time: "6:00 PM",
    desc: "Learn advanced integration methods.",
  },
  {
    group: "Python Programming Club",
    title: "Intro to Web Scraping",
    date: "2025-07-23",
    time: "2:00 PM",
    desc: "Hands-on session with BeautifulSoup.",
  },
  {
    group: "Literature Analysis Group",
    title: "Shakespeare's Tragedies",
    date: "2025-07-24",
    time: "7:00 PM",
    desc: "Discussion on Hamlet and Macbeth.",
  },
];

const groups = [
  "All",
  "Calculus Masters",
  "Python Programming Club",
  "Literature Analysis Group",
];

const Schedule = () => {
  const [events, setEvents] = useState(initialEvents);
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    group: "",
    title: "",
    date: "",
    time: "",
    desc: "",
  });

  const filteredEvents = events.filter(
    (e) => selectedGroup === "All" || e.group === selectedGroup
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, { ...form }]);
    setShowModal(false);
    setForm({ group: "", title: "", date: "", time: "", desc: "" });
  };

  return (
    <>
      <NavBar />
      <div style={{ padding: "2rem", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Schedule
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          {groups.map((g) => (
            <button
              key={g}
              style={{
                padding: "0.5rem 1.2rem",
                borderRadius: "8px",
                background: selectedGroup === g ? "#6366f1" : "#e5e7eb",
                color: selectedGroup === g ? "#fff" : "#374151",
                border: "none",
                cursor: "pointer",
                fontWeight: "500",
              }}
              onClick={() => setSelectedGroup(g)}
            >
              {g}
            </button>
          ))}
          <button
            style={{
              padding: "0.5rem 1.2rem",
              borderRadius: "8px",
              background: "#22c55e",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
            }}
            onClick={() => setShowModal(true)}
          >
            + Add Event
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filteredEvents.length === 0 ? (
            <div
              style={{
                gridColumn: "1/-1",
                textAlign: "center",
                color: "#6b7280",
              }}
            >
              No events scheduled.
            </div>
          ) : (
            filteredEvents.map((e, idx) => (
              <div
                key={idx}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 0 8px rgba(0,0,0,0.05)",
                  padding: "1.2rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "#6366f1",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  {e.group}
                </div>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "0.3rem",
                  }}
                >
                  {e.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#6b7280",
                    marginBottom: "0.7rem",
                  }}
                >
                  {e.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "#374151",
                      background: "#e5e7eb",
                      borderRadius: "6px",
                      padding: "0.2rem 0.7rem",
                    }}
                  >
                    {e.date} | {e.time}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {showModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
            onClick={() => setShowModal(false)}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "2rem",
                minWidth: 320,
                boxShadow: "0 0 16px rgba(0,0,0,0.08)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 style={{ marginBottom: "1rem" }}>Add New Event</h3>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1rem" }}>
                  <label>Group</label>
                  <select
                    name="group"
                    value={form.group}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "6px",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <option value="">Select group</option>
                    {groups.slice(1).map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label>Title</label>
                  <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "6px",
                      border: "1px solid #e5e7eb",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label>Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "6px",
                      border: "1px solid #e5e7eb",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label>Time</label>
                  <input
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "6px",
                      border: "1px solid #e5e7eb",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label>Description</label>
                  <textarea
                    name="desc"
                    value={form.desc}
                    onChange={handleChange}
                    required
                    rows={3}
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "6px",
                      border: "1px solid #e5e7eb",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: "0.5rem 1.2rem",
                    borderRadius: "8px",
                    background: "#6366f1",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Add Event
                </button>
                <button
                  type="button"
                  style={{
                    marginLeft: "1rem",
                    padding: "0.5rem 1.2rem",
                    borderRadius: "8px",
                    background: "#e5e7eb",
                    color: "#374151",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Schedule;

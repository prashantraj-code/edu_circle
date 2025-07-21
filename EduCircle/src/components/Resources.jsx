import React, { useState } from "react";
import NavBar from "./short components/NavBar";

const resourceData = [
  {
    title: "Khan Academy - Calculus",
    category: "Mathematics",
    type: "Video",
    url: "https://www.khanacademy.org/math/calculus-1",
    desc: "Free video lessons and practice for calculus.",
  },
  {
    title: "Python Docs",
    category: "Programming",
    type: "Website",
    url: "https://docs.python.org/3/",
    desc: "Official Python documentation for all levels.",
  },
  {
    title: "Project Gutenberg",
    category: "Literature",
    type: "Website",
    url: "https://www.gutenberg.org/",
    desc: "Free access to thousands of classic books.",
  },
  {
    title: "React Docs",
    category: "Programming",
    type: "Website",
    url: "https://react.dev/",
    desc: "Official React documentation and guides.",
  },
  {
    title: "Paul's Online Math Notes",
    category: "Mathematics",
    type: "Website",
    url: "https://tutorial.math.lamar.edu/",
    desc: "Detailed notes and tutorials for math topics.",
  },
  {
    title: "Literary Analysis Guide",
    category: "Literature",
    type: "PDF",
    url: "https://writingcenter.unc.edu/tips-and-tools/literature-analysis/",
    desc: "How to analyze literature effectively.",
  },
];

const categories = ["All", "Mathematics", "Programming", "Literature"];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredResources = resourceData.filter(
    (r) =>
      (selectedCategory === "All" || r.category === selectedCategory) &&
      (r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.desc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <NavBar />
      <div style={{ padding: "2rem", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Resources
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              style={{
                padding: "0.5rem 1.2rem",
                borderRadius: "8px",
                background: selectedCategory === cat ? "#6366f1" : "#e5e7eb",
                color: selectedCategory === cat ? "#fff" : "#374151",
                border: "none",
                cursor: "pointer",
                fontWeight: "500",
              }}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "0.7rem 1rem",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
            marginBottom: "2rem",
            fontSize: "1rem",
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filteredResources.length === 0 ? (
            <div
              style={{
                gridColumn: "1/-1",
                textAlign: "center",
                color: "#6b7280",
              }}
            >
              No resources found.
            </div>
          ) : (
            filteredResources.map((r, idx) => (
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
                  {r.category}
                </div>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "0.3rem",
                  }}
                >
                  {r.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#6b7280",
                    marginBottom: "0.7rem",
                  }}
                >
                  {r.desc}
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
                    {r.type}
                  </span>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#6366f1",
                      fontWeight: "500",
                      textDecoration: "none",
                    }}
                  >
                    Open
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Resources;

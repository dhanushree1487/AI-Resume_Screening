import { useState } from "react";

function Candidates() {
  const [search, setSearch] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [isListening, setIsListening] = useState(false);
  const [voiceMessage, setVoiceMessage] = useState("");

  const candidates = [
    {
      id: 1,
      name: "Ananya Sharma",
      email: "ananya@example.com",
      role: "Frontend Developer",
      experience: "2 years",
      location: "Chennai",
      skills: ["React", "JavaScript", "CSS"],
      status: "Available",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      email: "rahul@example.com",
      role: "Backend Developer",
      experience: "3 years",
      location: "Bangalore",
      skills: ["Python", "FastAPI", "SQL"],
      status: "Available",
    },
    {
      id: 3,
      name: "Priya Nair",
      email: "priya@example.com",
      role: "Full Stack Developer",
      experience: "2 years",
      location: "Kochi",
      skills: ["React", "Python", "MongoDB"],
      status: "Interviewing",
    },
    {
      id: 4,
      name: "Arjun Raj",
      email: "arjun@example.com",
      role: "Data Analyst",
      experience: "1 year",
      location: "Chennai",
      skills: ["Python", "SQL", "Excel"],
      status: "Available",
    },
    {
      id: 5,
      name: "Meera Krishnan",
      email: "meera@example.com",
      role: "UI/UX Designer",
      experience: "3 years",
      location: "Bangalore",
      skills: ["Figma", "UI Design", "UX"],
      status: "Available",
    },
  ];

  const skills = [
    "All",
    "React",
    "Python",
    "SQL",
    "JavaScript",
    "Figma",
  ];

  // =========================================================
  // VOICE SEARCH
  // =========================================================

  const startVoiceSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Voice search is not supported in this browser. Please use Google Chrome."
      );
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    setIsListening(true);
    setVoiceMessage("Listening... Speak your search command 🎙️");

    recognition.start();

    recognition.onresult = (event) => {
      const transcript =
        event.results[0][0].transcript;

      setSearch(transcript);
      setVoiceMessage(`You said: "${transcript}"`);

      recognition.stop();
    };

    recognition.onerror = () => {
      setIsListening(false);
      setVoiceMessage(
        "Sorry, I couldn't understand. Please try again."
      );
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  // =========================================================
  // SEARCH
  // =========================================================

  const filteredCandidates = candidates.filter((candidate) => {
    const searchText = search.toLowerCase().trim();

    // Remove common voice command words
    const cleanedSearch = searchText
      .replace("find", "")
      .replace("show", "")
      .replace("search", "")
      .replace("candidates", "")
      .replace("candidate", "")
      .replace("developers", "")
      .replace("developer", "")
      .trim();

    const matchesSearch =
      searchText === "" ||
      candidate.name.toLowerCase().includes(searchText) ||
      candidate.role.toLowerCase().includes(searchText) ||
      candidate.location.toLowerCase().includes(searchText) ||
      candidate.skills.some((skill) =>
        skill.toLowerCase().includes(searchText)
      ) ||
      candidate.experience.toLowerCase().includes(searchText) ||
      candidate.status.toLowerCase().includes(searchText) ||
      candidate.name.toLowerCase().includes(cleanedSearch) ||
      candidate.role.toLowerCase().includes(cleanedSearch) ||
      candidate.location.toLowerCase().includes(cleanedSearch) ||
      candidate.skills.some((skill) =>
        skill.toLowerCase().includes(cleanedSearch)
      );

    const matchesSkill =
      selectedSkill === "All" ||
      candidate.skills.includes(selectedSkill);

    return matchesSearch && matchesSkill;
  });

  return (
    <div style={styles.page}>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div style={styles.container}>

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div style={styles.header}>

          <div>
            <div style={styles.brand}>
              RECRUVA <span style={styles.ai}>AI</span>
            </div>

            <div style={styles.badge}>
              <span style={styles.badgeDot}></span>
              AI-POWERED RECRUITMENT
            </div>

            <h1 style={styles.title}>
              Find the right candidates.
            </h1>

            <p style={styles.subtitle}>
              Search, discover and connect with candidates
              using intelligent recruitment tools.
            </p>
          </div>

          {/* Candidate Count */}

          <div style={styles.countBox}>
            <span style={styles.countNumber}>
              {filteredCandidates.length}
            </span>

            <span style={styles.countLabel}>
              Candidates
            </span>
          </div>
        </div>


        {/* =====================================================
            SEARCH BOX
        ===================================================== */}

        <div style={styles.searchSection}>

          <div style={styles.searchHeader}>

            <div>
              <h2 style={styles.searchTitle}>
                Candidate Search
              </h2>

              <p style={styles.searchSubtitle}>
                Type your search or use your voice
              </p>
            </div>

            <div style={styles.voiceHint}>
              🎙️ Try saying:
              <strong>
                {" "}“Find Python candidates”
              </strong>
            </div>

          </div>


          {/* Search Input */}

          <div style={styles.searchRow}>

            <div style={styles.searchWrapper}>

              <span style={styles.searchIcon}>
                🔎
              </span>

              <input
                type="text"
                placeholder="Search by name, role, skill, location..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setVoiceMessage("");
                }}
                style={styles.searchInput}
              />

              {search && (
                <button
                  style={styles.clearButton}
                  onClick={() => {
                    setSearch("");
                    setVoiceMessage("");
                  }}
                >
                  ✕
                </button>
              )}

            </div>


            {/* Voice Button */}

            <button
              onClick={startVoiceSearch}
              style={{
                ...styles.voiceButton,
                ...(isListening
                  ? styles.voiceButtonActive
                  : {}),
              }}
            >

              <span style={styles.microphone}>
                🎙️
              </span>

              <span>
                {isListening
                  ? "Listening..."
                  : "Voice Search"}
              </span>

            </button>

          </div>


          {/* Voice Message */}

          {voiceMessage && (
            <div style={styles.voiceMessage}>
              <span>✦</span>
              {voiceMessage}
            </div>
          )}


          {/* Skill Filters */}

          <div style={styles.filterArea}>

            <span style={styles.filterLabel}>
              Filter by skill:
            </span>

            <div style={styles.skillFilters}>

              {skills.map((skill) => (
                <button
                  key={skill}
                  onClick={() =>
                    setSelectedSkill(skill)
                  }
                  style={{
                    ...styles.filterButton,
                    ...(selectedSkill === skill
                      ? styles.activeFilter
                      : {}),
                  }}
                >
                  {skill === "All"
                    ? "All Skills"
                    : skill}
                </button>
              ))}

            </div>

          </div>

        </div>


        {/* =====================================================
            SEARCH RESULT INFO
        ===================================================== */}

        <div style={styles.resultHeader}>

          <div>
            <h2 style={styles.resultTitle}>
              Candidate Results
            </h2>

            <p style={styles.resultText}>
              {filteredCandidates.length} matching candidate
              {filteredCandidates.length !== 1
                ? "s"
                : ""}
            </p>
          </div>

          {search && (
            <div style={styles.searchTag}>
              🔎 {search}
            </div>
          )}

        </div>


        {/* =====================================================
            CANDIDATES
        ===================================================== */}

        <div style={styles.candidatesContainer}>

          {filteredCandidates.length > 0 ? (

            filteredCandidates.map((candidate) => (

              <div
                key={candidate.id}
                style={styles.card}
              >

                {/* Candidate Header */}

                <div style={styles.cardHeader}>

                  <div style={styles.candidateInfo}>

                    <div style={styles.avatar}>
                      {candidate.name.charAt(0)}
                    </div>

                    <div>

                      <h2 style={styles.name}>
                        {candidate.name}
                      </h2>

                      <p style={styles.role}>
                        {candidate.role}
                      </p>

                      <p style={styles.email}>
                        {candidate.email}
                      </p>

                    </div>

                  </div>


                  {/* Status */}

                  <span
                    style={{
                      ...styles.status,
                      ...(candidate.status ===
                      "Available"
                        ? styles.available
                        : styles.interviewing),
                    }}
                  >
                    <span style={styles.statusDot}></span>

                    {candidate.status}
                  </span>

                </div>


                {/* Details */}

                <div style={styles.details}>

                  <span>
                    📍 {candidate.location}
                  </span>

                  <span>
                    💼 {candidate.experience}
                  </span>

                </div>


                {/* Skills */}

                <div style={styles.skills}>

                  {candidate.skills.map((skill) => (

                    <span
                      key={skill}
                      style={styles.skill}
                    >
                      {skill}
                    </span>

                  ))}

                </div>


                {/* Actions */}

                <div style={styles.actions}>

                  <button
                    style={styles.profileButton}
                    onClick={() =>
                      alert(
                        `Viewing profile of ${candidate.name}`
                      )
                    }
                  >
                    View Profile →
                  </button>

                  <button
                    style={styles.contactButton}
                    onClick={() =>
                      alert(
                        `Contacting ${candidate.name}`
                      )
                    }
                  >
                    Contact
                  </button>

                </div>

              </div>

            ))

          ) : (

            <div style={styles.emptyState}>

              <div style={styles.emptyIcon}>
                🔍
              </div>

              <h2 style={styles.emptyTitle}>
                No candidates found
              </h2>

              <p style={styles.emptyText}>
                Try another name, role, skill or
                location.
              </p>

              <button
                style={styles.resetButton}
                onClick={() => {
                  setSearch("");
                  setSelectedSkill("All");
                  setVoiceMessage("");
                }}
              >
                Reset Search
              </button>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}


/* =============================================================
   RECRUVA AI THEME
============================================================= */

const styles = {

  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 85% 10%, rgba(62,115,240,0.12), transparent 28%), radial-gradient(circle at 10% 90%, rgba(83,83,220,0.08), transparent 28%), #f7faff",
    padding: "45px 6%",
    fontFamily:
      '"Inter", "Segoe UI", Arial, sans-serif',
    color: "#102a4c",
    boxSizing: "border-box",
  },

  container: {
    maxWidth: "1120px",
    margin: "0 auto",
  },


  /* HEADER */

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "30px",
  },

  brand: {
    fontSize: "22px",
    fontWeight: "800",
    letterSpacing: "0.5px",
    marginBottom: "16px",
    color: "#102b50",
  },

  ai: {
    color: "#396df6",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "7px 13px",
    borderRadius: "50px",
    background: "#edf4ff",
    border: "1px solid #d7e6fc",
    color: "#3168c5",
    fontSize: "9px",
    fontWeight: "800",
    letterSpacing: "0.7px",
  },

  badgeDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#3475ee",
    boxShadow:
      "0 0 0 4px rgba(52,117,238,0.1)",
  },

  title: {
    margin: "18px 0 7px",
    fontSize: "36px",
    lineHeight: "1.15",
    letterSpacing: "-1.2px",
    color: "#10284c",
  },

  subtitle: {
    margin: 0,
    color: "#718198",
    fontSize: "14px",
    lineHeight: "1.6",
  },


  /* COUNT */

  countBox: {
    minWidth: "110px",
    background:
      "rgba(255,255,255,0.9)",
    border: "1px solid #dce6f3",
    borderRadius: "14px",
    padding: "15px 22px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow:
      "0 8px 25px rgba(29,65,112,0.07)",
  },

  countNumber: {
    fontSize: "28px",
    fontWeight: "800",
    color: "#396df6",
  },

  countLabel: {
    marginTop: "3px",
    fontSize: "10px",
    color: "#718198",
    fontWeight: "600",
  },


  /* SEARCH SECTION */

  searchSection: {
    background:
      "rgba(255,255,255,0.96)",
    border:
      "1px solid #dce6f3",
    borderRadius: "18px",
    padding: "25px",
    boxShadow:
      "0 15px 40px rgba(29,65,112,0.08)",
    marginBottom: "30px",
  },

  searchHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "17px",
  },

  searchTitle: {
    margin: 0,
    fontSize: "17px",
    color: "#142f54",
  },

  searchSubtitle: {
    margin: "4px 0 0",
    fontSize: "11px",
    color: "#8998a9",
  },

  voiceHint: {
    fontSize: "10px",
    color: "#718198",
    background: "#f7faff",
    border:
      "1px solid #e2eaf5",
    borderRadius: "8px",
    padding: "9px 12px",
  },


  /* SEARCH INPUT */

  searchRow: {
    display: "flex",
    gap: "12px",
  },

  searchWrapper: {
    flex: 1,
    position: "relative",
    display: "flex",
    alignItems: "center",
  },

  searchIcon: {
    position: "absolute",
    left: "15px",
    fontSize: "15px",
    zIndex: 1,
  },

  searchInput: {
    width: "100%",
    boxSizing: "border-box",
    padding: "14px 45px",
    border:
      "1px solid #d6e0ed",
    borderRadius: "10px",
    background: "#fbfdff",
    color: "#19385e",
    fontSize: "13px",
    outline: "none",
  },

  clearButton: {
    position: "absolute",
    right: "12px",
    border: "none",
    background: "transparent",
    color: "#8998a9",
    cursor: "pointer",
    fontSize: "13px",
  },


  /* VOICE */

  voiceButton: {
    minWidth: "145px",
    padding: "0 18px",
    border: "none",
    borderRadius: "10px",
    background:
      "linear-gradient(90deg, #2167df, #5d51d8)",
    color: "#ffffff",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    boxShadow:
      "0 8px 20px rgba(33,102,223,0.18)",
  },

  voiceButtonActive: {
    background:
      "linear-gradient(90deg, #5d51d8, #2167df)",
    boxShadow:
      "0 0 0 4px rgba(57,109,246,0.15)",
  },

  microphone: {
    fontSize: "15px",
  },

  voiceMessage: {
    marginTop: "12px",
    padding: "10px 13px",
    borderRadius: "8px",
    background: "#edf4ff",
    border: "1px solid #d7e6fc",
    color: "#3168c5",
    fontSize: "11px",
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },


  /* FILTERS */

  filterArea: {
    marginTop: "18px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
  },

  filterLabel: {
    fontSize: "11px",
    fontWeight: "700",
    color: "#5c718b",
  },

  skillFilters: {
    display: "flex",
    gap: "7px",
    flexWrap: "wrap",
  },

  filterButton: {
    padding: "7px 12px",
    border:
      "1px solid #d8e2ef",
    borderRadius: "50px",
    background: "#ffffff",
    color: "#5c718b",
    cursor: "pointer",
    fontSize: "10px",
    fontWeight: "600",
  },

  activeFilter: {
    background:
      "linear-gradient(90deg, #2167df, #5d51d8)",
    borderColor: "#396df6",
    color: "#ffffff",
  },


  /* RESULTS */

  resultHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },

  resultTitle: {
    margin: 0,
    fontSize: "19px",
    color: "#142f54",
  },

  resultText: {
    margin: "4px 0 0",
    fontSize: "11px",
    color: "#8998a9",
  },

  searchTag: {
    padding: "7px 12px",
    background: "#edf4ff",
    color: "#396df6",
    borderRadius: "7px",
    fontSize: "10px",
    fontWeight: "600",
    maxWidth: "300px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },


  /* CANDIDATE CARDS */

  candidatesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  card: {
    background:
      "rgba(255,255,255,0.97)",
    border:
      "1px solid #dce6f3",
    borderRadius: "15px",
    padding: "21px",
    boxShadow:
      "0 8px 25px rgba(29,65,112,0.06)",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  candidateInfo: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "12px",
    background:
      "linear-gradient(135deg, #edf4ff, #e8e6ff)",
    color: "#396df6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "800",
  },

  name: {
    margin: "0 0 4px",
    fontSize: "17px",
    color: "#19385e",
  },

  role: {
    margin: "0 0 3px",
    fontSize: "12px",
    fontWeight: "700",
    color: "#41617f",
  },

  email: {
    margin: 0,
    fontSize: "10px",
    color: "#8998a9",
  },


  /* STATUS */

  status: {
    padding: "6px 11px",
    borderRadius: "50px",
    fontSize: "10px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  statusDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "currentColor",
  },

  available: {
    background: "#edf9f2",
    color: "#25804a",
  },

  interviewing: {
    background: "#edf4ff",
    color: "#396df6",
  },


  /* DETAILS */

  details: {
    display: "flex",
    gap: "25px",
    marginTop: "17px",
    color: "#718198",
    fontSize: "11px",
  },


  /* SKILLS */

  skills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "7px",
    marginTop: "14px",
  },

  skill: {
    background: "#f2f6fc",
    color: "#49627d",
    border:
      "1px solid #e1e9f3",
    padding: "5px 9px",
    borderRadius: "6px",
    fontSize: "10px",
    fontWeight: "600",
  },


  /* ACTIONS */

  actions: {
    display: "flex",
    gap: "9px",
    marginTop: "17px",
    paddingTop: "14px",
    borderTop:
      "1px solid #e7edf5",
  },

  profileButton: {
    padding: "8px 14px",
    border: "none",
    borderRadius: "7px",
    background:
      "linear-gradient(90deg, #2167df, #5d51d8)",
    color: "#ffffff",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "10px",
  },

  contactButton: {
    padding: "8px 14px",
    border:
      "1px solid #d6e0ed",
    borderRadius: "7px",
    background: "#ffffff",
    color: "#396df6",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "10px",
  },


  /* EMPTY */

  emptyState: {
    background:
      "rgba(255,255,255,0.97)",
    border:
      "1px solid #dce6f3",
    borderRadius: "15px",
    padding: "70px 20px",
    textAlign: "center",
    boxShadow:
      "0 8px 25px rgba(29,65,112,0.05)",
  },

  emptyIcon: {
    fontSize: "38px",
    marginBottom: "10px",
  },

  emptyTitle: {
    margin: "0 0 7px",
    color: "#19385e",
    fontSize: "20px",
  },

  emptyText: {
    margin: "0 0 18px",
    color: "#8998a9",
    fontSize: "12px",
  },

  resetButton: {
    padding: "9px 17px",
    border: "none",
    borderRadius: "8px",
    background:
      "linear-gradient(90deg, #2167df, #5d51d8)",
    color: "#ffffff",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "11px",
  },
};

export default Candidates;
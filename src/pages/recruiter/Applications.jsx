import { useState } from "react";

function Applications() {
  const [filter, setFilter] = useState("All");

  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Ananya Sharma",
      email: "ananya@example.com",
      job: "Software Engineer",
      appliedOn: "13 Aug 2026",
      experience: "2 years",
      status: "Shortlisted",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      email: "rahul@example.com",
      job: "Data Analyst",
      appliedOn: "12 Aug 2026",
      experience: "3 years",
      status: "Under Review",
    },
    {
      id: 3,
      name: "Priya Nair",
      email: "priya@example.com",
      job: "Frontend Developer",
      appliedOn: "11 Aug 2026",
      experience: "2 years",
      status: "Interview",
    },
    {
      id: 4,
      name: "Arjun Raj",
      email: "arjun@example.com",
      job: "Backend Developer",
      appliedOn: "10 Aug 2026",
      experience: "1 year",
      status: "Applied",
    },
    {
      id: 5,
      name: "Meera Krishnan",
      email: "meera@example.com",
      job: "UI/UX Designer",
      appliedOn: "9 Aug 2026",
      experience: "3 years",
      status: "Rejected",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setApplications(
      applications.map((application) =>
        application.id === id
          ? { ...application, status: newStatus }
          : application
      )
    );
  };

  const filteredApplications =
    filter === "All"
      ? applications
      : applications.filter(
          (application) => application.status === filter
        );

  return (
    <div style={styles.page}>

      {/* Background Decorations */}
      <div style={styles.circleOne}></div>
      <div style={styles.circleTwo}></div>

      <div style={styles.container}>

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div style={styles.topBrand}>
          <div style={styles.logo}>
            <span style={styles.logoMain}>RECRUVA</span>
            <span style={styles.logoAI}> AI</span>
          </div>

          <div style={styles.badge}>
            <span style={styles.badgeDot}></span>
            AI-POWERED RECRUITMENT
          </div>
        </div>

        <div style={styles.header}>

          <div>
            <h1 style={styles.title}>
              Applications
            </h1>

            <p style={styles.subtitle}>
              Review and manage candidate applications with
              intelligent recruitment tools.
            </p>
          </div>

          <div style={styles.totalBox}>
            <span style={styles.totalNumber}>
              {applications.length}
            </span>

            <span style={styles.totalLabel}>
              Total Applications
            </span>
          </div>

        </div>


        {/* =====================================================
            FILTERS
        ===================================================== */}

        <div style={styles.filterCard}>

          <div style={styles.filterTitle}>
            Filter Applications
          </div>

          <div style={styles.filters}>

            {[
              "All",
              "Applied",
              "Under Review",
              "Shortlisted",
              "Interview",
              "Rejected",
            ].map((item) => (

              <button
                key={item}
                onClick={() => setFilter(item)}
                style={{
                  ...styles.filterButton,

                  ...(filter === item
                    ? styles.activeFilter
                    : {}),
                }}
              >
                {item}
              </button>

            ))}

          </div>

        </div>


        {/* =====================================================
            APPLICATION LIST
        ===================================================== */}

        <div style={styles.list}>

          {filteredApplications.length > 0 ? (

            filteredApplications.map((application) => (

              <div
                key={application.id}
                style={styles.card}
              >

                {/* Top Section */}
                <div style={styles.top}>

                  <div style={styles.candidate}>

                    <div style={styles.avatar}>
                      {application.name.charAt(0)}
                    </div>

                    <div>

                      <h2 style={styles.name}>
                        {application.name}
                      </h2>

                      <p style={styles.email}>
                        {application.email}
                      </p>

                    </div>

                  </div>


                  {/* Status */}
                  <span
                    style={{
                      ...styles.status,

                      ...(application.status === "Shortlisted"
                        ? styles.shortlisted
                        : application.status === "Interview"
                        ? styles.interview
                        : application.status === "Rejected"
                        ? styles.rejected
                        : application.status === "Under Review"
                        ? styles.review
                        : styles.applied),
                    }}
                  >
                    {application.status}
                  </span>

                </div>


                {/* =================================================
                    APPLICATION DETAILS
                ================================================= */}

                <div style={styles.details}>

                  <div style={styles.detailBox}>

                    <span style={styles.detailLabel}>
                      APPLIED FOR
                    </span>

                    <strong style={styles.detailValue}>
                      {application.job}
                    </strong>

                  </div>


                  <div style={styles.detailBox}>

                    <span style={styles.detailLabel}>
                      EXPERIENCE
                    </span>

                    <strong style={styles.detailValue}>
                      {application.experience}
                    </strong>

                  </div>


                  <div style={styles.detailBox}>

                    <span style={styles.detailLabel}>
                      APPLIED ON
                    </span>

                    <strong style={styles.detailValue}>
                      {application.appliedOn}
                    </strong>

                  </div>

                </div>


                {/* =================================================
                    ACTIONS
                ================================================= */}

                <div style={styles.actions}>

                  <button style={styles.viewButton}>
                    <span>📄</span>
                    View Resume
                  </button>


                  <select
                    value={application.status}
                    onChange={(e) =>
                      updateStatus(
                        application.id,
                        e.target.value
                      )
                    }
                    style={styles.select}
                  >

                    <option>Applied</option>
                    <option>Under Review</option>
                    <option>Shortlisted</option>
                    <option>Interview</option>
                    <option>Rejected</option>

                  </select>

                </div>

              </div>

            ))

          ) : (

            <div style={styles.empty}>

              <div style={styles.emptyIcon}>
                🔍
              </div>

              <h2 style={styles.emptyTitle}>
                No applications found
              </h2>

              <p style={styles.emptyText}>
                There are no applications in this category.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   RECRUVA AI THEME
============================================================ */

const styles = {

  /* PAGE */

  page: {
    minHeight: "100vh",
    width: "100%",
    padding: "35px 7%",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",

    background:
      "radial-gradient(circle at 85% 15%, rgba(62,115,240,0.12), transparent 30%), radial-gradient(circle at 10% 85%, rgba(83,83,220,0.08), transparent 30%), #f7faff",

    fontFamily:
      '"Inter", "Segoe UI", Arial, sans-serif',

    color: "#102a4c",
  },


  /* BACKGROUND CIRCLES */

  circleOne: {
    position: "absolute",
    width: "430px",
    height: "430px",
    right: "-200px",
    top: "-170px",
    borderRadius: "50%",
    border: "1px solid rgba(73,123,225,0.08)",
    pointerEvents: "none",
  },

  circleTwo: {
    position: "absolute",
    width: "350px",
    height: "350px",
    left: "-180px",
    bottom: "-170px",
    borderRadius: "50%",
    border: "1px solid rgba(73,123,225,0.07)",
    pointerEvents: "none",
  },


  /* MAIN CONTAINER */

  container: {
    width: "100%",
    maxWidth: "1120px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },


  /* BRAND */

  topBrand: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "35px",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    fontSize: "23px",
    fontWeight: "800",
    letterSpacing: "0.3px",
  },

  logoMain: {
    color: "#102b50",
  },

  logoAI: {
    color: "#396df6",
    fontWeight: "800",
  },


  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "9px",
    padding: "8px 14px",
    borderRadius: "50px",
    background: "#edf4ff",
    border: "1px solid #d7e6fc",
    color: "#3168c5",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "0.7px",
  },

  badgeDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#3475ee",
    boxShadow:
      "0 0 0 4px rgba(52,117,238,0.1)",
  },


  /* HEADER */

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "28px",
  },

  title: {
    margin: "0 0 8px",
    fontSize: "38px",
    lineHeight: "1.15",
    letterSpacing: "-1px",
    fontWeight: "700",
    color: "#10284c",
  },

  subtitle: {
    margin: 0,
    maxWidth: "650px",
    color: "#718198",
    fontSize: "14px",
    lineHeight: "1.6",
  },


  /* TOTAL APPLICATIONS */

  totalBox: {
    minWidth: "145px",
    padding: "16px 22px",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.92)",
    border: "1px solid #dce6f3",
    boxShadow:
      "0 10px 30px rgba(29,65,112,0.08)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  totalNumber: {
    fontSize: "27px",
    fontWeight: "800",
    background:
      "linear-gradient(90deg, #2568dc, #6153dc)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  totalLabel: {
    marginTop: "3px",
    color: "#718198",
    fontSize: "10px",
    fontWeight: "600",
  },


  /* FILTER CARD */

  filterCard: {
    background: "rgba(255,255,255,0.96)",
    border: "1px solid #dce6f3",
    borderRadius: "15px",
    padding: "18px 20px",
    marginBottom: "20px",
    boxShadow:
      "0 8px 25px rgba(29,65,112,0.06)",
  },

  filterTitle: {
    fontSize: "11px",
    fontWeight: "700",
    color: "#35506f",
    marginBottom: "12px",
    letterSpacing: "0.3px",
  },

  filters: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  filterButton: {
    padding: "8px 14px",
    border: "1px solid #d6e0ed",
    borderRadius: "50px",
    background: "#ffffff",
    color: "#52677f",
    cursor: "pointer",
    fontSize: "11px",
    fontWeight: "600",
  },

  activeFilter: {
    background:
      "linear-gradient(90deg, #2167df, #5d51d8)",
    color: "#ffffff",
    borderColor: "#396df6",
    boxShadow:
      "0 6px 15px rgba(33,102,223,0.18)",
  },


  /* APPLICATION LIST */

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },


  /* APPLICATION CARD */

  card: {
    background: "rgba(255,255,255,0.97)",
    border: "1px solid #dce6f3",
    borderRadius: "16px",
    padding: "23px",
    boxShadow:
      "0 10px 30px rgba(29,65,112,0.07)",
    backdropFilter: "blur(10px)",
  },


  /* TOP */

  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  candidate: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },


  /* AVATAR */

  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "13px",

    background:
      "linear-gradient(135deg, #eaf2ff, #eef0ff)",

    color: "#356bd2",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontWeight: "800",
    fontSize: "18px",

    border: "1px solid #d8e5fa",
  },


  name: {
    margin: "0 0 4px",
    fontSize: "17px",
    fontWeight: "700",
    color: "#183657",
  },

  email: {
    margin: 0,
    color: "#8492a5",
    fontSize: "11px",
  },


  /* STATUS */

  status: {
    height: "fit-content",
    padding: "6px 12px",
    borderRadius: "50px",
    fontSize: "10px",
    fontWeight: "700",
  },

  shortlisted: {
    backgroundColor: "#e8f8ef",
    color: "#16834d",
  },

  interview: {
    backgroundColor: "#e8f0ff",
    color: "#3168c5",
  },

  rejected: {
    backgroundColor: "#ffeded",
    color: "#c04444",
  },

  review: {
    backgroundColor: "#fff7df",
    color: "#a06a00",
  },

  applied: {
    backgroundColor: "#eef2f7",
    color: "#65758a",
  },


  /* DETAILS */

  details: {
    display: "grid",
    gridTemplateColumns:
      "repeat(3, 1fr)",
    gap: "20px",

    marginTop: "22px",
    paddingTop: "18px",

    borderTop:
      "1px solid #e7edf5",
  },

  detailBox: {
    display: "flex",
    flexDirection: "column",
  },

  detailLabel: {
    display: "block",
    color: "#8a99aa",
    fontSize: "9px",
    fontWeight: "700",
    letterSpacing: "0.6px",
    marginBottom: "5px",
  },

  detailValue: {
    color: "#294663",
    fontSize: "12px",
    fontWeight: "700",
  },


  /* ACTIONS */

  actions: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
    paddingTop: "15px",
    borderTop:
      "1px solid #e7edf5",
  },


  viewButton: {
    display: "flex",
    alignItems: "center",
    gap: "6px",

    padding: "9px 16px",

    border: "none",
    borderRadius: "8px",

    background:
      "linear-gradient(90deg, #2167df, #5d51d8)",

    color: "#ffffff",

    cursor: "pointer",

    fontSize: "11px",
    fontWeight: "700",

    boxShadow:
      "0 7px 18px rgba(33,102,223,0.16)",
  },


  select: {
    padding: "9px 12px",

    border: "1px solid #d6e0ed",
    borderRadius: "8px",

    background: "#fbfdff",

    color: "#3c5874",

    fontSize: "11px",
    fontWeight: "600",

    outline: "none",

    cursor: "pointer",
  },


  /* EMPTY */

  empty: {
    background: "rgba(255,255,255,0.96)",
    border: "1px solid #dce6f3",
    textAlign: "center",
    padding: "70px 20px",
    borderRadius: "16px",
    boxShadow:
      "0 10px 30px rgba(29,65,112,0.07)",
  },

  emptyIcon: {
    fontSize: "38px",
    marginBottom: "10px",
  },

  emptyTitle: {
    margin: "0 0 7px",
    color: "#24415f",
    fontSize: "20px",
  },

  emptyText: {
    margin: 0,
    color: "#8291a4",
    fontSize: "13px",
  },
};

export default Applications;
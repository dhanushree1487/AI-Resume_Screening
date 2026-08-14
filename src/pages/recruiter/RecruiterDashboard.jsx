import React from "react";

function RecruiterDashboard() {
  const stats = [
    {
      title: "Active Jobs",
      value: "12",
      icon: "💼",
    },
    {
      title: "Applications",
      value: "48",
      icon: "📄",
    },
    {
      title: "Shortlisted",
      value: "16",
      icon: "⭐",
    },
    {
      title: "Interviews",
      value: "8",
      icon: "📅",
    },
  ];

  const recentApplications = [
    {
      name: "Ananya Sharma",
      job: "Software Engineer",
      date: "13 Aug 2026",
      status: "Shortlisted",
    },
    {
      name: "Rahul Kumar",
      job: "Data Analyst",
      date: "12 Aug 2026",
      status: "Under Review",
    },
    {
      name: "Priya Nair",
      job: "Frontend Developer",
      date: "11 Aug 2026",
      status: "Interview",
    },
    {
      name: "Arjun Raj",
      job: "Backend Developer",
      date: "10 Aug 2026",
      status: "Applied",
    },
  ];

  return (
    <div style={styles.page}>

      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.heading}>
            Recruiter Dashboard
          </h1>

          <p style={styles.welcome}>
            Welcome back! Here's what's happening with your recruitment.
          </p>
        </div>

        <div style={styles.profile}>
          <div style={styles.avatar}>P</div>

          <div>
            <strong style={styles.profileName}>
              Priya
            </strong>

            <p style={styles.profileText}>
              Recruiter
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section style={styles.statsContainer}>
        {stats.map((stat) => (
          <div
            style={styles.statCard}
            key={stat.title}
          >
            <div style={styles.statIcon}>
              {stat.icon}
            </div>

            <div>
              <p style={styles.statTitle}>
                {stat.title}
              </p>

              <h2 style={styles.statValue}>
                {stat.value}
              </h2>
            </div>
          </div>
        ))}
      </section>

      {/* Quick Actions */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Quick Actions
        </h2>

        <div style={styles.actions}>

          <button
            style={styles.primaryButton}
            onClick={() =>
              (window.location.href = "/recruiter/jobs/post")
            }
          >
            ➕ Post a New Job
          </button>

          <button
            style={styles.secondaryButton}
            onClick={() =>
              (window.location.href = "/recruiter/candidates")
            }
          >
            👥 View Candidates
          </button>

          <button
            style={styles.secondaryButton}
            onClick={() =>
              (window.location.href = "/recruiter/applications")
            }
          >
            📄 View Applications
          </button>

        </div>
      </section>

      {/* Recent Applications */}
      <section style={styles.section}>

        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            Recent Applications
          </h2>

          <button
            style={styles.viewAllButton}
            onClick={() =>
              (window.location.href = "/recruiter/applications")
            }
          >
            View All →
          </button>
        </div>

        <div style={styles.tableContainer}>
          <table style={styles.table}>

            <thead>
              <tr>
                <th style={styles.th}>
                  Candidate
                </th>

                <th style={styles.th}>
                  Job Position
                </th>

                <th style={styles.th}>
                  Applied On
                </th>

                <th style={styles.th}>
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {recentApplications.map(
                (application) => (
                  <tr key={application.name}>

                    <td style={styles.td}>
                      <div style={styles.candidate}>

                        <div style={styles.smallAvatar}>
                          {application.name.charAt(0)}
                        </div>

                        <strong>
                          {application.name}
                        </strong>

                      </div>
                    </td>

                    <td style={styles.td}>
                      {application.job}
                    </td>

                    <td style={styles.td}>
                      {application.date}
                    </td>

                    <td style={styles.td}>

                      <span
                        style={{
                          ...styles.status,
                          ...(application.status ===
                          "Shortlisted"
                            ? styles.shortlisted
                            : application.status ===
                              "Interview"
                            ? styles.interview
                            : application.status ===
                              "Under Review"
                            ? styles.review
                            : styles.applied),
                        }}
                      >
                        {application.status}
                      </span>

                    </td>

                  </tr>
                )
              )}
            </tbody>

          </table>
        </div>

      </section>

    </div>
  );
}

const styles = {

  /* Main page */

  page: {
    minHeight: "calc(100vh - 70px)",
    padding: "35px",
    boxSizing: "border-box",
    background:
      "linear-gradient(135deg, #f5f3ff 0%, #eef2ff 45%, #f8faff 100%)",
    fontFamily: "Arial, sans-serif",
    color: "#1f2937",
  },

  /* Header */

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },

  heading: {
    margin: "0 0 8px",
    fontSize: "30px",
    fontWeight: "700",
    color: "#1e1b4b",
  },

  welcome: {
    margin: 0,
    color: "#6b7280",
    fontSize: "15px",
  },

  /* Profile */

  profile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: "8px 14px 8px 8px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(79,70,229,0.08)",
  },

  avatar: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, #6366f1, #8b5cf6)",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
  },

  profileName: {
    color: "#312e81",
  },

  profileText: {
    margin: "3px 0 0",
    fontSize: "12px",
    color: "#6b7280",
  },

  /* Stats */

  statsContainer: {
    display: "grid",
    gridTemplateColumns:
      "repeat(4, minmax(0, 1fr))",
    gap: "18px",
    marginBottom: "30px",
  },

  statCard: {
    backgroundColor: "#ffffff",
    borderRadius: "14px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    boxShadow:
      "0 6px 20px rgba(79,70,229,0.08)",
    border: "1px solid #ede9fe",
  },

  statIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    background:
      "linear-gradient(135deg, #eef2ff, #f3e8ff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "23px",
  },

  statTitle: {
    margin: 0,
    color: "#6b7280",
    fontSize: "13px",
  },

  statValue: {
    margin: "5px 0 0",
    fontSize: "26px",
    color: "#312e81",
  },

  /* Sections */

  section: {
    backgroundColor: "#ffffff",
    borderRadius: "14px",
    padding: "25px",
    marginBottom: "25px",
    boxShadow:
      "0 6px 20px rgba(79,70,229,0.07)",
    border: "1px solid #ede9fe",
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  sectionTitle: {
    margin: 0,
    fontSize: "19px",
    color: "#312e81",
  },

  /* Buttons */

  actions: {
    display: "flex",
    gap: "12px",
    marginTop: "20px",
    flexWrap: "wrap",
  },

  primaryButton: {
    padding: "12px 18px",
    border: "none",
    borderRadius: "9px",
    background:
      "linear-gradient(135deg, #4f46e5, #7c3aed)",
    color: "#ffffff",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow:
      "0 5px 15px rgba(79,70,229,0.2)",
  },

  secondaryButton: {
    padding: "12px 18px",
    border: "1px solid #ddd6fe",
    borderRadius: "9px",
    backgroundColor: "#ffffff",
    color: "#4338ca",
    cursor: "pointer",
    fontWeight: "600",
  },

  viewAllButton: {
    border: "none",
    background: "transparent",
    color: "#4f46e5",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
  },

  /* Table */

  tableContainer: {
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
  },

  th: {
    textAlign: "left",
    padding: "14px 10px",
    borderBottom: "1px solid #e5e7eb",
    fontSize: "13px",
    color: "#6b7280",
  },

  td: {
    padding: "15px 10px",
    borderBottom: "1px solid #f0f0f0",
    fontSize: "14px",
  },

  candidate: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  smallAvatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, #ddd6fe, #c7d2fe)",
    color: "#4338ca",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: "700",
  },

  /* Status */

  status: {
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
  },

  shortlisted: {
    backgroundColor: "#dcfce7",
    color: "#166534",
  },

  interview: {
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
  },

  review: {
    backgroundColor: "#fef3c7",
    color: "#92400e",
  },

  applied: {
    backgroundColor: "#f3f4f6",
    color: "#4b5563",
  },

};

export default RecruiterDashboard;
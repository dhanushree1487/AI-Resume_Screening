import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ManageJobs() {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Software Engineer",
      location: "Chennai",
      type: "Full Time",
      experience: "0-2 years",
      applications: 24,
      status: "Active",
    },
    {
      id: 2,
      title: "Data Analyst",
      location: "Bangalore",
      type: "Full Time",
      experience: "1-3 years",
      applications: 15,
      status: "Active",
    },
    {
      id: 3,
      title: "Frontend Developer",
      location: "Remote",
      type: "Full Time",
      experience: "0-2 years",
      applications: 18,
      status: "Active",
    },
    {
      id: 4,
      title: "Python Intern",
      location: "Chennai",
      type: "Internship",
      experience: "Fresher",
      applications: 31,
      status: "Closed",
    },
  ]);

  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (confirmed) {
      setJobs(
        jobs.filter((job) => job.id !== id)
      );
    }
  };

  const handleStatusChange = (id) => {
    setJobs(
      jobs.map((job) =>
        job.id === id
          ? {
              ...job,
              status:
                job.status === "Active"
                  ? "Closed"
                  : "Active",
            }
          : job
      )
    );
  };

  const filteredJobs = jobs.filter((job) =>
    job.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div style={styles.page}>

      <div style={styles.container}>

        {/* Header */}
        <div style={styles.header}>

          <div>
            <h1 style={styles.title}>
              Jobs
            </h1>

            <p style={styles.subtitle}>
              View and manage all the jobs posted by your organization.
            </p>
          </div>

          {/* POST JOB */}
          <button
            style={styles.postButton}
            onClick={() => navigate("/recruiter/jobs/post")}
>
            + Post New Job
        </button>

        </div>

        {/* Search */}
        <div style={styles.searchContainer}>

          <input
            type="text"
            placeholder="Search jobs by title..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            style={styles.searchInput}
          />

        </div>

        {/* Job Count */}
        <div style={styles.jobCount}>
          Showing{" "}
          <strong>
            {filteredJobs.length}
          </strong>{" "}
          job
          {filteredJobs.length !== 1
            ? "s"
            : ""}
        </div>

        {/* Jobs */}
        <div style={styles.jobsContainer}>

          {filteredJobs.length > 0 ? (

            filteredJobs.map((job) => (

              <div
                key={job.id}
                style={styles.jobCard}
              >

                {/* Top */}
                <div style={styles.jobTop}>

                  <div style={styles.jobInfo}>

                    <div style={styles.jobIcon}>
                      💼
                    </div>

                    <div>

                      <h2 style={styles.jobTitle}>
                        {job.title}
                      </h2>

                      

                    </div>

                  </div>

                  <span
                    style={{
                      ...styles.status,

                      ...(job.status === "Active"
                        ? styles.activeStatus
                        : styles.closedStatus),
                    }}
                  >
                    {job.status}
                  </span>

                </div>

                {/* Details */}
                <div style={styles.details}>

                  <span>
                    📍 {job.location}
                  </span>

                  <span>
                    💼 {job.type}
                  </span>

                  <span>
                    🎓 {job.experience}
                  </span>

                  <span>
                    👥 {job.applications} Applications
                  </span>

                </div>

                <div style={styles.divider}></div>

                {/* Actions */}
                <div style={styles.actions}>

                  <button
                    style={styles.viewButton}
                  >
                    View
                  </button>

                  <button
                    style={styles.editButton}
                  >
                    Edit
                  </button>

                  <button
                    style={styles.statusButton}
                    onClick={() =>
                      handleStatusChange(
                        job.id
                      )
                    }
                  >
                    {job.status === "Active"
                      ? "Close Job"
                      : "Reopen Job"}
                  </button>

                  <button
                    style={styles.deleteButton}
                    onClick={() =>
                      handleDelete(job.id)
                    }
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))

          ) : (

            <div style={styles.emptyState}>

              <div style={styles.emptyIcon}>
                🔍
              </div>

              <h2>
                No jobs found
              </h2>

              <p>
                Try searching with a different job title.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",

    background:
      "radial-gradient(circle at 85% 10%, rgba(62,115,240,0.10), transparent 30%), #f7faff",

    padding: "35px",

    fontFamily:
      '"Inter", "Segoe UI", Arial, sans-serif',

    color: "#142f54",
  },

  container: {
    maxWidth: "1100px",

    margin: "0 auto",
  },

  header: {
    display: "flex",

    justifyContent: "space-between",

    alignItems: "flex-start",

    marginBottom: "25px",
  },

  title: {
    margin: "0 0 8px",

    fontSize: "30px",

    color: "#10284c",
  },

  subtitle: {
    margin: 0,

    color: "#718198",

    fontSize: "15px",
  },

  postButton: {
    padding: "12px 20px",

    border: "none",

    borderRadius: "9px",

    background:
      "linear-gradient(90deg, #2167df, #5d51d8)",

    color: "#ffffff",

    fontWeight: "700",

    fontSize: "13px",

    cursor: "pointer",

    boxShadow:
      "0 8px 20px rgba(33,102,223,0.18)",
  },

  searchContainer: {
    backgroundColor: "#ffffff",

    padding: "18px",

    borderRadius: "14px",

    marginBottom: "15px",

    border:
      "1px solid #e1e9f4",

    boxShadow:
      "0 8px 25px rgba(29,65,112,0.05)",
  },

  searchInput: {
    width: "100%",

    boxSizing: "border-box",

    padding: "12px 15px",

    border:
      "1px solid #d6e2f1",

    borderRadius: "8px",

    fontSize: "14px",

    outline: "none",

    color: "#19385e",

    backgroundColor: "#fbfdff",
  },

  jobCount: {
    marginBottom: "15px",

    fontSize: "14px",

    color: "#718198",
  },

  jobsContainer: {
    display: "flex",

    flexDirection: "column",

    gap: "15px",
  },

  jobCard: {
    backgroundColor: "#ffffff",

    borderRadius: "14px",

    padding: "22px",

    border:
      "1px solid #e1e9f4",

    boxShadow:
      "0 8px 25px rgba(29,65,112,0.06)",
  },

  jobTop: {
    display: "flex",

    justifyContent: "space-between",

    alignItems: "flex-start",
  },

  jobInfo: {
    display: "flex",

    alignItems: "center",

    gap: "14px",
  },

  jobIcon: {
    width: "48px",

    height: "48px",

    borderRadius: "10px",

    background: "#edf4ff",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    fontSize: "22px",
  },

  jobTitle: {
    margin: "0 0 5px",

    fontSize: "18px",

    color: "#142f54",
  },

  company: {
    margin: 0,

    fontSize: "13px",

    color: "#718198",
  },

  status: {
    padding: "6px 12px",

    borderRadius: "20px",

    fontSize: "12px",

    fontWeight: "600",
  },

  activeStatus: {
    backgroundColor: "#dcfce7",

    color: "#166534",
  },

  closedStatus: {
    backgroundColor: "#fee2e2",

    color: "#991b1b",
  },

  details: {
    display: "flex",

    flexWrap: "wrap",

    gap: "25px",

    marginTop: "20px",

    color: "#718198",

    fontSize: "13px",
  },

  divider: {
    height: "1px",

    backgroundColor: "#e5ebf3",

    margin: "20px 0 15px",
  },

  actions: {
    display: "flex",

    gap: "10px",
  },

  viewButton: {
    padding: "9px 16px",

    border:
      "1px solid #d6e2f1",

    borderRadius: "7px",

    backgroundColor: "#ffffff",

    color: "#35506f",

    cursor: "pointer",

    fontWeight: "600",
  },

  editButton: {
    padding: "9px 16px",

    border:
      "1px solid #d6e2f1",

    borderRadius: "7px",

    backgroundColor: "#ffffff",

    color: "#35506f",

    cursor: "pointer",

    fontWeight: "600",
  },

  statusButton: {
    padding: "9px 16px",

    border:
      "1px solid #d6e2f1",

    borderRadius: "7px",

    backgroundColor: "#ffffff",

    color: "#35506f",

    cursor: "pointer",

    fontWeight: "600",
  },

  deleteButton: {
    padding: "9px 16px",

    border: "none",

    borderRadius: "7px",

    backgroundColor: "#fee2e2",

    color: "#991b1b",

    cursor: "pointer",

    fontWeight: "600",
  },

  emptyState: {
    backgroundColor: "#ffffff",

    borderRadius: "14px",

    padding: "70px 20px",

    textAlign: "center",

    color: "#718198",

    border:
      "1px solid #e1e9f4",
  },

  emptyIcon: {
    fontSize: "40px",

    marginBottom: "10px",
  },
};

export default ManageJobs;
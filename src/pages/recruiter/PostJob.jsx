import { useState } from "react";

function PostJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "AI Resume Technologies",
    location: "",
    type: "Full Time",
    workMode: "On-site",
    experience: "",
    salary: "",
    vacancies: "",
    deadline: "",
    skills: "",
    education: "",
    description: "",
    responsibilities: "",
    qualifications: "",
    benefits: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Job Posted:", formData);

    alert("Job posted successfully!");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* HEADER */}
        <div style={styles.header}>
          <div>
            <p style={styles.smallHeading}>RECRUITER</p>

            <h1 style={styles.title}>Post a New Job</h1>

            <p style={styles.subtitle}>
              Create a detailed job opening and find the right talent
              for your organization.
            </p>
          </div>
        </div>

        {/* MAIN CARD */}
        <div style={styles.card}>

          <form onSubmit={handleSubmit}>

            {/* ================= BASIC INFORMATION ================= */}

            <div style={styles.sectionHeader}>
              <div style={styles.iconBox}>💼</div>

              <div>
                <h2 style={styles.sectionTitle}>
                  Basic Job Information
                </h2>

                <p style={styles.sectionSubtitle}>
                  Provide the basic details about this job opening.
                </p>
              </div>
            </div>

            <div style={styles.grid}>

              {/* Job Title */}
              <div style={styles.field}>
                <label style={styles.label}>
                  Job Title *
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Software Engineer"
                  value={formData.title}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              {/* Company */}
              <div style={styles.field}>
                <label style={styles.label}>
                  Company Name *
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              {/* Location */}
              <div style={styles.field}>
                <label style={styles.label}>
                  Location *
                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Chennai, Bangalore"
                  value={formData.location}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              {/* Job Type */}
              <div style={styles.field}>
                <label style={styles.label}>
                  Job Type *
                </label>

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Internship</option>
                  <option>Contract</option>
                  <option>Temporary</option>
                </select>
              </div>

              {/* Work Mode */}
              <div style={styles.field}>
                <label style={styles.label}>
                  Work Mode *
                </label>

                <select
                  name="workMode"
                  value={formData.workMode}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option>On-site</option>
                  <option>Remote</option>
                  <option>Hybrid</option>
                </select>
              </div>

              {/* Experience */}
              <div style={styles.field}>
                <label style={styles.label}>
                  Experience Required *
                </label>

                <input
                  type="text"
                  name="experience"
                  placeholder="e.g. 0-2 years"
                  value={formData.experience}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              {/* Salary */}
              <div style={styles.field}>
                <label style={styles.label}>
                  Salary / CTC
                </label>

                <input
                  type="text"
                  name="salary"
                  placeholder="e.g. ₹5 - ₹8 LPA"
                  value={formData.salary}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              {/* Vacancies */}
              <div style={styles.field}>
                <label style={styles.label}>
                  Number of Vacancies
                </label>

                <input
                  type="number"
                  name="vacancies"
                  placeholder="e.g. 5"
                  value={formData.vacancies}
                  onChange={handleChange}
                  style={styles.input}
                  min="1"
                />
              </div>

              {/* Deadline */}
              <div style={styles.field}>
                <label style={styles.label}>
                  Application Deadline
                </label>

                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

            </div>

            {/* ================= SKILLS ================= */}

            <div style={styles.divider}></div>

            <div style={styles.sectionHeader}>
              <div style={styles.iconBox}>🛠️</div>

              <div>
                <h2 style={styles.sectionTitle}>
                  Skills & Requirements
                </h2>

                <p style={styles.sectionSubtitle}>
                  Specify the technical and professional requirements
                  for this position.
                </p>
              </div>
            </div>

            <div style={styles.grid}>

              {/* Skills */}
              <div style={styles.field}>
                <label style={styles.label}>
                  Required Skills *
                </label>

                <input
                  type="text"
                  name="skills"
                  placeholder="e.g. React, Python, SQL, JavaScript"
                  value={formData.skills}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />

                <span style={styles.helper}>
                  Separate multiple skills using commas.
                </span>
              </div>

              {/* Education */}
              <div style={styles.field}>
                <label style={styles.label}>
                  Education Qualification
                </label>

                <input
                  type="text"
                  name="education"
                  placeholder="e.g. B.E / B.Tech in Computer Science"
                  value={formData.education}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

            </div>

            {/* ================= JOB DESCRIPTION ================= */}

            <div style={styles.divider}></div>

            <div style={styles.sectionHeader}>
              <div style={styles.iconBox}>📝</div>

              <div>
                <h2 style={styles.sectionTitle}>
                  Job Description
                </h2>

                <p style={styles.sectionSubtitle}>
                  Give candidates a clear understanding of the role.
                </p>
              </div>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>
                Job Description *
              </label>

              <textarea
                name="description"
                placeholder="Describe the role, team, work environment and what the candidate can expect..."
                value={formData.description}
                onChange={handleChange}
                style={styles.textarea}
                rows="7"
                required
              />
            </div>

            {/* ================= RESPONSIBILITIES ================= */}

            <div style={styles.divider}></div>

            <div style={styles.sectionHeader}>
              <div style={styles.iconBox}>🎯</div>

              <div>
                <h2 style={styles.sectionTitle}>
                  Responsibilities
                </h2>

                <p style={styles.sectionSubtitle}>
                  Mention the major responsibilities of this position.
                </p>
              </div>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>
                Key Responsibilities *
              </label>

              <textarea
                name="responsibilities"
                placeholder={
                  "e.g.\n" +
                  "• Develop and maintain applications\n" +
                  "• Collaborate with development teams\n" +
                  "• Write clean and efficient code"
                }
                value={formData.responsibilities}
                onChange={handleChange}
                style={styles.textarea}
                rows="7"
                required
              />
            </div>

            {/* ================= QUALIFICATIONS ================= */}

            <div style={styles.divider}></div>

            <div style={styles.sectionHeader}>
              <div style={styles.iconBox}>🎓</div>

              <div>
                <h2 style={styles.sectionTitle}>
                  Candidate Qualifications
                </h2>

                <p style={styles.sectionSubtitle}>
                  Mention the qualifications and qualities you're
                  looking for in candidates.
                </p>
              </div>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>
                Qualifications
              </label>

              <textarea
                name="qualifications"
                placeholder={
                  "e.g.\n" +
                  "• Strong problem-solving skills\n" +
                  "• Good communication skills\n" +
                  "• Ability to work in a team"
                }
                value={formData.qualifications}
                onChange={handleChange}
                style={styles.textarea}
                rows="6"
              />
            </div>

            {/* ================= BENEFITS ================= */}

            <div style={styles.divider}></div>

            <div style={styles.sectionHeader}>
              <div style={styles.iconBox}>✨</div>

              <div>
                <h2 style={styles.sectionTitle}>
                  Benefits & Perks
                </h2>

                <p style={styles.sectionSubtitle}>
                  Add the benefits and perks offered with this role.
                </p>
              </div>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>
                Benefits
              </label>

              <textarea
                name="benefits"
                placeholder={
                  "e.g.\n" +
                  "• Health insurance\n" +
                  "• Flexible working hours\n" +
                  "• Learning opportunities"
                }
                value={formData.benefits}
                onChange={handleChange}
                style={styles.textarea}
                rows="5"
              />
            </div>

            {/* ================= ADDITIONAL INFORMATION ================= */}

            <div style={styles.divider}></div>

            <div style={styles.sectionHeader}>
              <div style={styles.iconBox}>📌</div>

              <div>
                <h2 style={styles.sectionTitle}>
                  Additional Information
                </h2>

                <p style={styles.sectionSubtitle}>
                  Add any other information candidates should know.
                </p>
              </div>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>
                Additional Details
              </label>

              <textarea
                name="additionalInfo"
                placeholder="Add any additional information about the hiring process or role..."
                value={formData.additionalInfo}
                onChange={handleChange}
                style={styles.textarea}
                rows="5"
              />
            </div>

            {/* ================= ACTIONS ================= */}

            <div style={styles.actions}>

              <button
                type="button"
                style={styles.cancelButton}
                onClick={() => window.history.back()}
              >
                Cancel
              </button>

              <button
                type="submit"
                style={styles.postButton}
              >
                🚀 Post Job
              </button>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #f5f3ff 0%, #eef2ff 50%, #f8faff 100%)",
    padding: "35px",
    fontFamily: "Arial, sans-serif",
    color: "#1e1b4b",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },

  header: {
    marginBottom: "28px",
  },

  smallHeading: {
    margin: "0 0 7px",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#6366f1",
  },

  title: {
    margin: "0 0 8px",
    fontSize: "30px",
    fontWeight: "700",
    color: "#1e1b4b",
  },

  subtitle: {
    margin: 0,
    color: "#6b7280",
    fontSize: "15px",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 8px 30px rgba(79, 70, 229, 0.10)",
    border: "1px solid #e0e7ff",
  },

  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "22px",
  },

  iconBox: {
    width: "44px",
    height: "44px",
    minWidth: "44px",
    borderRadius: "11px",
    background:
      "linear-gradient(135deg, #6366f1, #8b5cf6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "19px",
    boxShadow: "0 5px 14px rgba(99, 102, 241, 0.22)",
  },

  sectionTitle: {
    margin: "0 0 4px",
    fontSize: "19px",
    color: "#312e81",
  },

  sectionSubtitle: {
    margin: 0,
    color: "#8181a1",
    fontSize: "13px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },

  label: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#3730a3",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 14px",
    border: "1px solid #d9d8f5",
    borderRadius: "9px",
    backgroundColor: "#fafaff",
    fontSize: "14px",
    color: "#312e81",
    outline: "none",
  },

  textarea: {
    width: "100%",
    boxSizing: "border-box",
    padding: "13px 14px",
    border: "1px solid #d9d8f5",
    borderRadius: "9px",
    backgroundColor: "#fafaff",
    fontSize: "14px",
    color: "#312e81",
    resize: "vertical",
    outline: "none",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  },

  helper: {
    fontSize: "12px",
    color: "#8181a1",
  },

  divider: {
    height: "1px",
    backgroundColor: "#e5e7eb",
    margin: "30px 0",
  },

  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    marginTop: "30px",
    paddingTop: "22px",
    borderTop: "1px solid #e5e7eb",
  },

  cancelButton: {
    padding: "11px 20px",
    border: "1px solid #c7d2fe",
    borderRadius: "9px",
    backgroundColor: "#ffffff",
    color: "#4f46e5",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
  },

  postButton: {
    padding: "11px 23px",
    border: "none",
    borderRadius: "9px",
    background:
      "linear-gradient(135deg, #4f46e5, #7c3aed)",
    color: "#ffffff",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    boxShadow: "0 5px 15px rgba(79, 70, 229, 0.25)",
  },
};

export default PostJob;
import { useNavigate } from "react-router-dom";

function UploadResume() {
  const navigate = useNavigate();

  const resumes = [
    {
      name: "Software_Developer_Resume.pdf",
      job: "Software Developer",
      date: "14 Aug 2026",
    },
    {
      name: "Frontend_Developer_Resume.pdf",
      job: "Frontend Developer",
      date: "13 Aug 2026",
    },
    {
      name: "Backend_Developer_Resume.pdf",
      job: "Backend Developer",
      date: "12 Aug 2026",
    },
    {
      name: "FullStack_Developer_Resume.pdf",
      job: "Full Stack Developer",
      date: "11 Aug 2026",
    },
    {
      name: "React_Developer_Resume.pdf",
      job: "React Developer",
      date: "10 Aug 2026",
    },
    {
      name: "Python_Developer_Resume.pdf",
      job: "Python Developer",
      date: "09 Aug 2026",
    },
    {
      name: "Data_Analyst_Resume.pdf",
      job: "Data Analyst",
      date: "08 Aug 2026",
    },
    {
      name: "AI_Engineer_Resume.pdf",
      job: "AI Engineer",
      date: "07 Aug 2026",
    },
    {
      name: "ML_Engineer_Resume.pdf",
      job: "Machine Learning Engineer",
      date: "06 Aug 2026",
    },
    {
      name: "Data_Scientist_Resume.pdf",
      job: "Data Scientist",
      date: "05 Aug 2026",
    },
    {
      name: "Cloud_Engineer_Resume.pdf",
      job: "Cloud Engineer",
      date: "04 Aug 2026",
    },
    {
      name: "DevOps_Engineer_Resume.pdf",
      job: "DevOps Engineer",
      date: "03 Aug 2026",
    },
    {
      name: "Cybersecurity_Resume.pdf",
      job: "Cybersecurity Analyst",
      date: "02 Aug 2026",
    },
    {
      name: "Java_Developer_Resume.pdf",
      job: "Java Developer",
      date: "01 Aug 2026",
    },
    {
      name: "UIUX_Designer_Resume.pdf",
      job: "UI/UX Designer",
      date: "31 Jul 2026",
    },
    {
      name: "Mobile_Developer_Resume.pdf",
      job: "Mobile App Developer",
      date: "30 Jul 2026",
    },
    {
      name: "Web_Developer_Resume.pdf",
      job: "Web Developer",
      date: "29 Jul 2026",
    },
    {
      name: "Software_Engineer_Resume.pdf",
      job: "Software Engineer",
      date: "28 Jul 2026",
    },
    {
      name: "Associate_Developer_Resume.pdf",
      job: "Associate Developer",
      date: "27 Jul 2026",
    },
    {
      name: "Graduate_Engineer_Resume.pdf",
      job: "Graduate Engineer",
      date: "26 Jul 2026",
    },
  ];

  const handleFileChange = (event) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      console.log("Selected files:", files);
      alert(`${files.length} file(s) selected.`);
    }
  };

  return (
    <div style={styles.page}>

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside style={styles.sidebar}>

        {/* Logo */}
        <div style={styles.logo}>
          <span style={styles.logoMain}>RECRUVA</span>
          <span style={styles.logoAI}> AI</span>
        </div>

        {/* Navigation */}
        <nav style={styles.nav}>

          {/* Dashboard */}
          <button
            style={styles.navItem}
            onClick={() => navigate("/candidate/dashboard")}
          >
            <span style={styles.navIcon}>▦</span>
            <span>Dashboard</span>
          </button>

          {/* Upload Resume */}
          <button
            style={{
              ...styles.navItem,
              ...styles.activeNavItem,
            }}
            onClick={() => navigate("/candidate/upload-resume")}
          >
            <span style={styles.navIcon}>↑</span>
            <span>Upload Resume</span>
          </button>

          {/* Search Jobs */}
          <button
            style={styles.navItem}
            onClick={() => navigate("/candidate/jobs")}
          >
            <span style={styles.navIcon}>⌕</span>
            <span>Search Jobs</span>
          </button>

          {/* Profile */}
          <button
            style={styles.navItem}
            onClick={() => navigate("/candidate/profile")}
          >
            <span style={styles.navIcon}>◯</span>
            <span>Profile</span>
          </button>

        </nav>

        {/* Logout */}
        <div style={styles.sidebarBottom}>

          <button
            style={styles.logoutItem}
            onClick={() => navigate("/candidate/login")}
          >
            <span style={styles.navIcon}>↪</span>
            <span>Logout</span>
          </button>

        </div>

      </aside>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main style={styles.main}>

        {/* Header */}
        <div style={styles.header}>

          <div>

            <div style={styles.badge}>
              <span style={styles.badgeDot}></span>
              RESUME MANAGEMENT
            </div>

            <h1 style={styles.heading}>
              Upload Resume
            </h1>

            <p style={styles.description}>
              Upload and manage the resumes you use when applying
              for different job opportunities.
            </p>

          </div>

          <div style={styles.profileCircle}>
            C
          </div>

        </div>


        {/* =====================================================
            UPLOAD SECTION
        ===================================================== */}

        <section style={styles.uploadSection}>

          <div style={styles.uploadIconLarge}>
            ↑
          </div>

          <h2 style={styles.uploadTitle}>
            Upload your resume
          </h2>

          <p style={styles.uploadDescription}>
            Select a PDF resume from your computer to upload it
            for your job applications.
          </p>


          {/* File Input */}
          <label style={styles.selectButton}>

            <span>📁</span>
            <span>Select Resume</span>

            <input
              type="file"
              accept=".pdf,application/pdf"
              multiple
              onChange={handleFileChange}
              style={styles.hiddenInput}
            />

          </label>


          <p style={styles.fileInfo}>
            Supported format: PDF
          </p>

        </section>


        {/* =====================================================
            UPLOADED RESUMES
        ===================================================== */}

        <section style={styles.resumeSection}>

          <div style={styles.resumeHeader}>

            <div>
              <h2 style={styles.sectionTitle}>
                Uploaded Resumes
              </h2>

              <p style={styles.sectionDescription}>
                Resumes uploaded for your job applications.
              </p>
            </div>

            <div style={styles.resumeCount}>
              20 Resumes
            </div>

          </div>


          {/* Resume Grid */}
          <div style={styles.resumeGrid}>

            {resumes.map((resume, index) => (

              <div
                style={styles.resumeCard}
                key={index}
              >

                {/* PDF Icon */}
                <div style={styles.pdfIcon}>
                  PDF
                </div>


                {/* Resume Details */}
                <div style={styles.resumeDetails}>

                  <h3 style={styles.resumeName}>
                    {resume.name}
                  </h3>

                  <p style={styles.jobName}>
                    Applied for: {resume.job}
                  </p>

                  <p style={styles.uploadDate}>
                    Uploaded: {resume.date}
                  </p>

                </div>


                {/* Edit + Status */}
                <div style={styles.resumeActions}>

                  <button
                    style={styles.editResumeButton}
                    onClick={() =>
                      navigate("/candidate/edit-resume")
                    }
                  >
                    Edit Resume
                  </button>

                  <div style={styles.status}>
                    Uploaded
                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}


/* ============================================================
   RECRUVA AI THEME
   SAME CSS AS BEFORE
============================================================ */

const styles = {

  /* ================= PAGE ================= */

  page: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",

    background:
      "radial-gradient(circle at 85% 20%, rgba(62,115,240,0.12), transparent 30%), radial-gradient(circle at 10% 85%, rgba(83,83,220,0.08), transparent 30%), #f7faff",

    fontFamily:
      '"Inter", "Segoe UI", Arial, sans-serif',

    color: "#102a4c",

    boxSizing: "border-box",
  },


  /* ================= SIDEBAR ================= */

  sidebar: {
    width: "245px",
    minHeight: "100vh",

    background: "rgba(255,255,255,0.96)",

    borderRight: "1px solid #dce6f3",

    padding: "30px 18px",

    boxSizing: "border-box",

    display: "flex",
    flexDirection: "column",

    position: "fixed",

    left: "0",
    top: "0",
    bottom: "0",
  },


  /* ================= LOGO ================= */

  logo: {
    display: "flex",
    alignItems: "center",

    padding: "0 14px",

    marginBottom: "50px",

    fontSize: "22px",

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


  /* ================= NAVIGATION ================= */

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  navItem: {
    width: "100%",

    display: "flex",
    alignItems: "center",

    gap: "14px",

    padding: "13px 15px",

    border: "none",

    borderRadius: "9px",

    background: "transparent",

    color: "#718198",

    fontSize: "12px",

    fontWeight: "600",

    textAlign: "left",

    cursor: "pointer",
  },

  activeNavItem: {
    background: "#edf4ff",

    color: "#3168c5",

    fontWeight: "700",
  },

  navIcon: {
    width: "22px",

    textAlign: "center",

    fontSize: "17px",

    fontWeight: "700",
  },


  /* ================= LOGOUT ================= */

  sidebarBottom: {
    marginTop: "auto",

    paddingTop: "20px",

    borderTop: "1px solid #edf1f6",
  },

  logoutItem: {
    width: "100%",

    display: "flex",
    alignItems: "center",

    gap: "14px",

    padding: "13px 15px",

    border: "none",

    borderRadius: "9px",

    background: "transparent",

    color: "#718198",

    fontSize: "12px",

    fontWeight: "600",

    textAlign: "left",

    cursor: "pointer",
  },


  /* ================= MAIN ================= */

  main: {
    marginLeft: "245px",

    width: "calc(100% - 245px)",

    minHeight: "100vh",

    padding: "45px 55px 60px",

    boxSizing: "border-box",
  },


  /* ================= HEADER ================= */

  header: {
    display: "flex",

    alignItems: "flex-start",

    justifyContent: "space-between",

    marginBottom: "35px",
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

    fontSize: "9px",

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

  heading: {
    margin: "17px 0 7px",

    fontSize: "38px",

    lineHeight: "1.1",

    letterSpacing: "-1.5px",

    fontWeight: "700",

    color: "#10284c",
  },

  description: {
    margin: "0",

    fontSize: "13px",

    lineHeight: "1.7",

    color: "#718198",
  },

  profileCircle: {
    width: "42px",

    height: "42px",

    borderRadius: "50%",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    background: "#edf4ff",

    border: "1px solid #d7e6fc",

    color: "#396df6",

    fontSize: "14px",

    fontWeight: "800",
  },


  /* ================= UPLOAD SECTION ================= */

  uploadSection: {
    background: "rgba(255,255,255,0.97)",

    border: "1px solid #dce6f3",

    borderRadius: "15px",

    padding: "45px",

    textAlign: "center",

    boxShadow:
      "0 12px 30px rgba(29,65,112,0.07)",

    marginBottom: "35px",
  },

  uploadIconLarge: {
    width: "65px",

    height: "65px",

    margin: "0 auto 17px",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    borderRadius: "15px",

    background:
      "linear-gradient(135deg, #edf4ff, #f1efff)",

    color: "#396df6",

    fontSize: "28px",

    fontWeight: "700",
  },

  uploadTitle: {
    margin: "0 0 8px",

    fontSize: "20px",

    color: "#19385e",
  },

  uploadDescription: {
    maxWidth: "500px",

    margin: "0 auto 22px",

    fontSize: "11px",

    lineHeight: "1.7",

    color: "#8998a9",
  },

  selectButton: {
    display: "inline-flex",

    alignItems: "center",

    justifyContent: "center",

    gap: "8px",

    padding: "12px 22px",

    borderRadius: "8px",

    background:
      "linear-gradient(90deg, #2167df, #5d51d8)",

    color: "#ffffff",

    fontSize: "11px",

    fontWeight: "700",

    cursor: "pointer",

    boxShadow:
      "0 10px 25px rgba(33,102,223,0.20)",
  },

  hiddenInput: {
    display: "none",
  },

  fileInfo: {
    margin: "12px 0 0",

    fontSize: "9px",

    color: "#9aa8b8",
  },


  /* ================= RESUME SECTION ================= */

  resumeSection: {
    marginBottom: "30px",
  },

  resumeHeader: {
    display: "flex",

    alignItems: "center",

    justifyContent: "space-between",

    marginBottom: "18px",
  },

  sectionTitle: {
    margin: "0 0 5px",

    fontSize: "19px",

    color: "#19385e",
  },

  sectionDescription: {
    margin: "0",

    fontSize: "10px",

    color: "#8998a9",
  },

  resumeCount: {
    padding: "8px 13px",

    borderRadius: "7px",

    background: "#edf4ff",

    color: "#396df6",

    fontSize: "10px",

    fontWeight: "700",
  },


  /* ================= RESUME GRID ================= */

  resumeGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(2, 1fr)",

    gap: "15px",
  },


  /* ================= RESUME CARD ================= */

  resumeCard: {
    display: "flex",

    alignItems: "center",

    gap: "13px",

    padding: "17px",

    background:
      "rgba(255,255,255,0.97)",

    border:
      "1px solid #dce6f3",

    borderRadius: "11px",

    boxShadow:
      "0 8px 20px rgba(29,65,112,0.05)",
  },

  pdfIcon: {
    width: "40px",

    height: "45px",

    flexShrink: "0",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    borderRadius: "7px",

    background: "#edf4ff",

    color: "#396df6",

    fontSize: "9px",

    fontWeight: "800",
  },

  resumeDetails: {
    flex: "1",

    minWidth: "0",
  },

  resumeName: {
    margin: "0 0 5px",

    fontSize: "11px",

    fontWeight: "700",

    color: "#234464",

    whiteSpace: "nowrap",

    overflow: "hidden",

    textOverflow: "ellipsis",
  },

  jobName: {
    margin: "0 0 3px",

    fontSize: "9px",

    color: "#718198",
  },

  uploadDate: {
    margin: "0",

    fontSize: "8px",

    color: "#9aa8b8",
  },

  /* ================= EDIT RESUME ================= */

  resumeActions: {
    display: "flex",

    flexDirection: "column",

    alignItems: "flex-end",

    gap: "7px",
  },

  editResumeButton: {
    border: "none",

    background: "transparent",

    color: "#396df6",

    fontSize: "8px",

    fontWeight: "700",

    cursor: "pointer",

    padding: "0",
  },

  /* ================= STATUS ================= */

  status: {
    padding: "5px 8px",

    borderRadius: "5px",

    background: "#edf8f1",

    color: "#3a8a58",

    fontSize: "8px",

    fontWeight: "700",

    whiteSpace: "nowrap",
  },
};

export default UploadResume;
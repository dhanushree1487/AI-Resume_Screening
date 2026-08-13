import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchJobs() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const jobs = [
    {
      title: "Software Developer",
      company: "TCS",
      location: "Chennai",
      type: "Full Time",
      experience: "0-2 Years",
      skills: "Java, Python, SQL",
    },
    {
      title: "Frontend Developer",
      company: "Zoho",
      location: "Chennai",
      type: "Full Time",
      experience: "1-3 Years",
      skills: "React, JavaScript, CSS",
    },
    {
      title: "Backend Developer",
      company: "Freshworks",
      location: "Chennai",
      type: "Full Time",
      experience: "1-3 Years",
      skills: "Node.js, Python, APIs",
    },
    {
      title: "Full Stack Developer",
      company: "Accenture",
      location: "Bangalore",
      type: "Full Time",
      experience: "2-4 Years",
      skills: "React, Node.js, MongoDB",
    },
    {
      title: "React Developer",
      company: "Cognizant",
      location: "Chennai",
      type: "Full Time",
      experience: "1-3 Years",
      skills: "React, JavaScript, Redux",
    },
    {
      title: "Python Developer",
      company: "Wipro",
      location: "Bangalore",
      type: "Full Time",
      experience: "0-2 Years",
      skills: "Python, Django, FastAPI",
    },
    {
      title: "Data Analyst",
      company: "Deloitte",
      location: "Hyderabad",
      type: "Full Time",
      experience: "1-3 Years",
      skills: "Python, SQL, Power BI",
    },
    {
      title: "AI Engineer",
      company: "Microsoft",
      location: "Hyderabad",
      type: "Full Time",
      experience: "2-4 Years",
      skills: "Python, AI, Machine Learning",
    },
    {
      title: "Machine Learning Engineer",
      company: "Google",
      location: "Bangalore",
      type: "Full Time",
      experience: "2-5 Years",
      skills: "Python, ML, TensorFlow",
    },
    {
      title: "Data Scientist",
      company: "Amazon",
      location: "Bangalore",
      type: "Full Time",
      experience: "2-5 Years",
      skills: "Python, ML, Statistics",
    },
    {
      title: "Cloud Engineer",
      company: "IBM",
      location: "Bangalore",
      type: "Full Time",
      experience: "1-4 Years",
      skills: "AWS, Azure, Docker",
    },
    {
      title: "DevOps Engineer",
      company: "Infosys",
      location: "Pune",
      type: "Full Time",
      experience: "2-4 Years",
      skills: "Docker, Kubernetes, AWS",
    },
    {
      title: "Cybersecurity Analyst",
      company: "EY",
      location: "Chennai",
      type: "Full Time",
      experience: "1-3 Years",
      skills: "Security, Networking, Linux",
    },
    {
      title: "Java Developer",
      company: "HCL Technologies",
      location: "Noida",
      type: "Full Time",
      experience: "1-3 Years",
      skills: "Java, Spring Boot, SQL",
    },
    {
      title: "UI/UX Designer",
      company: "Adobe",
      location: "Bangalore",
      type: "Full Time",
      experience: "1-3 Years",
      skills: "Figma, UI Design, UX",
    },
    {
      title: "Mobile App Developer",
      company: "Paytm",
      location: "Noida",
      type: "Full Time",
      experience: "1-3 Years",
      skills: "Flutter, Android, Kotlin",
    },
    {
      title: "Web Developer",
      company: "Tech Mahindra",
      location: "Pune",
      type: "Full Time",
      experience: "0-2 Years",
      skills: "HTML, CSS, JavaScript",
    },
    {
      title: "Software Engineer",
      company: "Apple",
      location: "Hyderabad",
      type: "Full Time",
      experience: "2-5 Years",
      skills: "C++, Python, Algorithms",
    },
    {
      title: "Associate Developer",
      company: "Capgemini",
      location: "Chennai",
      type: "Full Time",
      experience: "0-2 Years",
      skills: "Java, SQL, JavaScript",
    },
    {
      title: "Graduate Engineer Trainee",
      company: "L&T Technology Services",
      location: "Chennai",
      type: "Full Time",
      experience: "Fresher",
      skills: "C, C++, Python",
    },
    {
      title: "Cloud Developer",
      company: "Oracle",
      location: "Bangalore",
      type: "Full Time",
      experience: "1-3 Years",
      skills: "Cloud, Java, SQL",
    },
    {
      title: "AI/ML Intern",
      company: "Intel",
      location: "Bangalore",
      type: "Internship",
      experience: "Fresher",
      skills: "Python, Machine Learning",
    },
    {
      title: "Frontend Intern",
      company: "Razorpay",
      location: "Bangalore",
      type: "Internship",
      experience: "Fresher",
      skills: "React, HTML, CSS",
    },
    {
      title: "Backend Intern",
      company: "Swiggy",
      location: "Bangalore",
      type: "Internship",
      experience: "Fresher",
      skills: "Python, APIs, SQL",
    },
    {
      title: "Data Science Intern",
      company: "Flipkart",
      location: "Bangalore",
      type: "Internship",
      experience: "Fresher",
      skills: "Python, Pandas, ML",
    },
    {
      title: "Product Designer",
      company: "PhonePe",
      location: "Bangalore",
      type: "Full Time",
      experience: "2-4 Years",
      skills: "Figma, UX, Product Design",
    },
    {
      title: "QA Engineer",
      company: "Mindtree",
      location: "Chennai",
      type: "Full Time",
      experience: "1-3 Years",
      skills: "Testing, Selenium, Java",
    },
    {
      title: "Automation Test Engineer",
      company: "UST",
      location: "Chennai",
      type: "Full Time",
      experience: "1-4 Years",
      skills: "Selenium, Python, Testing",
    },
    {
      title: "Database Administrator",
      company: "NTT Data",
      location: "Hyderabad",
      type: "Full Time",
      experience: "2-5 Years",
      skills: "SQL, MySQL, PostgreSQL",
    },
    {
      title: "System Engineer",
      company: "CGI",
      location: "Pune",
      type: "Full Time",
      experience: "1-3 Years",
      skills: "Linux, Networking, Cloud",
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const search = searchTerm.toLowerCase();

    return (
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.location.toLowerCase().includes(search) ||
      job.skills.toLowerCase().includes(search)
    );
  });

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
            style={styles.navItem}
            onClick={() => navigate("/candidate/upload-resume")}
          >
            <span style={styles.navIcon}>↑</span>
            <span>Upload Resume</span>
          </button>

          {/* Search Jobs */}
          <button
            style={{
              ...styles.navItem,
              ...styles.activeNavItem,
            }}
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
              AI-POWERED JOB SEARCH
            </div>

            <h1 style={styles.heading}>
              Search Jobs
            </h1>

            <p style={styles.description}>
              Discover job opportunities that match your
              skills and career goals.
            </p>

          </div>

          <div style={styles.profileCircle}>
            C
          </div>

        </div>


        {/* =====================================================
            SEARCH BAR
        ===================================================== */}

        <section style={styles.searchSection}>

          <div style={styles.searchBox}>

            <span style={styles.searchIcon}>
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search jobs by title, company, location or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />

            {searchTerm && (
              <button
                style={styles.clearButton}
                onClick={() => setSearchTerm("")}
              >
                ×
              </button>
            )}

          </div>

        </section>


        {/* =====================================================
            JOB RESULTS HEADER
        ===================================================== */}

        <div style={styles.resultsHeader}>

          <div>

            <h2 style={styles.sectionTitle}>
              Available Jobs
            </h2>

            <p style={styles.sectionDescription}>
              {filteredJobs.length} job opportunities found
            </p>

          </div>

          <div style={styles.jobCount}>
            {filteredJobs.length} Jobs
          </div>

        </div>


        {/* =====================================================
            JOB CARDS
        ===================================================== */}

        <section style={styles.jobGrid}>

          {filteredJobs.length > 0 ? (

            filteredJobs.map((job, index) => (

              <div
                style={styles.jobCard}
                key={index}
              >

                {/* Job Icon */}
                <div style={styles.companyIcon}>
                  {job.company.charAt(0)}
                </div>


                {/* Job Details */}
                <div style={styles.jobDetails}>

                  <h3 style={styles.jobTitle}>
                    {job.title}
                  </h3>

                  <p style={styles.companyName}>
                    {job.company}
                  </p>

                  <div style={styles.jobInfo}>

                    <span>
                      📍 {job.location}
                    </span>

                    <span>
                      ◷ {job.type}
                    </span>

                  </div>

                  <div style={styles.experience}>
                    {job.experience}
                  </div>

                  <p style={styles.skills}>
                    {job.skills}
                  </p>

                </div>


                {/* Apply */}
                <button
                  style={styles.applyButton}
                  onClick={() =>
                    alert(
                      `Application started for ${job.title} at ${job.company}`
                    )
                  }
                >
                  Apply Now
                </button>

              </div>

            ))

          ) : (

            <div style={styles.noResults}>

              <div style={styles.noResultsIcon}>
                ⌕
              </div>

              <h3 style={styles.noResultsTitle}>
                No jobs found
              </h3>

              <p style={styles.noResultsText}>
                Try searching with a different job title,
                company, location or skill.
              </p>

            </div>

          )}

        </section>

      </main>

    </div>
  );
}


/* ============================================================
   RECRUVA AI THEME
   SAME CSS STYLE AS DASHBOARD / UPLOAD RESUME
============================================================ */

const styles = {

  /* ================= PAGE ================= */

  page: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",

    background:
      "radial-gradient(circle at 85% 20%, rgba(62,115,240,0.12), transparent 30%), radial-gradient(circle at 10% 85%, rgba(83,83,220,0.08), transparent 30%), #f7faff",

    fontFamily: '"Inter", "Segoe UI", Arial, sans-serif',
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

    marginBottom: "30px",
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


  /* ================= SEARCH ================= */

  searchSection: {
    marginBottom: "30px",
  },

  searchBox: {
    width: "100%",

    display: "flex",

    alignItems: "center",

    boxSizing: "border-box",

    padding: "5px 7px 5px 18px",

    background: "rgba(255,255,255,0.97)",

    border: "1px solid #d6e0ed",

    borderRadius: "11px",

    boxShadow:
      "0 10px 25px rgba(29,65,112,0.06)",
  },

  searchIcon: {
    fontSize: "21px",

    color: "#396df6",

    marginRight: "11px",
  },

  searchInput: {
    flex: "1",

    border: "none",

    outline: "none",

    background: "transparent",

    color: "#19385e",

    fontSize: "12px",

    padding: "12px 0",
  },

  clearButton: {
    width: "30px",

    height: "30px",

    border: "none",

    borderRadius: "50%",

    background: "#edf4ff",

    color: "#396df6",

    fontSize: "18px",

    cursor: "pointer",
  },


  /* ================= RESULTS HEADER ================= */

  resultsHeader: {
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

  jobCount: {
    padding: "8px 13px",

    borderRadius: "7px",

    background: "#edf4ff",

    color: "#396df6",

    fontSize: "10px",

    fontWeight: "700",
  },


  /* ================= JOB GRID ================= */

  jobGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(2, 1fr)",

    gap: "15px",
  },


  /* ================= JOB CARD ================= */

  jobCard: {
    display: "flex",

    alignItems: "flex-start",

    gap: "13px",

    padding: "18px",

    background:
      "rgba(255,255,255,0.97)",

    border:
      "1px solid #dce6f3",

    borderRadius: "11px",

    boxShadow:
      "0 8px 20px rgba(29,65,112,0.05)",
  },

  companyIcon: {
    width: "42px",

    height: "42px",

    flexShrink: "0",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    borderRadius: "9px",

    background:
      "linear-gradient(135deg, #edf4ff, #f1efff)",

    color: "#396df6",

    fontSize: "16px",

    fontWeight: "800",
  },

  jobDetails: {
    flex: "1",

    minWidth: "0",
  },

  jobTitle: {
    margin: "0 0 4px",

    fontSize: "13px",

    fontWeight: "700",

    color: "#234464",
  },

  companyName: {
    margin: "0 0 8px",

    fontSize: "10px",

    color: "#396df6",

    fontWeight: "600",
  },

  jobInfo: {
    display: "flex",

    gap: "12px",

    marginBottom: "7px",

    fontSize: "9px",

    color: "#718198",
  },

  experience: {
    display: "inline-block",

    padding: "4px 7px",

    borderRadius: "5px",

    background: "#f5f8fc",

    color: "#718198",

    fontSize: "8px",

    fontWeight: "600",

    marginBottom: "7px",
  },

  skills: {
    margin: "0",

    fontSize: "9px",

    color: "#8998a9",

    lineHeight: "1.5",
  },


  /* ================= APPLY BUTTON ================= */

  applyButton: {
    flexShrink: "0",

    padding: "8px 11px",

    border: "none",

    borderRadius: "7px",

    background:
      "linear-gradient(90deg, #2167df, #5d51d8)",

    color: "#ffffff",

    fontSize: "9px",

    fontWeight: "700",

    cursor: "pointer",

    boxShadow:
      "0 7px 15px rgba(33,102,223,0.16)",
  },


  /* ================= NO RESULTS ================= */

  noResults: {
    gridColumn: "1 / -1",

    padding: "60px 20px",

    textAlign: "center",

    background:
      "rgba(255,255,255,0.97)",

    border:
      "1px solid #dce6f3",

    borderRadius: "15px",
  },

  noResultsIcon: {
    width: "55px",

    height: "55px",

    margin: "0 auto 15px",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    borderRadius: "12px",

    background: "#edf4ff",

    color: "#396df6",

    fontSize: "24px",
  },

  noResultsTitle: {
    margin: "0 0 7px",

    fontSize: "16px",

    color: "#19385e",
  },

  noResultsText: {
    margin: "0",

    fontSize: "10px",

    color: "#8998a9",
  },
};

export default SearchJobs;
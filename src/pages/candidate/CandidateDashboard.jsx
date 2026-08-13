import { useNavigate } from "react-router-dom";

function CandidateDashboard() {
  const navigate = useNavigate();

  // Temporary data
  // Later this can come from your backend/database
  const resumeUploads = [
    { day: "Mon", count: 1 },
    { day: "Tue", count: 2 },
    { day: "Wed", count: 1 },
    { day: "Thu", count: 3 },
    { day: "Fri", count: 2 },
    { day: "Sat", count: 1 },
    { day: "Sun", count: 0 },
  ];

  const totalResumes = 10;

  const handleLogout = () => {
    navigate("/candidate/login");
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
            style={{
              ...styles.navItem,
              ...styles.activeNavItem,
            }}
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
            onClick={handleLogout}
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
        <div style={styles.topHeader}>

          <div>
            <div style={styles.badge}>
              <span style={styles.badgeDot}></span>
              CANDIDATE DASHBOARD
            </div>

            <h1 style={styles.heading}>
              Dashboard
            </h1>

            <p style={styles.description}>
              Track your resume activity and manage your career
              journey with RECRUVA AI.
            </p>
          </div>

          {/* Profile circle */}
          <div style={styles.profileCircle}>
            C
          </div>

        </div>


        {/* =====================================================
            RESUME SUMMARY
        ===================================================== */}

        <section style={styles.summarySection}>

          <div style={styles.resumeCard}>

            <div style={styles.resumeIcon}>
              📄
            </div>

            <div>
              <p style={styles.cardLabel}>
                Total Resumes Uploaded
              </p>

              <h2 style={styles.resumeCount}>
                {totalResumes}
              </h2>

              <p style={styles.cardSmallText}>
                Resumes uploaded to your account
              </p>
            </div>

          </div>


          {/* Quick Upload */}
          <button
            style={styles.uploadCard}
            onClick={() => navigate("/candidate/upload-resume")}
          >

            <div style={styles.uploadIcon}>
              ↑
            </div>

            <div style={styles.uploadContent}>
              <h3 style={styles.uploadTitle}>
                Upload New Resume
              </h3>

              <p style={styles.uploadText}>
                Add a new resume to your profile
              </p>
            </div>

            <span style={styles.uploadArrow}>
              →
            </span>

          </button>

        </section>


        {/* =====================================================
            BAR GRAPH
        ===================================================== */}

        <section style={styles.chartCard}>

          <div style={styles.chartHeader}>

            <div>
              <h2 style={styles.chartTitle}>
                Resume Upload Activity
              </h2>

              <p style={styles.chartDescription}>
                Daily resume uploading status
              </p>
            </div>

            <div style={styles.chartPeriod}>
              Last 7 Days
            </div>

          </div>


          {/* Chart */}
          <div style={styles.chartArea}>

            {/* Y Axis */}
            <div style={styles.yAxis}>

              <span>4</span>
              <span>3</span>
              <span>2</span>
              <span>1</span>
              <span>0</span>

            </div>


            {/* Graph */}
            <div style={styles.graph}>

              {/* Grid Lines */}
              <div style={styles.gridLine}></div>
              <div style={styles.gridLine}></div>
              <div style={styles.gridLine}></div>
              <div style={styles.gridLine}></div>
              <div style={styles.gridLine}></div>


              {/* Bars */}
              <div style={styles.bars}>

                {resumeUploads.map((item, index) => (

                  <div
                    key={index}
                    style={styles.barColumn}
                  >

                    <div style={styles.barValue}>
                      {item.count}
                    </div>

                    <div
                      style={{
                        ...styles.bar,
                        height: `${item.count * 45}px`,
                      }}
                    ></div>

                    <span style={styles.dayLabel}>
                      {item.day}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            QUICK ACTIONS
        ===================================================== */}

        <section style={styles.quickSection}>

          <h2 style={styles.quickTitle}>
            Quick Actions
          </h2>

          <div style={styles.quickGrid}>

            <button
              style={styles.quickCard}
              onClick={() => navigate("/candidate/upload-resume")}
            >
              <span style={styles.quickIcon}>↑</span>

              <div>
                <strong style={styles.quickCardTitle}>
                  Upload Resume
                </strong>

                <p style={styles.quickCardText}>
                  Upload and manage your resumes
                </p>
              </div>
            </button>


            <button
              style={styles.quickCard}
              onClick={() => navigate("/candidate/jobs")}
            >
              <span style={styles.quickIcon}>⌕</span>

              <div>
                <strong style={styles.quickCardTitle}>
                  Search Jobs
                </strong>

                <p style={styles.quickCardText}>
                  Find jobs matching your skills
                </p>
              </div>
            </button>


            <button
              style={styles.quickCard}
              onClick={() => navigate("/candidate/profile")}
            >
              <span style={styles.quickIcon}>◯</span>

              <div>
                <strong style={styles.quickCardTitle}>
                  My Profile
                </strong>

                <p style={styles.quickCardText}>
                  Update your candidate profile
                </p>
              </div>
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}


/* ============================================================
   STYLES
   Same RECRUVA AI theme as Candidate Login
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


  /* ================= TOP HEADER ================= */

  topHeader: {
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


  /* ================= SUMMARY ================= */

  summarySection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "25px",
  },

  resumeCard: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    padding: "25px",
    background: "rgba(255,255,255,0.97)",
    border: "1px solid #dce6f3",
    borderRadius: "15px",
    boxShadow:
      "0 12px 30px rgba(29,65,112,0.07)",
  },

  resumeIcon: {
    width: "55px",
    height: "55px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px",
    background: "#edf4ff",
    fontSize: "23px",
  },

  cardLabel: {
    margin: "0 0 4px",
    fontSize: "11px",
    color: "#718198",
    fontWeight: "600",
  },

  resumeCount: {
    margin: "0",
    fontSize: "30px",
    color: "#142f54",
    fontWeight: "700",
  },

  cardSmallText: {
    margin: "3px 0 0",
    fontSize: "9px",
    color: "#9aa8b8",
  },


  /* ================= UPLOAD CARD ================= */

  uploadCard: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "25px",
    border: "1px solid #dce6f3",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.97)",
    boxShadow:
      "0 12px 30px rgba(29,65,112,0.07)",
    cursor: "pointer",
    textAlign: "left",
  },

  uploadIcon: {
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "11px",
    background:
      "linear-gradient(135deg, #edf4ff, #f1efff)",
    color: "#396df6",
    fontSize: "22px",
    fontWeight: "700",
  },

  uploadContent: {
    flex: "1",
  },

  uploadTitle: {
    margin: "0 0 5px",
    fontSize: "14px",
    color: "#234464",
  },

  uploadText: {
    margin: "0",
    fontSize: "10px",
    color: "#8998a9",
  },

  uploadArrow: {
    fontSize: "20px",
    color: "#396df6",
  },


  /* ================= CHART ================= */

  chartCard: {
    background: "rgba(255,255,255,0.97)",
    border: "1px solid #dce6f3",
    borderRadius: "15px",
    padding: "28px",
    boxShadow:
      "0 12px 30px rgba(29,65,112,0.07)",
    marginBottom: "30px",
  },

  chartHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "25px",
  },

  chartTitle: {
    margin: "0 0 6px",
    fontSize: "17px",
    color: "#19385e",
  },

  chartDescription: {
    margin: "0",
    fontSize: "10px",
    color: "#8998a9",
  },

  chartPeriod: {
    padding: "7px 12px",
    borderRadius: "6px",
    background: "#f5f8fc",
    color: "#718198",
    fontSize: "9px",
    fontWeight: "600",
  },

  chartArea: {
    height: "250px",
    display: "flex",
  },

  yAxis: {
    width: "25px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    color: "#9aa8b8",
    fontSize: "9px",
  },

  graph: {
    flex: "1",
    height: "210px",
    position: "relative",
    borderBottom: "1px solid #dce6f3",
  },

  gridLine: {
    position: "relative",
    height: "40px",
    borderTop: "1px dashed #edf1f6",
  },

  bars: {
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "0",
    height: "200px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-around",
    padding: "0 20px",
  },

  barColumn: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "7px",
    minWidth: "45px",
  },

  barValue: {
    fontSize: "9px",
    color: "#396df6",
    fontWeight: "700",
  },

  bar: {
    width: "28px",
    minHeight: "2px",
    borderRadius: "6px 6px 0 0",
    background:
      "linear-gradient(180deg, #396df6, #6153dc)",
    transition: "height 0.3s ease",
  },

  dayLabel: {
    position: "absolute",
    bottom: "-23px",
    fontSize: "9px",
    color: "#8998a9",
  },


  /* ================= QUICK ACTIONS ================= */

  quickSection: {
    marginTop: "10px",
  },

  quickTitle: {
    margin: "0 0 15px",
    fontSize: "17px",
    color: "#19385e",
  },

  quickGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
  },

  quickCard: {
    display: "flex",
    alignItems: "center",
    gap: "13px",
    padding: "17px",
    border: "1px solid #dce6f3",
    borderRadius: "11px",
    background: "#ffffff",
    cursor: "pointer",
    textAlign: "left",
  },

  quickIcon: {
    width: "35px",
    height: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    background: "#edf4ff",
    color: "#396df6",
    fontSize: "16px",
    fontWeight: "700",
  },

  quickCardTitle: {
    display: "block",
    fontSize: "11px",
    color: "#234464",
  },

  quickCardText: {
    margin: "4px 0 0",
    fontSize: "9px",
    color: "#8998a9",
  },
};

export default CandidateDashboard;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CandidateSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Candidate Signup:", formData);

    alert("Candidate account created successfully!");

    // Go to login after signup
    navigate("/candidate/login");
  };

  return (
    <div style={styles.page}>

      {/* Background Decorations */}
      <div style={styles.circleOne}></div>
      <div style={styles.circleTwo}></div>

      <div style={styles.container}>

        {/* =====================================================
            LEFT SECTION
        ===================================================== */}

        <div style={styles.leftSection}>

          {/* RECRUVA AI LOGO */}
          <div style={styles.logo}>
            <span style={styles.logoMain}>RECRUVA</span>
            <span style={styles.logoAI}> AI</span>
          </div>

          {/* Badge */}
          <div style={styles.badge}>
            <span style={styles.badgeDot}></span>
            AI-POWERED CAREER PLATFORM
          </div>

          {/* Heading */}
          <h1 style={styles.heading}>
            Build your career.
            <br />
            <span style={styles.headingGradient}>
              Find the right opportunity.
            </span>
          </h1>

          {/* Description */}
          <p style={styles.description}>
            Create your candidate account and discover smarter
            ways to find, evaluate, and apply for the best opportunities.
          </p>

          {/* Features */}
          <div style={styles.features}>

            {/* Feature 1 */}
            <div style={styles.feature}>

              <div style={styles.featureIcon}>
                ✦
              </div>

              <div>
                <strong style={styles.featureTitle}>
                  AI Resume Analysis
                </strong>

                <span style={styles.featureText}>
                  Improve your resume with AI-powered insights
                </span>
              </div>

            </div>


            {/* Feature 2 */}
            <div style={styles.feature}>

              <div style={styles.featureIcon}>
                ✓
              </div>

              <div>
                <strong style={styles.featureTitle}>
                  Smart Job Matching
                </strong>

                <span style={styles.featureText}>
                  Find jobs that match your skills and requirements
                </span>
              </div>

            </div>


            {/* Feature 3 */}
            <div style={styles.feature}>

              <div style={styles.featureIcon}>
                ↗
              </div>

              <div>
                <strong style={styles.featureTitle}>
                  Application Tracking
                </strong>

                <span style={styles.featureText}>
                  Track and manage your job applications
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            SIGNUP CARD
        ===================================================== */}

        <div style={styles.card}>

          {/* Card Branding */}
          <div style={styles.cardBrand}>
            RECRUVA AI
          </div>


          {/* Title */}
          <h2 style={styles.title}>
            Create your account
          </h2>

          <p style={styles.subtitle}>
            Join RECRUVA AI and start your career journey
          </p>


          {/* =====================================================
              SIGNUP FORM
          ===================================================== */}

          <form onSubmit={handleSignup}>

            {/* Full Name */}
            <label style={styles.label}>
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />


            {/* Email */}
            <label style={styles.label}>
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />


            {/* Company */}
            <label style={styles.label}>
              Company Name
            </label>

            <input
              type="text"
              name="company"
              placeholder="Enter your company name"
              value={formData.company}
              onChange={handleChange}
              style={styles.input}
              required
            />


            {/* Password */}
            <label style={styles.label}>
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />


            {/* Confirm Password */}
            <label style={styles.label}>
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={styles.input}
              required
            />


            {/* Create Account Button */}
            <button
              type="submit"
              style={styles.button}
            >
              <span>
                Create RECRUVA AI Account
              </span>

              <span style={styles.arrow}>
                →
              </span>
            </button>

          </form>


          {/* Divider */}
          <div style={styles.divider}>

            <div style={styles.dividerLine}></div>

            <span style={styles.dividerText}>
              OR
            </span>

            <div style={styles.dividerLine}></div>

          </div>


          {/* Login */}
          <p style={styles.loginText}>
            Already have a candidate account?{" "}

            <span
              style={styles.loginLink}
              onClick={() =>
                navigate("/candidate/login")
              }
            >
              Login
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   RECRUVA AI THEME STYLES
============================================================ */

const styles = {

  /* ============================================================
     MAIN PAGE
  ============================================================ */

  page: {
    minHeight: "100vh",

    width: "100%",

    padding: "45px 7%",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    position: "relative",

    overflow: "hidden",

    background:
      "radial-gradient(circle at 85% 20%, rgba(62,115,240,0.12), transparent 30%), radial-gradient(circle at 10% 85%, rgba(83,83,220,0.08), transparent 30%), #f7faff",

    fontFamily:
      '"Inter", "Segoe UI", Arial, sans-serif',

    color: "#102a4c",

    boxSizing: "border-box",
  },


  /* ============================================================
     BACKGROUND CIRCLES
  ============================================================ */

  circleOne: {
    position: "absolute",

    width: "430px",

    height: "430px",

    right: "-190px",

    top: "-130px",

    borderRadius: "50%",

    border:
      "1px solid rgba(73,123,225,0.08)",

    pointerEvents: "none",
  },

  circleTwo: {
    position: "absolute",

    width: "350px",

    height: "350px",

    left: "-180px",

    bottom: "-160px",

    borderRadius: "50%",

    border:
      "1px solid rgba(73,123,225,0.07)",

    pointerEvents: "none",
  },


  /* ============================================================
     CONTAINER
  ============================================================ */

  container: {
    width: "100%",

    maxWidth: "1120px",

    display: "grid",

    gridTemplateColumns:
      "1fr 450px",

    gap: "75px",

    alignItems: "center",

    position: "relative",

    zIndex: 2,
  },


  /* ============================================================
     LEFT SECTION
  ============================================================ */

  leftSection: {
    maxWidth: "590px",
  },


  /* ============================================================
     LOGO
  ============================================================ */

  logo: {
    display: "flex",

    alignItems: "center",

    marginBottom: "40px",

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


  /* ============================================================
     BADGE
  ============================================================ */

  badge: {
    display: "inline-flex",

    alignItems: "center",

    gap: "9px",

    padding: "8px 14px",

    borderRadius: "50px",

    background: "#edf4ff",

    border:
      "1px solid #d7e6fc",

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


  /* ============================================================
     HEADING
  ============================================================ */

  heading: {
    marginTop: "22px",

    marginBottom: "0",

    fontSize: "clamp(40px, 5vw, 58px)",

    lineHeight: "1.08",

    letterSpacing: "-2.5px",

    fontWeight: "700",

    color: "#10284c",
  },

  headingGradient: {
    background:
      "linear-gradient(90deg, #2568dc, #6153dc)",

    WebkitBackgroundClip: "text",

    backgroundClip: "text",

    WebkitTextFillColor: "transparent",
  },


  /* ============================================================
     DESCRIPTION
  ============================================================ */

  description: {
    maxWidth: "530px",

    marginTop: "22px",

    marginBottom: "0",

    fontSize: "15px",

    lineHeight: "1.7",

    color: "#718198",
  },


  /* ============================================================
     FEATURES
  ============================================================ */

  features: {
    marginTop: "32px",

    display: "flex",

    flexDirection: "column",

    gap: "15px",
  },

  feature: {
    display: "flex",

    alignItems: "center",

    gap: "13px",
  },

  featureIcon: {
    width: "40px",

    height: "40px",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    borderRadius: "10px",

    background: "#edf4ff",

    color: "#2969d7",

    fontSize: "15px",

    fontWeight: "700",

    flexShrink: 0,
  },

  featureTitle: {
    display: "block",

    fontSize: "12px",

    fontWeight: "700",

    color: "#234464",
  },

  featureText: {
    display: "block",

    marginTop: "3px",

    fontSize: "10px",

    color: "#8998a9",
  },


  /* ============================================================
     SIGNUP CARD
  ============================================================ */

  card: {
    width: "100%",

    background:
      "rgba(255,255,255,0.97)",

    border:
      "1px solid #dce6f3",

    borderRadius: "20px",

    padding: "38px 42px",

    boxShadow:
      "0 20px 50px rgba(29,65,112,0.12)",

    backdropFilter: "blur(15px)",

    boxSizing: "border-box",
  },


  /* ============================================================
     CARD BRAND
  ============================================================ */

  cardBrand: {
    display: "inline-block",

    padding: "7px 11px",

    borderRadius: "6px",

    background: "#edf4ff",

    color: "#3869bd",

    fontSize: "9px",

    fontWeight: "800",

    letterSpacing: "1px",

    marginBottom: "16px",
  },


  /* ============================================================
     TITLE
  ============================================================ */

  title: {
    margin: "0",

    fontSize: "29px",

    lineHeight: "1.2",

    fontWeight: "700",

    color: "#142f54",
  },

  subtitle: {
    marginTop: "8px",

    marginBottom: "0",

    fontSize: "13px",

    lineHeight: "1.6",

    color: "#718198",
  },


  /* ============================================================
     LABEL
  ============================================================ */

  label: {
    display: "block",

    marginTop: "16px",

    marginBottom: "7px",

    fontSize: "11px",

    fontWeight: "700",

    color: "#35506f",
  },


  /* ============================================================
     INPUT
  ============================================================ */

  input: {
    width: "100%",

    boxSizing: "border-box",

    padding: "12px 14px",

    border:
      "1px solid #d6e0ed",

    borderRadius: "8px",

    background: "#fbfdff",

    color: "#19385e",

    fontSize: "13px",

    outline: "none",
  },


  /* ============================================================
     BUTTON
  ============================================================ */

  button: {
    width: "100%",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    gap: "4px",

    marginTop: "22px",

    padding: "13px",

    border: "none",

    borderRadius: "8px",

    background:
      "linear-gradient(90deg, #2167df, #5d51d8)",

    color: "#ffffff",

    fontSize: "12px",

    fontWeight: "700",

    cursor: "pointer",

    boxShadow:
      "0 10px 25px rgba(33,102,223,0.20)",
  },

  arrow: {
    marginLeft: "5px",

    fontSize: "16px",
  },


  /* ============================================================
     DIVIDER
  ============================================================ */

  divider: {
    display: "flex",

    alignItems: "center",

    gap: "10px",

    margin: "21px 0",
  },

  dividerLine: {
    flex: "1",

    height: "1px",

    background: "#e4eaf2",
  },

  dividerText: {
    fontSize: "9px",

    fontWeight: "700",

    color: "#9aa8b8",
  },


  /* ============================================================
     LOGIN
  ============================================================ */

  loginText: {
    margin: "0",

    textAlign: "center",

    fontSize: "11px",

    color: "#718198",
  },

  loginLink: {
    marginLeft: "5px",

    color: "#396df6",

    fontWeight: "700",

    cursor: "pointer",
  },
};

export default CandidateSignup;
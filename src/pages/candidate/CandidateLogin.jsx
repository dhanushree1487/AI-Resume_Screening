import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CandidateLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Candidate Login:", {
      email,
      password,
    });

    // For now, directly go to candidate dashboard
    navigate("/candidate/dashboard");
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
            Smarter careers.
            <br />
            <span style={styles.headingGradient}>
              Better opportunities.
            </span>
          </h1>

          {/* Description */}
          <p style={styles.description}>
            Sign in to your candidate account and discover
            opportunities with intelligent AI-powered tools.
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
                  Find opportunities that match your skills
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
            LOGIN CARD
        ===================================================== */}

        <div style={styles.card}>

          {/* Card Branding */}
          <div style={styles.cardBrand}>
            RECRUVA AI
          </div>

          {/* Card Title */}
          <h2 style={styles.title}>
            Welcome back
          </h2>

          <p style={styles.subtitle}>
            Sign in to your candidate account
          </p>


          {/* =====================================================
              LOGIN FORM
          ===================================================== */}

          <form onSubmit={handleLogin}>

            {/* Email */}
            <label style={styles.label}>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />


            {/* Password */}
            <label style={styles.label}>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />


            {/* Forgot Password */}
            <div style={styles.forgotPassword}>
              Forgot password?
            </div>


            {/* Login Button */}
            <button
              type="submit"
              style={styles.button}
            >
              <span>Login to RECRUVA AI</span>
              <span style={styles.arrow}>→</span>
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


          {/* Signup */}
          <p style={styles.signupText}>
            Don't have a candidate account?{" "}

            <span
              style={styles.signupLink}
              onClick={() =>
                navigate("/Candidate/Signup")
              }
            >
              Sign Up
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

    padding: "50px 7%",

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
     MAIN CONTAINER
  ============================================================ */

  container: {
    width: "100%",

    maxWidth: "1120px",

    display: "grid",

    gridTemplateColumns:
      "1fr 430px",

    gap: "80px",

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
     RECRUVA AI LOGO
  ============================================================ */

  logo: {
    display: "flex",

    alignItems: "center",

    marginBottom: "45px",

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


  /* ============================================================
     MAIN HEADING
  ============================================================ */

  heading: {
    marginTop: "22px",

    marginBottom: "0",

    fontSize: "clamp(42px, 5vw, 60px)",

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
    marginTop: "35px",

    display: "flex",

    flexDirection: "column",

    gap: "16px",
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
     LOGIN CARD
  ============================================================ */

  card: {
    width: "100%",

    background:
      "rgba(255,255,255,0.97)",

    border:
      "1px solid #dce6f3",

    borderRadius: "20px",

    padding: "42px",

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

    marginBottom: "18px",
  },


  /* ============================================================
     CARD TITLE
  ============================================================ */

  title: {
    margin: "0",

    fontSize: "30px",

    lineHeight: "1.2",

    fontWeight: "700",

    color: "#142f54",
  },

  subtitle: {
    marginTop: "9px",

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

    marginTop: "21px",

    marginBottom: "8px",

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

    padding: "13px 14px",

    border:
      "1px solid #d6e0ed",

    borderRadius: "8px",

    background: "#fbfdff",

    color: "#19385e",

    fontSize: "13px",

    outline: "none",
  },


  /* ============================================================
     FORGOT PASSWORD
  ============================================================ */

  forgotPassword: {
    textAlign: "right",

    marginTop: "10px",

    fontSize: "10px",

    fontWeight: "600",

    color: "#396df6",

    cursor: "pointer",
  },


  /* ============================================================
     LOGIN BUTTON
  ============================================================ */

  button: {
    width: "100%",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    gap: "4px",

    marginTop: "24px",

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

    margin: "25px 0",
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
     SIGNUP
  ============================================================ */

  signupText: {
    margin: "0",

    textAlign: "center",

    fontSize: "11px",

    color: "#718198",
  },

  signupLink: {
    marginLeft: "5px",

    color: "#396df6",

    fontWeight: "700",

    cursor: "pointer",
  },
};

export default CandidateLogin;
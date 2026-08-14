import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <style>{`

        /* =========================
           GLOBAL
        ========================= */

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: "Inter", "Segoe UI", Arial, sans-serif;
          background: #f8f9ff;
          color: #172b4d;
        }

        a {
          text-decoration: none;
        }

        .home-page {
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(
              circle at 85% 8%,
              rgba(115, 91, 220, 0.10),
              transparent 25%
            ),
            radial-gradient(
              circle at 10% 40%,
              rgba(50, 110, 235, 0.08),
              transparent 28%
            ),
            #f8f9ff;
        }


        /* =========================
           NAVBAR
        ========================= */

        .home-navbar {
          height: 74px;
          padding: 0 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          position: sticky;
          top: 0;
          z-index: 100;

          background: rgba(255, 255, 255, 0.94);
          border-bottom: 1px solid #e6e9f4;
          backdrop-filter: blur(14px);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;

          font-size: 21px;
          font-weight: 800;
          color: #172d52;
        }

        .brand-icon {
          width: 36px;
          height: 36px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 10px;

          color: white;
          font-size: 17px;
          font-weight: 800;

          background: linear-gradient(
            135deg,
            #236be0,
            #6655d9
          );

          box-shadow:
            0 8px 20px rgba(54, 88, 210, 0.20);
        }

        .brand-ai {
          color: #5364d9;
        }

        .nav-center {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-center a {
          font-size: 13px;
          font-weight: 600;
          color: #65748c;
          transition: 0.2s;
        }

        .nav-center a:hover {
          color: #2867d9;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .nav-login {
          padding: 9px 16px;

          border: 1px solid #d9dfec;
          border-radius: 8px;

          color: #31547f;
          font-size: 12px;
          font-weight: 700;

          transition: 0.2s;
        }

        .nav-login:hover {
          background: #f0f4ff;
        }

        .nav-signup {
          padding: 10px 17px;

          border-radius: 8px;

          color: white;
          background: #2869dc;

          font-size: 12px;
          font-weight: 700;

          box-shadow:
            0 7px 18px rgba(40, 105, 220, 0.18);

          transition: 0.2s;
        }

        .nav-signup:hover {
          transform: translateY(-1px);
          background: #205ecb;
        }


        /* =========================
           HERO
        ========================= */

        .hero {
          position: relative;
          min-height: 610px;

          padding: 75px 7% 85px;

          display: flex;
          align-items: center;

          overflow: hidden;
        }

        .hero-glow-one,
        .hero-glow-two {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-glow-one {
          width: 420px;
          height: 420px;

          right: -150px;
          top: -130px;

          background: rgba(102, 83, 216, 0.08);
          filter: blur(4px);
        }

        .hero-glow-two {
          width: 320px;
          height: 320px;

          left: -180px;
          bottom: -160px;

          background: rgba(42, 105, 220, 0.07);
          filter: blur(5px);
        }

        .hero-content {
          width: 100%;
          max-width: 1160px;

          margin: auto;

          display: grid;
          grid-template-columns: 1.05fr 0.95fr;

          gap: 70px;

          align-items: center;

          position: relative;
          z-index: 2;
        }


        /* HERO LEFT */

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 8px 13px;

          border-radius: 30px;

          background: #eef3ff;
          border: 1px solid #dce5fb;

          color: #3b67b5;

          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .badge-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #3974e6;

          box-shadow:
            0 0 0 4px rgba(57, 116, 230, 0.10);
        }

        .hero h1 {
          margin: 22px 0 0;

          font-size: clamp(44px, 5vw, 65px);
          line-height: 1.06;

          letter-spacing: -2.5px;

          color: #142b4e;
        }

        .hero h1 span {
          background: linear-gradient(
            90deg,
            #276bdd,
            #6758d8
          );

          -webkit-background-clip: text;
          background-clip: text;

          -webkit-text-fill-color: transparent;
        }

        .hero-text {
          max-width: 570px;

          margin-top: 22px;

          font-size: 16px;
          line-height: 1.75;

          color: #687993;
        }

        .hero-actions {
          display: flex;
          gap: 12px;

          margin-top: 30px;
        }

        .hero-primary {
          padding: 13px 21px;

          border-radius: 9px;

          color: white;
          background: linear-gradient(
            135deg,
            #286de0,
            #5e54d9
          );

          font-size: 13px;
          font-weight: 700;

          box-shadow:
            0 10px 24px rgba(51, 94, 211, 0.20);

          transition: 0.2s;
        }

        .hero-primary:hover {
          transform: translateY(-2px);
        }

        .hero-secondary {
          padding: 13px 21px;

          border-radius: 9px;

          color: #395674;

          background: white;

          border: 1px solid #dce2ed;

          font-size: 13px;
          font-weight: 700;

          transition: 0.2s;
        }

        .hero-secondary:hover {
          background: #f2f5ff;
        }


        /* =========================
           HERO VISUAL
        ========================= */

        .hero-visual {
          min-height: 410px;

          position: relative;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-main {
          width: 300px;

          padding: 25px;

          border-radius: 22px;

          background: rgba(255, 255, 255, 0.90);

          border: 1px solid #e0e5f2;

          box-shadow:
            0 25px 65px rgba(45, 68, 120, 0.12);

          backdrop-filter: blur(10px);

          position: relative;
          z-index: 3;
        }

        .visual-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .visual-title {
          font-size: 11px;
          font-weight: 800;
          color: #324d72;
        }

        .visual-status {
          padding: 5px 8px;

          border-radius: 6px;

          background: #edf7f2;
          color: #33906b;

          font-size: 8px;
          font-weight: 700;
        }

        .visual-ai {
          width: 95px;
          height: 95px;

          margin: 35px auto 25px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          color: white;

          font-size: 22px;
          font-weight: 800;

          background: linear-gradient(
            135deg,
            #286de1,
            #6757d9
          );

          box-shadow:
            0 0 0 12px rgba(71, 99, 214, 0.08),
            0 20px 40px rgba(56, 84, 194, 0.25);
        }

        .visual-lines {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .visual-line {
          height: 7px;

          border-radius: 10px;

          background: #e9edf5;
        }

        .visual-line.short {
          width: 65%;
        }

        .visual-bottom {
          margin-top: 24px;

          display: grid;
          grid-template-columns: repeat(3, 1fr);

          gap: 8px;
        }

        .visual-stat {
          padding: 10px 6px;

          border-radius: 8px;

          text-align: center;

          background: #f6f8fc;
        }

        .visual-stat strong {
          display: block;

          font-size: 13px;
          color: #315fa9;
        }

        .visual-stat span {
          display: block;

          margin-top: 3px;

          font-size: 7px;
          color: #8996a9;
        }

        .float-card {
          position: absolute;

          padding: 14px 17px;

          border-radius: 12px;

          background: white;

          border: 1px solid #e2e6f0;

          box-shadow:
            0 15px 35px rgba(40, 61, 105, 0.10);

          z-index: 5;
        }

        .float-card strong {
          display: block;

          font-size: 12px;
          color: #345171;
        }

        .float-card span {
          display: block;

          margin-top: 4px;

          font-size: 9px;
          color: #8491a5;
        }

        .float-left {
          left: 0;
          top: 70px;
        }

        .float-right {
          right: 0;
          bottom: 70px;
        }


        /* =========================
           PORTALS
        ========================= */

        .portals {
          padding: 90px 7%;

          background: white;
        }

        .section-heading {
          max-width: 650px;

          margin: 0 auto 45px;

          text-align: center;
        }

        .section-label {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;

          color: #4770bf;
        }

        .section-heading h2 {
          margin: 10px 0 0;

          font-size: 36px;
          line-height: 1.2;

          color: #172f53;
          letter-spacing: -1px;
        }

        .section-heading p {
          margin: 13px 0 0;

          font-size: 13px;
          line-height: 1.7;

          color: #78869a;
        }

        .portal-grid {
          max-width: 1000px;

          margin: auto;

          display: grid;
          grid-template-columns: repeat(2, 1fr);

          gap: 25px;
        }

        .portal-card {
          padding: 34px;

          border-radius: 18px;

          background: white;

          border: 1px solid #e0e6f1;

          box-shadow:
            0 15px 40px rgba(45, 68, 115, 0.06);

          transition: 0.25s;
        }

        .portal-card:hover {
          transform: translateY(-6px);

          box-shadow:
            0 22px 50px rgba(45, 68, 115, 0.10);
        }

        .candidate-card {
          border-top: 3px solid #3171df;
        }

        .recruiter-card {
          border-top: 3px solid #6657d8;
        }

        .portal-icon {
          width: 52px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 13px;

          font-size: 23px;
        }

        .candidate-icon {
          background: #edf4ff;
        }

        .recruiter-icon {
          background: #f1efff;
        }

        .portal-card small {
          display: block;

          margin-top: 22px;

          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.2px;

          color: #8190a5;
        }

        .portal-card h3 {
          margin: 7px 0 0;

          font-size: 25px;
          color: #1b3a60;
        }

        .portal-card p {
          min-height: 70px;

          margin: 12px 0 0;

          font-size: 12px;
          line-height: 1.7;

          color: #738197;
        }

        .portal-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;

          gap: 9px;

          margin-top: 24px;
        }

        .portal-login,
        .portal-signup {
          padding: 12px;

          border-radius: 8px;

          text-align: center;

          font-size: 11px;
          font-weight: 700;

          transition: 0.2s;
        }

        .portal-login {
          color: white;

          background: #286cde;
        }

        .recruiter-card .portal-login {
          background: #6254d7;
        }

        .portal-signup {
          color: #3b5b7f;

          background: #f5f7fb;

          border: 1px solid #e0e5ef;
        }

        .portal-login:hover,
        .portal-signup:hover {
          transform: translateY(-1px);
        }


        /* =========================
           FEATURES
        ========================= */

        .features {
          padding: 90px 7%;

          background:
            radial-gradient(
              circle at 85% 50%,
              rgba(101, 82, 216, 0.08),
              transparent 30%
            ),
            #f7f8ff;
        }

        .feature-grid {
          max-width: 1000px;

          margin: auto;

          display: grid;
          grid-template-columns: repeat(4, 1fr);

          gap: 15px;
        }

        .feature {
          padding: 25px;

          min-height: 190px;

          background: white;

          border: 1px solid #e1e6f0;
          border-radius: 14px;

          transition: 0.2s;
        }

        .feature:hover {
          transform: translateY(-4px);

          box-shadow:
            0 15px 35px rgba(45, 68, 115, 0.08);
        }

        .feature-number {
          float: right;

          font-size: 9px;
          font-weight: 800;

          color: #b7c0d0;
        }

        .feature-icon {
          width: 42px;
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 10px;

          background: #eef3ff;
          color: #356dd2;

          font-size: 18px;
        }

        .feature h3 {
          margin: 20px 0 0;

          font-size: 14px;
          color: #284867;
        }

        .feature p {
          margin: 8px 0 0;

          font-size: 10px;
          line-height: 1.7;

          color: #7b899c;
        }


        /* =========================
           HOW IT WORKS
        ========================= */

        .how-it-works {
          padding: 90px 7%;

          background: white;
        }

        .steps {
          max-width: 1000px;

          margin: auto;

          display: grid;
          grid-template-columns: repeat(5, 1fr);

          gap: 10px;
        }

        .step {
          padding: 20px 14px;

          text-align: center;

          border: 1px solid #e2e7f0;
          border-radius: 12px;

          background: #fafbff;
        }

        .step-number {
          width: 34px;
          height: 34px;

          margin: auto;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #edf3ff;
          color: #316bd2;

          font-size: 10px;
          font-weight: 800;
        }

        .step h4 {
          margin: 12px 0 0;

          font-size: 11px;
          color: #355574;
        }

        .step p {
          margin: 6px 0 0;

          font-size: 9px;
          line-height: 1.5;

          color: #8490a2;
        }


        /* =========================
           CTA
        ========================= */

        .cta {
          padding: 80px 7%;

          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(115, 91, 220, 0.22),
              transparent 50%
            ),
            #102d54;

          text-align: center;

          color: white;
        }

        .cta .section-label {
          color: #a9c5ff;
        }

        .cta h2 {
          max-width: 650px;

          margin: 12px auto 0;

          font-size: 38px;
          line-height: 1.2;
        }

        .cta p {
          max-width: 600px;

          margin: 14px auto 0;

          font-size: 13px;
          line-height: 1.7;

          color: #b8c9e0;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;

          gap: 10px;

          margin-top: 27px;
        }

        .cta-candidate,
        .cta-recruiter {
          padding: 13px 22px;

          border-radius: 8px;

          font-size: 11px;
          font-weight: 700;
        }

        .cta-candidate {
          background: white;
          color: #285fae;
        }

        .cta-recruiter {
          border: 1px solid rgba(255,255,255,0.25);

          color: white;
          background: rgba(255,255,255,0.08);
        }


        /* =========================
           FOOTER
        ========================= */

        .footer {
          padding: 50px 7% 20px;

          background: #091e3a;

          color: white;
        }

        .footer-content {
          max-width: 1100px;

          margin: auto;

          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;

          gap: 45px;
        }

        .footer-brand p {
          max-width: 250px;

          margin-top: 12px;

          font-size: 10px;
          line-height: 1.7;

          color: #91a5bd;
        }

        .footer-column {
          display: flex;
          flex-direction: column;

          gap: 9px;
        }

        .footer-column h4 {
          margin: 0 0 5px;

          font-size: 11px;
        }

        .footer-column a {
          font-size: 9px;

          color: #8fa4bd;

          transition: 0.2s;
        }

        .footer-column a:hover {
          color: #a9c6ff;
        }

        .footer-bottom {
          max-width: 1100px;

          margin: 40px auto 0;
          padding-top: 18px;

          border-top: 1px solid rgba(255,255,255,0.08);

          display: flex;
          justify-content: space-between;

          font-size: 8px;
          color: #71879f;
        }


        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 950px) {

          .nav-center {
            display: none;
          }

          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-text {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-visual {
            max-width: 500px;
            width: 100%;
            margin: auto;
          }

          .feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .steps {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-content {
            grid-template-columns: 1fr 1fr;
          }
        }


        @media (max-width: 650px) {

          .home-navbar {
            padding: 0 5%;
          }

          .nav-actions .nav-login {
            display: none;
          }

          .hero {
            padding: 60px 5%;
          }

          .hero h1 {
            font-size: 42px;
          }

          .hero-actions {
            flex-direction: column;

            max-width: 240px;
            margin-left: auto;
            margin-right: auto;
          }

          .hero-primary,
          .hero-secondary {
            text-align: center;
          }

          .hero-visual {
            transform: scale(0.88);
            margin-top: -20px;
          }

          .portal-grid {
            grid-template-columns: 1fr;
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }

          .steps {
            grid-template-columns: 1fr;
          }

          .cta h2 {
            font-size: 30px;
          }

          .cta-buttons {
            flex-direction: column;

            max-width: 230px;
            margin-left: auto;
            margin-right: auto;
          }

          .footer-content {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 7px;
          }

          .float-card {
            display: none;
          }
        }

      `}</style>


      <div className="home-page">

        {/* ================= NAVBAR ================= */}

        <header className="home-navbar">

          <Link to="/" className="brand">
            <div className="brand-icon">R</div>

            <span>
              Recruva <span className="brand-ai">AI</span>
            </span>
          </Link>


          <nav className="nav-center">
            <a href="#home">Home</a>
            <a href="#portals">Portals</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
          </nav>


          <div className="nav-actions">

            <Link
              to="/recruiter/login"
              className="nav-login"
            >
              Login
            </Link>

            <Link
              to="/recruiter/signup"
              className="nav-signup"
            >
              Get Started
            </Link>

          </div>

        </header>


        {/* ================= HERO ================= */}

        <section className="hero" id="home">

          <div className="hero-glow-one"></div>
          <div className="hero-glow-two"></div>


          <div className="hero-content">

            <div>

              <div className="hero-badge">
                <span className="badge-dot"></span>

                AI-POWERED RECRUITMENT PLATFORM
              </div>


              <h1>
                Smarter Hiring.
                <br />
                <span>Better Opportunities.</span>
              </h1>


              <p className="hero-text">
                Recruva AI connects talented candidates with
                the right opportunities while helping recruiters
                discover and evaluate the best candidates faster.
              </p>


              <div className="hero-actions">

                <a
                  href="#portals"
                  className="hero-primary"
                >
                  Explore Portals →
                </a>

                <a
                  href="#how-it-works"
                  className="hero-secondary"
                >
                  How It Works
                </a>

              </div>

            </div>


            {/* AI VISUAL */}

            <div className="hero-visual">

              <div className="float-card float-left">
                <strong>Resume Analysis</strong>
                <span>AI-powered screening</span>
              </div>


              <div className="visual-main">

                <div className="visual-header">

                  <span className="visual-title">
                    Recruva AI
                  </span>

                  <span className="visual-status">
                    ACTIVE
                  </span>

                </div>


                <div className="visual-ai">
                  AI
                </div>


                <div className="visual-lines">
                  <div className="visual-line"></div>
                  <div className="visual-line"></div>
                  <div className="visual-line short"></div>
                </div>


                <div className="visual-bottom">

                  <div className="visual-stat">
                    <strong>96%</strong>
                    <span>Skills</span>
                  </div>

                  <div className="visual-stat">
                    <strong>94%</strong>
                    <span>Match</span>
                  </div>

                  <div className="visual-stat">
                    <strong>91%</strong>
                    <span>Fit</span>
                  </div>

                </div>

              </div>


              <div className="float-card float-right">
                <strong>Smart Matching</strong>
                <span>Find better opportunities</span>
              </div>

            </div>

          </div>

        </section>


        {/* ================= PORTALS ================= */}

        <section className="portals" id="portals">

          <div className="section-heading">

            <span className="section-label">
              GET STARTED
            </span>

            <h2>
              Choose Your Portal
            </h2>

            <p>
              Recruva AI provides separate experiences
              designed for candidates and recruiters.
            </p>

          </div>


          <div className="portal-grid">

            {/* CANDIDATE */}

            <div className="portal-card candidate-card">

              <div className="portal-icon candidate-icon">
                👤
              </div>

              <small>
                FOR JOB SEEKERS
              </small>

              <h3>
                Candidate Portal
              </h3>

              <p>
                Create your professional profile, upload your
                resume, discover relevant jobs and apply to
                opportunities that match your skills.
              </p>


              <div className="portal-buttons">

                <Link
                  to="/candidate/login"
                  className="portal-login"
                >
                  Candidate Login
                </Link>

                <Link
                  to="/candidate/signup"
                  className="portal-signup"
                >
                  Create Account
                </Link>

              </div>

            </div>


            {/* RECRUITER */}

            <div className="portal-card recruiter-card">

              <div className="portal-icon recruiter-icon">
                🏢
              </div>

              <small>
                FOR RECRUITERS
              </small>

              <h3>
                Recruiter Portal
              </h3>

              <p>
                Post jobs, manage applications, review candidates
                and use AI-powered screening to identify the
                most suitable talent.
              </p>


              <div className="portal-buttons">

                <Link
                  to="/recruiter/login"
                  className="portal-login"
                >
                  Recruiter Login
                </Link>

                <Link
                  to="/recruiter/signup"
                  className="portal-signup"
                >
                  Create Account
                </Link>

              </div>

            </div>

          </div>

        </section>


        {/* ================= FEATURES ================= */}

        <section className="features" id="features">

          <div className="section-heading">

            <span className="section-label">
              AI CAPABILITIES
            </span>

            <h2>
              Intelligent Recruitment,
              <br />
              Simplified.
            </h2>

            <p>
              Powerful tools designed to make both
              job searching and hiring more efficient.
            </p>

          </div>


          <div className="feature-grid">

            <div className="feature">

              <span className="feature-number">
                01
              </span>

              <div className="feature-icon">
                ◈
              </div>

              <h3>
                AI Resume Analysis
              </h3>

              <p>
                Extract important skills, education and
                experience from resumes intelligently.
              </p>

            </div>


            <div className="feature">

              <span className="feature-number">
                02
              </span>

              <div className="feature-icon">
                ⌁
              </div>

              <h3>
                Smart Job Matching
              </h3>

              <p>
                Match candidate skills with suitable
                job requirements.
              </p>

            </div>


            <div className="feature">

              <span className="feature-number">
                03
              </span>

              <div className="feature-icon">
                ◇
              </div>

              <h3>
                Candidate Ranking
              </h3>

              <p>
                Help recruiters quickly identify the
                most relevant applicants.
              </p>

            </div>


            <div className="feature">

              <span className="feature-number">
                04
              </span>

              <div className="feature-icon">
                ⌕
              </div>

              <h3>
                Job Discovery
              </h3>

              <p>
                Help candidates discover opportunities
                based on their profiles.
              </p>

            </div>

          </div>

        </section>


        {/* ================= HOW IT WORKS ================= */}

        <section
          className="how-it-works"
          id="how-it-works"
        >

          <div className="section-heading">

            <span className="section-label">
              HOW IT WORKS
            </span>

            <h2>
              Simple Process. Smart Results.
            </h2>

            <p>
              A simple workflow for both candidates
              and recruiters.
            </p>

          </div>


          <div className="steps">

            <div className="step">

              <div className="step-number">
                01
              </div>

              <h4>
                Create Account
              </h4>

              <p>
                Sign up as a candidate or recruiter.
              </p>

            </div>


            <div className="step">

              <div className="step-number">
                02
              </div>

              <h4>
                Build Profile
              </h4>

              <p>
                Add your professional information.
              </p>

            </div>


            <div className="step">

              <div className="step-number">
                03
              </div>

              <h4>
                AI Analysis
              </h4>

              <p>
                Let AI analyse skills and requirements.
              </p>

            </div>


            <div className="step">

              <div className="step-number">
                04
              </div>

              <h4>
                Find Matches
              </h4>

              <p>
                Discover relevant candidates or jobs.
              </p>

            </div>


            <div className="step">

              <div className="step-number">
                05
              </div>

              <h4>
                Connect
              </h4>

              <p>
                Apply or connect with the right opportunity.
              </p>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="cta">

          <span className="section-label">
            GET STARTED TODAY
          </span>

          <h2>
            Ready to make recruitment smarter?
          </h2>

          <p>
            Whether you're looking for your next opportunity
            or searching for great talent, Recruva AI helps
            make the process simpler.
          </p>


          <div className="cta-buttons">

            <Link
              to="/candidate/signup"
              className="cta-candidate"
            >
              I'm a Candidate →
            </Link>

            <Link
              to="/recruiter/signup"
              className="cta-recruiter"
            >
              I'm a Recruiter →
            </Link>

          </div>

        </section>


        {/* ================= FOOTER ================= */}

        <footer className="footer">

          <div className="footer-content">

            <div>

              <div className="brand">
                <div className="brand-icon">
                  R
                </div>

                <span style={{ color: "white" }}>
                  Recruva{" "}
                  <span className="brand-ai">
                    AI
                  </span>
                </span>
              </div>


              <p className="footer-brand">
                AI-powered recruitment connecting
                talent with opportunity.
              </p>

            </div>


            <div className="footer-column">

              <h4>
                Platform
              </h4>

              <a href="#home">
                Home
              </a>

              <a href="#features">
                Features
              </a>

              <a href="#how-it-works">
                How It Works
              </a>

            </div>


            <div className="footer-column">

              <h4>
                Candidate
              </h4>

              <Link to="/candidate/login">
                Login
              </Link>

              <Link to="/candidate/signup">
                Sign Up
              </Link>

            </div>


            <div className="footer-column">

              <h4>
                Recruiter
              </h4>

              <Link to="/recruiter/login">
                Login
              </Link>

              <Link to="/recruiter/signup">
                Sign Up
              </Link>

            </div>

          </div>


          <div className="footer-bottom">

            <span>
              © 2026 Recruva AI. All rights reserved.
            </span>

            <span>
              Smarter hiring. Better matches.
            </span>

          </div>

        </footer>

      </div>
    </>
  );
}

export default Home;
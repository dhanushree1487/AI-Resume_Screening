import { useState } from "react";

function CandidateProfile() {
  const [profile, setProfile] = useState({
    name: "Shreya",
    email: "shreya@recruva.ai",
    phone: "+91 98765 43210",
    role: "Software Developer",
    location: "Chennai, India",
    education: "B.Tech Computer Science",
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div style={styles.page}>

      {/* Background Decorations */}
      <div style={styles.circleOne}></div>
      <div style={styles.circleTwo}></div>

      <div style={styles.container}>

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div style={styles.topHeader}>

          <div>
            <div style={styles.badge}>
              <span style={styles.badgeDot}></span>
              RECRUVA AI CANDIDATE
            </div>

            <h1 style={styles.title}>
              Candidate Profile
            </h1>

            <p style={styles.subtitle}>
              Manage your personal and professional information.
            </p>
          </div>

          {/* RECRUVA AI Logo */}
          <div style={styles.logo}>
            <span style={styles.logoMain}>RECRUVA</span>
            <span style={styles.logoAI}> AI</span>
          </div>

        </div>


        {/* =====================================================
            PROFILE CARD
        ===================================================== */}

        <div style={styles.card}>

          {/* Profile Header */}

          <div style={styles.profileHeader}>

            <div style={styles.avatar}>
              {profile.name.charAt(0).toUpperCase()}
            </div>

            <div style={styles.profileInfo}>

              <h2 style={styles.name}>
                {profile.name}
              </h2>

              <p style={styles.role}>
                {profile.role}
              </p>

              <div style={styles.companyBadge}>
                ✦ Candidate
              </div>

            </div>


            {/* Edit Button */}

            <button
              style={
                editing
                  ? styles.cancelButton
                  : styles.editButton
              }
              onClick={() => setEditing(!editing)}
            >
              {editing ? "Cancel" : "Edit Profile"}
            </button>

          </div>


          {/* Divider */}

          <div style={styles.divider}></div>


          {/* =================================================
              PERSONAL INFORMATION
          ================================================= */}

          <div style={styles.sectionHeader}>

            <div>

              <h2 style={styles.sectionTitle}>
                Personal Information
              </h2>

              <p style={styles.sectionSubtitle}>
                Keep your candidate details up to date.
              </p>

            </div>

          </div>


          {/* Form */}

          <div style={styles.form}>

            {/* Full Name */}

            <div style={styles.field}>

              <label style={styles.label}>
                Full Name
              </label>

              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
                disabled={!editing}
                style={{
                  ...styles.input,
                  ...(editing
                    ? styles.inputEditing
                    : styles.inputDisabled),
                }}
              />

            </div>


            {/* Email */}

            <div style={styles.field}>

              <label style={styles.label}>
                Email Address
              </label>

              <input
                name="email"
                type="email"
                value={profile.email}
                onChange={handleChange}
                disabled={!editing}
                style={{
                  ...styles.input,
                  ...(editing
                    ? styles.inputEditing
                    : styles.inputDisabled),
                }}
              />

            </div>


            {/* Phone */}

            <div style={styles.field}>

              <label style={styles.label}>
                Phone Number
              </label>

              <input
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                disabled={!editing}
                style={{
                  ...styles.input,
                  ...(editing
                    ? styles.inputEditing
                    : styles.inputDisabled),
                }}
              />

            </div>


            {/* Location */}

            <div style={styles.field}>

              <label style={styles.label}>
                Location
              </label>

              <input
                name="location"
                value={profile.location}
                onChange={handleChange}
                disabled={!editing}
                style={{
                  ...styles.input,
                  ...(editing
                    ? styles.inputEditing
                    : styles.inputDisabled),
                }}
              />

            </div>


            {/* Role */}

            <div style={styles.field}>

              <label style={styles.label}>
                Current Role
              </label>

              <input
                name="role"
                value={profile.role}
                onChange={handleChange}
                disabled={!editing}
                style={{
                  ...styles.input,
                  ...(editing
                    ? styles.inputEditing
                    : styles.inputDisabled),
                }}
              />

            </div>


            {/* Education */}

            <div style={styles.field}>

              <label style={styles.label}>
                Education
              </label>

              <input
                name="education"
                value={profile.education}
                onChange={handleChange}
                disabled={!editing}
                style={{
                  ...styles.input,
                  ...(editing
                    ? styles.inputEditing
                    : styles.inputDisabled),
                }}
              />

            </div>

          </div>


          {/* =================================================
              SAVE BUTTON
          ================================================= */}

          {editing && (
            <div style={styles.saveContainer}>

              <button
                style={styles.saveButton}
                onClick={handleSave}
              >
                <span>✓</span>
                Save Changes
              </button>

            </div>
          )}

        </div>


        {/* =====================================================
            PROFILE FOOTER INFO
        ===================================================== */}

        <div style={styles.infoCard}>

          <div style={styles.infoIcon}>
            ✦
          </div>

          <div>

            <strong style={styles.infoTitle}>
              Powered by RECRUVA AI
            </strong>

            <p style={styles.infoText}>
              Smarter careers. Better opportunities.
            </p>

          </div>

        </div>


        {/* Footer */}

        <div style={styles.footer}>
          <span>© 2026 RECRUVA AI</span>
          <span>AI-Powered Recruitment Platform</span>
        </div>

      </div>
    </div>
  );
}


/* ============================================================
   RECRUVA AI THEME STYLES
   CSS KEPT EXACTLY THE SAME
============================================================ */

const styles = {

  /* ============================================================
     PAGE
  ============================================================ */

  page: {
    minHeight: "100vh",

    width: "100%",

    padding: "45px 7%",

    boxSizing: "border-box",

    position: "relative",

    overflow: "hidden",

    background:
      "radial-gradient(circle at 85% 15%, rgba(62,115,240,0.12), transparent 30%), radial-gradient(circle at 10% 90%, rgba(83,83,220,0.08), transparent 30%), #f7faff",

    fontFamily:
      '"Inter", "Segoe UI", Arial, sans-serif',

    color: "#102a4c",
  },


  /* ============================================================
     BACKGROUND CIRCLES
  ============================================================ */

  circleOne: {
    position: "fixed",

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
    position: "fixed",

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

    maxWidth: "1000px",

    margin: "0 auto",

    position: "relative",

    zIndex: 2,
  },


  /* ============================================================
     TOP HEADER
  ============================================================ */

  topHeader: {
    display: "flex",

    alignItems: "flex-start",

    justifyContent: "space-between",

    gap: "30px",

    marginBottom: "30px",
  },


  /* ============================================================
     BADGE
  ============================================================ */

  badge: {
    display: "inline-flex",

    alignItems: "center",

    gap: "8px",

    padding: "7px 12px",

    borderRadius: "50px",

    background: "#edf4ff",

    border:
      "1px solid #d7e6fc",

    color: "#3168c5",

    fontSize: "9px",

    fontWeight: "800",

    letterSpacing: "0.7px",

    marginBottom: "13px",
  },

  badgeDot: {
    width: "6px",

    height: "6px",

    borderRadius: "50%",

    background: "#3475ee",

    boxShadow:
      "0 0 0 4px rgba(52,117,238,0.1)",
  },


  /* ============================================================
     TITLE
  ============================================================ */

  title: {
    margin: "0 0 7px",

    fontSize: "34px",

    lineHeight: "1.2",

    letterSpacing: "-1px",

    fontWeight: "700",

    color: "#10284c",
  },

  subtitle: {
    margin: 0,

    fontSize: "13px",

    color: "#718198",

    lineHeight: "1.6",
  },


  /* ============================================================
     LOGO
  ============================================================ */

  logo: {
    fontSize: "22px",

    fontWeight: "800",

    letterSpacing: "0.3px",

    paddingTop: "10px",

    whiteSpace: "nowrap",
  },

  logoMain: {
    color: "#102b50",
  },

  logoAI: {
    color: "#396df6",

    fontWeight: "800",
  },


  /* ============================================================
     MAIN CARD
  ============================================================ */

  card: {
    width: "100%",

    background:
      "rgba(255,255,255,0.97)",

    border:
      "1px solid #dce6f3",

    borderRadius: "20px",

    padding: "35px",

    boxSizing: "border-box",

    boxShadow:
      "0 20px 50px rgba(29,65,112,0.10)",

    backdropFilter: "blur(15px)",
  },


  /* ============================================================
     PROFILE HEADER
  ============================================================ */

  profileHeader: {
    display: "flex",

    alignItems: "center",

    gap: "16px",
  },


  /* ============================================================
     AVATAR
  ============================================================ */

  avatar: {
    width: "68px",

    height: "68px",

    flexShrink: 0,

    borderRadius: "50%",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    background:
      "linear-gradient(135deg, #eaf2ff, #f0edff)",

    border:
      "1px solid #d9e5f7",

    color: "#396df6",

    fontSize: "24px",

    fontWeight: "800",

    boxShadow:
      "0 8px 20px rgba(50,100,210,0.08)",
  },


  /* ============================================================
     PROFILE INFO
  ============================================================ */

  profileInfo: {
    flex: 1,
  },

  name: {
    margin: "0 0 4px",

    fontSize: "22px",

    color: "#173656",

    fontWeight: "700",
  },

  role: {
    margin: 0,

    fontSize: "12px",

    color: "#718198",
  },

  companyBadge: {
    display: "inline-block",

    marginTop: "8px",

    padding: "5px 9px",

    borderRadius: "6px",

    background: "#edf4ff",

    color: "#3969bd",

    fontSize: "9px",

    fontWeight: "700",
  },


  /* ============================================================
     EDIT BUTTON
  ============================================================ */

  editButton: {
    padding: "10px 17px",

    border:
      "1px solid #cddcf0",

    borderRadius: "8px",

    background: "#ffffff",

    color: "#396df6",

    cursor: "pointer",

    fontSize: "11px",

    fontWeight: "700",
  },

  cancelButton: {
    padding: "10px 17px",

    border:
      "1px solid #d8e0ea",

    borderRadius: "8px",

    background: "#f6f8fb",

    color: "#65768a",

    cursor: "pointer",

    fontSize: "11px",

    fontWeight: "700",
  },


  /* ============================================================
     DIVIDER
  ============================================================ */

  divider: {
    height: "1px",

    background:
      "linear-gradient(90deg, #dce6f3, #edf2f7, #dce6f3)",

    margin: "28px 0",
  },


  /* ============================================================
     SECTION HEADER
  ============================================================ */

  sectionHeader: {
    marginBottom: "20px",
  },

  sectionTitle: {
    margin: 0,

    fontSize: "18px",

    color: "#173757",

    fontWeight: "700",
  },

  sectionSubtitle: {
    margin: "5px 0 0",

    fontSize: "10px",

    color: "#8998a9",
  },


  /* ============================================================
     FORM
  ============================================================ */

  form: {
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
    fontSize: "10px",

    fontWeight: "700",

    color: "#35506f",
  },


  /* ============================================================
     INPUT
  ============================================================ */

  input: {
    width: "100%",

    boxSizing: "border-box",

    padding: "12px 13px",

    borderRadius: "8px",

    fontSize: "12px",

    color: "#19385e",

    outline: "none",

    transition: "0.2s",
  },

  inputEditing: {
    border:
      "1px solid #b9cce7",

    background: "#fbfdff",

    boxShadow:
      "0 0 0 3px rgba(57,109,246,0.04)",
  },

  inputDisabled: {
    border:
      "1px solid #e0e7ef",

    background: "#f7f9fc",

    color: "#60738b",

    cursor: "not-allowed",
  },


  /* ============================================================
     SAVE
  ============================================================ */

  saveContainer: {
    display: "flex",

    justifyContent: "flex-end",

    marginTop: "25px",

    paddingTop: "20px",

    borderTop:
      "1px solid #edf1f5",
  },

  saveButton: {
    display: "flex",

    alignItems: "center",

    gap: "8px",

    padding: "12px 20px",

    border: "none",

    borderRadius: "8px",

    background:
      "linear-gradient(90deg, #2167df, #5d51d8)",

    color: "#ffffff",

    cursor: "pointer",

    fontSize: "11px",

    fontWeight: "700",

    boxShadow:
      "0 10px 25px rgba(33,102,223,0.18)",
  },


  /* ============================================================
     INFO CARD
  ============================================================ */

  infoCard: {
    display: "flex",

    alignItems: "center",

    gap: "12px",

    marginTop: "20px",

    padding: "15px 17px",

    borderRadius: "12px",

    background:
      "linear-gradient(90deg, #edf4ff, #f4f1ff)",

    border:
      "1px solid #dce6f4",
  },

  infoIcon: {
    width: "35px",

    height: "35px",

    borderRadius: "9px",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    background:
      "linear-gradient(135deg, #2167df, #5d51d8)",

    color: "#ffffff",

    fontSize: "14px",
  },

  infoTitle: {
    display: "block",

    fontSize: "10px",

    color: "#284c73",

    fontWeight: "800",
  },

  infoText: {
    margin: "3px 0 0",

    fontSize: "9px",

    color: "#8191a5",
  },


  /* ============================================================
     FOOTER
  ============================================================ */

  footer: {
    display: "flex",

    justifyContent: "space-between",

    alignItems: "center",

    padding: "18px 3px",

    color: "#9aa8b7",

    fontSize: "9px",
  },
};

export default CandidateProfile;
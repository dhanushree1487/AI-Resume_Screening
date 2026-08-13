import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function RecruiterLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Dashboard",
      icon: "📊",
      path: "/recruiter/dashboard",
    },
    {
      name: "Jobs",
      icon: "💼",
      path: "/recruiter/jobs",
    },
    {
      name: "Candidates",
      icon: "👥",
      path: "/recruiter/candidates",
    },
    {
      name: "Applications",
      icon: "📄",
      path: "/recruiter/applications",
    },
    {
      name: "Profile",
      icon: "👤",
      path: "/recruiter/profile",
    },
  ];

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    setMenuOpen(false);
    navigate("/recruiter/login");
  };

  return (
    <div style={styles.page}>

      {/* ================= HEADER ================= */}
      <header style={styles.header}>

        {/* Hamburger - LEFT SIDE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={styles.menuButton}
          aria-label="Open navigation menu"
        >
          ☰
        </button>

        {/* Logo */}
        <div style={styles.logo}>
          AI RESUME
        </div>

        {/* Empty space to keep logo near left */}
        <div style={styles.headerSpace}></div>

      </header>

      {/* ================= SIDE MENU ================= */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            style={styles.overlay}
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Left Sidebar */}
          <aside style={styles.sidebar}>

            {/* Sidebar Header */}
            <div style={styles.sidebarHeader}>

              <div>
                <div style={styles.sidebarLogo}>
                  AI RESUME
                </div>

                <div style={styles.sidebarSubtitle}>
                  Recruiter Portal
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                style={styles.closeButton}
              >
                ×
              </button>

            </div>

            <div style={styles.divider}></div>

            {/* Menu Title */}
            <div style={styles.menuTitle}>
              RECRUITER MENU
            </div>

            {/* Navigation */}
            <nav style={styles.navigation}>

              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={handleNavigation}
                  style={({ isActive }) => ({
                    ...styles.menuItem,
                    ...(isActive
                      ? styles.activeMenuItem
                      : {}),
                  })}
                >
                  <span style={styles.menuIcon}>
                    {item.icon}
                  </span>

                  <span>{item.name}</span>
                </NavLink>
              ))}

            </nav>

            {/* Bottom Section */}
            <div style={styles.bottomSection}>

              <div style={styles.divider}></div>

              <button
                onClick={handleLogout}
                style={styles.logout}
              >
                <span style={styles.menuIcon}>
                  ↪
                </span>

                <span>Logout</span>
              </button>

            </div>

          </aside>
        </>
      )}

      {/* ================= PAGE CONTENT ================= */}
      <main style={styles.content}>
        <Outlet />
      </main>

    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5f7fb",
    fontFamily: "Arial, sans-serif",
    color: "#1f2937",
  },

  /* ================= HEADER ================= */

  header: {
    height: "70px",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    padding: "0 25px",
    boxSizing: "border-box",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  /* LEFT HAMBURGER */

  menuButton: {
    width: "42px",
    height: "42px",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    fontSize: "23px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#111827",
    marginRight: "18px",
  },

  logo: {
    fontSize: "21px",
    fontWeight: "700",
    color: "#111827",
  },

  headerSpace: {
    flex: 1,
  },

  /* ================= OVERLAY ================= */

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.18)",
    zIndex: 150,
  },

  /* ================= LEFT SIDEBAR ================= */

  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    width: "270px",
    backgroundColor: "#ffffff",
    boxShadow: "6px 0 25px rgba(0, 0, 0, 0.12)",
    zIndex: 200,
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    padding: "20px 15px",
  },

  sidebarHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 8px 15px",
  },

  sidebarLogo: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#111827",
  },

  sidebarSubtitle: {
    fontSize: "12px",
    color: "#9ca3af",
    marginTop: "3px",
  },

  closeButton: {
    width: "34px",
    height: "34px",
    border: "none",
    borderRadius: "7px",
    backgroundColor: "#f3f4f6",
    color: "#374151",
    fontSize: "24px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  divider: {
    height: "1px",
    backgroundColor: "#e5e7eb",
    margin: "8px 0 15px",
  },

  menuTitle: {
    padding: "5px 12px 10px",
    fontSize: "11px",
    fontWeight: "700",
    color: "#9ca3af",
    letterSpacing: "0.7px",
  },

  navigation: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "13px",
    padding: "13px 14px",
    borderRadius: "9px",
    textDecoration: "none",
    color: "#374151",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "0.2s",
  },

  activeMenuItem: {
    backgroundColor: "#111827",
    color: "#ffffff",
    fontWeight: "600",
  },

  menuIcon: {
    width: "23px",
    textAlign: "center",
    fontSize: "17px",
    flexShrink: 0,
  },

  /* ================= LOGOUT ================= */

  bottomSection: {
    marginTop: "auto",
  },

  logout: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "13px",
    padding: "13px 14px",
    border: "none",
    borderRadius: "9px",
    backgroundColor: "#ffffff",
    color: "#374151",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    textAlign: "left",
  },

  /* ================= CONTENT ================= */

  content: {
    minHeight: "calc(100vh - 70px)",
  },
};

export default RecruiterLayout;
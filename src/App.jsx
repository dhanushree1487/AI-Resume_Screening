import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import RecruiterLogin from "./pages/recruiter/RecruiterLogin";
import RecruiterSignup from "./pages/recruiter/RecruiterSignup";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import RecruiterLayout from "./components/RecruiterLayout";

import ManageJobs from "./pages/recruiter/ManageJobs";
import PostJob from "./pages/recruiter/PostJob";
import Candidates from "./pages/recruiter/Candidates";
import Applications from "./pages/recruiter/Applications";
import RecruiterProfile from "./pages/recruiter/RecruiterProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= RECRUITER AUTH ================= */}

        <Route
          path="/recruiter/login"
          element={<RecruiterLogin />}
        />

        <Route
          path="/recruiter/signup"
          element={<RecruiterSignup />}
        />


        {/* ================= RECRUITER PAGES ================= */}

        <Route
          path="/recruiter"
          element={<RecruiterLayout />}
        >

          {/* Dashboard */}
          <Route
            path="dashboard"
            element={<RecruiterDashboard />}
          />

          {/* Jobs */}
          <Route
            path="jobs"
            element={<ManageJobs />}
          />

          {/* Post Job */}
          <Route
            path="jobs/post"
            element={<PostJob />}
          />

          {/* Candidates */}
          <Route
            path="candidates"
            element={<Candidates />}
          />

          {/* Applications */}
          <Route
            path="applications"
            element={<Applications />}
          />

          {/* Profile */}
          <Route
            path="profile"
            element={<RecruiterProfile />}
          />

        </Route>


        {/* Default */}
        <Route
          path="*"
          element={
            <Navigate
              to="/recruiter/login"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
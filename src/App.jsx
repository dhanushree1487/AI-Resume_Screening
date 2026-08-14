import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

// ==================== RECRUITER ====================

import RecruiterLogin from "./pages/recruiter/RecruiterLogin";
import RecruiterSignup from "./pages/recruiter/RecruiterSignup";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import RecruiterLayout from "./components/RecruiterLayout";

import ManageJobs from "./pages/recruiter/ManageJobs";
import PostJob from "./pages/recruiter/PostJob";
import Applications from "./pages/recruiter/Applications";
import RecruiterProfile from "./pages/recruiter/RecruiterProfile";

// ==================== CANDIDATE ====================

import CandidateLogin from "./pages/candidate/CandidateLogin";
import CandidateSignup from "./pages/candidate/CandidateSignup";
import CandidateDashboard from "./pages/candidate/CandidateDashboard";
import UploadResume from "./pages/candidate/UploadResume";
import SearchJobs from "./pages/candidate/SearchJobs";
import CandidateProfile from "./pages/candidate/CandidateProfile";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ==================== HOME ==================== */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* ==================== RECRUITER AUTH ==================== */}

        <Route
          path="/recruiter/login"
          element={<RecruiterLogin />}
        />

        <Route
          path="/recruiter/signup"
          element={<RecruiterSignup />}
        />

        {/* ==================== RECRUITER ==================== */}

        <Route
          path="/recruiter"
          element={<RecruiterLayout />}
        >
          <Route
            path="dashboard"
            element={<RecruiterDashboard />}
          />

          <Route
            path="jobs"
            element={<ManageJobs />}
          />

          <Route
            path="jobs/post"
            element={<PostJob />}
          />

          <Route
            path="applications"
            element={<Applications />}
          />

          <Route
            path="profile"
            element={<RecruiterProfile />}
          />
        </Route>

        {/* ==================== CANDIDATE AUTH ==================== */}

        <Route
          path="/candidate/login"
          element={<CandidateLogin />}
        />
    
        <Route
          path="/candidate/signup"
          element={<CandidateSignup />}
        />
        <Route
        path="/candidate/dashboard"
        element={<CandidateDashboard />}
         />
         <Route
         path="/candidate/upload-resume"
          element={<UploadResume />}
            />
            <Route
            path="/candidate/jobs"
            element={<SearchJobs />}
            />
            <Route
            path="/candidate/profile"
            element={<CandidateProfile />}
            />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
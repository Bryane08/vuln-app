import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports"; // Ensure this file exists
import "@aws-amplify/ui-react/styles.css"; // Import Amplify UI styles
import Home from "./pages/Home";
import Results from "./pages/Results";
import Admin from "./pages/Admin";

// Configure Amplify
Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Router>
          <div>
            <nav className="bg-blue-500 p-4 text-white">
              <ul className="flex space-x-4">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/results">Results</Link>
                </li>
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
                <li>
                  <button onClick={signOut} className="bg-red-500 px-2 py-1 rounded">
                    Sign Out
                  </button>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/results" element={<Results />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
            <footer className="mt-4 text-center">
              Logged in as: <strong>{user.username}</strong>
            </footer>
          </div>
        </Router>
      )}
    </Authenticator>
  );
}

export default App;

import PropTypes from "prop-types";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    //Check for an existing token in session storage when it first mounts
    const storedToken = sessionStorage.getItem("spotify_token");
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }

    //Process token from URL hash if present
    const hash = window.location.hash;
    if (hash) {
      const tokenParams = hash
        .substring(1)
        .split("&")
        .reduce((acc, item) => {
          const [key, value] = item.split("=");
          acc[key] = value;
          return acc;
        }, {});

      const accessToken = tokenParams.access_token;
      if (accessToken) {
        sessionStorage.setItem("spotify_token", accessToken);
        setToken(accessToken);
        setIsAuthenticated(true);
        window.location.hash = ""; // Clear hash for security
        navigate("/callback"); // Navigate to stats page
      }
    }
  }, [navigate]);

  const logout = () => {
    sessionStorage.removeItem("spotify_token");
    setToken(null);
    setIsAuthenticated(false);
    navigate("/");
  };

  const value = {
    isAuthenticated,
    token,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

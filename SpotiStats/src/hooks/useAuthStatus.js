import { useState, useEffect } from "react";

export const useAuthStatus = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = sessionStorage.getItem("spotify_token");
      setIsAuthenticated(!!token);
    };

    checkAuth();
    // Listen for storage events to handle multi-tab synchronization
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const logout = () => {
    sessionStorage.removeItem("spotify_token");
    setIsAuthenticated(false);
    // Redirect to home page
    window.location.href = "/";
  };

  return { isAuthenticated, logout };
};

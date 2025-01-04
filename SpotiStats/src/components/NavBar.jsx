import "../styles/components/NavBar.css";
import { useAuth } from "../context/AuthContext";
import githubLogo from "../assets/github.svg";
import logoutIcon from "../assets/logoutIcon.svg";

const GITHUB_REPO_URL = "https://github.com/ashzhang1/SpotiStats";

export default function NavBar() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <>
      <nav className="nav-bar-container">
        <div className="logout-button-container">
          {isAuthenticated && (
            <div className="logout-subcontainer">
              <img src={logoutIcon} />
              <button onClick={logout} className="logout-button">
                Logout
              </button>
            </div>
          )}
        </div>

        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-link"
          aria-label="View project source code on GitHub"
        >
          <img src={githubLogo} alt="GitHub logo" className="repo-link-img" />
          <span>Link to repo</span>
        </a>
      </nav>
    </>
  );
}

import "../styles/components/NavBar.css";
import githubLogo from "../assets/github.svg";

const GITHUB_REPO_URL = "https://github.com/ashzhang1/SpotiStats";

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar-container">
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

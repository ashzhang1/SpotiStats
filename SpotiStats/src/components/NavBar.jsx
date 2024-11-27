import githubLogo from "../assets/github.svg";

export default function NavBar() {
  return (
    <>
      <div className="nav-bar-container">
        <div className="nav-bar-elements">
          <img src={githubLogo} alt="GitHub logo" className="repo-link-img" />
          <a
            href="your-repo-url"
            target="_blank"
            rel="noopener noreferrer"
            className="repo-link"
          >
            Link to repo
          </a>
        </div>
      </div>
    </>
  );
}

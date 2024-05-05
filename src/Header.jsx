// import { Link } from "react-router-dom";
// import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        {/* <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Monies
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categories">
                    Category
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/expenses">
                    Expenses
                  </Link>
                </li>
                {localStorage.getItem("jwt") ? (
                  <li className="nav-item">
                    <LogoutLink />
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signup">
                        Signup
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav> */}
      </nav>
    </header>
  );
}

import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.setItem("flashMessage", "Logged out successfully!");
    window.location.href = "/";
  };

  return (
    <a className="btn btn-danger mb-3" href="#" onClick={handleClick}>
      Logout
    </a>
  );
}

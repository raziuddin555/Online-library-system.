import { Link, useLocation } from "react-router-dom";

// 404 page
function NotFound() {
  const location = useLocation();

  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>

      <p>
        Invalid Route:
        <strong> {location.pathname}</strong>
      </p>

      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default NotFound;
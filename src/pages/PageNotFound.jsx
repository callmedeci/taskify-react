import { Link } from "react-router";

function PageNotFound() {
  return (
    <div>
      <h3 className="text-xl font-semibold">
        The page you are looking for did not found :(
      </h3>

      <Link
        to={"/"}
        className="text-blue-500 transition-colors duration-300 hover:text-blue-600"
      >
        &larr; Go back
      </Link>
    </div>
  );
}

export default PageNotFound;

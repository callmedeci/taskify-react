import { RectangleStackIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-zinc-300 transition-colors duration-300 hover:text-zinc-50"
    >
      <h2 className="text-2xl font-medium">Task Manager</h2>

      <RectangleStackIcon className="size-8" />
    </Link>
  );
}

export default Logo;

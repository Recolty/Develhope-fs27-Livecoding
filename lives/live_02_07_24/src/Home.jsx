import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      {" "}
      <Link to="/about">About</Link> <Link to="/">First</Link>
    </>
  );
}

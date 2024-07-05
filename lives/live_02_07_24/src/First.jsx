import { Link } from "react-router-dom";

export function First() {
  return (
    <>
      First
      <Link to="/about">About</Link> <Link to="/home">Home</Link>
    </>
  );
}

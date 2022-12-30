import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/create">Create</Link>
      <Link to="/notes">Notes</Link>
    </div>
  );
};

export default Navigation;

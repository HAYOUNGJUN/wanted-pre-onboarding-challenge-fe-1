import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        <li>
          <Link to="/auth">로그인</Link> 
        </li>
        <li>
          <Link to="/todo">Todo List</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

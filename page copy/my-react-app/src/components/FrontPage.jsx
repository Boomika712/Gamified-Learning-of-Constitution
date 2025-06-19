import React from "react";
import { useNavigate } from "react-router-dom";
import "./FrontPage.css";

// Importing images
import Part5Image from "../assets/52.jpg";
import Part6Image from "../assets/152.jpg";

function FrontPage() {
  const navigate = useNavigate();

  return (
    <div className="frontpage-container">
      <h1>Indian Constitution</h1>
      <div className="card-container">
        <div className="card" onClick={() => navigate("/part5")}>
          <img src={Part5Image} alt="Part 5" />
          <h2>Part 5</h2>
          <p>Articles 52 to 151 (Including 134A and 139A)</p>
        </div>
        <div className="card" onClick={() => navigate("/part6")}>
          <img src={Part6Image} alt="Part 6" />
          <h2>Part 6</h2>
          <p>Articles 152 to 237 (Including 224A and 233A)</p>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;

import React, { useEffect, useState } from "react";
import "./BloodBanks.css";
import bloodbanksData from "../../data/bloodbanks.json";

const BloodBanks = () => {
  const [bloodbanks, setBloodbanks] = useState([]);

  useEffect(() => {
    setBloodbanks(bloodbanksData);
  }, []);

  return (
    <div className="bloodbanks-container">
      <h2>Available Blood Banks</h2>
      <div className="bloodbanks-grid">
        {bloodbanks.map((bank) => (
          <div key={bank.id} className="bloodbank-card">
            <h3>{bank.name}</h3>
            <p><strong>Location:</strong> {bank.location}</p>
            <p><strong>Contact:</strong> {bank.contact}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodBanks;

import React, { useState } from "react";
import {Siren} from 'lucide-react'
import "./EmergencyBloodForm.css";

function EmergencyBloodForm() {
  const [patientName, setPatientName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [units, setUnits] = useState("");
  const [hospital, setHospital] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Emergency Blood Request Submitted!");

    console.log(patientName);
    console.log(bloodGroup);
    console.log(units);
    console.log(hospital);
    console.log(location);
    console.log(phone);
  };

  return (
    <div className="emergency-container">
      <h2><Siren size={20} color="orange" /> Emergency Blood Request</h2>

      <p>Need blood urgently? Submit your request.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />

        <select
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          required
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        <input
          type="number"
          placeholder="Units Required"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Hospital Name"
          value={hospital}
          onChange={(e) => setHospital(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Location / City"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button type="submit">
          <Siren size={20} color="orange" /> Submit Emergency Request
        </button>
      </form>
    </div>
  );
}

export default EmergencyBloodForm;

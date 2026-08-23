import React, { useState } from "react";
import "./BloodRequest.css";

const BloodRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    hospital: "",
    contact: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Blood request submitted successfully!");
    setFormData({
      name: "",
      bloodGroup: "",
      hospital: "",
      contact: "",
      reason: "",
    });
  };

  return (
    <div className="blood-request-container">
      <h2>Request Blood</h2>
      <form onSubmit={handleSubmit} className="blood-request-form">
        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <input
          type="text"
          name="hospital"
          placeholder="Hospital Name"
          value={formData.hospital}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <textarea
          name="reason"
          placeholder="Reason for Request"
          value={formData.reason}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default BloodRequest;

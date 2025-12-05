import React, { useState } from 'react';
import './ReportProblemForm.css';

function ReportProblemForm({ onClose }) {
  const [problemType, setProblemType] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace the alert with actual backend submission as you progress
    alert(`Problem reported:\nType: ${problemType}\nDescription: ${description}\nLocation: ${location}`);
    onClose();
  };

  return (
    <div className="report-form-container">
      <form onSubmit={handleSubmit}>

        <h2>Report a Water Problem</h2>

        <label>Problem Type:</label>
        <select value={problemType} onChange={(e) => setProblemType(e.target.value)} required>
          <option value="">Select a problem</option>
          <option value="contamination">Water Contamination</option>
          <option value="flooding">Drainage Flooding</option>
          <option value="pond_condition">Unsightly Pond/Lake</option>
          <option value="pipe_leakage">Pipe Leakage</option>
        </select>

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the issue"
          required
        />

        <label>Upload Photo:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          required
        />

        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          required
        />

        <button type="submit">Submit Report</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default ReportProblemForm;

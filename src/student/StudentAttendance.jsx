import React from "react";
import "../styles/StudentAttendance.css";

export default function StudentAttendance({
  totalDays = 180,
  presentDays = 166
}) {

  const absentDays = totalDays - presentDays;
  const attendancePercent = Math.round((presentDays / totalDays) * 100);

  const getStatusClass = () => {
    if (attendancePercent >= 75) return "good";
    if (attendancePercent >= 60) return "warning";
    return "danger";
  };

  return (
    <div className="attendance-card">

      <div className="attendance-header">
        <h3>Attendance Overview</h3>
        <span className={`status-badge ${getStatusClass()}`}>
          {attendancePercent >= 75 ? "Eligible" : "Low Attendance"}
        </span>
      </div>

      <div className="attendance-grid">

        <div className="attendance-box present">
          <h4>Present Days</h4>
          <p>{presentDays}</p>
        </div>

        <div className="attendance-box absent">
          <h4>Absent Days</h4>
          <p>{absentDays}</p>
        </div>

        <div className="attendance-box total">
          <h4>Total Working Days</h4>
          <p>{totalDays}</p>
        </div>

      </div>

      {/* Progress Bar */}
      <div className="attendance-progress">
        <div
          className="attendance-progress-fill"
          style={{ width: `${attendancePercent}%` }}
        />
      </div>

      <p className="attendance-note">
        Minimum required attendance is <strong>75%</strong>
      </p>

    </div>
  );
}

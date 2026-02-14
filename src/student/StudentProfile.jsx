import { useState } from "react";
import "../styles/StudentProfile.css";

export default function StudentProfile() {
  const [tab, setTab] = useState("personal");

  const student = {
    name: "Rahul Kumar",
    course: "BCA 2nd Year",
    rollNo: "1023",
    status: "Active",
    personal: {
      email: "rahul@example.com",
      phone: "+91 9876543210",
      dob: "15 Aug 2005",
      bloodGroup: "O+",
      address: "Rohtas, Bihar"
    },
    academic: {
      admissionYear: "2024",
      department: "Computer Science",
      semester: "4th",
      cgpa: "8.4"
    }
  };

  return (
    <div className="profile-page">

      {/* HEADER */}
      <div className="profile-header">
        <div className="avatar">
          {student.name
            .split(" ")
            .map(w => w[0])
            .join("")
            .toUpperCase()}
        </div>

        <div className="profile-basic">
          <h2>{student.name}</h2>
          <p>{student.course} • Roll No: {student.rollNo}</p>
          <span className="status">{student.status}</span>
        </div>
      </div>

      {/* TABS */}
      <div className="profile-tabs">
        <button
          className={tab === "personal" ? "active" : ""}
          onClick={() => setTab("personal")}
        >
          Personal Information
        </button>
        <button
          className={tab === "academic" ? "active" : ""}
          onClick={() => setTab("academic")}
        >
          Academic Information
        </button>
      </div>

      {/* CONTENT */}
      <div className="profile-section">
        {tab === "personal" && (
          <div className="info-grid">
            <Info label="Email" value={student.personal.email} />
            <Info label="Phone" value={student.personal.phone} />
            <Info label="Date of Birth" value={student.personal.dob} />
            <Info label="Blood Group" value={student.personal.bloodGroup} />
            <Info label="Address" value={student.personal.address} full />
          </div>
        )}

        {tab === "academic" && (
          <div className="info-grid">
            <Info label="Admission Year" value={student.academic.admissionYear} />
            <Info label="Department" value={student.academic.department} />
            <Info label="Semester" value={student.academic.semester} />
            <Info label="CGPA" value={student.academic.cgpa} />
          </div>
        )}
      </div>

    </div>
  );
}

function Info({ label, value, full }) {
  return (
    <div className={`info-box ${full ? "full" : ""}`}>
      <span>{label}</span>
      <p>{value}</p>
    </div>
  );
}

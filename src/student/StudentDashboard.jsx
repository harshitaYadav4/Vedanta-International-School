import { useState } from "react";
import StudentLibrary from "./StudentLibrary";
import StudentProfile from "./StudentProfile";
import StudentDetails from "./StudentDetails";
import StudentResult from "./StudentResult";
import StudentAttendance from "./StudentAttendance";
import siteData from "../data/siteData";
import "../styles/dashboard.css";

export default function StudentDashboard() {
  const [active, setActive] = useState("overview");

  /* ================= SAFE STUDENT DATA ================= */
  const student = siteData?.student || {
    name: "Rahul Kumar",
    course: "BCA 2nd Year",
    rollNo: "1023",
    totalDays: 180,
    presentDays: 165,
    fees: {
      total: 25000,
      paid: 20000
    }
  };

  const studentNotices = siteData?.studentNotices || [
    { id: 1, title: "Mid-Term exams start from 10 Oct" },
    { id: 2, title: "Submit library books before 20 Oct" },
    { id: 3, title: "College closed on 2 Oct" },
    { id: 4, title: "Annual function registrations open" }
  ];

  const pendingFees = student.fees.total - student.fees.paid;

  /* ================= RENDER ================= */
  return (
    <div className="dashboard">

      {/* ================= SIDEBAR ================= */}
      <aside className="sidebar">
        <h3>🎓 Student Panel</h3>

        <button
          className={active === "overview" ? "active" : ""}
          onClick={() => setActive("overview")}
        >
          🏠 Dashboard
        </button>

        <button
          className={active === "library" ? "active" : ""}
          onClick={() => setActive("library")}
        >
          📚 Library
        </button>

        <button
          className={active === "profile" ? "active" : ""}
          onClick={() => setActive("profile")}
        >
          👨‍🎓 Profile
        </button>

        <button
          className={active === "details" ? "active" : ""}
          onClick={() => setActive("details")}
        >
          📝 Academic Details
        </button>

        <button
          className={active === "result" ? "active" : ""}
          onClick={() => setActive("result")}
        >
          📊 Results
        </button>
      </aside>

      {/* ================= CONTENT ================= */}
      <main className="content scroll-area">

        {/* ================= OVERVIEW ================= */}
        {active === "overview" && (
          <>
            {/* Welcome Card */}
            <div className="card mb-20">
              <h2>Welcome, {student.name} 👋</h2>
              <p>
                {student.course} | Roll No: <strong>{student.rollNo}</strong>
              </p>
            </div>

            {/* Stats Row */}
            <div className="stats-grid mb-20">
              <div className="stat-box">
                <h4>Attendance</h4>
                <p>91%</p>
              </div>

              <div className="stat-box">
                <h4>Pending Fees</h4>
                <p>₹{pendingFees}</p>
              </div>

              <div className="stat-box">
                <h4>Notices</h4>
                <p>{studentNotices.length}</p>
              </div>
            </div>

            {/* Attendance Component */}
            <StudentAttendance
              totalDays={student.totalDays}
              presentDays={student.presentDays}
            />

            {/* Fee Status */}
            <div className="card mb-20">
              <h3>💰 Fee Status</h3>
              <p>Total Fees: ₹{student.fees.total}</p>
              <p>Paid: ₹{student.fees.paid}</p>
              <p>
                Pending:{" "}
                <strong className={pendingFees > 0 ? "text-danger" : "text-success"}>
                  ₹{pendingFees}
                </strong>
              </p>

              {pendingFees > 0 && (
                <button className="btn btn-secondary">
                  Pay Fees
                </button>
              )}
            </div>

            {/* Notices */}
            <div className="card mb-20">
              <h3>📢 Latest Notices</h3>
              <ul className="notice-list">
                {studentNotices.slice(0, 5).map((notice) => (
                  <li key={notice.id}>{notice.title}</li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* ================= OTHER SECTIONS ================= */}
        {active === "library" && <StudentLibrary />}
        {active === "profile" && <StudentProfile />}
        {active === "details" && <StudentDetails />}
        {active === "result" && <StudentResult />}

      </main>
    </div>
  );
}

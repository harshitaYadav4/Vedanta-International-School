import { useState } from "react";
import "../styles/StudentLibrary.css";


export default function StudentLibrary() {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const books = [
    {
      id: 1,
      title: "Data Structures",
      subject: "Computer Science",
      format: "PDF",
      status: "available"
    },
    {
      id: 2,
      title: "Operating Systems",
      subject: "Computer Science",
      format: "PDF",
      status: "issued",
      dueDate: "20 Oct 2026"
    },
    {
      id: 3,
      title: "Database Management",
      subject: "Computer Science",
      format: "PDF",
      status: "available"
    },
    {
      id: 4,
      title: "Discrete Mathematics",
      subject: "Mathematics",
      format: "PDF",
      status: "available"
    }
  ];

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" || book.subject === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="library-card">

      {/* Header */}
      <div className="library-header">
        <h2>📚 College Library</h2>
        <p>Access your issued and available study materials</p>
      </div>

      {/* Controls */}
      <div className="library-controls">
        <input
          type="text"
          placeholder="Search book..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Subjects</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Mathematics">Mathematics</option>
        </select>
      </div>

      {/* Book List */}
      <ul className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li key={book.id} className="book-item">
              <div>
                <h4>{book.title}</h4>
                <p>{book.subject} • {book.format}</p>
              </div>

              <div className="book-status">
                {book.status === "available" ? (
                  <span className="available">Available</span>
                ) : (
                  <span className="issued">
                    Issued (Due: {book.dueDate})
                  </span>
                )}
              </div>
            </li>
          ))
        ) : (
          <p className="empty">No books found</p>
        )}
      </ul>

    </div>
  );
}

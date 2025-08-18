// Hear.tsx (essentials)
import "./Hear.css";
import Footer from "./Footer";
import { useEffect, useState } from "react";

interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  image: string;
  testimonial: string;
  email?: string;
}

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw74WL50hh7XtXQKB6vZSaChkVyebqtTIHaTC2Lxhfbf1ARO2C6lIKzMFaVcF1KDihE/exec"; // from Apps Script deployment

function Hear() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${SCRIPT_URL}?sheet=Sheet2`) // This is where the sheet's name should be changed (name=Sheet2)
      .then((res) => res.json())
      .then((rows) => {
        const mapped: Employee[] = rows.map((r: any) => ({
          id: String(r.ID ?? ""),
          name: r.Name ?? "",
          position: r.Position ?? "",
          department: r.Department ?? "",
          image: r.Image ?? "",
          testimonial: r.Testimonial ?? "",
        }));
        setEmployees(mapped);
      })
      .catch(console.error)
      .finally(() => setLoading(false));

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="hear-hero">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>Hear From Our Employees</h1>
          <p>Real stories from our amazing team</p>
        </div>
      </section>

      <section className="hear-section">
        <div className="hear-wrapper">
          <h2>Hear From Our Employees</h2>
          <p>Discover what it’s like to work here.</p>
        </div>

        {loading ? (
          <div className="hear-wrapper">
            <p>Loading…</p>
          </div>
        ) : (
          <div className="masonry">
            {employees.map((emp, index) => {
              const randomHeightClass = `card-height-${(index % 3) + 1}`;
              return (
                <div
                  key={emp.id || emp.name + index}
                  className={`masonry-item ${randomHeightClass}`}
                  onClick={() => setSelectedEmployee(emp)}
                >
                  <img
                    src={`/assets/Employees/${emp.image || "placeholder.jpg"}`}
                    alt={emp.name}
                  />
                  <div className="emp-info">
                    <h3>{emp.name}</h3>
                    <p>{emp.position}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {selectedEmployee && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedEmployee(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={`/assets/Employees/${
                selectedEmployee.image || "placeholder.jpg"
              }`}
              alt={selectedEmployee.name}
            />

            <h2>{selectedEmployee.name}</h2>
            <h4>{selectedEmployee.position}</h4>
            <p>{selectedEmployee.testimonial}</p>
            <button
              className="modal-close"
              onClick={() => setSelectedEmployee(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Hear;

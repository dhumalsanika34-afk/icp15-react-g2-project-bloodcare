import { useEffect, useMemo, useState } from "react";
import hospitals from "../Data/Hospitals";
import HospitalCard from "../../components/Hospitalscard/hopstialscard";
import bloodIcon from "../../components/icon-images/blood-drop.png";
import emergencyIcon from "../../components/icon-images/emergency.png";
import "./Hospitals.css";

function Hospitals() {
  const [search, setSearch] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("hospitalFilters"))?.search || "";
    } catch {
      return "";
    }
  });
  const [city, setCity] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("hospitalFilters"))?.city || "All";
    } catch {
      return "All";
    }
  });
  const [emergencyOnly, setEmergencyOnly] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("hospitalFilters"))?.emergencyOnly || false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "hospitalFilters",
      JSON.stringify({ search, city, emergencyOnly }),
    );
  }, [search, city, emergencyOnly]);

  const cities = useMemo(
    () => ["All", ...new Set(hospitals.map((hospital) => hospital.city))],
    [],
  );

  const filteredHospitals = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return hospitals.filter((hospital) => {
      const searchMatch = [hospital.name, hospital.city, hospital.address]
        .join(" ")
        .toLowerCase()
        .includes(searchText);
      const cityMatch = city === "All" || hospital.city === city;
      const emergencyMatch = !emergencyOnly || hospital.emergency;

      return searchMatch && cityMatch && emergencyMatch;
    });
  }, [search, city, emergencyOnly]);


  return (
    <section className="hospital-page">

      <div className="hospital-heading">
        <div className="hospital-title">
          <img
            src={bloodIcon}
            alt=""
            aria-hidden="true"
          />
          <span>BloodCare</span>
        </div>
        <h2>Find Hospitals</h2>
        <p>Find trusted hospitals and blood services near you.</p>
      </div>

      <div className="hospital-filters">
        <div className="hospital-search">
          <span aria-hidden="true">&#128269;</span>
          <input
            type="text"
            placeholder="Search hospital or city..."
            aria-label="Search hospitals"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <select
          aria-label="Filter hospitals by city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        >
          {cities.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <label className="emergency-filter">
          <input
            type="checkbox"
            checked={emergencyOnly}
            onChange={(event) => setEmergencyOnly(event.target.checked)}
          />
          <img
            src={emergencyIcon}
            alt=""
            aria-hidden="true"
          />
          Emergency Only
        </label>
      </div>

      <p className="hospital-result">
        Showing <strong>{filteredHospitals.length}</strong> hospitals
      </p>

      <div className="hospital-grid">
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital) => (
            <HospitalCard key={hospital.id} hospital={hospital} />
          ))
        ) : (
          <div className="no-hospital">
            <img
              src={bloodIcon}
              alt=""
              aria-hidden="true"
            />
            <h3>No Hospital Found</h3>
            <p>Try another search.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hospitals;
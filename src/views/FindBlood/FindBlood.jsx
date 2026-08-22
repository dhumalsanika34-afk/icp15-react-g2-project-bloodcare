import React ,{useState} from "react";
import "./FindBlood.css";
import bloodDatas from './../../utils/findblood.json'
import CardFindBlood from "./../../components/CardFindBlood/CardFindBlood";
import EmergencyBloodForm from "./../../components/EmergencyBloodForm/EmergencyBloodForm";

function FindBlood() {

  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");

  
  const filteredBlood = bloodDatas.filter((blood) => {
    const groupMatch =
      bloodGroup === "" || blood.bloodGroup === bloodGroup;

    const locationMatch = blood.location
      .toLowerCase()
      .includes(location.toLowerCase());

    return groupMatch && locationMatch;
  });


  
 
  return (
    <div>
      {/* HERO */}
      <section className="find-blood-hero">
        <div className="hero-text">
          <h1>Find the Blood You Need</h1>

          <p>
            Search available blood units and find the nearest blood bank for
            emergency or planned requirements.
          </p>
        </div>

        <div className="icon-container">
          <div className="blood-icon">❤️</div>
          <div>
            <button> Blood Availibility</button>
          </div>
        </div>
      </section>


      {/* search */}
      <section className="search-container">

        <div className="search-header">
          <h2>Search Blood Availability</h2>
          <p>Select a blood group and enter your city.</p>
        </div>

        <div className="search-box">

          <div className="input-group">
            <label>Blood Group</label>

            <select
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              <option value="">All Blood Groups</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>


          <div className="input-group">
            <label>Location</label>

            <input
              type="text"
              placeholder="Enter city name..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

        </div>

      </section>

        {/* RESULTS */}
      <section className="blood-results">

        <div className="result-heading">
          <div>
            <h2>Available Blood</h2>
            <p>{filteredBlood.length} results found</p>
          </div>
        </div>


        <div className="blood-grid">

          {filteredBlood.length > 0 ? (

            filteredBlood.map((blood) => (

              <CardFindBlood blood={blood}/>

            ))

          ) : (

            <div className="no-result">
              <h3>No blood found</h3>
            </div>

          )}

        </div>

      </section>

        <section>
        <EmergencyBloodForm/>
      </section>


    </div>
  );
}

export default FindBlood;
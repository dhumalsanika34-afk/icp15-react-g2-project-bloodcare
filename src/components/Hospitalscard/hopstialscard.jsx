import Button from "../Button/Button";
import bloodIcon from "../icon-images/blood-drop.png";
import emergencyIcon from "../icon-images/emergency.png";
import locationIcon from "../icon-images/location.png";
import ratingIcon from "../icon-images/rating.png";
import phoneIcon from "../icon-images/telephone (1).png";
import "./Hospitalscard.css";

function HospitalCard({ hospital }) {
  return (
    <article className="hospital-card">
      <img
        src={hospital.image}
        alt={hospital.name}
        className="hospital-card-image"
      />

      <div className="hospital-card-content">
        <h3>{hospital.name}</h3>

        <p className="hospital-city">
          <img
            src={locationIcon}
            alt=""
            aria-hidden="true"
            className="icon"
          />
          {hospital.city}
        </p>

        <p className="hospital-address">{hospital.address}</p>

        <p className="hospital-rating">
          <img
            src={ratingIcon}
            alt=""
            aria-hidden="true"
            className="icon"
          />
          {hospital.rating}
        </p>

        {hospital.emergency ? (
          <span className="hospital-emergency">
            <img
              src={emergencyIcon}
                alt=""
                aria-hidden="true"
              className="icon"
            />
            Emergency Available
          </span>
        ) : (
          <span className="hospital-regular">
            Regular Service
          </span>
        )}

        <h4>
          <img
            src={bloodIcon}
            alt=""
            aria-hidden="true"
            className="icon"
          />
          Blood Groups
        </h4>

        <div className="blood-groups">
          {hospital.bloodGroups.map((blood) => (
            <span key={blood}>{blood}</span>
          ))}
        </div>

        <Button href={`tel:${hospital.phone}`}>
          <img
            src={phoneIcon}
            alt=""
            aria-hidden="true"
            className="button-icon"
          />
          Call Hospital
        </Button>

      </div>
    </article>
  );
}

export default HospitalCard;
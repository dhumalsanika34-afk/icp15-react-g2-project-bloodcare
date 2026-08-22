import React from 'react'
import './CardFindBlood.css'
import {MapPin} from 'lucide-react'

function CardFindBlood({blood}) {
  return (
   <div className="blood-card" key={blood.id}>

                <div className="blood-card-top">

                  <div className="blood-group">
                    {blood.bloodGroup}
                  </div>

                  <span
                    className={
                      blood.status === "Available"
                        ? "status available"
                        : "status limited"
                    }
                  >
                    {blood.status}
                  </span>

                </div>


                <h3>{blood.hospital}</h3>

                <p className="location">
                  <MapPin size={12} color='blue'/> {blood.location}
                </p>


                <div className="units-info">
                  <span>Available Units</span>
                  <strong>{blood.units} Units</strong>
                </div>


                <button
                  onClick={() =>
                    alert(
                      `Blood request sent for ${blood.bloodGroup} blood.`
                    )
                  }
                >
                  Request Blood
                </button>

              </div>
  )
}

export default CardFindBlood

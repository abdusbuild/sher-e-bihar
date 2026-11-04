import { hotel } from "../data/site";

// Home page: address panel beside the map.
export default function GettingHere() {
  return (
    <section className="section band--blush">
      <div className="wrap">
        <div className="getting reveal">
          <div className="getting__info">
            <h2>Getting Here</h2>
            <p>
              {hotel.name}
              <br />
              {hotel.address}
            </p>
            <a href={`tel:${hotel.phoneTel}`} className="getting__tel">
              {hotel.phoneDisplay}
            </a>
            <a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Get Directions
            </a>
          </div>
          <div className="getting__map">
            <iframe src={hotel.mapEmbed} title={`${hotel.name} location map`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </section>
  );
}

import { whyPoints } from "../data/products";
import "./WhyGrid.css";

export default function WhyGrid() {
  return (
    <div className="why-grid">
      {whyPoints.map((point) => (
        <div className="why-grid__item" key={point.title}>
          <h3>{point.title}</h3>
          <p>{point.detail}</p>
        </div>
      ))}
    </div>
  );
}

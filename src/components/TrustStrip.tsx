import "./TrustStrip.css";

const items = ["High Purity", "Consistent Quality", "Reliable Supply", "Export Ready"];

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="container trust-strip__row">
        {items.map((item) => (
          <div className="trust-strip__item" key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

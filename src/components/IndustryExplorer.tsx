import { useState } from "react";
import { Link } from "react-router-dom";
import { industries, products } from "../data/products";
import "./IndustryExplorer.css";

export default function IndustryExplorer({ compact = false }: { compact?: boolean }) {
  const list = compact ? industries.slice(0, 6) : industries;
  const [active, setActive] = useState(list[0].name);
  const activeIndustry = list.find((i) => i.name === active) ?? list[0];
  const relatedProducts = products.filter((p) => activeIndustry.productSlugs.includes(p.slug));

  return (
    <div className="industry-explorer">
      <div className="industry-explorer__list" role="tablist" aria-label="Industries">
        {list.map((industry) => (
          <button
            key={industry.name}
            role="tab"
            aria-selected={industry.name === active}
            className={`industry-explorer__tab ${industry.name === active ? "is-active" : ""}`}
            onClick={() => setActive(industry.name)}
          >
            {industry.name}
          </button>
        ))}
      </div>

      <div className="industry-explorer__panel" role="tabpanel">
        <span className="eyebrow">Relevant Products</span>
        <h3>{activeIndustry.name}</h3>
        <div className="industry-explorer__products">
          {relatedProducts.map((p) => (
            <Link key={p.slug} to={`/products/${p.slug}`} className="industry-explorer__product">
              <span className="tag">{p.formula}</span>
              <strong>{p.shortName}</strong>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

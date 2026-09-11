import { Link } from "react-router-dom";
import type { Product } from "../data/products";
import CrystalGlyph from "./CrystalGlyph";
import "./ProductCard.css";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-card__visual" style={{ ["--accent" as string]: product.color }}>
        <CrystalGlyph color={product.color} />
      </div>

      <div className="product-card__body">
        <span className="tag">{product.formula}</span>
        <h3>{product.shortName}</h3>
        <p className="product-card__desc">{product.tagline}</p>

        <dl className="product-card__meta">
          <div>
            <dt>{product.gradeLabel}</dt>
            <dd>{product.grades.join(" \u00b7 ")}</dd>
          </div>
          <div>
            <dt>Key Applications</dt>
            <dd>{product.applications.slice(0, 3).map((a) => a.name).join(", ")}</dd>
          </div>
        </dl>

        <div className="product-card__actions">
          <Link to={`/products/${product.slug}`} className="btn-ghost">
            View Product
          </Link>
          <Link to={`/contact?product=${product.slug}`} className="btn btn-outline-dark">
            Request Inquiry
          </Link>
        </div>
      </div>
    </article>
  );
}

import SEO from "../components/SEO";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import "./Products.css";

export default function Products() {
  return (
    <>
      <SEO
        title="Industrial Chemical Products"
        description="Explore EVA METACHEM's core product range: Copper Sulphate Pentahydrate, Cobalt Sulphate Heptahydrate and Zinc Oxide, supplied in multiple grades for industrial use."
        path="/products"
      />

      <section className="products-hero">
        <div className="container">
          <span className="kicker-line">Products</span>
          <h1>Metal salts, manufactured for consistency.</h1>
          <p>
            Three core products, each supplied in multiple grades and backed by the same
            commitment to purity and reliable supply.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="products-grid">
          {products.map((p) => (
            <ProductCard product={p} key={p.slug} />
          ))}
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import "./NotFound.css";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <div className="container not-found">
        <span className="tag">404</span>
        <h1>This page isn&rsquo;t part of our catalog.</h1>
        <p>The page you&rsquo;re looking for may have moved. Try one of these instead.</p>
        <div className="not-found__links">
          <Link to="/" className="btn btn-primary">Go Home</Link>
          <Link to="/products" className="btn btn-outline-dark">View Products</Link>
        </div>
      </div>
    </>
  );
}

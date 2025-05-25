import React, { useEffect, useState } from "react";

function ProductNavbar() {
  const [activeSection, setActiveSection] = useState("Product");

  useEffect(() => {
    const sections = document.querySelectorAll(
      "#Product, #About, #Detail, #Reviews"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offsetTop =
        target.getBoundingClientRect().top + window.pageYOffset - 130;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setActiveSection(id); // immediately switch active on click
    }
  };

  return (
    <div className="product-navbar">
      <a
        href="#Product"
        className={activeSection === "Product" ? "active-product-navbar" : ""}
        onClick={(e) => handleClick(e, "Product")}
      >
        Product
      </a>
      <a
        href="#About"
        className={activeSection === "About" ? "active-product-navbar" : ""}
        onClick={(e) => handleClick(e, "About")}
      >
        About
      </a>
      <a
        href="#Detail"
        className={activeSection === "Detail" ? "active-product-navbar" : ""}
        onClick={(e) => handleClick(e, "Detail")}
      >
        Detail
      </a>
      <a
        href="#Reviews"
        className={activeSection === "Reviews" ? "active-product-navbar" : ""}
        onClick={(e) => handleClick(e, "Reviews")}
      >
        Reviews
      </a>
    </div>
  );
}

export default ProductNavbar;

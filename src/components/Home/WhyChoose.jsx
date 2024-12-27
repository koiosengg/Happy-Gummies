import React, { useEffect, useRef, useState } from "react";
import Background from "../../assets/Home/Why Choose.png";

function WhyChoose() {
  const [isInView, setIsInView] = useState(false);
  const whyChooseRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 } 
    );

    if (whyChooseRef.current) {
      observer.observe(whyChooseRef.current);
    }

    return () => {
      if (whyChooseRef.current) {
        observer.unobserve(whyChooseRef.current);
      }
    };
  }, []);

  return (
    <div className="section-container">
      <div className="heading">
        <h2>Bite-sized Treats</h2>
        <p>
          Elevate your health journey crafted with care and packed with goodness
        </p>
      </div>
      <div
        ref={whyChooseRef}
        className={`why-choose ${isInView ? "in-view" : ""}`}
      >
        <img src={Background} alt="Why Choose Background" />
        <div className="why-choose-reason why-choose-reason-1">
          <h3>13+ Essential vitamins</h3>
        </div>
        <div className="why-choose-reason why-choose-reason-2">
          <h3>Strawberry , Cherry , Orange</h3>
        </div>
        <div className="why-choose-reason why-choose-reason-3">
          <h3>Soft and Non - Sticky</h3>
        </div>
        <div className="why-choose-reason why-choose-reason-4">
          <h3>Easy to chew and swallow</h3>
        </div>
        <div className="why-choose-reason why-choose-reason-5">
          <h3>Supports Immune Health</h3>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;

import React from "react";

function NewAddress() {
  return (
    <form className="new-address">
      <div className="new-address-container">
        <div className="new-address-section">
          <h2>Contact Details</h2>
          <div className="new-address-section-container">
            <div className="new-address-section-divide">
              <section>
                <label>
                  First Name <span>*</span>
                </label>
                <input />
              </section>
              <section>
                <label>
                  Last Name <span>*</span>
                </label>
                <input />
              </section>
            </div>
            <section>
              <label>
                Email <span>*</span>
              </label>
              <input />
            </section>
            <section>
              <label>Phone Number </label>
              <input />
            </section>
          </div>
        </div>
        <div className="new-address-section">
          <h2>Shipping Details</h2>
          <div className="new-address-section-container">
            <section>
              <label>Flat/House no.</label>
              <input />
            </section>
            <section>
              <label>Address</label>
              <input />
            </section>
            <div className="new-address-section-divide">
              <section>
                <label>City</label>
                <input />
              </section>
              <section>
                <label>State</label>
                <input />
              </section>
            </div>
            <div className="new-address-section-divide">
              <section>
                <label>Postal Code</label>
                <input />
              </section>
              <section>
                <label>Landmark</label>
                <input />
              </section>
            </div>
            <section className="checkbox">
              <input type="checkbox" />
              <label>My shipping and Billing address are the same</label>
            </section>
          </div>
        </div>
        <div className="new-address-section">
          <h2>Billing Details</h2>
          <div className="new-address-section-container">
            <section>
              <label>Flat/House no.</label>
              <input />
            </section>
            <section>
              <label>Address</label>
              <input />
            </section>
            <div className="new-address-section-divide">
              <section>
                <label>City</label>
                <input />
              </section>
              <section>
                <label>State</label>
                <input />
              </section>
            </div>
            <div className="new-address-section-divide">
              <section>
                <label>Postal Code</label>
                <input />
              </section>
              <section>
                <label>Landmark</label>
                <input />
              </section>
            </div>
          </div>
        </div>
      </div>
      <button className="ProductButton">Save & Next</button>
    </form>
  );
}

export default NewAddress;

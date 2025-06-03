import React from "react";
import AddNewAddress from "../../assets/add new address.png";

function SelectAddress() {
  return (
    <div className="select-address">
      <h2>Select Address</h2>
      <div className="select-address-options">
        <form className="select-address-options-container">
          <div className="radio-option">
            <div className="info-section">
              <div className="info-section-heading">
                <section>
                  <input type="radio" id="home" name="address" value="home" />
                  <h3>Name</h3>
                </section>
                <label htmlFor="home">Home</label>
              </div>
              <div className="info-section-address">
                <p>Lorem ipsum dolor sit amet consectetur. Pharetra gravida.</p>
                <p>+44 090909173</p>
                <p>abc@gmail.com</p>
                <p>Zipcode</p>
              </div>
            </div>
            <div className="edit-options">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.2038 10.796L18.9998 9C19.545 8.45475 19.8176 8.18213 19.9634 7.88803C20.2407 7.32848 20.2407 6.67153 19.9634 6.11197C19.8176 5.81788 19.545 5.54525 18.9998 5C18.4545 4.45475 18.1819 4.18213 17.8878 4.03639C17.3282 3.75911 16.6713 3.75911 16.1117 4.03639C15.8176 4.18213 15.545 4.45475 14.9998 5L13.1811 6.81866C14.145 8.46926 15.5311 9.84482 17.2038 10.796ZM11.7267 8.27312L4.85615 15.1436C4.43109 15.5687 4.21856 15.7812 4.07883 16.0423C3.93909 16.3034 3.88015 16.5981 3.76226 17.1876L3.14686 20.2646C3.08034 20.5972 3.04708 20.7635 3.14168 20.8581C3.23629 20.9527 3.4026 20.9194 3.73521 20.8529L6.81219 20.2375C7.40164 20.1196 7.69637 20.0607 7.95746 19.9209C8.21856 19.7812 8.43109 19.5687 8.85615 19.1436L15.7456 12.2542C14.1239 11.2386 12.7522 9.87628 11.7267 8.27312Z"
                  fill="#111111"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#111111"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#111111"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="radio-option">
            <div className="info-section">
              <div className="info-section-heading">
                <section>
                  <input
                    type="radio"
                    id="office"
                    name="address"
                    value="office"
                  />
                  <h3>Business Name</h3>
                </section>
                <label htmlFor="office">Office</label>
              </div>
              <div className="info-section-address">
                <p>Lorem ipsum dolor sit amet consectetur. Pharetra gravida.</p>
                <p>+44 090909173</p>
                <p>abc@gmail.com</p>
                <p>Zipcode</p>
              </div>
            </div>
            <div className="edit-options">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.2038 10.796L18.9998 9C19.545 8.45475 19.8176 8.18213 19.9634 7.88803C20.2407 7.32848 20.2407 6.67153 19.9634 6.11197C19.8176 5.81788 19.545 5.54525 18.9998 5C18.4545 4.45475 18.1819 4.18213 17.8878 4.03639C17.3282 3.75911 16.6713 3.75911 16.1117 4.03639C15.8176 4.18213 15.545 4.45475 14.9998 5L13.1811 6.81866C14.145 8.46926 15.5311 9.84482 17.2038 10.796ZM11.7267 8.27312L4.85615 15.1436C4.43109 15.5687 4.21856 15.7812 4.07883 16.0423C3.93909 16.3034 3.88015 16.5981 3.76226 17.1876L3.14686 20.2646C3.08034 20.5972 3.04708 20.7635 3.14168 20.8581C3.23629 20.9527 3.4026 20.9194 3.73521 20.8529L6.81219 20.2375C7.40164 20.1196 7.69637 20.0607 7.95746 19.9209C8.21856 19.7812 8.43109 19.5687 8.85615 19.1436L15.7456 12.2542C14.1239 11.2386 12.7522 9.87628 11.7267 8.27312Z"
                  fill="#111111"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#111111"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#111111"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </form>
        <div className="add-new-address">
          <img src={AddNewAddress} />
          <p>Add New Address</p>
        </div>
      </div>
      <button className="ProductButton">Save & Next</button>
    </div>
  );
}

export default SelectAddress;

import React from "react";
import Visa from "../../assets/Visa.png";
import AddNewCard from "../../assets/add new card.png";
import Cash from "../../assets/Cash.png";

function Payment() {
  return (
    <div className="payment">
      <h2>Payment</h2>
      <form className="payment-container">
        <div className="payment-container-section">
          <div className="payment-option">
            <h3>Cards</h3>
            <div className="payment-cards">
              <section>
                <div className="payment-cards-details">
                  <img src={Visa} />
                  <p>
                    Debit Card <span>*****5678</span>
                  </p>
                </div>
                <input type="radio" id="card" name="paymentMethod" value="card" />
              </section>
              <section>
                <div className="payment-cards-details">
                  <img src={AddNewCard} />
                  <p>Add New Card</p>
                </div>
                <sub>Add</sub>
              </section>
            </div>
            <div className="add-card-details">
              <section>
                <input placeholder="Card number" />
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
                    d="M15.74 16.8214H10.24C9.826 16.8214 9.49 16.4865 9.49 16.074C9.49 15.6614 9.826 15.3266 10.24 15.3266H15.74C16.154 15.3266 16.49 15.6614 16.49 16.074C16.49 16.4865 16.154 16.8214 15.74 16.8214ZM8.5 9.53566C8.5 9.8117 8.275 10.0339 8 10.0339H4C3.723 10.0339 3.5 9.8117 3.5 9.53566V7.04431C3.5 6.77026 3.723 6.54604 4 6.54604H8C8.275 6.54604 8.5 6.77026 8.5 7.04431V9.53566ZM7.24 16.8214H4.24C3.826 16.8214 3.49 16.4865 3.49 16.074C3.49 15.6614 3.826 15.3266 4.24 15.3266H7.24C7.654 15.3266 7.99 15.6614 7.99 16.074C7.99 16.4865 7.654 16.8214 7.24 16.8214ZM21.5 4.05469H2.5C1.672 4.05469 1 4.72436 1 5.5495V18.5045C1 19.3306 1.672 19.9993 2.5 19.9993H21.5C22.329 19.9993 23 19.3306 23 18.5045V5.5495C23 4.72436 22.329 4.05469 21.5 4.05469Z"
                    fill="#6C6C6C"
                  />
                </svg>
              </section>
              <div className="add-card-details-divide">
                <section>
                  <input placeholder="MM / YY" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 2C6.44772 2 6 2.44772 6 3V4H5C3.89543 4 3 4.89543 3 6V8H21V6C21 4.89543 20.1046 4 19 4H18V3C18 2.44772 17.5523 2 17 2H16C15.4477 2 15 2.44772 15 3V4H9V3C9 2.44772 8.55228 2 8 2H7Z"
                      fill="#6C6C6C"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21 10H3V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10ZM6 13C6 12.4477 6.44772 12 7 12H9C9.55228 12 10 12.4477 10 13V14C10 14.5523 9.55228 15 9 15H7C6.44772 15 6 14.5523 6 14V13Z"
                      fill="#6C6C6C"
                    />
                  </svg>
                </section>
                <section>
                  <input placeholder="CVV" />
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
                      d="M8.37477 7.93128C8.37477 5.93447 10.0005 4.31042 11.9996 4.31042C13.9987 4.31042 15.6244 5.93447 15.6244 7.93128V9.73176H8.37477V7.93128ZM18.343 9.73176H17.4368V7.93129C17.4368 4.93652 14.9982 2.5 11.9996 2.5C9.00096 2.5 6.56238 4.93652 6.56238 7.93129V9.73176H5.65618C4.90584 9.73176 4.29688 10.3398 4.29688 11.0898V20.142C4.29688 20.892 4.90584 21.5 5.65618 21.5H18.343C19.0933 21.5 19.7023 20.892 19.7023 20.142V11.0898C19.7023 10.3398 19.0933 9.73176 18.343 9.73176ZM12.9058 15.8172V17.8791C12.9058 18.3786 12.4998 18.7839 11.9996 18.7839C11.4984 18.7839 11.0934 18.3786 11.0934 17.8791V15.8172C10.5533 15.5041 10.1872 14.9269 10.1872 14.2583C10.1872 13.2585 10.9982 12.4479 11.9996 12.4479C13 12.4479 13.812 13.2585 13.812 14.2583C13.812 14.9269 13.445 15.5041 12.9058 15.8172Z"
                      fill="#6C6C6C"
                    />
                  </svg>
                </section>
              </div>
            </div>
          </div>
          <div className="payment-option">
            <h3>Cards</h3>
            <div className="payment-cards">
              <section>
                <div className="payment-cards-details">
                  <img src={Cash} />
                  <p>Cash</p>
                </div>
                <input type="radio" id="cash" name="paymentMethod" value="cash" />
              </section>
            </div>
          </div>
        </div>
        <button className="ProductButton">Save & Next</button>
      </form>
    </div>
  );
}

export default Payment;

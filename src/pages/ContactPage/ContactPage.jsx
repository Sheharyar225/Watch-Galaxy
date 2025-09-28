import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Section - Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We’d love to hear from you! Whether you have a question about our
            watches, need assistance, or just want to say hello — we’re here.
          </p>

          <div className="info-box">
            <h4>Email</h4>
            <p>support@watchstore.com</p>
          </div>

          <div className="info-box">
            <h4>Phone</h4>
            <p>+1 (234) 567-890</p>
          </div>

          <div className="info-box">
            <h4>Address</h4>
            <p>123 Timepiece Ave, New York, NY</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

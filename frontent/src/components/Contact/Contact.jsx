import React, { useState } from "react";
import "./Contact.css";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import contactImage from "../../assets/Images/contact-2.png";

const Contact = () => {
  const [location, setLocation] = useState("17.4391296,78.4498688");

  return (
    <div className="mb-5">
      <div className="container ">
        {/* Help Description */}
        <div className="row HelpDescription">
          <div className="col col-sm-12 col-md-4">
            <h5 className="HelpText">How can help you ?</h5>
            <h1>Let us know how we can help you</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="col col-md-4 col-sm-12">
            <h5 className="Heading">01. Visit Feedback</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <h5 className="Heading">03. Billing Inquiries</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="col col-md-4 col-sm-12">
            <h5 className="Heading">02. Employer Services</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <h5 className="Heading">04. General Inquiries</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>
      {/* Show Location in Map */}
      <div className="MapContainer">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28944.726818594703!2d${
            location.split(",")[1]
          }!3d${
            location.split(",")[0]
          }!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1735711190733!5m2!1sen!2sin`}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>

      {/* Address Of our Offices */}

      <div className="container AddressOurOffice">
        <div className="row">
          <div className="col col-sm-12 col-md-4 col-lg-4">
            <div>
              <h1>Office</h1>
              <p>Shree Kunj Hotel Chanderi Madhyapradesh</p>
              <p>Chanderi , Ashoknagar Madhyapradesh India</p>
              <p>
                Phone:
                <a href="tel:9827805086"> +91-9827805086</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:arvindlodhi850@gmail.com">
                  arvindlodhi850@gmail.com
                </a>{" "}
              </p>
              <Button
                onClick={() =>
                  setLocation("17.446073983804418 , 78.4388296410505")
                }
              >
                <LocationOnIcon />
                View Map
              </Button>
            </div>
          </div>
          <div className="col col-sm-12 col-md-4 col-lg-4">
            <div>
              <h1>Office</h1>
              <p>Danish Nagar Bhopal Madhyapradesh</p>
              <p>Chanderi , Ashoknagar Madhyapradesh India</p>
              <p>
                Phone:
                <a href="tel:9827805086"> +91-9827805086</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:arvindlodhi850@gmail.com">
                  arvindlodhi850@gmail.com
                </a>{" "}
              </p>
              <Button
                onClick={() =>
                  setLocation("23.183912056373696 , 77.37931080026385")
                }
              >
                {" "}
                <LocationOnIcon />
                View Map
              </Button>
            </div>
          </div>
          <div className="col col-sm-12 col-md-4 col-lg-4">
            <div>
              <h1>Shop : Om Farmer Chemical fertilizers</h1>
              <p> Near Shree Kunj Hotel Chanderi Madhyapradesh</p>
              <p>Chanderi , Ashoknagar Madhyapradesh India</p>
              <p>
                Phone:
                <a href="tel:9827805086"> +91-9827805086</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:arvindlodhi850@gmail.com">
                  arvindlodhi850@gmail.com
                </a>{" "}
              </p>
              <Button
                onClick={() =>
                  setLocation("24.711967596977644 , 78.05330115051433")
                }
              >
                {" "}
                <LocationOnIcon />
                View Map
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Contact form */}
      <div className="container mt-5">
        <div className="row">
          <div className="col col-sm-12 col-md-8 col-lg-8">
            <fieldset>
              {/* <legend>Personalia:</legend> */}
              <h5>Contact form</h5>
              <h1>Drop Us a Line</h1>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div>
                <div className="row ">
                  <div className=" d-block col col-sm-6 col-md-6 col-lg-6">
                    <label htmlFor="Html">First Name</label>
                    <div>
                      <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        id=""
                      />
                    </div>
                  </div>
                  <div className=" d-block col col-sm-6 col-md-6 col-lg-6">
                    <label htmlFor="Html">Your Email</label>
                    <div>
                      <input
                        className="form-control"
                        type="email"
                        name="YourEmail"
                        placeholder="Your Email"
                        id=""
                      />
                    </div>
                  </div>
                  <div className=" d-block col col-sm-6 col-md-6 col-lg-6">
                    <label htmlFor="Html">Your Phone</label>
                    <div>
                      <input
                        className="form-control"
                        type="text"
                        name="YourPhone"
                        placeholder="Your Phone"
                        id=""
                      />
                    </div>
                  </div>
                  <div className=" d-block col col-sm-6 col-md-6 col-lg-6">
                    <label htmlFor="Html">Email Subject</label>
                    <div>
                      <input
                        className="form-control"
                        type="text"
                        name="EmailSubject"
                        placeholder="Email Subject"
                        id=""
                      />
                    </div>
                  </div>
                  <div className=" d-block col col-sm-6 col-md-6 col-lg-6">
                    <label htmlFor="Html">Write Message</label>
                    <textarea
                      className="form-control w-100"
                      rows="4"
                      cols="105"
                      placeholder="Please write your message"
                    ></textarea>
                    <div>
                      <Button>
                        Send Message <SendIcon className="ms-2" />{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="col col-sm-12 col-md-4 col-lg-4 ImagePart">
            <div className="ImageContainer">
              <img src={contactImage} alt="Contact Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

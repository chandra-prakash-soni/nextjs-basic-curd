"use client";
import React, { useEffect } from "react";
import Footer from "./Footer";
import LogIn from "@/components/Forms/LogIn";
import Signup from "@/components/Forms/Signup";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { getAllTopic, googleAuthenticate } from "@/redux/action/api";
import { image2 } from "@/image";
import {
  Fa500Px,
  FaAccusoft,
  FaAffiliatetheme,
  FaAirbnb,
  FaCheckDouble,
} from "react-icons/fa6";
import TimeLine from "@/components/TimeLine";

const index = ({ form, pageHandler }) => {
  const { alltopics_Response } = useSelector((state) => state.collections);
  console.log(alltopics_Response, "undefined");
  const dispatch = useDispatch();
  const session = useSession();
  useEffect(() => {
    if (!alltopics_Response) {
      dispatch(getAllTopic());
    }
  }, []);
  useEffect(() => {
    if (session?.data?.user) {
      const formdata = {
        name: session?.data?.user?.name,
        email: session?.data?.user?.email,
      };
      dispatch(googleAuthenticate(formdata));
    }
  }, [session?.data?.user]);

  return (
    <div>
      <>
        <section id="hero" className="d-flex align-items-center">
          <div
            className="container position-relative"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9 text-center">
                <h1>Welcome to Iblog !</h1>
                <h2>We are team of Iblog.</h2>
              </div>
            </div>
            <div className="text-center">
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
            </div>

            <div className="row icon-boxes">
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="ri-stack-line">
                      <Fa500Px />{" "}
                    </i>
                  </div>
                  <h4 className="title">
                    <a href="">Lorem Ipsum</a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="ri-palette-line">
                      <FaAccusoft />
                    </i>
                  </div>
                  <h4 className="title">
                    <a href="">Sed ut perspiciatis</a>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="ri-command-line">
                      <FaAffiliatetheme />
                    </i>
                  </div>
                  <h4 className="title">
                    <a href="">Magni Dolores</a>
                  </h4>
                  <p className="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="ri-fingerprint-line">
                      <FaAirbnb />
                    </i>
                  </div>
                  <h4 className="title">
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TimeLine />
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about px-8">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About Us</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem.{" "}
              </p>
            </div>

            <div className="row content">
              <div className="col-lg-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line">
                      <FaCheckDouble />
                    </i>{" "}
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </li>
                  <li>
                    <i className="ri-check-double-line">
                      <FaCheckDouble />
                    </i>{" "}
                    Duis aute irure dolor in reprehenderit in voluptate velit
                  </li>
                  <li>
                    <i className="ri-check-double-line">
                      <FaCheckDouble />
                    </i>{" "}
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a href="#" className="btn-learn-more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="150">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>
            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {alltopics_Response &&
                alltopics_Response?.records?.map((val, Tkey) => (
                  <div
                    className="col-lg-4 col-md-6 portfolio-item filter-app "
                    key={Tkey}
                  >
                    <div className="portfolio-wrap d-block h-75 fixed-height-image">
                      <img src={val?.imgurl} className="img-fluid" alt="" />
                      <div className="portfolio-info pointer">
                        <h4>{val?.title}</h4>
                        <p>{val?.description}</p>
                        <div className="portfolio-links">
                          <a
                            href="assets/img/portfolio/portfolio-1.jpg"
                            data-gallery="portfolioGallery"
                            className="portfolio-lightbox"
                            title="App 1"
                          >
                            <i className="bx bx-plus"></i>
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bx bx-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Contact</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div>
              <iframe
                style={{ border: "0", width: "100%", height: "270px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114289.64404899447!2d74.55087521201493!3d26.470186257389123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be6540d33f475%3A0x72884a3dc10a061b!2siBirds%20Software%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1692008065797!5m2!1sen!2sin"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <div class="row mt-5">
              <div class="col-lg-4">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>
                      Shreenath Mall In Ajmer 32****** <br />
                      Near About Bajrang Garh Chouraha.
                    </p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>Abcd@gail.com</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 7987*****86</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-8 mt-5 mt-lg-0">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  class="php-email-form"
                >
                  <div class="row gy-2 gx-md-3">
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div class="col-md-6 form-group">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div class="form-group col-12">
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div class="form-group col-12">
                      <textarea
                        class="form-control"
                        name="message"
                        rows="5"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div class="my-3 col-12">
                      <div class="loading">Loading</div>
                      <div class="error-message"></div>
                      <div class="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div class="text-center col-12">
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
      {form == "Login" && <LogIn pageHandler={pageHandler} />}
      {form == "Signup" && <Signup pageHandler={pageHandler} />}
    </div>
  );
};

export default index;

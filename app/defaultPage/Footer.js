import React from "react";
import {
  FaGooglePlay,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
  FaStaylinked,
} from "react-icons/fa6";
import { SiSkype } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-contact">
                <h3>Iblog</h3>
                <p>
                  Shreenath Mall <br />
                  In Ajmer 32******
                  <br />
                  Near About Bajrang
                  <br /> Garh Chouraha.
                  <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Product Management</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="container d-md-flex py-4">
          <div class="me-md-auto text-center text-md-start">
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Iblog</span>
              </strong>
              . All Rights Reserved
            </div>
            <div class="credits">
              {/* <!-- All the links in the footer should remain intact. -->
      <!-- You can delete the links only if you purchased the pro version. -->
      <!-- Licensing information: https://bootstrapmade.com/license/ -->
      <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/onepage-multipurpose-bootstrap-template/ --> */}
              Designed by{" "}
              <a href="https://github.com/Emmu0/nextjs_crud_ibirds/tree/master/pages/api/auth/%5B...nextauth%5D">
                BootstrapMade
              </a>
            </div>
          </div>
          <div class="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="p-2">
              <FaSquareTwitter />
            </a>
            <a href="#" className="p-2">
              <FaSquareFacebook />
            </a>
            <a href="#" className="p-2">
              <FaSquareInstagram />
            </a>
            <a href="#" className="p-2">
              <FaGooglePlay />
            </a>
            <a href="#" className="p-2">
              <FaStaylinked />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

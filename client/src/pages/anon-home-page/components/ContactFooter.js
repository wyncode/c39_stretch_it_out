import React from 'react';
import { Form, Button } from 'react-bootstrap';
import FacebookIcon from '../../../images/facebook-icon.png';
import InstgramIcon from '../../../images/instgram-icon.png';
import TwitterIcon from '../../../images/twitter-icon.png';
import YoutubeIcon from '../../../images/youtube-icon.png';

const ContactFooter = () => {
  return (
    <div className="followUsContainer">
      <div className="followUsWrapper">
        <div className="signUp">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="formText">
                SIGN UP TO GET THE LATEST TIPS
              </Form.Label>
              <Form.Control type="email" placeholder="Your email" />
            </Form.Group>
            <Button variant="light" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="followUsIcons">
          <p className="followUsText">FOLLOW US</p>
          <ul className="social">
            <li className="socialIcon">
              <img src={InstgramIcon} alt="instagram icon" />
            </li>
            <li className="socialIcon">
              <img src={YoutubeIcon} alt="youtube icon" />
            </li>
            <li className="socialIcon">
              <img src={FacebookIcon} alt="facebook icon" />
            </li>
            <li className="socialIcon">
              <img src={TwitterIcon} alt="twitter icon" />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="contactBar">
          <li className="contactItem">
            <a href>Home</a>
          </li>
          <li className="contactItem">
            <a href>Privacy Policy</a>
          </li>
          <li className="contactItem">
            <a href>Terms of Service</a>
          </li>
          <li className="contactItem">
            <a href>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactFooter;

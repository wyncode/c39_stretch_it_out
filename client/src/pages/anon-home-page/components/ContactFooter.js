import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
              <Form.Control
                className="formInput"
                type="email"
                placeholder="Your email"
              />
            </Form.Group>
            <Button variant="light" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="followUsIcons">
          <p className="followUsText">FOLLOW US</p>
          <ul className="social">
            <Link to="www.instagram.com">
              {' '}
              <li className="socialIcon">
                <img src={InstgramIcon} alt="instagram icon" />
              </li>
            </Link>
            <Link to="www.youtube.com">
              <li className="socialIcon">
                <img src={YoutubeIcon} alt="youtube icon" />
              </li>
            </Link>
            <Link to="www.facebook.com">
              <li className="socialIcon">
                <img src={FacebookIcon} alt="facebook icon" />
              </li>
            </Link>
            <Link to="www.twitter.com">
              <li className="socialIcon">
                <img src={TwitterIcon} alt="twitter icon" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="contactWrapper">
        <ul className="contactBar">
          <li className="contactItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="contactItem">
            <Link className="link" to="/">
              Privacy Policy
            </Link>
          </li>

          <li className="contactItem">
            <Link className="link" to="/">
              Terms of Service
            </Link>
          </li>
          <li className="contactItem">
            <Link className="link" to="/">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactFooter;

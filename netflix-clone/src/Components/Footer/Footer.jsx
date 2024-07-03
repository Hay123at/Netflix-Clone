import React from 'react'
import './footer.css'
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div>
      <div className="footer-outer-wrapper">
        <div>
          <div className="mui-Wrapper">
            <FacebookRoundedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>
        <div className="footer-lists">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Term of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <div className="Service">
            <p>Service Code</p>
          </div>

          <p>&copy; 1997-2024 Netflix, Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer
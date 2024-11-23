import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import pic from '../assets/images/sachin3.jpg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" /> */}
          <img src={pic} alt="thumbnail" />
        </div>
        <div className="content">
          <div className="social_icons">
          <h1>Sachin Kulkarni</h1>
            <a href="https://www.linkedin.com/in/sachinkulkarni17/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
         
          <p>DevOps Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/sachinkulkarni17/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
import React from 'react';
import './ProfilePage.css'; // Import the CSS file

const ProfilePage = () => {
  return (
    <div className="profile-page">
      {/* Header Section */}
      <header className="header">
        <h1>My Profile</h1>
      </header>

      {/* Profile Section */}
      <div className="profile-content">
        {/* Profile Picture */}
        <div className="profile-picture">
          <img
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Profile"
          />
        </div>

        {/* Name, Username, Job Description, and Languages */}
        <div className="profile-details">
          <h2 className="name">Viktoria Smith</h2> {/* Your Name */}
          <p className="username">@viktoria123</p> {/* Your Username */}
          <p className="job-description">
            Frontend Developer | Building interactive and user-friendly web applications.
          </p>
          <p className="languages">
            <strong>Spoken Languages:</strong> Bulgarian, English, Deutsch, French
          </p>
        </div>
      </div>

      {/* Three Sections: About Me, Skills, Experience */}
      <div className="profile-sections">
        {/* About Me */}
        <section className="about-me">
          <h3>About Me</h3>
          <p>
            Hi! I'm Viktoria, a passionate frontend developer with experience in building
            clean, user-friendly web interfaces. I love turning designs into interactive
            web pages using modern web technologies like React.js.
          </p>
        </section>

        {/* Skills */}
        <section className="skills">
          <h3>Skills</h3>
          <ul>
            <li>HTML5, CSS3, and JavaScript (ES6+)</li>
            <li>React.js & Redux</li>
            <li>Responsive Web Design</li>
            <li>Git and Version Control</li>
            <li>API Integration & RESTful Services</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="experience">
          <h3>Experience</h3>
          <p>
            <strong>Frontend Developer</strong> - Tech Solutions Inc. (2022 - Present)
            <br />
            Collaborated with designers to implement responsive and user-friendly web
            applications using React.js and modern JavaScript features.
          </p>
          <p>
            <strong>Web Developer Intern</strong> - Innovatech (2021 - 2022)
            <br />
            Built and optimized interactive landing pages while ensuring cross-browser
            compatibility and responsiveness.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;

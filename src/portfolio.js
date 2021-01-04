/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Kyle McShea",
  title: "Hi, I'm Kyle",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 having experience with building Web/Mobile applications with Reactjs, data collection via Puppeteer, cool libraries, and frameworks for various projects."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kylemcshea",
  linkedin: "https://www.linkedin.com/in/kylemcshea/",
  gmail: "kmcshea@uplink.nyc",
  facebook: "https://www.facebook.com/kyle.l.mcshea",
  instagram: "https://www.instagram.com/kylemcshea17/",
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Web scraping/automation through the usage of puppeteer and selenium"
    ),
    emoji(
      "⚡ Utilize Arduino/raspberry pi frameworks to build out IoT projects"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Stevens Institute of Technology",
      logo: require("./assets/images/stevenslogo.png"),
      subHeader: "Bachelor of Engineering in Software Engineering",
      duration: "August 2017 - May 2021",
      desc: "Minor in Computer Science",
      descBullets: ["Concentration in Data Science and Knowledge Discovery"],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Intellectual Curiosity",
      progressPercentage: "100%",
    },
    {
      Stack: "Web Scraping",
      progressPercentage: "97%",
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "78%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "73%",
    },
    {
      Stack: "Arduino/Raspberry Pi",
      progressPercentage: "67%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front End Engineer",
      company: "Estee Lauder Companies",
      companylogo: require("./assets/images/elc.png"),
      date: "June 2020 – August 2021",
      desc:
        "Worked an internship with the ELC Online Front-End development team",
      descBullets: [
        "Created a full stack development replicating the e-commerce site utilizing React, Typescript, and Mobx to achieve the end goal.",
        "Incorporated tools such as search functionality, product landing page, store locator, product detail pages, holiday sales, and best sellers.",
      ],
    },
    {
      role: "Information Security Analyst",
      company: "K2 Integrity",
      companylogo: require("./assets/images/k2.jpg"),
      date: "May 2018-August 2018, August 2019-December 2019",
      desc:
        "Worked two internships with the Security Operations Center @ K2 Integrity",
      descBullets: [
        "Led a project targeted to deploy the most efficient third-party patching solution to be used on both the internal network and client-facing network. Discussed with vendors and ran POC’s to evaluate products.",
        "Monitored networks for any malicious activity and worked in the SOC. Ran threat intel and utilized networking fundamentals to evaluate anomaly alerts.",
        "Created power BI reports to analyze phishing campaign statistics as well as Human Resources statistics.",
      ],
    },
    {
      role: "Back-End Developer",
      company: "UPS",
      companylogo: require("./assets/images/ups.jpg"),
      date: "Jan 2015 – Sep 2015",
      desc:
        "Worked an internship with the Enterprise Business Intelligence department",
      descBullets: [
        "Converted 9 back-end reporting programs from Coldfusion to SSIS in order to reduce technical debt.",
        "Managed a team of interns to recreate a full stack development within the intern requisition portal. Placed as top ten finalist of 28 total teams.",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/posh.jpg"),
      link: "http://posh.vip/",
    },
    {
      image: require("./assets/images/uplink.png"),
      link: "https://uplink.nyc/",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {};

// Blogs Section

const blogSection = {
  blogs: [],
};

// Talks Sections

const talkSection = {
  talks: [],
};

// Podcast Section

const podcastSection = {};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "‪(315) 965-2132‬",
  emailAddress: "kyle@uplink.nyc",
};

// Twitter Section

const twitterDetails = {};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 
};

const illustration = {
  animated: true 
};

// Greeting Section

const greeting = {
  username: "Blessing",
  title: "Hi, I'm Blessing",
  subTitle:emoji (
    "A passionate Full Stack Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / MongoDB."
  ),
  resumeLink:
    "https://drive.google.com/file/d/17fh4VVVuAllGCGri6ItmMrtH9-N96DGi/view?usp=sharing", 
  displayGreeting: true 
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Developing highly interactive Front end / User Interfaces for web applications"
    ),
    emoji("⚡ Developing back end web applications."),
    emoji(
      "⚡ Creating servers and databases for functionality."
    ),
    emoji(
      "⚡ Ensuring responsiveness of applications."
    ),
    emoji(
      "⚡ Designing and developing APIs."
    ),
      emoji(
        "⚡Staying abreast of developments in web applications and programming languages."
    )
  ],

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS-3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
  {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "My SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Aws",
      fontAwesomeClassname: "fab fa-aws"
    },
   
  
  ],
  display: true // 
};

// Education Section

const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Einstein College of Engineering",
      logo: require("./assets/images/einstein.png"),
      subHeader: "Electronics and Communication Engineering",
      duration: "2011-2015",
    },
  ]
};

// proficient section

const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "90%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
   ],
  displayCodersrank: false 
};

const openSource = {
  showGithubProfile: "true", 
  display: true 
};

// Projects Section

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/calculator.png"),
      projectName: "Calculator Application",
     
      footerLink: [
        {
          name: "Watch Live",
          
          url: "https://clever-heyrovsky-813552.netlify.app/"
        },
        {
          name: "Front-end",
          url: "https://github.com/BlessingJeff/ZenDay19ACalculator"
          
        }
      ]
    },
    {
      image: require("./assets/images/moneymanager.png"),
      projectName: "Money Manager Application",
      footerLink: [
        {
          name: "Watch Live",
          url: "https://romantic-booth-0e4c4d.netlify.app/"
        },
        {
          name: "Front-end",
          url: "https://github.com/BlessingJeff/money-manager-frontend"
        },
        {
        name: "Back-end",
        url: "https://github.com/BlessingJeff/money-manager-backend"
        }
      ]
    },
    {
      image: require("./assets/images/chat.png"),
      projectName: "Chat Application",
      footerLink: [
        {
          name: "Watch Live",
          url: "https://admiring-hawking-06f45e.netlify.app/"
        },
        {
          name: "Front-end",
          url: "https://github.com/BlessingJeff/Chat-Application-Frontend"
        },
        {
        name: "Back-end",
        url: "https://github.com/BlessingJeff/chat-application-backend-node"
        }
      ]
    },
    {
      image: require("./assets/images/journals.png"),
      projectName: "Journals-DailyLife",
      footerLink: [
        {
          name: "Watch Live",
          url: "https://journals-dailylife.netlify.app/"
        },
        {
          name: "Front-end",
          url: "https://github.com/BlessingJeff/Journals-React.git" 
        },
        {
        name: "Back-end",
        url: "https://github.com/BlessingJeff/Journals-NodeJS.git"
        }
      ]
    },
    {
      image: require("./assets/images/tour.png"),
      projectName: "Touropedia",
      footerLink: [
        {
          name: "Watch Live",
          url: "https://touropedias.netlify.app/"
        },
        {
          name: "Front-end",
          url: "https://github.com/BlessingJeff/Touropedia-Client"
        },
        {
        name: "Back-end",
        url: "https://github.com/BlessingJeff/Touropedia-Server"
        }
      ]
    },
    {
      image: require("./assets/images/dictionary.png"),
      projectName: "Dictionary Application",
      footerLink: [
        {
          name: "Watch Live",
          url: "https://creative-churros-7de1d7.netlify.app/"
        },
        {
          name: "Front-end",
          url: "https://github.com/BlessingJeff/Dictionary-React"
        }
      ]
    }
  ],
  display: true 
};

//Contact Section

const contactInfo = {
title: emoji("Contact Me ☎️"),
 
number: "+917708177745",
 
email_address: "blessing.dx@gmail.com",
  
};

//SocialMedia Section

const socialMediaLinks = {
  github: "https://github.com/blessingjeff",
  linkedin: "https://www.linkedin.com/in/blessingjeff/",
  
   display: true 
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  contactInfo,
};

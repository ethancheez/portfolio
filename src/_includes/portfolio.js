const _BIO = {
  name: "Ethan Chee",
  summary:
    "I am an Electrical and Computer Engineer with a passion for aerospace development and research. My specialties are in Flight Software and Embedded Systems.",
  profilePicture: "https://github.com/ethancheez.png",
  email: "ethanwc@hawaii.edu", // Optional
  github: "https://github.com/ethancheez", // Optional
  linkedin: "https://www.linkedin.com/in/ethancheez/", // Optional

  education: [
    {
      _id: 1,
      institution: "University of Hawaii at Mānoa",
      logoURL:
        "https://manoa.hawaii.edu/speakers/wp-content/uploads/logo-1-1030x1030.png",
      field: "Electrical Engineering",
      degree: "Master of Science",
      startDate: "2023-01-09", // Enter valid date format
      endDate: "2023-12-16", // Enter valid date format
      gpa: "4.00",
      summary: "", // Optional
      organizations: [
        {
          name: "IEEE - Eta Kappa Nu (HKN) Delta Omega Chapter",
          position: "Bridge Correspondant",
        },
      ], // Optional
    },
    {
      _id: 2,
      institution: "University of Hawaii at Mānoa",
      logoURL:
        "https://manoa.hawaii.edu/speakers/wp-content/uploads/logo-1-1030x1030.png",
      field: "Computer Engineering",
      degree: "Bachelor of Science",
      startDate: "2019-08-01", // Enter valid date format
      endDate: "2022-12-17", // Enter valid date format
      gpa: "3.90",
      summary: "", // Optional
      organizations: [
        {
          name: "IEEE - Eta Kappa Nu (HKN) Delta Omega Chapter",
          position: "Bridge Correspondant",
        },
        { name: "Tau Beta Pi - The Engineering Honor Society", position: "" },
        { name: "Technology Outreach Hawaii (TORCH)", position: "Mentor" },
        { name: "ICSpark", position: "Mentor" },
      ], // Optional
    },
  ],
};

const _WORK = [
  {
    _id: 7,
    company: "Hawaii Space Flight Laboratory",
    position: "Graduate Research Assistant",
    website: "https://www.hsfl.hawaii.edu/",
    logoURL:
      "https://www.hsfl.hawaii.edu/wp-content/uploads/2019/01/cropped-cropped-unnamed-2.png",
    startDate: "2023-01-01",
    endDate: "2023-12-15",
    summary:
      "Assisted in the flight software and communications development of the NASA HyTI (Hyperspectral Thermal Imager) mission and Artemis CubeSat Kit. The research focus was on uplink/downlink encryption using AES-GCM, as well as a literature review on ideal flight software frameworks, comparing HSFL’s COSMOS and JPL’s F Prime.",
    skills: [
      "COSMOS",
      "OpenSSL",
      "AES Encryption",
      "F Prime",
      "Embedded Systems",
    ],
  },
  {
    _id: 6,
    company: "NASA Jet Propulsion Laboratory",
    position: "Small Scale Flight Software Engineer Intern",
    website: "https://www.jpl.nasa.gov/",
    logoURL:
      "https://m.media-amazon.com/images/I/41nRavye9CL._AC_UF894,1000_QL80_.jpg",
    startDate: "2023-05-15",
    endDate: "2023-08-04",
    summary:
      "Expanded support for the F´ flight software framework on baremetal hardware. A sizing utility was developed to assist in scoping the memory usage of F´ components and alter the size of data structures accordingly. Created an F´ deployment for JPL’s Open Source Rover (OSR). I have also contributed to the infrastructure of core F´.",
    skills: ["F Prime", "Flight Software", "Embedded Systems"],
  },
  {
    _id: 5,
    company: "Hawaii Space Flight Laboratory",
    position: "Satellite Software Assistant",
    website: "https://www.hsfl.hawaii.edu/",
    logoURL:
      "https://www.hsfl.hawaii.edu/wp-content/uploads/2019/01/cropped-cropped-unnamed-2.png",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    summary:
      "Conducted tests on electrical hardware for the Artemis CubeSat Kit to ensure they are ready for flight software integration. My focuses involved radio communications, interfacing with the I2C, SPI, and UART protocols, and integrating the Power Distribution Unit (PDU) and On-Board Computer (OBC).",
    skills: [
      "COSMOS",
      "Microchip MPLAB",
      "Radio Frequency",
      "Embedded Systems",
    ],
  },
  {
    _id: 4,
    company: "University of Hawaii at Mānoa",
    position: "Instructional Computing Assistant",
    website: "",
    logoURL:
      "https://manoa.hawaii.edu/speakers/wp-content/uploads/logo-1-1030x1030.png",
    startDate: "2021-05-01",
    endDate: "2023-08-01",
    summary:
      "Developed and maintaining two websites for the Office of Multicultural Student Services using HTML, CSS, PHP, and UI Frameworks. One site is a COVID-19 research study at JABSOM and the other is a student program for incoming freshman.",
    skills: ["HTML/CSS", "PHP"],
  },
  {
    _id: 3,
    company: "DataHouse Consulting",
    position: "Software Engineer Intern",
    website: "https://www.datahouse.com/",
    logoURL:
      "https://scontent.fhnl1-1.fna.fbcdn.net/v/t39.30808-6/294426365_421359643344452_3251345208636597643_n.png?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Bgz6HLXi7hoAX-6vVS1&_nc_ht=scontent.fhnl1-1.fna&oh=00_AfDmPMejBQdj5sN7t8lSwDjbLI6P6PSVNU82X7J_CDi8mA&oe=65FEF09A",
    startDate: "2022-07-04",
    endDate: "2022-08-05",
    summary:
      "Developed a donation management system for a non-profit organization using web development tools, including MySQL databases. The application improved the business process by 16% and had a 96.43% user acceptance rating.",
    skills: ["HTML/CSS", "PHP", "MySQL"],
  },
  {
    _id: 2,
    company: "UH Mānoa Chemistry Department",
    position: "Learning Assistant",
    website: "",
    logoURL:
      "https://manoa.hawaii.edu/speakers/wp-content/uploads/logo-1-1030x1030.png",
    startDate: "2020-01-01",
    endDate: "2021-12-17",
    summary:
      "Facilitated multiple weekly recitation sessions teaching General Chemistry to 80 - 100 students per semester. Engaged with students using active communication skills and practiced different teaching strategies based on their learning styles.",
    skills: [],
  },
  {
    _id: 1,
    company: "UH Mānoa College of Engineering",
    position: "Teaching Assistant",
    website: "https://www.eng.hawaii.edu/",
    logoURL:
      "https://scontent.fhnl1-1.fna.fbcdn.net/v/t39.30808-6/370583456_1018177509576285_92730607934660585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9R9ZDDxgPboAX-wHbbm&_nc_ht=scontent.fhnl1-1.fna&oh=00_AfAHBUY-cB_WGaKhdS3amU9cvGZELM6fuvQu-WKG4_EEWA&oe=65FDB3F4",
    startDate: "2020-08-01",
    endDate: "2020-12-18",
    summary:
      "Lectured 20 students in an introductory programming class in C (EE 160 - Programming for Engineers) during lab hours. Evaluated and assigned grades to students based on their coding output and the course curriculum.",
    skills: [],
  },
];

const _PROJECTS = [
  {
    title: "LahainaSim",
    completionDate: "2023-11-18", // "Present" if in progress
    imageURL: "img/projects/lahainasim.png",
    githubURL: "https://github.com/ethancheez/LahainaSim",
    website: "",
    summary: "Meteor application developed during the 2023 Hawaiʻi Annual Code Challenge (HACC). Lahaina Sim is an interactive web application designed to foster creativity and community engagement in the aftermath of the devastating wildfires that swept through Lahaina. The project won 1st place overall in the Coded Challenge and won the People's Choice award.",
  },
  {
    title: "Artemis CubeSat Kit",
    completionDate: "2023-12-31", // "Present" if in progress
    imageURL: "img/projects/keao-cubesat.jpg",
    githubURL: "https://github.com/fprime-community/fprime-artemis-cubesat/tree/dev",
    website: "https://franceszhu.space/artemis-cubesat-kit",
    summary: "A low-cost 1U CubeSat designed for educational outreach. The spacecraft was designed to have space flight capabilities, including onboard computing, radio communications, and dynamic sensing. I was a primary developer for the flight software of the 1U CubeSat in both the COSMOS and F Prime frameworks.",
  },
  {
    title: "Deployment of F Prime using the Zephyr Real Time Operating System",
    completionDate: "2023-08-04", // "Present" if in progress
    imageURL: "img/projects/fprime-x-zephyr.png",
    githubURL: "https://github.com/fprime-community/fprime-zephyr-led-blinker",
    website: "",
    summary: "The F Prime flight software framework was expanded to work with the Zephyr Real-time Operating System (ZephyrRTOS). A Zephyr OS abstraction layer was created to allow the core F Prime components to properly execute.",
  },
  {
    title: "Deployment of F Prime on Baremetal Embedded Systems",
    completionDate: "2023-08-04", // "Present" if in progress
    imageURL: "img/projects/fprime-logo.png",
    githubURL: "https://github.com/fprime-community/fprime-baremetal-reference",
    website: "https://fprime-community.github.io/fprime-tutorial-arduino-blinker/",
    summary: "Created a flight software reference for baremetal embedded systems using NASA JPL's F Prime flight software framework. The reference included a deployment with minimal, but essential components that are compatible with hardware with limited resources. Such boards include PJRC's Teensy boards, Raspberry Pi Pico (RP2040), ESP32, Feather M0, and much more. Ultimately, it was determined that the minimum system requirements for a feasible F Prime deployment is 150 KB of FLASH memory and 30 KB of RAM.",
  },
  {
    title: "Ke Ao: A Low-Cost 1U CubeSat for Aerospace Education and Research in Hawai’i",
    completionDate: "2021-01-01", // "Present" if in progress
    imageURL: "img/projects/keao-cubesat.jpg",
    githubURL: "https://github.com/ethancheez/KeAo-Artemis",
    website: "https://www.teamlaniakea.com/",
    summary: "Contributed to a 1U CubeSat that will be launched into space and is capable of remote sensing. I was the software lead of the project who managed the flight software development and radio communication testing using UHF radios.",
  },
  {
    title: "Lightweight Wearable Device to Improve Safety for the Blind",
    completionDate: "2019-05-01", // "Present" if in progress
    imageURL: "img/projects/stem-capstone.png",
    githubURL: "",
    website: "https://ethancheez.github.io/STEM-Capstone-Project/",
    summary: "Built a sensing device using Arduino to help improve the safety for the Blind. This was recognized at the 62nd Hawaii State Science and Engineering Fair.",
  },
];

const _PAPERS = [
  {
    title: "Flight Software Architectures for Safe and Sustainable Missions",
    pdfURL: "papers/Flight_Software_Architectures_for_Safe_and_Sustainable_Missions.pdf",
    abstract: "Flight software implementation into satellites is critical for a mission’s success. This paper discusses the requirements for a reliable flight software framework and how current frameworks implement these standards. Ideally, a safe and sustainable framework must have modularity, portability, a small footprint, unit testing capabilities, a standardized packet protocol, and documentation. Of the existing frameworks analyzed, COSMOS and F Prime were implemented into the HyTI and Artemis CubeSat kit. Additionally, AES encryption was implemented and analyzed with the COSMOS framework and tested with flight hardware for the HyTI mission. Results show that cryptography does not affect the likelihood of packet loss. Since COSMOS was determined to not meet all of the flight software requirements defined by the ideal architecture, the framework will be improved after the delivery of HyTI.",
  },
  {
    title: "The Feasibility of Radio Frequency Attacks on Spacecraft and Ground Data Systems",
    pdfURL: "papers/The_Feasibility_of_Radio_Frequency_Attacks_on_Spacecraft_and_Ground_Data_Systems.pdf",
    abstract: "A study was performed on the feasibility of a denial-of-service (DoS) attack on ground station networks for spacecraft telecommunications. Any spacecraft uplink and downlink are conducted through radio frequency (RF) and various modulation protocols, all of which do not have origin and destination identification characteristics. To simulate a spacecraft to ground station network, the tests were conducted using the ground data system from the F Prime open-source flight software and embedded systems framework developed by NASA’s Jet Propulsion Laboratory (JPL). Short range ultra-high frequency (UHF) radios operating at 915 MHz were used to simulate a DoS attack on a ground station. As a result, the communication protocol should be designed such that the software can discriminate between legitimite and malformed packets. Attempts to mitigate packet loss from RFnoise was explored, including modifying preamble lengths, synchronization words, and hardware encryption.",
  },
  {
    title: "Ferrofluid Controlled Liquid Metal IRS Unit Cell",
    pdfURL: "papers/Ferrofluid_Controlled_Liquid_Metal_IRS_Unit_Cell.pdf",
    abstract: "A functioning design for an intelligent reflective surface (IRS) was achieved between two states of a ferrofluid-actuated Galinstan slug. Reflection angle control from -13.3° to 90° was calculated to be feasible using the Generalized Snell's Law at a frequency of 8.3 GHz with an AABB unit cell configuration.",
  },
];

const _PORTFOLIO = {
  _BIO,
  _WORK,
  _PROJECTS,
  _PAPERS,
};

export default _PORTFOLIO;

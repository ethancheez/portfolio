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
        { name: "IEEE - Eta Kappa Nu (HKN) Delta Omega Chapter", position: "Bridge Correspondant" },
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
        { name: "IEEE - Eta Kappa Nu (HKN) Delta Omega Chapter", position: "Bridge Correspondant" },
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
      logoURL: "https://www.hsfl.hawaii.edu/wp-content/uploads/2014/07/HSFL-LOGO-LARGE-300dpi-2x2in.png",
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
      logoURL: "https://m.media-amazon.com/images/I/41nRavye9CL._AC_UF894,1000_QL80_.jpg",
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
      logoURL: "https://www.hsfl.hawaii.edu/wp-content/uploads/2014/07/HSFL-LOGO-LARGE-300dpi-2x2in.png",
      startDate: "2022-01-01",
      endDate: "2022-12-31",
      summary: "Conducted tests on electrical hardware for the Artemis CubeSat Kit to ensure they are ready for flight software integration. My focuses involved radio communications, interfacing with the I2C, SPI, and UART protocols, and integrating the Power Distribution Unit (PDU) and On-Board Computer (OBC).",
      skills: ["COSMOS",
      "Microchip MPLAB",
      "Radio Frequency",
      "Embedded Systems"],
    },
    {
      _id: 4,
      company: "University of Hawaii at Mānoa",
      position: "Instructional Computing Assistant",
      website: "",
      logoURL: "https://manoa.hawaii.edu/speakers/wp-content/uploads/logo-1-1030x1030.png",
      startDate: "2021-05-01",
      endDate: "2023-08-01",
      summary: "Developed and maintaining two websites for the Office of Multicultural Student Services using HTML, CSS, PHP, and UI Frameworks. One site is a COVID-19 research study at JABSOM and the other is a student program for incoming freshman.",
      skills: ["HTML/CSS", "PHP"],
    },
    {
      _id: 3,
      company: "DataHouse Consulting",
      position: "Software Engineer Intern",
      website: "https://www.datahouse.com/",
      logoURL: "https://scontent.fhnl1-1.fna.fbcdn.net/v/t39.30808-6/294426365_421359643344452_3251345208636597643_n.png?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Bgz6HLXi7hoAX-6vVS1&_nc_ht=scontent.fhnl1-1.fna&oh=00_AfDmPMejBQdj5sN7t8lSwDjbLI6P6PSVNU82X7J_CDi8mA&oe=65FEF09A",
      startDate: "2022-07-04",
      endDate: "2022-08-05",
      summary: "Developed a donation management system for a non-profit organization using web development tools, including MySQL databases. The application improved the business process by 16% and had a 96.43% user acceptance rating.",
      skills: ["HTML/CSS", "PHP", "MySQL"],
    },
    {
      _id: 2,
      company: "UH Mānoa Chemistry Department",
      position: "Learning Assistant",
      website: "",
      logoURL: "https://manoa.hawaii.edu/speakers/wp-content/uploads/logo-1-1030x1030.png",
      startDate: "2020-01-01",
      endDate: "2021-12-17",
      summary: "Facilitated multiple weekly recitation sessions teaching General Chemistry to 80 - 100 students per semester. Engaged with students using active communication skills and practiced different teaching strategies based on their learning styles.",
      skills: [],
    },
    {
      _id: 1,
      company: "UH Mānoa College of Engineering",
      position: "Teaching Assistant",
      website: "https://www.eng.hawaii.edu/",
      logoURL: "https://scontent.fhnl1-1.fna.fbcdn.net/v/t39.30808-6/370583456_1018177509576285_92730607934660585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9R9ZDDxgPboAX-wHbbm&_nc_ht=scontent.fhnl1-1.fna&oh=00_AfAHBUY-cB_WGaKhdS3amU9cvGZELM6fuvQu-WKG4_EEWA&oe=65FDB3F4",
      startDate: "2020-08-01",
      endDate: "2020-12-18",
      summary: "Lectured 20 students in an introductory programming class in C (EE 160 - Programming for Engineers) during lab hours. Evaluated and assigned grades to students based on their coding output and the course curriculum.",
      skills: [],
    },
  ];

const _PORTFOLIO = {
    _BIO,
    _WORK,
}

export default _PORTFOLIO;

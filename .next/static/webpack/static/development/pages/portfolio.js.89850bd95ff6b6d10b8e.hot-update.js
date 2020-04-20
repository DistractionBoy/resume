webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./data/db/database.js":
/*!*****************************!*\
  !*** ./data/db/database.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock */ "./data/mock.js");

var database = {
  information: {
    name: 'Jason Pierce',
    aboutContent: "Passionate about presentation, I am a Sr. Software Engineer with an eye for design and a side-gig as a multimedia freelancer.",
    age: 35,
    phone: '(703) 789-5247',
    nationality: 'American',
    language: 'English, German',
    email: '',
    address: 'Warrenton, VA, USA',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://facebook.com/SponHumanProd',
      twitter: 'https://twitter.com/DistractionBoy_',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/jason-pierce/',
      dribbble: '',
      github: 'https://github.com/jason-pierce-designs'
    },
    brandImage: '/images/profile-pic.png',
    aboutImage: '/images/about-image-sm.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/jasonPierceCV.pdf'
  },
  services: [{
    title: "Web Development",
    icon: 'fa fa-code',
    details: "Experience as both a full time Developer (W-2) and a discreet subcontractor "
  }, {
    title: "Project Management",
    icon: 'fa fa-project-diagram',
    details: "Delivering incrementally and often, my clients do not feel disconnected from their project."
  }, {
    title: "Photography",
    icon: 'fa fa-camera',
    details: "Event, product, and portrait photographer with over 10 years of professional experience."
  }],
  reviews: [{
    id: 1,
    content: "I won't forget how Jason saved the day when my team was struggling with a bad \n                email template we inherited at the 11th hour of launching. We approached Jason asking \n                if he knew who could help but he stepped \n                in and helped us resolve the issue quickly while teaching us some new HTML tricks to \n                improve deliverability and engagement. Errors went from 18 to 0, and we \n                optimized the layout for mobile screens as well. He took the time to figure \n                out the issues, and he set up a couple \n                training sessions to empower my team. It was more than we \n                asked for\u2013\u2013and certainly more than most people would have done in his position.",
    author: {
      name: 'Ifdy Perez',
      designation: 'Marketing Director'
    }
  }, {
    id: 2,
    content: "Jason would be a great addition to any front end team, or team needing front-end \n                development. He has a great sense of humor and a unique perception that allows him to ask \n                good questions in a non threatening way that gets answers. I was impressed with Jason\u2019s \n                understanding of progressive enhancements for web pages (ie - optimizing website \n                presentation based on screen size). I was equally impressed with his knowledge of how \n                to make UIs accessible (for section 508 compliance), the presentations he gave to us \n                on accessibility and his insistence that the company take it seriously!",
    author: {
      name: 'Fred Biden',
      designation: 'Project Engineer'
    }
  }, {
    id: 3,
    content: "Jason was my student in the Advanced Database class and stood out as a very engaged, \n                inquisitive and grounded student. It was clear from the quality of his assignments \n                that he has a flair for programming and design. He is also able to apply newer \n                technologies in UI/UX design to real-world scenarios quickly - a rare trait that I \n                have leveraged by having him give talks in my class on UI technologies, careers \n                and just life in IT. He never disappoints - this is evident by the intense student \n                engagement he garners every time he speaks. Thank you Jason for readily agreeing \n                each semester to share your experience with my students.",
    author: {
      name: 'Manju Aravind',
      designation: 'Seasoned IT Practitioner'
    }
  }, {
    id: 4,
    content: "I had the privilege of working with Jason on the same scrum team for over a year. \n                He was always prepared and provided \n                valuable feedback during grooming and planning sessions. Jason is detail oriented and always \n                takes the initiative to go the extra mile to provide the best user experience within the \n                product. He worked closely with our Design team to re-architect a scheduling feature within \n                the app to provide not only a better user experience but also made sure the technical design \n                was scaleable. He is always willing to jump in and help even if it's not something he is \n                currently working on to help his team.",
    author: {
      name: 'Archana Josaitas',
      designation: 'Product Director'
    }
  }],
  skills: [{
    title: "HTML/CSS/SASS",
    value: 95
  }, {
    title: "JavaScript (ESX)",
    value: 88
  }, {
    title: "React",
    value: 83
  }, {
    title: "Redux",
    value: 84
  }, {
    title: "Angular (1.x)",
    value: 90
  }, {
    title: "Node",
    value: 70
  }, {
    title: "Google Maps API",
    value: 93
  }, {
    title: "Material-UI/Bootstrap",
    value: 93
  }, {
    title: "Styled Components",
    value: 75
  }, {
    title: "508 Compliance",
    value: 97
  }],
  portfolios: [{
    id: 1,
    title: "All of Us",
    subtitle: "Sr. Software Engineer",
    imageUrl: "/images/portfolio/all-of-us.jpg",
    url: 'https://participant.joinallofus.org/#/register?lang=en'
  }, {
    id: 2,
    title: "Stratera Holiday Party",
    subtitle: "Event Photographer",
    imageUrl: "/images/portfolio/stratera-tech-party.jpg",
    largeImageUrl: ["/images/portfolio/stratera-technologies/holiday-party-2019-2.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-20.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-25.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-26.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-29.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-31.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-39.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-44.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-62.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-66.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-67.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-69.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-70.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-101.jpg"]
  }, {
    id: 3,
    title: "Elite Build Inc",
    subtitle: "Logo Designer",
    imageUrl: "/images/portfolio/elite-build-logo.jpg",
    largeImageUrl: ["/images/elite-build-lg.jpg"]
  }, {
    id: 4,
    title: "Surprise Engagement",
    subtitle: "Portrait Photographer",
    imageUrl: "/images/portfolio/surprise-engagement.jpg",
    largeImageUrl: ["/images/portfolio/proposal/_JMP2049.jpg", "/images/portfolio/proposal/_JMP2112.jpg", "/images/portfolio/proposal/_JMP2115.jpg", "/images/portfolio/proposal/_JMP2123.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-82.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-83.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-108.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-109.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-116.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-136.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-137.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-146.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-150.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-176.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-178.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-189.jpg"]
  }, {
    id: 5,
    title: "CPC DB | USPTO",
    subtitle: "UI Developer",
    imageUrl: "/images/portfolio/uspto-logo.jpg",
    largeImageUrl: ["/images/portfolio/cpcdb-stratera.jpg"]
  }, {
    id: 6,
    title: "Engagement Party",
    subtitle: "Event Photographer",
    imageUrl: "/images/portfolio/engagement-party.jpg",
    largeImageUrl: ["/images/portfolio/party/jaswanth-harshi-party-14.jpg", "/images/portfolio/party/jaswanth-harshi-party-15.jpg", "/images/portfolio/party/jaswanth-harshi-party-18.jpg", "/images/portfolio/party/jaswanth-harshi-party-39.jpg", "/images/portfolio/party/jaswanth-harshi-party-69.jpg", "/images/portfolio/party/jaswanth-harshi-party-70.jpg", "/images/portfolio/party/jaswanth-harshi-party-77.jpg", "/images/portfolio/party/jaswanth-harshi-party-83.jpg", "/images/portfolio/party/jaswanth-harshi-party-96.jpg", "/images/portfolio/party/jaswanth-harshi-party-101.jpg", "/images/portfolio/party/jaswanth-harshi-party-113.jpg", "/images/portfolio/party/jaswanth-harshi-party-152.jpg", "/images/portfolio/party/jaswanth-harshi-party-166.jpg", "/images/portfolio/party/jaswanth-harshi-party-176.jpg", "/images/portfolio/party/jaswanth-harshi-party-180.jpg", "/images/portfolio/party/jaswanth-harshi-party-185.jpg", "/images/portfolio/party/jaswanth-harshi-party-190.jpg", "/images/portfolio/party/jaswanth-harshi-party-192.jpg"]
  }, {
    id: 7,
    title: "Story of Our Schools",
    subtitle: "Web Developer",
    imageUrl: "/images/portfolio/story-of-our-schools.jpg",
    url: 'https://storyofourschools.org'
  }, {
    id: 8,
    title: "Mike & Kristin",
    subtitle: "Event Photographer",
    imageUrl: "/images/portfolio/mike-kristin.jpg",
    largeImageUrl: ["/images/portfolio/mike-kristin/Kristin-n-Mike-1.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-2.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-16.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-34.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-37.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-41.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-43.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-61.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-79.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-81.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-112.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-115.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-116.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-118.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-134.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-173.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-190.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-234.jpg"]
  }, {
    id: 9,
    title: "PeppiGel",
    subtitle: "Project Manager",
    imageUrl: "/images/portfolio/peppi-gel.jpg",
    url: 'https://peppigel.com'
  }, {
    id: 10,
    title: "Exxon Mobile",
    subtitle: "UI Developer",
    imageUrl: "/images/portfolio/exxon-mobile.jpg",
    largeImageUrl: ["/images/portfolio/mbil-branding.jpg"]
  }, {
    id: 11,
    title: "Cori",
    subtitle: "Portrait Photographer",
    imageUrl: "/images/portfolio/cori-portrait.jpg",
    largeImageUrl: ["/images/portfolio/cori/crusher-shoot-9.jpg", "/images/portfolio/cori/crusher-shoot-12.jpg", "/images/portfolio/cori/crusher-shoot-51.jpg", "/images/portfolio/cori/crusher-shoot-60.jpg", "/images/portfolio/cori/crusher-shoot-69.jpg", "/images/portfolio/cori/crusher-shoot-84.jpg", "/images/portfolio/cori/crusher-shoot-94.jpg", "/images/portfolio/cori/crusher-shoot-95.jpg", "/images/portfolio/cori/crusher-shoot-96.jpg", "/images/portfolio/cori/crusher-shoot-97.jpg", "/images/portfolio/cori/crusher-shoot-98.jpg", "/images/portfolio/cori/crusher-shoot-99.jpg"]
  }, {
    id: 12,
    title: "International Gourmet Foods",
    subtitle: "Web Developer",
    imageUrl: "/images/portfolio/igf-logo.jpg",
    url: 'http://igf-inc.com'
  }, {
    id: 13,
    title: "\"Bongo Bobby\"",
    subtitle: "Event Photographer",
    imageUrl: "/images/portfolio/bongo-bobby-3.jpg",
    largeImageUrl: ["/images/portfolio/bongo-bobby/bongo-bobby-1.jpg", "/images/portfolio/bongo-bobby/bongo-bobby-5.jpg", "/images/portfolio/bongo-bobby/bongo-bobby-23.jpg", "/images/portfolio/bongo-bobby/bongo-bobby-24.jpg", "/images/portfolio/bongo-bobby/bongo-bobby-33.jpg", "/images/portfolio/bongo-bobby/bongo-bobby-36.jpg", "/images/portfolio/bongo-bobby/bongo-bobby-47.jpg", "/images/portfolio/bongo-bobby/bongo-bobby-58.jpg", "/images/portfolio/bongo-bobby/pinkNwhiteParty-16.jpg", "/images/portfolio/bongo-bobby/pinkNwhiteParty-34.jpg", "/images/portfolio/bongo-bobby/pinkNwhiteParty-43.jpg", "/images/portfolio/bongo-bobby/pinkNwhiteParty-57.jpg", "/images/portfolio/bongo-bobby/robert-powell-gig1-8.jpg", "/images/portfolio/bongo-bobby/robert-powell-gig1-9.jpg", "/images/portfolio/bongo-bobby/robert-powell-gig1-13.jpg", "/images/portfolio/bongo-bobby/robert-powell-gig1-14.jpg", "/images/portfolio/bongo-bobby/robert-powell-gig1-42.jpg", "/images/portfolio/bongo-bobby/robert-powell-gig1-61.jpg", "/images/portfolio/bongo-bobby/RobertPowell-1.jpg", "/images/portfolio/bongo-bobby/RobertPowell-10.jpg", "/images/portfolio/bongo-bobby/RobertPowell-14.jpg", "/images/portfolio/bongo-bobby/RobertPowell-33.jpg", "/images/portfolio/bongo-bobby/RobertPowell-61.jpg", "/images/portfolio/bongo-bobby/RobertPowell-75.jpg"]
  }, {
    id: 14,
    title: "Sabra | E-Newsletter",
    subtitle: "UI Developer",
    imageUrl: "/images/portfolio/sabra.jpg",
    largeImageUrl: ["/images/portfolio/sbra-newsletter.jpg"]
  }, {
    id: 15,
    title: "Camila",
    subtitle: "Portrait Photographer",
    imageUrl: "/images/portfolio/camila-portrait.jpg",
    largeImageUrl: ["/images/portfolio/camila/mila-fam-3.jpg", "/images/portfolio/camila/mila-fam-5.jpg", "/images/portfolio/camila/mila-fam-8.jpg", "/images/portfolio/camila/mila-fam-11b.jpg", "/images/portfolio/camila/mila-fam-13.jpg", "/images/portfolio/camila/mila-fam-14.jpg", "/images/portfolio/camila/mila-fam-15.jpg", "/images/portfolio/camila/mila-fam-16.jpg", "/images/portfolio/camila/mila-fam-17.jpg", "/images/portfolio/camila/mila-fam-19.jpg"]
  }, {
    id: 16,
    title: "KCPT",
    subtitle: "Logo Designer",
    imageUrl: "/images/portfolio/kcpt-logo.jpg",
    largeImageUrl: ["/images/portfolio/kcpt-logo-lg.jpg"]
  }, {
    id: 17,
    title: "Jay Neal",
    subtitle: "Event Photographer.",
    imageUrl: "/images/portfolio/neal-baby-shower.jpg",
    largeImageUrl: ["/images/portfolio/jay/Neal-baby-shower-7.jpg", "/images/portfolio/jay/Neal-baby-shower-17.jpg", "/images/portfolio/jay/Neal-baby-shower-24.jpg", "/images/portfolio/jay/Neal-baby-shower-30.jpg", "/images/portfolio/jay/Neal-baby-shower-31.jpg", "/images/portfolio/jay/Neal-baby-shower-50.jpg", "/images/portfolio/jay/Neal-baby-shower-65.jpg", "/images/portfolio/jay/Neal-baby-shower-67.jpg", "/images/portfolio/jay/Neal-baby-shower-73.jpg", "/images/portfolio/jay/Neal-baby-shower-111.jpg", "/images/portfolio/jay/Neal-baby-shower-121.jpg", "/images/portfolio/jay/Neal-baby-shower-141.jpg", "/images/portfolio/jay/Neal-baby-shower-154.jpg", "/images/portfolio/jay/Neal-baby-shower-157.jpg", "/images/portfolio/jay/Neal-baby-shower-159.jpg"]
  }, {
    id: 18,
    title: "Galenski Plumbing",
    subtitle: "Web Developer",
    imageUrl: "/images/portfolio/galenski-plumbing.jpg",
    largeImageUrl: ["/images/portfolio/galenski-plumbing/home-page.jpg", "/images/portfolio/galenski-plumbing/rooter-page.jpg", "/images/portfolio/galenski-plumbing/about-page.jpg", "/images/portfolio/galenski-plumbing/services-page.jpg"]
  }, {
    id: 19,
    title: "Marion Barry's Last Night",
    subtitle: "Event Photographer",
    imageUrl: "/images/portfolio/marion-barry-raymone-baine.jpg",
    largeImageUrl: ["/images/portfolio/marion-barry/shadow-room.jpg", "/images/portfolio/marion-barry/signing-books.jpg", "/images/portfolio/marion-barry/raymone-baine-group.jpg", "/images/portfolio/marion-barry/raymone-baine-at-table.jpg", "/images/portfolio/marion-barry/raymone-baine.jpg", "/images/portfolio/marion-barry/marion-portrait.jpg", "/images/portfolio/marion-barry/marion-portrait-2.jpg", "/images/portfolio/marion-barry/lead-singer.jpg", "/images/portfolio/marion-barry/pay-sax-man.jpg", "/images/portfolio/marion-barry/sax-man.jpg", "/images/portfolio/marion-barry/congressman.jpg", "/images/portfolio/marion-barry/marion-portrait.jpg", "/images/portfolio/marion-barry/shadow-rep.jpg", "/images/portfolio/marion-barry/shadow-rep-2.jpg", "/images/portfolio/marion-barry/marion-portrait.jpg", "/images/portfolio/marion-barry/marion-portrait.jpg", "/images/portfolio/marion-barry/call-with-marion.jpg", "/images/portfolio/marion-barry/call-with-marion-2.jpg", "/images/portfolio/marion-barry/call-with-marion-3.jpg", "/images/portfolio/marion-barry/call-with-marion-4.jpg", "/images/portfolio/marion-barry/bartenders.jpg", "/images/portfolio/marion-barry/bartender-portrait.jpg"]
  }, {
    id: 20,
    title: "Tapout Body Spray",
    subtitle: "Lighting & Electric",
    imageUrl: "/images/portfolio/tapout-commercial.jpg",
    largeImageUrl: ["/images/portfolio/tapout/brooklyn-shipyard.jpg", "/images/portfolio/tapout/greenhouse-brooklyn.jpg", "/images/portfolio/tapout/jcena-cam.jpg", "/images/portfolio/tapout/john-cena.jpg", "/images/portfolio/tapout/tapout-spray.jpg"]
  }, {
    id: 21,
    title: "Lorena Bobbit",
    subtitle: "Logo Designer",
    imageUrl: "/images/portfolio/lorenas-red-wagon-logo.jpg",
    largeImageUrl: ["/images/portfolio/LRWlogo6FINAL.jpg"]
  }, {
    id: 22,
    title: "El Vaquero West",
    subtitle: "Designer/Photographer",
    imageUrl: "/images/portfolio/el-vaquero.jpg",
    largeImageUrl: ["/images/portfolio/el-vaquero/cover.jpg", "/images/portfolio/el-vaquero/appswithburn.jpg", "/images/portfolio/el-vaquero/lunch.jpg", "/images/portfolio/el-vaquero/carnepollo.jpg", "/images/portfolio/el-vaquero/specialdinners.jpg", "/images/portfolio/el-vaquero/burritos.jpg", "/images/portfolio/el-vaquero/combos.jpg", "/images/portfolio/el-vaquero/drinks.jpg", "/images/portfolio/el-vaquero/chef-salad.jpg", "/images/portfolio/el-vaquero/burritocalifornia.jpg", "/images/portfolio/el-vaquero/nachos-tejanos.jpg", "/images/portfolio/el-vaquero/cheesecake.jpg", "/images/portfolio/el-vaquero/xango.jpg", "/images/portfolio/el-vaquero/to-go-outside.jpg", "/images/portfolio/el-vaquero/to-go-inside.jpg"]
  }, {
    id: 23,
    title: "Batbike",
    subtitle: "Portrait Photographer",
    imageUrl: "/images/portfolio/batbike.jpg",
    largeImageUrl: ["/images/portfolio/batbike/bergen-batmobile-1.jpg", "/images/portfolio/batbike/bergen-batmobile-2.jpg", "/images/portfolio/batbike/bergen-batmobile-3.jpg", "/images/portfolio/batbike/bergen-batmobile-4.jpg", "/images/portfolio/batbike/bergen-batmobile-5.jpg", "/images/portfolio/batbike/bergen-batmobile-6.jpg", "/images/portfolio/batbike/bergen-batmobile-7.jpg", "/images/portfolio/batbike/bergen-batmobile-8.jpg", "/images/portfolio/batbike/bergen-batmobile-9.jpg", "/images/portfolio/batbike/bergen-batmobile-10.jpg", "/images/portfolio/batbike/bergen-batmobile-11.jpg", "/images/portfolio/batbike/bergen-batmobile-13.jpg"]
  }, {
    id: 24,
    title: "Mark & Paula",
    subtitle: "Event Photographer",
    imageUrl: "/images/portfolio/mark-paula.jpg",
    largeImageUrl: ["/images/portfolio/mark-paula/Paula-and-Mark-11.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-38.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-40.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-42.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-46.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-47.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-71.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-75.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-81.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-103.jpg"]
  }, {
    id: 25,
    title: "CNA Scientific",
    subtitle: "Multimedia Specialist",
    imageUrl: "/images/portfolio/cna-logo.jpg",
    largeImageUrl: ["/images/portfolio/cna/beaker-setup-pic.jpg", "/images/portfolio/cna/beaker-pic-setup.jpg", "/images/portfolio/cna/beakers-pic.jpg", "/images/portfolio/cna/cna-catalogue-cover.jpg", "/images/portfolio/cna/cna-brochure-front.jpg", "/images/portfolio/cna/cna-brochure-inside.jpg", "/images/portfolio/cna/cna-brochure-back.jpg", "/images/portfolio/cna/micro-inspector.jpg", "/images/portfolio/cna/microscope.jpg"]
  }, {
    id: 26,
    title: "Carson & Kelly",
    subtitle: "Event Photographer",
    imageUrl: "/images/portfolio/carson-kelly.jpg",
    largeImageUrl: ["/images/portfolio/carson-kelly/ck-martin-9.jpg", "/images/portfolio/carson-kelly/ck-martin-10.jpg", "/images/portfolio/carson-kelly/ck-martin-11.jpg", "/images/portfolio/carson-kelly/ck-martin-14.jpg", "/images/portfolio/carson-kelly/ck-martin-15.jpg", "/images/portfolio/carson-kelly/ck-martin-20.jpg", "/images/portfolio/carson-kelly/ck-martin-23.jpg", "/images/portfolio/carson-kelly/ck-martin-34.jpg", "/images/portfolio/carson-kelly/ck-martin-35.jpg", "/images/portfolio/carson-kelly/ck-martin-38.jpg", "/images/portfolio/carson-kelly/ck-martin-45.jpg", "/images/portfolio/carson-kelly/ck-martin-46.jpg", "/images/portfolio/carson-kelly/ck-martin-56.jpg", "/images/portfolio/carson-kelly/ck-martin-89.jpg", "/images/portfolio/carson-kelly/ck-martin-106.jpg", "/images/portfolio/carson-kelly/ck-martin-118.jpg", "/images/portfolio/carson-kelly/ck-martin-124.jpg", "/images/portfolio/carson-kelly/ck-martin-127.jpg", "/images/portfolio/carson-kelly/ck-martin-130.jpg", "/images/portfolio/carson-kelly/ck-martin-132.jpg", "/images/portfolio/carson-kelly/ck-martin-135.jpg", "/images/portfolio/carson-kelly/ck-martin-140.jpg", "/images/portfolio/carson-kelly/ck-martin-142.jpg", "/images/portfolio/carson-kelly/ck-martin-160.jpg", "/images/portfolio/carson-kelly/ck-martin-226.jpg", "/images/portfolio/carson-kelly/ck-martin-248.jpg"]
  }, {
    id: 27,
    title: "Loudoun Exteriors",
    subtitle: "Graphic Designer",
    imageUrl: "/images/portfolio/loudoun-exteriors.jpg",
    largeImageUrl: ["/images/portfolio/loudoun-exteriors/loudoun-exteriors-logo.jpg", "/images/portfolio/loudoun-exteriors/loudoun-exteriors-ad-1.jpg", "/images/portfolio/loudoun-exteriors/loudoun-exteriors-ad-2.jpg", "/images/portfolio/loudoun-exteriors/loudoun-exteriors-ad-3.jpg", "/images/portfolio/loudoun-exteriors/loudoun-exteriors-ad-4.jpg"]
  }],
  experience: {
    workingExperience: [{
      id: 1,
      year: "2017 - Present",
      position: "Senior Software Engineer",
      company: "Vibrent Health",
      details: "Sr. Engineer responsible for delivering complex product\n                  features. Web App primary contributor, building scalable\n                  and modern applications and libraries. Developed and\n                  delivered National Institute of Health\u2019s research program\n                  All Of Us to national launch. It is a platform to support\n                  building one of the largest and most diverse datasets for\n                  precision medicine health research.\n                  Helped redefine the front end architecture for building a\n                  new complex SAAS based research product across all\n                  platforms."
    }, {
      id: 2,
      year: "2016 - 2017",
      position: "UI Developer",
      company: "Stratera Technologies",
      details: "Developed UI features in support of The Patent and Trade\n                  Office\u2019s Cooperative Patent Classification Database, a\n                  new program that used Spring/Restful services displayed\n                  with Angular whose purpose was to help employees of\n                  the PTO classify patents, search for classifications and\n                  maintain their history, where each major release was then\n                  used by over 20,000 employees"
    }, {
      id: 3,
      year: "2014 - 2015",
      position: "UI Developer",
      company: "Agilex Technologies",
      details: "Front End Web Developer contributing to a suite of apps\n                  for the Veterans Administration, in an Agile/Scrum\n                  environment with Continuous Integration. Learned about\n                  508 Accessibility Standards."
    }, {
      id: 4,
      year: "2010 - Present",
      position: "Owner",
      company: "Spontaneous Human Productions",
      details: "After a few years of freelancing on small projects \n                  and teaching myself the basics of design, I officially \n                  launched Spontaneous Human Productions in July of 2010\n                  and have since used it to tackle a wide variety of projects\n                  ranging from design and video to photography and web services"
    }],
    educationExperience: [{
      id: 1,
      year: "2011 - 2014",
      graduation: "Bachelor of Science | Applied Information Technology",
      university: "George Mason University",
      details: "Trained in the workings and management of IT projects with a focus on the client's bottom line"
    }, {
      id: 2,
      year: "2009-2011",
      graduation: "Associates of Science | Information Technology",
      university: "Northern Virginia Community College",
      details: "Member of Phi Thetha Kappa: the National Honor Society fraternity"
    }]
  },
  blogs: [{
    id: 1,
    title: 'Markdown & Html supported blog.',
    featuredImage: '/images/blog-image-1.jpg',
    filesource: '../../blog/markdown-html-supported-blog.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 2,
    title: 'Installing NodeJS on your device.',
    featuredImage: '/images/blog-image-2.jpg',
    filesource: '../../blog/installing-nodejs-on-your-device.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 3,
    title: 'UI/UX design starter with Adobe XD.',
    featuredImage: '/images/blog-image-3.jpg',
    filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 4,
    title: 'Boost your post for increasing sales.',
    featuredImage: '/images/blog-image-4.jpg',
    filesource: '../../blog/boost-your-post-for-increasing-sales.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 5,
    title: 'Difference between GatsbyJS & NextJS.',
    featuredImage: '/images/blog-image-5.jpg',
    filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 6,
    title: 'How to choose javascript framework for project.',
    featuredImage: '/images/blog-image-6.jpg',
    filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 7,
    title: 'Web automation with python language.',
    featuredImage: '/images/blog-image-7.jpg',
    filesource: '../../blog/web-automation-with-python-language.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 8,
    title: 'Time to use latest technology for creating a website.',
    featuredImage: '/images/blog-image-8.jpg',
    filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 9,
    title: 'Think out of the box.',
    featuredImage: '/images/blog-image-9.jpg',
    filesource: '../../blog/think-out-of-the-box.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 10,
    title: 'Trending designs in 2020.',
    featuredImage: '/images/blog-image-1.jpg',
    filesource: '../../blog/trending-designs-in-2020.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 11,
    title: 'How to get 10k instagram followers?',
    featuredImage: '/images/blog-image-2.jpg',
    filesource: '../../blog/how-to-get-10k-instagram-followers.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 12,
    title: 'What NodeJS can do?',
    featuredImage: '/images/blog-image-3.jpg',
    filesource: '../../blog/what-nodejs-can-do.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 13,
    title: 'Futures of javascript.',
    featuredImage: '/images/blog-image-4.jpg',
    filesource: '../../blog/future-of-javascript.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 14,
    title: 'Popular javascript library in 2020.',
    featuredImage: '/images/blog-image-5.jpg',
    filesource: '../../blog/popular-javascript-library-in-2020.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 15,
    title: 'Promrammers must read books.',
    featuredImage: '/images/blog-image-6.jpg',
    filesource: '../../blog/programmers-must-read-books.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }],
  contactInfo: {
    phoneNumbers: ['(703) 789-5247'],
    emailAddress: ['jason.pierce.designs@gmail.com', 'jason.pierce@sponhumanprod.com'],
    address: "Warrenton, Virginia 20186. United States"
  }
};
_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet("/api/information").reply(function (config) {
  var response = database.information;
  return [200, response];
});
_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet("/api/services").reply(function (config) {
  var response = database.services;
  return [200, response];
});
_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet("/api/reviews").reply(function (config) {
  var response = database.reviews;
  return [200, response];
});
_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet("/api/skills").reply(function (config) {
  var response = database.skills;
  return [200, response];
});
_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet("/api/portfolios").reply(function (config) {
  var response = database.portfolios;
  return [200, response];
});
_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet("/api/experience").reply(function (config) {
  var response = database.experience;
  return [200, response];
});
_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet("/api/blog").reply(function (config) {
  var response = database.blogs;
  return [200, response];
});
_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet("/api/contactinfo").reply(function (config) {
  var response = database.contactInfo;
  return [200, response];
});

/***/ })

})
//# sourceMappingURL=portfolio.js.89850bd95ff6b6d10b8e.hot-update.js.map
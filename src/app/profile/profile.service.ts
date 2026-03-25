import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects: any = [
    {
      id: 1,
      title: 'FOSSology',
      desc: 'Open source license compliance software and toolkit. Fixed a couple of bugs in the project. Improving the efficiency of the application.',
      livedemo: '',
      githurl: 'https://github.com/fossology/fossology',
      mediumlink: '',
      imgUrl: 'assets/images/fossology-hero.png',
      tech: 'HTML, Twig, Regular Expression, CSS'
    },
    {
      id: 2,
      title: 'Enterprise-grade Full Stack Application Development',
      desc: 'Developed Spring Boot, Angular, and MongoDB base project with comprehensive features: logging, authentication, granular role-based access control, GitHub Actions integration, SonarQube code quality checks, multi-tenant support, and UI-backend proxy.',
      livedemo: '',
      githurl: 'https://github.com/Akash-Sareen/monster',
      mediumlink: '',
      imgUrl: 'assets/images/starterProject.jpg',
      tech: 'Spring Boot, Angular, MongoDB, GitHub Actions, SonarQube, Docker'
    },
    {
      id: 3,
      title: 'Note',
      desc: 'Notes application, used for sharing notes between Unix users. Make sure that the application complies with security and permissions.',
      livedemo: '',
      githurl: 'https://github.com/Akash-Sareen/Notes',
      mediumlink: '',
      imgUrl: 'assets/images/note.png',
      tech: 'Go'
    },
    {
      id: 4,
      title: 'Game Review',
      desc: 'Angular website made to get the video game review. The webapp pulls data from the public-api server for the data. It has search and sorting feature implemented.',
      livedemo: '',
      githurl: 'https://github.com/Akash-Sareen/ng-video-game-db',
      mediumlink: '',
      imgUrl: 'assets/images/game.png',
      tech: 'HTML, CSS, Angular_14.'
    },
    {
      id: 5,
      title: 'Snake Game',
      desc: 'The mini snake game was made in python. The logic for snake body and food was the one which was a bit challenging in the project.',
      livedemo: '',
      githurl: 'https://github.com/Akash-Sareen/Py-Snake-Game',
      mediumlink: '',
      imgUrl: 'assets/images/snake.png',
      tech: 'Python'
    },
    {
      id: 6,
      title: 'Hand Sign Recognition',
      desc: 'This module was designed for the physically mute people to be used in daily life. It is wearable device which gives an audio output for the hand signs made by the user.',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/handsign.jpeg',
      tech: 'Arduino, Flex Sensor, EPROM, Speaker.'
    },
    {
      id: 7,
      title: 'S.A.M (Surprise Attendance Marker)',
      desc: 'Designed the connection and programmed Arduino to connect the components with the database. S.A.M was a lightweight, portable device with an embedded biometric scanner for attendance.',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/sam.jpg',
      tech: 'Arduino Uno, Fingerprint Sensor, LCD display, keypad, EPROM, LED lights.'
    },
    {
      id: 8,
      title: 'Bus Route Display Board',
      desc: 'The display board shows the college bus numbers, destinations, and itineraries. Led the team and overall development of the project using agile methodology. During the project development, the biggest challenge was synchronizing two Arduino boards.',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/bus.png',
      tech: 'Arduino, Dot Matrix Display Board, raspberry pi, BLE Sensor.'
    }
  ]
  about2 = `FullStack Software Developer with a Master’s in Advanced Computer Science and 4+ years of industry experience building scalable applications.`

  about = "Tech-savvy and passionate about staying current with emerging technologies, with a strong drive to continuously learn and adopt new technological advancements."
  resumeurl = "https://drive.google.com/file/d/1oGKBARHxjl_H2ykxLwHeRisU-2zb_CdS/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Java, JavaScript, SQL',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'SpringBoot, Spring Integration, Spring Security',
      'progress': '85%'
    },
    {
      'id': '3',
      'skill': 'AngularJS, Angular 14, React',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'Docker, Maven, Git, Jenkins, OpenShift, AWS',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'ElasticSearch, SingleStore, Snowflake, MongoDB, DB2',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'HTML, CSS, AJAX, jQuery, RESTful Services',
      'progress': '80%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': 'Sept 2022 - Sept 2023',
      'education': 'Master\'s Degree',
      'stream': 'Master\'s in Advance Computer Science',
      'info': `Completed Master's in Advanced Computer Science with 62.5% from the University of Birmingham.`,
      'institution': 'UNIVERSITY OF BIRMINGHAM, BIRMINGHAM'
    },
    {
      'id': '2',
      'from_to_year': 'April 2016 - Sept 2020',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering in Computer Science',
      'info': `Completed B.E in Computer Science with 8.01 CGPA. .
Won the Star Excellence Award for the 2016–2020 batch. .
Recognized as Best Final Year Project submission.`,
      'institution': 'SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY, CHENNAI'
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Goldman Sachs',
      location: 'Birmingham, UK',
      timeline: 'Oct 2024 to Present',
      role: 'Software Developer',
      work: `Technologies : Data Lake, DB2, SingleStore, Spring Integration. .
      Designed and delivered accuracy, timeliness, and completeness (ATC) reports across 5+ critical datasets spanning Data Lake and DB2, improving data reliability by 30% and enabling proactive issue detection. .
      Eliminated over 40 hardcoded credentials by migrating secrets to a centralised Secret Manager, strengthening security posture. .
      Led platform uplift initiatives including Java upgrade from version 8 to 21 and database migration from DB2 to SingleStore, reducing query latency by 25%. .
      Enabled end-to-end back-reporting flow for regulatory reports using SingleStore and Spring Integration, clearing a backlog of 100 million outstanding reports, reducing manual intervention by 70%.
      `
    },
    {
      id: 3,
      company: 'Barclays',
      location: 'Northampton, UK',
      timeline: 'August 2023 to Oct 2024',
      role: 'Developer Analyst',
      work: `Technologies : SpringBoot, Git, Jenkins, Openshift, AWS. .
      Developed a Real-Time Dashboard for stakeholder analytics, automating spreadsheet and report management, resulting in a daily time savings of 15 minutes. .
      Optimized the dashboard’s functionality by implementing client-side and server-side caching, reducing database load. .
      Enhanced fraud detection gateway, boosting code readability and efficiency, elevating overall performance. .
      Facilitated end-to-end flow testing, ensuring seamless integration and functionality across teams. .
      Developed OPENAPI spec document, fortifying project modules. Amplified test coverage to over 85%, guaranteeing robustness.
      `
    },
    {
      id: 2,
      company: 'Kloudspot Inc.',
      location: 'Bangalore, India',
      timeline: 'July 2020 to August 2022',
      role: 'Senior Software Engineer',
      work: `Technologies : Spring Boot, Angular, Elasticsearch, Docker. .
      Upgraded the application from JDK 8 to 11 and converted from Spring MVC to Spring Boot. .
      Integrated messaging services: Twilio, TCL-MMX, and Telestax; improved alerts and notifications by integrating Slack. .
      Developed the SMS and PDF report framework, meeting 95% of customer requirements. .
      Created UI and configuration generation for Vision, Access-Point, and Gateway Devices, increasing efficiency by 50%. .
      Applied minification during pipeline build of Docker images, reducing build size by 40%. Reduced time taken to debug errors by 30% by improving logging mechanism.
      `
    },
    {
      id: 1,
      company: 'Nuclei',
      location: 'Bangalore, India',
      timeline: 'January 2020 to April 2020',
      role: 'Software Development Engineer in Test - Intern',
      work: `Technologies : Java, Spring Boot, SQL, Grafana, Python. .
      Built a Grafana Dashboard to monitor client latency and enable simple system alert triggering. .
      Examined upcoming new features using the internal testing tool from beginning to end. .
      Created new tables and reduced the table count from 150 to 70 using a Python script to migrate the existing database.
  `
    }

  ]

  extraCircularInfo: any = [
    {
      id: 1,
      title: 'Blogger',
      description: '',
      img: '',
      url: ''
    }
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}

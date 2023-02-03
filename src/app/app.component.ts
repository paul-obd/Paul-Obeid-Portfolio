import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Paul-Portfolio';

  load = true;

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;


  deepDiveSkills = [
    {
      name: "Angular",
      image: '../assets/pp34.png',
      description: "As an Angular developer, I specialize in building web applications using the Angular framework. Skilled in HTML, CSS, TypeScript, and Angular concepts."
    },
    {
      name: ".Net Core C#",
      image: "../assets/pp35.png",
      description: "As a .NET Core Web API developer, I specialize in building back-end systems using the .NET Core framework. Skilled in C#, .NET Core, and web API development."
    },
    {
      name: "SQL Server DB",
      image: "../assets/pp38.png",
      description: "As a SQL Server Database developer, I specialize in designing and managing database systems using SQL Server. Skilled in SQL, database design, and database administration."
    },
    {
      name: "Node.js",
      image: "../assets/pp31.png",
      description: "As a Node.js REST API developer, I specialize in building back-end systems using Node.js. Skilled in JavaScript, Node.js, and REST API development."
    },
    {
      name: "MongoDB",
      image: "../assets/pp36.png",
      description: "As a MongoDB developer, I specialize in designing and managing NoSQL databases using MongoDB. Skilled in MongoDB, NoSQL, and database administration."
    },
    {
      name: "Firebase",
      image: "../assets/pp33.png",
      description: "As a Firebase developer, I specialize in building scalable, real-time apps using Firebase, a popular BaaS (Backend as a Service) platform from Google. Skilled in Firebase, NoSQL, and mobile app development."
    },
  ]


  languages = [
    "HTML",
    "CSS",
    "JS",
    "TS",
    "C++",
    "Java",
    "Dart",
    "Kotlin"
  ]

  workHistory = [
    {
      title: "QUAYO Mobility (02-2022 - 07-2022):",
      caption: `
      - Developed and maintained full-stack web applications utilizing Angular as the 
      front-end framework, .NET Core web API for the back-end, and MS SQL 
      Server as the database management system. Also, designed and developed a SAAS platform for warehouse management, 
      enabling clients to place orders online and track their status, as well as 
      providing a module for generating sales reports.
      `,
      active: true
    },

    {
      title: "MASQ (07-2022 - Current):",
      caption: `-Developed and implemented a custom system for a lighting company with 
      franchises in Lebanon, Qatar, and Saudi Arabia as a sole developer using 
      Angular, .Net Core, and MS SQL Server. The system included cost 
      management, client offer generation, employee performance tracking, and user 
      rights and permissions. Successfully integrated with Microsoft Dynamics 
      (Business Central) and included functionalities for generating printable PDFs 
      such as technical sheets, compliance sheets, project offers, and rejection letters.`,  
      active: false
    }

  ]



  windowWidth: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  constructor() {
    this.windowWidth = window.innerWidth;
  }

  get isWindowWidth768() {  //get means a getter for this function, it means when i do ngif in html it return the objector the value that this function is returning
    return this.windowWidth <= 768;
  }

  ngOnInit() {

    this.stopLoad()

    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': 0,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: this.isWindowWidth768 == true ? 70 : 100,
        },
        color: {
          value: '#4c00ff'
        },
        shape: {
          type: 'circle',
        },
        line_linked: {

          color: "#f7f7f7",  // Change this value to set the color of the lines

        },
      },



    };
  }




  loadAnimation() {
    const loadingPage = document.querySelector('.loading');

    loadingPage.addEventListener('animationend', function () {
      setTimeout(function () {
        loadingPage.remove();
      }, 2000);
    });
  }

  stopLoad() {
    setTimeout(() => {
      this.load = false
    }, 6800);

  }

  downloadPDF() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/Resume.pdf');
    link.setAttribute('download', 'Paul-Obeid-Resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }




  ActiveDisactiveWork(i){
    this.workHistory.forEach(element => {
      element.active = false
    });
    this.workHistory[i].active = true
  }
}

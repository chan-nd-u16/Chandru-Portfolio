AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Magento Developer Intern",
    cardImage: "https://media.licdn.com/dms/image/D562DAQH5VekyxDKorA/profile-treasury-image-shrink_1920_1920/0/1695827949406?e=1708783200&v=beta&t=YwYUnQH5y7m-Ev5eW8bG8WpNq3W4pbvCl8cy-H6s6H4",
    place: "Hysteresis Pvt Ltd ",
    time: "(July, 2023 - December 2023)",
    desp:""
    },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time,desp }) =>
    (output += `
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400">
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ul>
              <li><b>Major Job Experience and Responsibilities:</b> we've been learning and working on Python,HTML,CSS,Javascript,Mysql,PHP as a team and done some individual projects and games like 7up 7down,Snake and Ladder game and also done E-commerce site with Admin Panel from scratch using PHP and Mysql Backend.It's been good experience and then we started learning magento ,we learnt Magento Rest API,installed extensions and themes and
          learning to develop custom extension and themes.</li>
          <li><b>Key Achievement:</b> Obtained real-world experience in Web development and learnt to develop custom modules like Phone-number validation,custom checkout popup,custom payment method,Admin grid,own configuration and developed custom Theme in Magento Framework.</li>
            </ul>
          </header>
        </article>
      </div>
    </div>
      `)
  );

//   for(i of exp){
//
//
//   output += `
//     <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400">
//       <div class="card card1">
//         <img src="${cardImage}" class="featured-image"/>
//         <article class="card-body">
//           <header>
//             <div class="title">
//               <h3>${title}</h3>
//             </div>
//             <p class="meta">
//               <span class="pre-heading">${place}</span><br>
//               <span class="author">${time}</span>
//             </p>
//             <ol>
//               ${desp}
//             </ol>
//           </header>
//         </article>
//       </div>
//   //   </div>
//   //     `)
// }
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Github screen (project)

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Ecommerce  Website with Admin Panel",
   /* cardImage: "assets/images/experience-page/1.jpg",*/
    cardImage: ".designs/ui_ux/ProjetoPizza.png",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "Registration Form",
  /*  cardImage: "assets/images/experience-page/2.jpg", */
    cardImage: ".designs/ui_ux/Blog_dark_light.png",
    description: "Registration Form to receive newsletter",
  },
  {
    title: "Landing Page Nike",
    /* cardImage: "assets/images/experience-page/3.jpg", */
    cardImage: ".designs/ui_ux/Projeto_Chuteira.jpg",
    description:
      "Landing Page Football Boots Nike ",
  },
  {
    title: "Tutorial Rest API (In Developing)",
    cardImage: "designs/ui_ux/rest_tutorial.png",
    description:"REST API  tutorial for all levels: What is Rest?, HTTP methods, Resource Name, IdemPotence...",
  },
  {
    title: "BMI calculator",
    cardImage:".designs/ui_ux/BMI Calculator.jpg",
    description:"BMI Calculator app. Developed using Flutter",
  },
];

/* const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
    (output += `
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">

      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>

      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

 /*const hackathonsection = document.querySelector(".hackathon-section"); */


/* const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
    (output += `
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3); */

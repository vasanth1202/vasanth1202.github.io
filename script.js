function myMenuFunction() {
  const menu = document.getElementById("myNavMenu");
  menu.classList.toggle("responsive"); // toggle responsive class
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const menu = document.getElementById("myNavMenu");
  const toggleBtn = document.querySelector(".nav-menu-btn");

  if (
    menu.classList.contains("responsive") &&
    !menu.contains(event.target) &&
    !toggleBtn.contains(event.target)
  ) {
    menu.classList.remove("responsive");
  }
});

// Close menu when clicking on a nav link
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("myNavMenu");
    if (menu.classList.contains("responsive")) {
      menu.classList.remove("responsive");
    }
  });
});



/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }

/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ['Frontend Developer','Python programmer','Software Engineer'],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
   })

   /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  
  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  status.textContent = "Sending... ⏳";
  status.className = "";

  try {
    let response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      status.textContent = "✅ Thank you! Your message has been sent.";
      status.className = "success";
      form.reset();

      setTimeout(() => {
        status.textContent = "";
        status.className = "";
      }, 5000);
    } else {
      status.textContent = "❌ Oops! Something went wrong. Please try again.";
      status.className = "error";

      setTimeout(() => {
        status.textContent = "";
        status.className = "";
      }, 5000);
    }
  } catch (error) {
    status.textContent = "⚠️ Error: Could not send message.";
    status.className = "error";

    setTimeout(() => {
      status.textContent = "";
      status.className = "";
    }, 5000);
  }
});


/* ----- CHANGE ACTIVE LINK ----- */

 const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  window.addEventListener('scroll', scrollActive)

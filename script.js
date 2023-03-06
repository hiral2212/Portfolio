$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

   // Validate email address format
   function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  // Validate phone number format
  function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }

    // <!-- emailjs to mail contact form data -->
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload
          
  
      // Get the user's form data
      const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone:document.getElementById("phone").value.trim(),
        message: document.getElementById("message").value.trim()
      };

      // Validate email address before sending the email
      if (!validateEmail(formData.email)) {
        alert("Please enter a valid email address.");
        return;
      }
         // Validate phone number
         if (!validatePhone(formData.phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
          }

        // Send email using EmailJS service and template
        emailjs.send('service_k0u9c3l', 'template_643pioy', formData)
            
       .then(function(response) {
            
            alert('Email sent! Thanks for Connnect with US.');
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert('Error sending email: ' + error);
            console.log('FAILED...', error);
        });
    });
    

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Hiral Khaniya";
            
        }
        else {
            document.title = "Come Back To Portfolio";
           
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend development",  "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->


function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}



// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->



//download pdf of resume
document.getElementById('download-link').addEventListener('click', function(event) {
    if (!confirm('Are you sure you want to download this file?')) {
      event.preventDefault();
    }
  });


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 300 });
srtop.reveal('.home .linkedin', { interval: 500 });
srtop.reveal('.home .github', { interval: 700 });
srtop.reveal('.home .twitter', { interval: 900 });
srtop.reveal('.home .telegram', { interval: 500 });
srtop.reveal('.home .instagram', { interval: 500 });
srtop.reveal('.home .dev', { interval: 500 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 150 });
srtop.reveal('.about .content .tag', { delay: 150 });
srtop.reveal('.about .content p', { delay: 150 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 150 });
srtop.reveal('.skills .container .bar', { delay: 300 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 150 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 150 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 300 });
srtop.reveal('.experience .timeline .container', { interval: 300 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 300 });
srtop.reveal('.contact .container .form-group', { delay: 300 });

//Get in touch 
/*var form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone=document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  var data = {
    name: name,
    email: email,
    phone:phone,
    message: message
  };
  console.log(data);
  form.reset();
  alert('Thank you for getting in touch!');
});*/
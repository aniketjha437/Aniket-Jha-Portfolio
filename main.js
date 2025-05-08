var typed = new Typed(".text", {
  strings: [
    "Web Designer",
    "Front-End Developer",
    "Video Editor",
    "UI/UX Designer",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});






const form = document.getElementById('contact-form');
const thankYou = document.getElementById('thank-you');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form action
  const formData = new FormData(form);
  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.reset();
      thankYou.style.display = 'block';
    } else {
      alert("There was a problem submitting the form.");
    }
  });
});
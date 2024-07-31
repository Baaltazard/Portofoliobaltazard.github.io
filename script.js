let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};

menuicon.onclick = () => {
  menuicon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbw5QTQc1fwFIcpWnpmlPqM682452uu4JbF8_iQTgjmmTvnV541L17NM7aJ1rZR8fH5N9w/exec';
const form = document.forms['myform'];
const btnkirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
const ContactForm = document.querySelector('.myform');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  btnLoading.classList.toggle('hidden');
  btnkirim.classList.toggle('hidden');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle('hidden');
      btnkirim.classList.toggle('hidden');
      myAlert.classList.toggle('hidden');
      
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});

closeIcon = document.querySelector('.close');
closeIcon.addEventListener('click', () => {
  myAlert.classList.toggle('hidden');
});

// JavaScript Document
  function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementsByTagName('header')[0].classList.toggle('dark-mode');
    let links = document.getElementsByTagName('a');
      for (let i in links) {
          links[i].classList.toggle('dark-mode');
      }
    const icon = document.getElementById('icon');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    let photo = document.getElementById('profile');
    photo.classList.toggle('dark-mode');
      
  }

document.getElementById('skill-one-hover').hidden = true;
document.getElementById('skill-two-hover').hidden = true;
document.getElementById('skill-three-hover').hidden = true;

document.getElementById('skill-one').onmouseover = function() {
    document.getElementById('skill-one-hover').hidden = false;
}
document.getElementById('skill-one').onmouseout = function() {
    document.getElementById('skill-one-hover').hidden = true;
}
document.getElementById('skill-two').onmouseover = function() {
    document.getElementById('skill-two-hover').hidden = false;
}
document.getElementById('skill-two').onmouseout = function() {
    document.getElementById('skill-two-hover').hidden = true;
}
document.getElementById('skill-three').onmouseover = function() {
    document.getElementById('skill-three-hover').hidden = false;
}
document.getElementById('skill-three').onmouseout = function() {
    document.getElementById('skill-three-hover').hidden = true;
}
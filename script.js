// JavaScript Document
  function darkMode() {
      document.body.classList.toggle("dark-mode");
      document.getElementsByTagName('header')[0].classList.toggle('dark-mode');

      const icon = document.querySelector('#icon');
      icon.classList.toggle("fa-sun");
      icon.classList.toggle("fa-moon");
      
      const photos = document.getElementsByTagName("img");
      for (let j in photos) {
          photos[j].classList.toggle('dark-mode');
      }
      const anchors = document.getElementsByTagName("a");
      for (let i in anchors) {
          anchors[i].classList.toggle('dark-mode');
      }
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
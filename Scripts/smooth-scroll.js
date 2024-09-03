function smoothScroll(target) {
    const element = document.getElementById(target)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth'});
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(function(anchor) {
      anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = anchor.getAttribute('href').substring(1);
        smoothScroll(target);
      });
    });
  });
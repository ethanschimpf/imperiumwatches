document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});


// Hide loader after page load
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
  }, 2000);
});


const sections = document.querySelectorAll('section');
sections.forEach(section => section.classList.add('visible'));

gsap.from('.label-box', {
  duration: 1,
  y: 20,
  opacity: 0,
  ease: 'power2.out'
});
gsap.from('#hero img', {
  duration: 1,
  y: 30,
  opacity: 0,
  delay: 0.5,
  ease: 'power2.out'
});

// Modal image viewer
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.getElementsByClassName('close')[0];

document.querySelectorAll('.enlargeable').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});
closeBtn.onclick = () => {
  modal.style.display = 'none';
};
window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};



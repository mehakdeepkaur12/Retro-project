// for home page
document.querySelectorAll('.btn').forEach((btn) => {
  // Handle mouseover event
  btn.addEventListener('mouseover', (event) => {
    const button = event.target;
    button.style.transform = 'scale(1.1)';
    button.style.transition = 'transform 0.3s ease';
  });

  // Handle mouseout event
  btn.addEventListener('mouseout', (event) => {
    const button = event.target;
    button.style.transform = 'scale(1)';
  });
});

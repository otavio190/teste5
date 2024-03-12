document.querySelectorAll('.photo-gallery img').forEach(item => {
    item.addEventListener('click', event => {
      item.classList.toggle('expanded');
    });
  });
  document.querySelectorAll('.photo-gallery img').forEach(item => {
    item.addEventListener('click', event => {
      const modalImg = document.querySelector('.modal-content img');
      modalImg.src = item.src;
      document.querySelector('.modal-container').style.display = 'flex';
    });
  });
  
  document.querySelector('.modal-container').addEventListener('click', event => {
    if (event.target.classList.contains('modal-container')) {
      document.querySelector('.modal-container').style.display = 'none';
    }
  });
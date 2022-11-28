const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let counter = 0; counter < balls.length; counter++) {
    balls[counter].style.left = x;
    balls[counter].style.top = y;
    balls[counter].transform = 'translate(-' + x + ',-' + y + ')';
  }
};

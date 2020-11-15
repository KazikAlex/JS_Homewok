var hamb = document.querySelector('#hamb'),
    divTop = document.querySelector('#top'),
    divMiddle = document.querySelector('#middle'),
    divBottom = document.querySelector('#bottom'),
    menu = document.querySelector('#menu')
;

document.addEventListener("DOMContentLoaded", function() {
    if (hamb != null) {
      hamb.addEventListener('click', function () {
        if (menu.style.display == 'flex') {
            menu.style.display = 'none';
            divTop.style.transform = 'rotate(0deg)';
            divTop.style.position = 'relative';
            divMiddle.style.transform = 'rotate(0deg)';
            divMiddle.style.position = 'relative';
            divBottom.style.display = 'block';
            divBottom.style.transform = 'rotate(0deg)';
            divBottom.style.position = 'relative';
        }else {
            menu.style.display = 'flex';
            divTop.style.transform = 'rotate(45deg)';
            divTop.style.position = 'absolute';
            divTop.style.top = '6%';
            divMiddle.style.transform = 'rotate(-45deg)';
            divMiddle.style.position = 'absolute';
            divMiddle.style.top = '6%';
            divBottom.style.display = 'none';
            menu.addEventListener('click', function () {
              menu.style.display = 'none';
              divTop.style.transform = 'rotate(0deg)';
              divTop.style.position = 'relative';
              divMiddle.style.transform = 'rotate(0deg)';
              divMiddle.style.position = 'relative';
              divBottom.style.display = 'block';
              divBottom.style.transform = 'rotate(0deg)';
              divBottom.style.position = 'relative';
            });
        }  
      });
    }
  });
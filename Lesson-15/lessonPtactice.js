var container = document.getElementById('container'),
firstPar = document.createElement('p'),
secondPar = document.createElement('p'),
btn = document.getElementsByTagName('button')[0];

localStorage.clear();

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);


btn.addEventListener('click', function() {

    var arrLinkColor = firstPar.children;

    for (var item of arrLinkColor) {
        item.className = 'red';
    }
});

btn.onclick = secondParLinkGreen;

function secondParLinkGreen() {

    var arrLinkColor = secondPar.children;

    for (var item of arrLinkColor) {
        item.className = 'green';
    }
};


secondPar.addEventListener('click', function(event) {
    event.preventDefault();
    var k = event.target.textContent;
    var val = event.target.getAttribute('href');

    if (event.target.tagName == 'A') {
        if (event.target.getAttribute('href') !== '#') {
            localStorage.setItem(k, JSON.stringify({path: val}));
            event.target.setAttribute('href', '#');
            alert('Ссылка была сохранена');
        }else {
            for (var i = 0; i < localStorage.length; i++) {
                if (k === localStorage.key(i)) {
                    kStorage = localStorage.key(i);
                    valStorage = JSON.parse(localStorage.getItem(localStorage.key(i))).path;
                    alert(valStorage);
                }
            }
            
        }
    }
}, false);
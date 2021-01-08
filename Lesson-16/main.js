var blockContent = document.querySelector('.content'),
tabs = document.querySelector('.tabs'),
infoBlock = document.querySelector('.info-block'),
btn = document.querySelector('.btn');

function loadLocalStorageContent() {
    var localbase = JSON.parse(localStorage.base);

    for (var j = 0; j < localbase.length; j++) {
        var tab = document.createElement('button'),
        info = document.createElement('div');

        tab.classList.add('tab');
        info.classList.add('info');
        tab.innerHTML = 'User ' + (j+1);
        info.innerHTML = '<img class="img" src="' + localbase[j].avatar + '"></img><div class="name">Name: '+ localbase[j].first_name +'<br>Last name: '+ localbase[j].last_name + '</div>'

        if (j == 0) {
            tab.classList.add('active');
            info.classList.add('flex');
        }else {
            info.classList.add('hide');
            
        }

        tabs.appendChild(tab);
        infoBlock.appendChild(info);
        
    }
    return localbase;
}

if (localStorage.base != null){
    loadLocalStorageContent();
}

btn.addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://reqres.in/api/users?page', true);
    xhr.send();

    xhr.onload = function() {
        var statusType = +String(this.status)[0];
        
        if (statusType === 2) {
            try {
                var prs = JSON.parse(this.response);
                // var prs = JSON.parse('Создаем какую то не понятную  ошибку');
                
            } catch(error) {
                var divError =  document.createElement('div');

                blockContent.innerHTML = '';
                localStorage.clear();
                divError.classList.add('error');
                divError.textContent = 'а вот и выползла ошибка!';
                blockContent.appendChild(divError);
            }
        }

        localStorage.setItem('base', JSON.stringify(prs.data));

        var tabContainer = document.querySelectorAll('.tab');

        if (tabContainer) {
            tabs.innerHTML = '';
            infoBlock.innerHTML = '';
        }

        loadLocalStorageContent();
    }
});


tabs.addEventListener('click', function(event) {
    var tab = document.getElementsByClassName('tab'),
    infoContainer = document.getElementsByClassName('info');
    if (event.target.classList == 'tab' ) {
        for (var i = 0; i < tab.length; i++) {
            if (event.target == tab[i]) {
                tab[i].classList.add('active');
                infoContainer[i].classList.remove('hide');
                infoContainer[i].classList.add('flex');
            }
            else {
                infoContainer[i].classList.add('hide');
                infoContainer[i].classList.remove('flex');
                tab[i].classList.remove('active');
            }
        }
    }
});

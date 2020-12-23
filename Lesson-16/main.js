var blockContent = document.querySelector('.block_content'),
tabsContainer = document.querySelector('.block'),
btn = document.querySelector('.block_btn');

function loadLocalStorageContent() {
    var localbase = JSON.parse(localStorage.base),
    bias = 0;

    for (var j = 0; j < localbase.length; j++) {
        var tab = document.createElement('div'),
        info = document.createElement('div'),
        divContainer = document.createElement('div');
        
        divContainer.classList.add('block_content_container');
        tab.classList.add('block_content_tab');
        info.classList.add('block_content_info');
        tab.innerHTML = 'User ' + (j+1);
        info.innerHTML = '<img class="img" src="' + localbase[j].avatar + '"></img><div class="info">Name: '+ localbase[j].first_name +'<br>Last name: '+ localbase[j].last_name + '</div>'

        if (j == 0) {
            tab.classList.add('active');
        }else {
            bias += 80;
            info.style.display = 'none';
            tab.style.left = bias + 'px';
        }

        divContainer.appendChild(info);
        divContainer.appendChild(tab);
        blockContent.appendChild(divContainer);
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
        var statusType = +String(this.status)[0],
        tabs = document.getElementsByClassName('block_content_container');

        if (statusType === 2) {
            try {
                var prs = JSON.parse(this.response);

                 throw { name: 'Не типичнаяя ошибка', message: 'Чо то пошло не так' };
            } catch(error) {
                var divError =  document.createElement('div');

                blockContent.innerHTML = '';
                localStorage.clear();
                divError.classList.add('error');
                divError.textContent = error.name + ' - ' + error.message;
                blockContent.appendChild(divError);
            }
        }

        localStorage.setItem('base', JSON.stringify(prs.data));

        if (tabs) {
            blockContent.innerHTML = '';
        }

        loadLocalStorageContent();
    }
});

tabsContainer.addEventListener('click', function(event) {
    var tabs = document.getElementsByClassName('block_content_tab'),
    info = document.getElementsByClassName('block_content_info');

    if (event.target.className === 'block_content_tab') {
        for (var key of tabs) {
            key.classList.remove('active');
        }
        for (var k of info) {
            k.style.display = 'none';
        }
    
        event.target.classList.add('active');
        event.target.previousSibling.style.display = 'flex';
    }

   
});
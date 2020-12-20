var tabsContainer = document.getElementsByClassName('block_content_tabs')[0],
btn = document.querySelector('.block_btn');

// console.log(tabsContainer);

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

xhr.send();

xhr.onload = function() {
	var statusType = +String(this.status)[0];

	if (statusType === 2) {
		try {
            var prs = JSON.parse(this.response);
            localStorage.setItem('base', JSON.stringify(prs.data));
			throw { name: 'Untypical error', message: 'Something went wrong' };
            
		} catch(error) {
			console.log(error.name + ' - ' + error.message);
		}
    }

    
    console.log(prs.data);

    var localItem = JSON.parse(localStorage.getItem('base'));
    console.log(localItem.length);

    if (localItem) {
        for (var key of localItem) {

        }
    }

    btn.addEventListener('click', function() {
        // console.log(prs.data.length);
        if (prs.data.length > 0) {
            var bias = 0;
            for (var i = 0; i < prs.data.length; i++) {
                var divTab = document.createElement('div');
    
                if (i == 0) {
                    bias = 0;
                    divTab.classList.toggle('active');
                }else {
                    bias += 90;
                }
                
                divTab.className = 'block_content_tabs_item'
                divTab.innerHTML = 'User ' + i;
                divTab.style.left = bias + 'px';
                tabsContainer.appendChild(divTab);
                // console.log(divTab.style);
            }
        }

    });
    

};
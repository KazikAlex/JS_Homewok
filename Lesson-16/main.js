var tabsContainer = document.getElementsByClassName('block_content_tabs')[0];

console.log(tabsContainer);

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

xhr.send();

xhr.onload = function() {
	var statusType = +String(this.status)[0];

	if (statusType === 2) {
		try {
			var prs = JSON.parse(this.response);
			throw { name: 'Untypical error', message: 'Something went wrong' };
            
		} catch(error) {
			console.log(error.name + ' - ' + error.message);
		}
        
		// console.log('After try/catch');
    }
    console.log(prs.data);

    if (prs.data.length > 0) {
        var bias = 0;
        for (var i = 0; i < prs.data.length; i++) {
            var divTab = document.createElement('div');

            if (i = 0) {
                bias = 0;
            }else {
                bias += 110;
            }
            
            divTab.className = 'block_content_tabs_item'
            divTab.innerHTML = 'User' + i;
            divTab.style.left = bias + 'px';
            tabsContainer.appendChild(divTab);
        }
    }

};
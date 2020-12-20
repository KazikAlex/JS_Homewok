var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://reqres.in/api/users?page=2');

xhr.onload = function() {
	var statusType = +String(this.status)[0];

	if (statusType === 2) {
		try {
			JSON.parse(this.response);
			//JSON.parse('Hello');
			throw { name: 'Untypical error', message: 'Something went wrong' };
			//throw new Error('Something went wrong');
		} catch(error) {
			console.log(error.name + ' - ' + error.message);
		}

		console.log('After try/catch');
	}
};

xhr.send();
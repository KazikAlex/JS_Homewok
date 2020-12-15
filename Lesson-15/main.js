var x = document.getElementById('x'),
y = document.getElementById('y'),
btn = document.getElementById('btn'),
order = false,
xValidate = false,
yValidate = false;

x.addEventListener('keyup', function() {
    if (x.value < 0 || x.value > 10 || x.value == ' ' || x.value.match(/\D/)) {
        alert('Введите в поле Х число от 1 до 10');
        x.value = '';
        btn.setAttribute('disabled', 'disabled');
        xValidate = false;
    }else if (x.value == ''){
        btn.setAttribute('disabled', 'disabled');
        xValidate = false;
    }else {
        xValidate = true;
        if (yValidate) {
            btn.removeAttribute('disabled');
        }
    }
});

y.addEventListener('keyup', function() {
    if (y.value < 0 || y.value > 10 || y.value == ' ' || y.value.match(/\D/)) {
        alert('Введите в поле Y число от 1 до 10');
        y.value = '';
        btn.setAttribute('disabled', 'disabled');
        yValidate = false;
    }else if (y.value == ''){
        btn.setAttribute('disabled', 'disabled');
        yValidate = false;
    }else {
        yValidate = true;
        if (xValidate) {
            btn.removeAttribute('disabled');
        }
        
    }
})

btn.addEventListener('click', function() {
    if (haveTable = document.getElementsByTagName('table')[0]) {
        haveTable.remove();
    }

    var table = document.createElement('table');
    document.body.append(table);
    for (var i = 0; i < y.value; i++) {
        var tr = document.createElement('tr');
        insertTr = table.append(tr);
        for (var j = 0; j < x.value; j++) {
            if (j == 0 && x.value%2 == 0) {
                order = !order;
            }

            var td = document.createElement('td');

            if (order) {
                td.className = '';
            }else {
                td.className = 'black';
            }

            tr.append(td);
            order = !order;
        }
    }

    var colTd = table.getElementsByTagName('td');

    table.addEventListener('click', function(event) {
        var target = event.target;
        
        for (var c = 0; c < colTd.length; c++) {
            colTd[c].classList.toggle('black');
        }
    });
});
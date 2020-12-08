var btn = document.getElementById('btn'),
    tbody = document.getElementsByTagName('tbody')[0];

tbody.addEventListener('click', function(event) {
    if (event.target == btn) {
        var trTag = document.createElement('tr'),
            insertChild = document.getElementsByTagName('tr')[0];

        trTag.innerHTML = '<td></td><td></td><td></td>';
        tbody.insertBefore(trTag, insertChild);
    }else {
        var activeTr = event.target;
        activeTr.innerHTML = '<input>';

        var input = activeTr.getElementsByTagName('input')[0];
            input.keypress(function(event) {
                if(event.keyCode == 13) {
                    event.preventDefault();
                }
            });

        console.log(input);
        
    }
});

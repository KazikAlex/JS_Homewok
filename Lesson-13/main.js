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

        if (activeTr.textContent == '') { 
            activeTr.innerHTML = '<input>';
            activeTr.firstElementChild.focus();
            input = document.getElementsByTagName('input')[0];

            input.addEventListener("focusout", function() {
                activeTr.textContent = input.value;
                input.remove();
            });
        
            input.addEventListener("keydown", function(e) {
                if (e.keyCode === 13) {
                    activeTr.inputContent = input.value;
                    input.remove();
                }
            });

        }else {
            var inputContent =  activeTr.textContent;

            activeTr.innerHTML = '<input>';
            input = document.getElementsByTagName('input')[0];
            input.value += inputContent;
            activeTr.firstElementChild.focus();

            input.addEventListener("focusout", function() {
                activeTr.textContent = input.value;
                input.remove();
            });
        
            input.addEventListener("keydown", function(e) {
                if (e.keyCode === 13) {
                    activeTr.inputContent = input.value;
                    input.remove();
                }
            });
        }
        
    }
});

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

        

        // activeTr.innerHTML = '<input>';
        // activeTr.firstElementChild.focus();


        // if (activeTr.firstElementChild) {}




        if (activeTr.textContent == '') { 
            activeTr.innerHTML = '<input>';
            activeTr.firstElementChild.focus();
        }else {
            var inputContent = target.textContent;
            var input = activeTr.getElementsByTagName('input')[0];

            console.log(input);

            input.value += inputContent;
            input.focus();

            input.addEventListener("focusout", function() {
                activeTr.textContent = input.value;
                input.remove();
            });
        
            input.addEventListener("keydown", function(e) {
                if (e.keyCode === 13) {
                    activeTr.textContent = input.value;
                    input.remove();
                }
            });
        }

        // var input = activeTr.focus();
        
        // input.getElementsByTagName('input')[0];
        
        // input.getElementsByTagName('input')[0];
        //     input.addEventListener('keypress', function(event) {
        //         if(event.keyCode == 13) {
        //             event.preventDefault();
        //         }
        //     });

        // console.log(input);

        
        
    }
});




// tableContainer[0].addEventListener("click", function(event) {
//     var target = event.target;

//     if (target.parentElement == idContainer){
//       return;
//     }

//     if (target.textContent == '') {
//         target.innerHTML = '<input type="text" size="10" id="inputId">';
//         target.firstElementChild.focus();
//     } else{
//         var str = target.textContent;

//         target.innerHTML = '<input type="text" size="10" id="inputId">';

//         var inputElement = document.getElementById('inputId');

//         inputElement.value += str;
//         inputElement.focus();

//     }

//     var input = document.getElementById('inputId');

//     input.addEventListener("focusout", function() {
//         target.textContent = input.value;
//         input.remove();
//     });

//     input.addEventListener("keydown", function(e) {
//         if (e.keyCode === 13) {
//             target.textContent = input.value;
//             input.remove();
//         }
//     });

// });

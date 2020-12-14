var x = document.getElementById('x'),
y = document.getElementById('y'),
btn = document.getElementById('btn'),
unlockX = false,
unlockY = false;

x.addEventListener('keyup', function() {
    unlockX = true;
    console.log(unlockX);
});



y.addEventListener('keyup', function() {
    unlockY = true;
    console.log(unlockY);
});


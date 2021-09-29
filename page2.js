function show(x) {
    document.querySelector('.hide' + x).classList.add('show');
    document.querySelector('.gabarit' + x).style.opacity = '0';
    document.querySelector('.button' + x).style.opacity = '0';
};
function close(x) {
    document.querySelector('.hide' + x).classList.remove('show');
    document.querySelector('.gabarit' + x).style.opacity = '1';
    document.querySelector('.button' + x).style.opacity = '1';
}
document.querySelector('.close1').addEventListener('click', function() {
    close(1);
});
document.querySelector('.close2').addEventListener('click', function() {
    close(2);
});
document.querySelector('.close3').addEventListener('click', function() {
    close(3);
});


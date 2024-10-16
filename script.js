let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll',() => {
    let maxScrollValue = Math.min(window.scrollY, 990);

    text.style.marginTop = maxScrollValue * 2.5 + 'px';
    leaf.style.top = maxScrollValue * -1.5 + 'px';
    leaf.style.left = maxScrollValue * 1.5 + 'px';
    hill5.style.left = maxScrollValue * 1.5 + 'px';
    hill4.style.left = maxScrollValue * -1.5 + 'px';
    hill1.style.top = maxScrollValue * 1 + 'px';
});
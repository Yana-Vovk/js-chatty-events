window.addEventListener('mousemove', _.throttle(onMouseMove,300));
let counter = 0;
function onMouseMove(e) {
    counter += 1;
    console.log(counter);
}
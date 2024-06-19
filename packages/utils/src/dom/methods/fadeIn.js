export default function fadeIn(element, duration) {
    if (element) {
        element.style.opacity = 0;

        let last = +new Date();
        let opacity = 0;

        let tick = function () {
            opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
            element.style.opacity = opacity;
            last = +new Date();

            if (+opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        };

        tick();
    }
}

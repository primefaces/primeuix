export default function fadeOut(element, duration) {
    if (element) {
        let opacity = 1,
            interval = 50,
            gap = interval / duration;

        let fading = setInterval(() => {
            opacity -= gap;

            if (opacity <= 0) {
                opacity = 0;
                clearInterval(fading);
            }

            element.style.opacity = opacity;
        }, interval);
    }
}

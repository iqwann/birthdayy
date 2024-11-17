document.addEventListener('DOMContentLoaded', () => {
    const screen1 = document.querySelector('.screen-1');
    const screen2 = document.querySelector('.screen-2');
    const lines = document.querySelectorAll('.message .line');
    const signature = document.querySelectorAll('.message .signature');
    let lineIndex = 0;

    // Switch to second screen on click
    screen1.addEventListener('click', () => {
        screen1.classList.add('hidden');
        screen2.classList.remove('hidden');
        revealLines();
    });

    // Reveal lines one by one
    function revealLines() {
        if (lineIndex < lines.length) {
            lines[lineIndex].classList.add('visible');
            lineIndex++;
            setTimeout(revealLines, 2000); // Delay between lines
        } else {
            signature.forEach(sig => sig.classList.add('visible'));
        }
    }
});

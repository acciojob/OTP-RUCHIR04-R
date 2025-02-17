//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes.forEach((code, idx) => {
    code.addEventListener('input', () => {
        if (code.value.length === 1 && idx < codes.length - 1) {
            codes[idx + 1].focus();
        }
    });

    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && idx > 0 && code.value.length === 0) {
            codes[idx - 1].focus();
        }
    });
});

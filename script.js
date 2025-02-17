const codes = document.querySelectorAll('.code');

codes.forEach((code, idx) => {
    // Move to the next input field on input
    code.addEventListener('input', () => {
        if (code.value.length === 1 && idx < codes.length - 1) {
            codes[idx + 1].focus();
        }
    });

    // Handle backspace key
    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (code.value.length === 0 && idx > 0) {
                codes[idx - 1].focus();
            }
        }
    });

    // Move focus to the next field if the user types a number
    code.addEventListener('paste', (e) => {
        const pastedData = e.clipboardData.getData('text');
        if (pastedData.length === 6) {
            codes.forEach((input, index) => {
                input.value = pastedData[index] || '';
                if (input.value) {
                    input.focus();
                }
            });
        }
    });
});;

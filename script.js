// script.js
const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
      inputs[index - 1].focus();
    }
  });

  input.addEventListener('paste', (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').split('');
    pastedData.forEach((char, i) => {
      if (inputs[index + i] && /^\d$/.test(char)) {
        inputs[index + i].value = char;
        if (index + i < inputs.length - 1) {
          inputs[index + i + 1].focus();
        }
      }
    });
  });
});

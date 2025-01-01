const nameOfInput = document.getElementById('name-input');
const nameOfOutput = document.getElementById('name-output');

function updateNameOutput() {
    const trimmedName = nameOfInput.value.trim();
    if (trimmedName === '') {
        nameOfOutput.textContent = 'Anonymous';
    } else {
        nameOfOutput.textContent = trimmedName;
    }
}

nameOfInput.addEventListener('input', updateNameOutput);
// Select DOM elements
const encodeInput = document.getElementById('encode-input');
const decodeInput = document.getElementById('decode-input');
const encodeBtn = document.getElementById('encode-btn');
const decodeBtn = document.getElementById('decode-btn');
const encodedOutput = document.getElementById('encoded-output');
const decodedOutput = document.getElementById('decoded-output');

// Function to encode HTML entities
function encodeHtmlEntities(text) {
  const textarea = document.createElement('textarea');
  textarea.textContent = text;
  return textarea.innerHTML;
}

// Function to decode HTML entities
function decodeHtmlEntities(text) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

// Add event listener for encoding
encodeBtn.addEventListener('click', () => {
  const inputText = encodeInput.value;
  if (inputText.trim() === '') {
    alert('Please enter text to encode.');
    return;
  }
  const encodedText = encodeHtmlEntities(inputText);
  encodedOutput.textContent = encodedText;
});

// Add event listener for decoding
decodeBtn.addEventListener('click', () => {
  const inputText = decodeInput.value;
  if (inputText.trim() === '') {
    alert('Please enter text to decode.');
    return;
  }
  const decodedText = decodeHtmlEntities(inputText);
  decodedOutput.textContent = decodedText;
});

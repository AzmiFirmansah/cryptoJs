function generate() {
  var mode = document.getElementById('modeSelect').value;
  var inputText = document.getElementById('inputText').value;
  var key = document.getElementById('key').value;

  if (mode === 'encrypt') {
    var encrypted = CryptoJS.AES.encrypt(inputText, key).toString();
    document.getElementById('floatingTextareaDisabled').value = encrypted;
  } else if (mode === 'decrypt') {
    try {
      var decrypted = CryptoJS.AES.decrypt(inputText, key).toString(CryptoJS.enc.Utf8);
      document.getElementById('floatingTextareaDisabled').value = decrypted;
    } catch (error) {
      document.getElementById('floatingTextareaDisabled').value = 'Invalid key or ciphertext';
    }
  }
}

function toggleMode() {
  var mode = document.getElementById('modeSelect').value;
  var keyField = document.getElementById('key');
  var resultField = document.getElementById('floatingTextareaDisabled');

  if (mode === 'encrypt') {
    keyField.placeholder = 'Input Key';
    resultField.placeholder = 'Result';
  } else if (mode === 'decrypt') {
    keyField.placeholder = 'Input Key for Decryption';
    resultField.placeholder = 'Decrypted Text';
  }
}

function resetField() {
  document.getElementById('inputText').value = '';
  document.getElementById('key').value = '';
  document.getElementById('floatingTextareaDisabled').value = '';
}

function copyText() {
  var resultText = document.getElementById('floatingTextareaDisabled');
  resultText.select();
  document.execCommand('copy');
  var copyIcon = document.getElementById('copyText');
  copyIcon.classList.remove('fa-copy');
  copyIcon.classList.add('fa-check');
  setTimeout(function () {
    copyIcon.classList.remove('fa-check');
    copyIcon.classList.add('fa-copy');
  }, 1500);
}

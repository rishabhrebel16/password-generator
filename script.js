function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;
  
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
    let characterPool = lowercaseChars;
  
    if (includeUppercase) {
      characterPool += uppercaseChars;
    }
    if (includeNumbers) {
      characterPool += numberChars;
    }
    if (includeSymbols) {
      characterPool += symbolChars;
    }
  
    if (characterPool === '') {
      alert('Please select at least one character type.');
      return;
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      password += characterPool[randomIndex];
    }
  
    document.getElementById('password').value = password;
  }
  
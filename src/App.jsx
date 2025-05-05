import { useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(0); 
  const [password, setPassword] = useState('');
  const [includeUppercase, setIncludeUppercase] = useState(true); 
  const [includeLowercase, setIncludeLowercase] = useState(true); 
  const [includeNumbers, setIncludeNumbers] = useState(true); 
  const [includeSymbols, setIncludeSymbols] = useState(true); 

  const generatePassword = () => {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()';
    
    let characters = '';
    if (includeUppercase) characters += upperChars;
    if (includeLowercase) characters += lowerChars;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;


    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setPassword(generatedPassword);
  };

  // function for password copy
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <div className="container">
      <h1>Password Generator</h1>
      
     
      <label>
      Password Length:
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          min="5"
          max="20"
        />
      </label>

      <div>
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
         Upper case
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          Lower case
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Symbols
        </label>
      </div>
      
      <button onClick={generatePassword}>Generate Password</button>
      
      <p>{password}</p>

      
      {password && <button onClick={copyToClipboard}>Copy Password</button>}
    </div>
  );
}

export default App;

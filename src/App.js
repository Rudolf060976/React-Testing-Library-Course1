import react, { useState } from 'react'; 

function App() {

  const [backColor, setBackColor] = useState('red');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleButtonClick = () => {

    if (backColor === 'red') {
      return setBackColor('blue');
    }

    setBackColor('red');
  };

  const handleCheckboxClick = (e) => {
    
    setIsDisabled(e.target.checked);   

  };

  return (
    <div>
      <button
        style={{ backgroundColor: isDisabled ? 'gray' : backColor }}
        onClick={handleButtonClick}
        disabled={isDisabled}
      >
        {backColor === 'red' ? 'Change to Blue' : 'Change to Red'}
      </button>
      <label htmlFor="chkDisable" >
        Disable Button
      </label>
      <input type="checkbox" id="chkDisable" onClick={handleCheckboxClick} />
    </div>
  );
}

export default App;

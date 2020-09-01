import React from 'react';

const KeyPad = ({buttonPressed}) => {

    const buttonPres = e => {
        buttonPressed(e.target.name);
    };

      return (
        <div className="App">
          <div className="App-header">
            <div className="calc">
              <div className="row">
                <button name="7" onClick={(event)=> buttonPressed(event.target.name)}> 7 </button>
                <button name="8" onClick={buttonPres}> 8 </button>
                <button name="9" onClick={buttonPres}> 9 </button>
                <button name="/" onClick={buttonPres}> / </button>
              </div>
              <div className="row">
                <button name="4" onClick={buttonPres}> 4 </button>
                <button name="5" onClick={buttonPres}> 5 </button>
                <button name="6" onClick={buttonPres}> 6 </button>
                <button name="*" onClick={buttonPres}> * </button>
              </div>
              <div className="row">
                <button name="1" onClick={buttonPres}> 1 </button>
                <button name="2" onClick={buttonPres}> 2 </button>
                <button name="3" onClick={buttonPres}> 3 </button>
                <button name="-" onClick={buttonPres}> - </button>
              </div>
              <div className="row">
                <button name="." onClick={buttonPres}> . </button>
                <button name="0" onClick={buttonPres}> 0 </button>
                <button name="=" onClick={buttonPres}> = </button>
                <button name="+" onClick={buttonPres}> + </button>
              </div>
              <div className="row">
                <button name="C" onClick={buttonPres}> C </button>
                <button name="CE" onClick={buttonPres}> CE </button>
               </div>
            </div>        
          </div>
        </div>
      );
}

export default KeyPad;
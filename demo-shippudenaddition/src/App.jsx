 import React, {useState} from 'react'; //for using hooks, able to change things in the function
 import './App.css'; //importing css file
 import NarutoIcon from './narutoicon'; //importing narutoicon.js file

 
 
  function AddNumbers() { //function to add numbers
    const [count1, setCount1] = useState(0); //useState is a hook that lets you add React state to function components
    const [count2, setCount2] = useState(0); // this says start at 0 
    const [result, setResult] = useState(0); 
   
    
   
      function handleClick1(x, className="rotating-input"){ //function to handle the first input. This is create a input bar for the webpage. 
      setCount1(x.target.value); //setCount1 is a function that will change the value of count1 to the value of the input. This saying what will be in the box is a integer.
    
    }; 

   
    function handleClick2(x, className="rotating-input"){ //function to handle the second input
      setCount2(x.target.value); //setCount2 is a function that will change the value of count2 to the value of the input
     

    };


    function calculateResult(){ //function to calculate the result. This will render the word result and sum 
      setResult(Number(count1) + Number(count2)); // This is the addition of the two numbers.
    } 

    function restValues(className="RestButton"){ //function to reset the values
      setCount1(0); //setCount1 is a function that will change the value of count1 to 0
      setCount2(0); //setCount2 is a function that will change the value of count2 to 0
      setResult(0); //setResult is a function that will change the value of result to 0
    }
  
    function handleFocus1(){ //function to handle the focus of the first input. When the user clicks on the input bar, the value will be an empty string.
      if (count1 === 0) { //if the value of count1 is 0. Similar to boolean, if the bar shows 0 then it will be an empty string.
      setCount1(''); //setCount1 is a function that will change the value of count1 to an empty string. If above is true this is allowing it to turn to 0. 
    }
  }

    function handleFocus2(){ // same as above we need two for both input bars.
      if (count2 === 0) {
        setCount2('');
    }
  }
    return ( //returning the following code to the webpage. What we want the user to see on the webpage.
      <div className='container'> {/* this is the container for the webpage. This is where the webpage will be displayed.*/}
      <h1> {/* this is the header for the webpage. This is the title of the webpage. */}
        <NarutoIcon /> Addition</h1> {/* this is the naruto icon and the word addition. This is the title of the webpage. */}
      <div className="input-container"> {/* this is the container for the input. This is where the input will be displayed. */}
        <input //this is the input bar for the webpage. This is where the user will input the numbers.
          type="number" //this is the type of input. This is a number input.
          className="rotating-input" //this is the class name for the input. This is the style of the input.
          value={count1} // this is the value of the input. This is the value of count1.
          onChange={handleClick1} //  this is the function that will handle the input. This is the function that will handle the input of count1.
          onFocus={handleFocus1} // this is the function that will handle the focus of the input. This is the function that will handle the focus of count1.
          
        /> {/*this is the closing tag for the input. This is the closing tag for the input bar. */}
        <div className="MiddleText"><p><span>A</span>dd Them #'s U<span>p</span></p> {/*this is the text in the middle of the input bars. This is the text in the middle of the input bars.*/}
        </div> 
                <input
          type="number" //this is the type of input. This is a number input.
          className="rotating-input" //this is the class name for the input. This is the style of the input.
          value={count2} // this is the value of the input. This is the value of count2.
          onChange={handleClick2} //  this is the function that will handle the input. This is the function that will handle the input of count2.
          onFocus={handleFocus2} // this is the function that will handle the focus of the input. This is the function that will handle the focus of count2.
          
        />
      </div>
      <button onClick={calculateResult}>Add</button>  {/*this is the button for the webpage. This is the button that will add the numbers.*/}
      <button onClick={restValues}>Reset</button> {/* this is the button for the webpage. This is the button that will reset the values. */}
      <h2>Result: {result}</h2> {/* this is the result of the addition. This is the result of the addition of the two numbers.*/}
    </div> //this is the closing tag for the container. This is the closing tag for the container of the webpage.
    ); //this is the closing tag for the return. This is the closing tag for the return of the code.

  } //this is the closing tag for the function. This is the closing tag for the function of the code.

 
  
 

export default AddNumbers;
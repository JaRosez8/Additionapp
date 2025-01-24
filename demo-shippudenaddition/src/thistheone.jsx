 import React, {useState} from 'react'; 

  function addNumbers() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [result, setResult] = useState(0);

    function handleClick1(x){
      setCount1(count1(x.value))

    }; 

    function handleClick2(x){
      setCount2(count2(x.value))

    };


    function calculateResult(){
      setResult(count1 + count2);
    }

  }; 

  return (
    <div>
      <h1> Shippuden Addition</h1>
      <input type="number" onChange={handleClick1} />
      <input type="number" onChange={handleClick2} />
      <button onClick={calculateResult}>Add</button>
      <h2>Result: {result}</h2>
    </div>
  
 
)

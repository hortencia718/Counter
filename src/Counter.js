import React, { useState} from 'react';





// handleClick =() => {
    // this.setCount
// }

function Counter (){


    const [count, setCount] = useState(0);
    return(

    <div className="Counter">
        <p className="count">{count}</p>
        <br></br>
        <section className="controls">
          <button onClick={() => setCount(count + 1)}>Add</button>
         <br></br>
          <button onClick={() => setCount(count - 1)}>Subtract</button>
    
          <button onClick ={() => setCount(0)}>Reset</button>
        </section>
      </div>
    );
}

export default Counter;
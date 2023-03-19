import { useState } from "react";

export const useCounter = ( initialValue = 10, times = 10 ) => {
    const [ counter, setCounter ] = useState( initialValue )

    const increment = () => {
        if ( counter < 160 ) {  
            setCounter( counter + times )
        } else { 
            reset()
        }
    }

    const decrement = () => {
        if ( counter <= 1 ) return;
        setCounter( counter - times )
    }

    const reset = () => {
        if ( counter === 0 ) return;
        setCounter( initialValue )
    }
    
    return {
        counter,
        increment,
        decrement,
        reset
    }
}
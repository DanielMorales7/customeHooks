    // El hook es una simple función

    import { useState } from "react"

    // Los hooks se exportan 
    export const useCounter = (initialValue = 10) =>{

        const [counter, setCounter] = useState(initialValue);

        const increment  = (value = 1) => {
            //pasa lo del object object porque se está pasando todo el evento como primer argumento
            // console.log(value);
            setCounter(counter + value);
        }

        const decrement  = (value = 1) => {
            //validación para que haya negativos
            if(counter === 0) return;
            setCounter(counter - value);
        }

        const reset  = () => {
            setCounter(initialValue);
        }

        //debe tener un return
        return{
            counter,
            increment,
            decrement,
            reset
        }

    }
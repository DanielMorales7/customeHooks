import { useState } from "react";


export const useForm = ( initialForm={} ) => {

    const [formState, setFormState] = useState(initialForm);

    //desestructuramos el target del evento
    const onInputChange = ({target}) => {
        const {name, value} = target;
        
        setFormState({
            ...formState,
            [name]:value
        })
        
    }

    const onResetForm = () =>{
        setFormState(initialForm);
    }

    //agregamos lo que deseamos exportar a los demás

    return{
        ...formState,
        formState,
        setFormState,
        onInputChange,
        onResetForm
    }
}

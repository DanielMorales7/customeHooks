// {type: [todo remove], payload:id }

export const todoReducer = (initialState=[], action) =>{

    switch (action.type) {
        case '[TODO] Add Todo':
            
        // Se pone el Throw cuando hace falta implementar funcionalidad
        // throw new Error('action.type = ABC no está implementada ')
        return [...initialState, action.payload];

        case '[TODO] Remove Todo':
            
        return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] Complete Todo':
            
        return initialState.map(todo => {

            if(todo.id === action.payload){
                
                return {
                    ...todo,
                    done: !todo.done
                }
                
            }
             
            return todo;
        })
        
    
        default:
            return initialState;
    }
}
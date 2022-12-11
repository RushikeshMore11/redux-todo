import { DECREMENT, INCREMENT } from "./action-types"



export const incrementValue = (count) =>{
    return{
        type:INCREMENT
    }
}
export const decrementValue = (count) =>{
    return{
        type:DECREMENT
    }
}
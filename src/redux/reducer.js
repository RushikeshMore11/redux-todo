import { DECREMENT, INCREMENT } from "./action-types"

const initialState = {
    count:0
}
const initialData =[];
export const myReducer = (state=initialState,action) =>{
        switch(action.type){
            case INCREMENT:
                        return{...state,count:state.count+1}
            case DECREMENT:
                        return{...state,count:state.count-1}  
            default : return state;                      
        }
};
export const inputReducer = (state=initialData,action)=>{
    switch(action.type){
        default : return state;
    }
};
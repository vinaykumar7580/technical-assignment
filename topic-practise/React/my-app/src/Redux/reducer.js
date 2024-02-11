import * as types from "./actionTypes"

const initialState={
    data:[]
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case types.SEND_FORM_DATA:
            return{
                ...state,
                data:[...state.data,action.payload]
            }
        case types.EDIT_FORM_DATA:
            return{
                ...state,
                data:state.data.map((el,index)=> index==action.id? action.payload:el)
            }
        case types.DELETE_FORM_DATA:
            return{
                ...state,
                data:state.data.filter((el, index)=>index!==action.id)
            }
        default:
            return state;
    }
}

export {reducer}
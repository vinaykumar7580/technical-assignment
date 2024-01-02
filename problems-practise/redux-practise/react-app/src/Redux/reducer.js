import * as types from "./actionTypes"

const intialState={
    products:[],
    product:{}
}

const reducer=(state=intialState, action)=>{
    switch(action.type){
        case types.GETALLPRODUCTS:
            return{
                ...state,
                products:action.payload
            }
        case types.GETSINGLEPRODUCT:
            return{
                ...state,
                product:action.payload
            }
        default:
            return state;
    }

}
export {reducer}
import * as types from "./actionTypes"

const sendData=(payload)=>{
    return{
        type:types.SEND_FORM_DATA,
        payload
    }
}


const editData=(id,payload)=>{
    return{
        type:types.EDIT_FORM_DATA,
        id,
        payload
    }
}

const deleteData=(id)=>{
    return{
        type:types.DELETE_FORM_DATA,
        id
    }
}

export const handleSendData=(data)=>(dispatch)=>{
    dispatch(sendData(data))
}

export const handleEditData=(id)=>(dispatch)=>{
    const newData={name:"vinay", email:"vinay@gmail.com", mobile:222}
    dispatch(editData(id, newData))
}

export const handleDeleteData=(id)=>(dispatch)=>{
    dispatch(deleteData(id))
}


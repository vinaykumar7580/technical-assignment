import { useState } from "react"




function Todo(){
    const [formData, setFormData]=useState({
        name:"",
        task:"",
        status:false
    })
    const [data, setData]=useState([])

    const handleChange=(e)=>{
        const {name, value}=e.target;
        setFormData({...formData, [name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        let payload={
            id:Math.random(),
            name:formData.name,
            task:formData.task,
            status:formData.status

        }

        console.log("payload", payload)

        setData([...data, payload])
        setFormData({
            name:"",
            task:"",
            status:false
        })

    }

    const handleUpdate=(id)=>{
        let newData=data.map((todo)=> todo.id===id? {...todo, status: !todo.status} : todo)
        setData(newData)

    }

    const handleDelete=(id)=>{
        let resData=data.filter((todo)=> todo.id !== id )
        setData(resData)
    }

    const {name, task}=formData

    console.log("data", data)

    return(
        <div>
            <h2>Todo Crud Operation</h2>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <br />
                <input type="text" placeholder="enter name" name="name" value={name} onChange={handleChange} />
                <br />
                <br />
                <label>Task</label>
                <br />
                <input type="text" placeholder="enter task" name="task" value={task} onChange={handleChange}/>
                <br />
                <br />
                <button type="submit">Submit</button>

            </form>
            <hr />

            <div>
                {data && data?.map((el, index)=>(
                    <div key={index}>
                        <h3>Name: {el.name}</h3>
                        <h3>Task: {el.task}</h3>
                        <h3>Status: {el.status? "completed":"pending"}</h3>
                        <button onClick={()=>handleUpdate(el.id)}>update</button>
                        <button onClick={()=>handleDelete(el.id)}>delete</button>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Todo
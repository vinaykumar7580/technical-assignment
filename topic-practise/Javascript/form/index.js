
let data=[]

function handleSubmit(e){
    e.preventDefault();

    let name=document.querySelector("#name").value 
    let email=document.querySelector("#email").value
    let mobile=document.querySelector("#mobile").value

    let payload={name,email,mobile}

    data.push(payload)

    document.querySelector("#myForm").reset()

    handleData(data)

}

let container=document.querySelector("#container")

function handleData(data){
    container.innerHTML=null

    data.forEach((el,index)=>{
        let div=document.createElement("div")
        let name=document.createElement("h2")
        name.textContent=el.name
        let email=document.createElement("h3")
        email.textContent=el.email
        let mobile=document.createElement("h4")
        mobile.textContent=el.mobile
        let editButton=document.createElement("button")
        editButton.textContent="Edit"
        editButton.addEventListener("click", ()=>{
            handleEdit(index)
        })
        let delButton=document.createElement("button")
        delButton.textContent="Delete"
        delButton.addEventListener("click", ()=>{
            handleDelete(index)
        })

        div.append(name,email,mobile,editButton, delButton)
        container.append(div)
    })

}

function handleEdit(index){
    data[index]={name:"ram",email:"ram@gmail.com", mobile:66666666}
    handleData(data)

}

function handleDelete(index){
    data.splice(index, 1)
    handleData(data)

}
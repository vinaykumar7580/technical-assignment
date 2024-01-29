let data=[]

function handleSubmit(e){
    e.preventDefault();

    let name=document.querySelector("#name").value
    let email=document.querySelector("#email").value
    let age=document.querySelector("#age").value
    let address=document.querySelector("#address").value

    let payload={
        name,
        email,
        age,
        address
    }

    data.push(payload)

    document.querySelector("#myForm").reset();

    handleData(data)


}

let tbody=document.querySelector("#tbody")

function handleData(data){
    tbody.innerHTML=null

    data.forEach((el, index)=>{
        let tr=document.createElement("tr")
        let sr=document.createElement("td")
        sr.textContent=index+1
        let name=document.createElement("td")
        name.textContent=el.name
        let email=document.createElement("td")
        email.textContent=el.email
        let age=document.createElement("td")
        age.textContent=el.age
        let address=document.createElement("td")
        address.textContent=el.address

        let td=document.createElement("td")
        let editButton=document.createElement("button")
        editButton.textContent="Edit"
        editButton.addEventListener("click", ()=>{
            handleEdit(index)
        })

        let deleteButton=document.createElement("button")
        deleteButton.textContent="Delete"
        deleteButton.addEventListener("click", ()=>{
            handleDelete(index)
        })

        td.append(editButton, deleteButton)
        tr.append(sr, name, email, age, address, td)
        tbody.append(tr)

    })

}

function handleEdit(index){

    data[index]={name:"ram", email:"ram@gmail.com", age:35, address:"up"}
    handleData(data)

}

function handleDelete(index){
    data.splice(index, 1)
    handleData(data)

}
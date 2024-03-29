

async function handleApi(){
    try{
        let res=await fetch(`https://jsonplaceholder.typicode.com/todos`)
        let data=await res.json()
        handleData(data)

    }catch(err){
        console.log(err)
    }
}
handleApi()

let container=document.querySelector("#container")

function handleData(data){
    container.innerHTML=null
    
    data.forEach((el)=>{
        let div=document.createElement("div")
        div.id="product"
        let id=document.createElement("h3")
        id.textContent=el.id
        let title=document.createElement("h3")
        title.textContent=el.title
        let status=document.createElement("h3")
        status.textContent=`${el.completed? "Completed":"Pending"}`
        status.style.color=`${el.completed? "green":"red"}`
        div.append(id,title,status)
        container.append(div)
    })
}

async function main(){
    try{
        let res=await fetch(`https://jsonplaceholder.typicode.com/todos`)
        let data=await res.json()
        handleData(data)

    }catch(err){
        console.log(err)
    }


}

main()

let container=document.querySelector("#container")

function handleData(data){
    container.innerHTML=null

    data.forEach((el)=>{
        let div=document.createElement("div")
        div.id="mainbox"
        let id=document.createElement("h3")
        id.innerText=el.id
        let title=document.createElement("h3")
        title.textContent=el.title
        let status=document.createElement("button")
        status.textContent=el.completed? "complete":"pending"


        div.append(id,title, status)
        container.append(div)

    })
}
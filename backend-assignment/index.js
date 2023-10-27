const express=require("express")
const cors=require("cors")
const axios=require("axios")

const app=express()
app.use(express.json())
app.use(cors())

app.get("/data", (req, res)=>{
    
        axios.get("https://api.postalpincode.in/pincode/600001")
        .then((response)=>{
            console.log(response.data)
            //res.status(200).send({error:false, msg:"successfully got the areas list"})
        })
        .catch((err)=>{
            res.status(500).send(err)
        })

        console.log(res)

})



app.listen(8080, ()=>{
    console.log("port is running on port 8080")
})

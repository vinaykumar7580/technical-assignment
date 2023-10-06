import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "../Components/Style.css"


function Followers(){
    const [follower, setFollower]=useState([])
    const {username}=useParams()

    useEffect(()=>{
        handleFollowers()

    },[username])

    const handleFollowers=()=>{
        axios.get(`https://api.github.com/users/${username}/followers`)
        .then((res)=>{
            setFollower(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div>
            <h2>Followers</h2>
            <div className="list-name">
            {follower && follower.map((el)=>(
                <div key={el.id} className="list-name-link">
                    <img src={el.avatar_url} alt="" />
                    <Link to={`/follower/${el.login}`}><h3>{el.login}</h3></Link>
                </div>
            ))}
            </div>
            <br />
            <br />
        </div>
    )
}
export default Followers
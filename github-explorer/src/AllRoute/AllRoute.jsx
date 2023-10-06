import { Route, Routes } from "react-router-dom";
import InitialPage from "../Pages/InitialPage";
import RepoDetails from "../Pages/RepoDetails";
import Followers from "../Pages/Follower";
import Followerlist from "../Pages/Followerlist";


function AllRoute(){
    return(
       <Routes>
         <Route path="/" element={<InitialPage/>}/>
         <Route path="/repositories/:username/:repoName" element={<RepoDetails/>}/>
         <Route path="/followers/:username" element={<Followers/>}/>
         <Route path="/follower/:followername" element={<Followerlist/>}/>
       </Routes> 
    )
}
export default AllRoute
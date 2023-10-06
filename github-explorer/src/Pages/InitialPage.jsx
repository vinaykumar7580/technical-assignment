import { useState } from "react";
import axios from "axios";
import RepositoryList from "../Components/RepositoryList";
import { Link } from "react-router-dom";
import "../Components/Style.css"

function InitialPage() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username", username);

    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log("user not found!");
      });
  };

  console.log("data", userData);
  return (
    <div>
      <h1>Github Explorer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter github username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
        {userData && <h2>User Information</h2>}
      <div>
        {userData && (
          <div className="user-info">
            <div>
              <img src={userData.avatar_url} alt="vinay" />
            </div>
            <div>
              <h3>Username: {userData.login}</h3>
              <h3>Name: {userData.name}</h3>
              <button>
                <Link to={`/followers/${username}`}>View Followers</Link>
              </button>
            </div>
          </div>
        )}
      </div>
      <br />
      <div>{userData && <RepositoryList username={userData.login} />}</div>
      <br />
      <br />
    </div>
  );
}
export default InitialPage;

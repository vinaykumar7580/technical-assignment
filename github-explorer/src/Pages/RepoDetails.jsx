import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Components/Style.css";

function RepoDetails() {
  const { username, repoName } = useParams();
  const [repository, setRepository] = useState(null);

  useEffect(() => {
    handleRepoDetails();
  }, [username, repoName]);

  const handleRepoDetails = () => {
    axios
      .get(`https://api.github.com/repos/${username}/${repoName}`)
      .then((res) => {
        setRepository(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Repository Details</h2>
      <div className="repo-details">
      <p>Username: {username}</p>
      <p>Repository Name: {repoName}</p>
      {repository && (
        <div>
          <p>Description: {repository.description}</p>
          <p>Stars: {repository.stargazers_count}</p>
          <p>Forks: {repository.forks_count}</p>
          
        </div>
      )}
      </div>
    </div>
  );
}
export default RepoDetails;

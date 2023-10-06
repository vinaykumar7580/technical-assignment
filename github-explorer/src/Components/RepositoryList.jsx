import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Components/Style.css"

function RepositoryList({ username }) {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    handleRepo();
  }, [username]);

  const handleRepo = () => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        setRepo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("repo", repo);

  return (
    <div>
      <h2>Repository List</h2>
      <div className="list-name">
      {repo &&
        repo.map((el) => (
          <div key={el.id} className="list-name-link">
            <Link to={`/repositories/${username}/${el.name}`}>
            <strong>{el.name}</strong>
            </Link>
          </div>
        ))}
        </div>
    </div>
  );
}

export default RepositoryList;

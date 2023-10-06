import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Components/Style.css";

function Followerlist() {
  const [repo, setRepo] = useState([]);

  const { followername } = useParams(0);

  useEffect(() => {
    handleRepo();
  }, [followername]);

  const handleRepo = () => {
    axios
      .get(`https://api.github.com/users/${followername}/repos`)
      .then((res) => {
        setRepo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Repository List</h2>
      <div className="list-name">
        {repo &&
          repo.map((el) => (
            <div key={el.id} className="list-name-link">
              <strong>{el.name}</strong>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Followerlist;

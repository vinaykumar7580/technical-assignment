import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteData, handleEditData, handleSendData } from "../Redux/action";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.reducer);

  useEffect(()=>{

  },[data])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log(formData);

    dispatch(handleSendData(formData));

    setFormData({
      name: "",
      email: "",
      mobile: "",
    });
  };

  const handleEdit = (id) => {
    dispatch(handleEditData(id))
  };

  const handleDelete = (id) => {
    dispatch(handleDeleteData(id))
  };

  const { name, email, mobile } = formData;
  console.log("data", data);

  return (
    <div>
      <div>
        <h2>User Information Form</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
          <br />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <br />
          <label>Mobile No.</label>
          <input
            type="number"
            name="mobile"
            value={mobile}
            onChange={handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div>
        <h2>User Information</h2>
        <div>
          {data.map((el, index) => (
            <div style={{ border: "1px solid black" }}>
              <h3>{el.name}</h3>
              <h3>{el.email}</h3>
              <h3>{el.mobile}</h3>
              <button onClick={()=>handleEdit(index)}>Edit</button>
              <button onClick={()=>handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/admin/login",
        {
          username,
          password,
        }
      );

      
      console.log(response.data);;
      navigate("/DesastersListComponents");
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-5">
          <div className="card bg-black bg-gradient text-white rounded">
            <div className="card-body">
              <h3 className="text-center">Admin Login</h3>
              <form onSubmit={handleLogin}>
                <div className="form-group fs-5">
                  <label>Username:</label>
                  <input
                    type="text"
                    className="form-control fs-5"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <br />
                </div>
                <div className="form-group fs-5">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control fs-5"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <div className="text-danger">{error}</div>}
                <br />
                <button type="submit" className="btn btn-dark w-100 fs-5">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

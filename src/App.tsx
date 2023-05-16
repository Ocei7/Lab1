import React, { useState, useEffect } from "react";

const UserInitial = [
  { username: "username1", password: "pass1" },
  { username: "username2", password: "pass2" },
];

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState(UserInitial);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers([...users, ...JSON.parse(storedUsers)]);
    }
  }, [users]);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(foundUser));
      alert("Te-ai logat cu succes");
    } else {
      alert("Login sau Parola gresita");
    }
  };

  return (
    <div>
      { (
        <form onSubmit={handleLogin}>
          <label>
            Username &nbsp; &nbsp; &nbsp;
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <br />
          <label>
            Password&nbsp; &nbsp; &nbsp; &nbsp;
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Autentificare</button>
        </form>
      )}
    </div>
  );
};

export default App;
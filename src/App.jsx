import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = (pageNumber) => {
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handlePrevPage = () => {
    setPage((page) => Math.max(page - 1, 1));
  };

  const handleNextPage = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className="container">
      <div className="card-container">
        {users.map((user) => (
          <div key={user.id} className="card">
            <img src={user.avatar} alt="Avatar" style={{ width: "100px" }} />
            <div>
              {user.first_name} {user.last_name}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={handleNextPage} disabled={page === 2}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;

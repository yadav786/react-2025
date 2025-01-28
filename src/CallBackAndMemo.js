import React, { useState, useCallback, memo } from "react";

const allUsers = ['john', 'alex', 'peter', 'swan', 'awle', 'akay'];

function List({ users }) {
  console.log('UserList rendering...')
    return(<ul>
      {users.map((value, index) => <li key={index}>{value}</li>)}
    </ul>)
}
const UserList = memo(List);
function Search({ onSearch }) {
  console.log('UserSearch rendering...');
  return (
    <div>
          <input type="text"
          placeholder="Search User"
          onChange={(el) => onSearch(el.target.value)}
          />
    </div>
)
}
const UserSearch = memo(Search);

export default function CallBackAndMemo() {
  const [users, setUsers] = useState(allUsers);
  const [counter, setCounter] = useState(0);
  const shuffleUsers = () => {
      const shuffledUsers = users.sort(() => Math.random() - 0.5);
      setUsers([...shuffledUsers]);
  };
  const handleSearch = useCallback((text) => {
    console.log(users[0]);
    const filteredUsers = text ? allUsers.filter(user => user.includes(text)) : allUsers;
    setUsers([...filteredUsers]);
  }, [users]);
  return (
    <div>
      <button onClick={() => setCounter(prevCount => prevCount + 1)}>Counter</button>
      <div>{counter}</div>
      <button onClick={() => shuffleUsers()}>Shuffle</button>
      <UserSearch onSearch={handleSearch}/>
      <UserList users={users}/>
    </div>
  );
}

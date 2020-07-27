import React, { useState, useEffect } from 'react';
import { Link } from '../../react-router-dom';

export default function UserList(props) {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    let userJson = localStorage.getItem('userList');
    let users = userJson
      ? JSON.parse(userJson)
      : JSON.parse([{ name: '暂无相关内容', id: '0' }]);
    setUsers(users);
  }, []);

  return (
    <ul className="list-group">
      {users.map((user, index) => {
        return (
          <li key={index} className="list-group-item">
            {/* <Link to={`/user/detail/${user.id}`}>{user.name}</Link> */}
            <Link to={{ pathname: `/user/detail/${user.id}`, state: user }}>
              {user.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

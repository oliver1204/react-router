import React, { useRef, useContext } from 'react';

export default function UserAdd(props) {
  const userNameRef = useRef();

  function submit() {
    let userList = JSON.parse(localStorage.getItem('userList')) || [];
    userList.push({ name: userNameRef.current.value, id: Date.now() + '' });

    window.localStorage.setItem('userList', JSON.stringify(userList));
    props.history.push('/user/list');
  }
  return (
    <div className="form-group">
      add 用户名：
      <input className="form-control" type="text" ref={userNameRef} />
      <button className="btn btn-primary" onClick={submit}>
        提交
      </button>
    </div>
  );
}

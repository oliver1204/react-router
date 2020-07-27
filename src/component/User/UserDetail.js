import React from 'react';

export default function UserDetail(props) {
  let state = props.location.state || {};
  return (
    <div>
      <p>id: {state.id}</p>
      <p>name: {state.name}</p>
    </div>
  );
}

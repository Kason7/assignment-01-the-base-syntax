import React from 'react';

export const UserInput = (props) => {
  return (
    <div>
      <input type='text' onChange={props.changed} value={props.text} />
    </div>
  );
};

export default UserInput;

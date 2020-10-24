import React from 'react';

const names = ['jon', 'larry', 'bri', 'chris', 'new name'];


const Names = () => {
  return (
    <ul>
      {names.map((name, i) => (
        <li key={i}>
          {name}
        </li>
      ))}
    </ul>
  )
};

export default Names;
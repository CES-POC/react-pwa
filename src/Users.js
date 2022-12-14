import React from 'react';

export const Users = ({ props }) => {
  console.log(props);
  return (
    <div className='container text-center'>
      <div className='row align-items-start'>
        {props.map((res) => (
          <div className='card col-3' key={res.id}>
            <img src={res.image} className='card-img-top' alt='' />
            <div className='card-body'>{res.firstName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

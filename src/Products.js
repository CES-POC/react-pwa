import React from 'react';

export const Products = ({ props }) => {
  return (
    <div className='container text-center'>
      <div className='row align-items-start'>
        {props.map((res) => (
          <div className='card col-3' key={res.id}>
            <img src={res.thumbnail} className='card-img-top' alt='' />
            <div className='card-body'>{res.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

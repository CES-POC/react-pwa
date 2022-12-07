import React from 'react';

export const City = ({ props }) => {
  const { memes } = props.data;
  return (
    <div className='container text-center'>
      <div className='row align-items-start'>
        {memes &&
          memes.map((res) => (
            <div className='card col-3' key={res.id}>
              <img src={res.url} className='card-img-top' alt='' />
              <div className='card-body'>{res.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

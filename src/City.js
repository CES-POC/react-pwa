import React from 'react';

export const City = ({ props }) => {
  // console.log(props);
  return (
    <div className='container text-center'>
      <div className='row align-items-start'>
        {props.map((res, i) => (
          <div className='card col-3' key={res.i}>
             {/* {res &&
              res['Image Gallery']?.map((img, i) =>
              
              // console.log(img?.src)
            )} */}
            <img
              src={res['Image Gallery'] && res['Image Gallery'][0]?.src}
              className='card-img-top'
              alt=''
            />
            <div className='card-body'>{res.Bycatch}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
const baseUrl = 'https://dummyjson.com/products';

export const Products = () => {
  const [users, setusers] = useState([]);

  const fetchData = useCallback(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        setusers(response.data.products);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className='container text-center'>
      <div className='row align-items-start'>
        {users.map((res) => (
          <div className='card col-3' key={res.id}>
            <img src={res.thumbnail} className='card-img-top' alt='' />
            <div className='card-body'>{res.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

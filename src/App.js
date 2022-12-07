import React, { Suspense, useCallback, useEffect, useState } from 'react';
import './App.css';
import { Products } from './Products';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Users } from './Users';
import axios from 'axios';
import { City } from './City';
import { getData } from './FileAccessApi';
const baseUrl = 'https://dummyjson.com';

function App() {
  const [products, setProducts] = useState([]);
  const [users, setusers] = useState([]);
  const [city, setCity] = useState([]);

  const fetchUsers = useCallback(() => {
    axios
      .get(`${baseUrl}/users?limit=100`)
      .then((response) => {
        setusers(response.data.users);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, []);
  const fetchCity = useCallback(() => {
    // axios
    //   .get('https://www.fishwatch.gov/api/species')
    axios
      .get('https://api.imgflip.com/get_memes')
      .then((response) => {
        setCity(response.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

  const fetchData = useCallback(() => {
    axios
      .get(`${baseUrl}/products?limit=100`)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, []);
  console.log(getData());
  useEffect(() => {
    fetchData();
    fetchUsers();
    fetchCity();
  }, [fetchData, fetchUsers, fetchCity]);

  return (
    <div className='App'>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <nav>
            <ul className='nav'>
              <li className='nav-item'>
                <Link className='nav-link  ' to='/'>
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link  ' to='/users'>
                  Users
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link  ' to='/city'>
                  City
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route index path='/' element={<Products props={products} />} />
            <Route index path='/users' element={<Users props={users} />} />
            <Route index path='/city' element={<City props={city} />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

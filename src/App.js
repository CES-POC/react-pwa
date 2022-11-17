import React, { Suspense, useCallback, useEffect, useState } from 'react';
import './App.css';
import { Products } from './Products';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Users } from './Users';
import axios from 'axios';
const baseUrl = 'https://dummyjson.com';

function App() {
  const [products, setProducts] = useState([]);
  const [users, setusers] = useState([]);

  const fetchUsers = useCallback(() => {
    axios
      .get(`${baseUrl}/users?limit=100`)
      .then((response) => {
        console.log(response.data.users);
        setusers(response.data.users);
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

  useEffect(() => {
    fetchData();
    fetchUsers();
    const interval = setTimeout(() => fetchData(), fetchUsers(), 100);
    return () => {
      clearInterval(interval);
    };
  }, [fetchData, fetchUsers]);

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
            </ul>
          </nav>
          <Routes>
            <Route index path='/' element={<Products props={products} />} />
            <Route index path='/users' element={<Users props={users} />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

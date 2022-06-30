import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { getAll, get } from './BooksAPI';

function App() {
  const [data, setdata] = useState()
  const getData = async () => {
    let da = await getAll();
    setdata(da);
    console.log('Inside getdata', da)
  }
  useEffect(() => {
    let d = getData();


  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;

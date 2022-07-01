import './App.css';
import React, { useState, useEffect } from 'react';
import { getAll, get } from './BooksAPI';
import Books from './Books';

function App() {
  const [data, setdata] = useState();
  const getData = async () => {
    let da = await getAll();
    setdata(da);

  }
  useEffect(() => {
    let d = getData();
    // console.log('useeffect', data);
  }, []);

  return (
    <div>
      <h1 style={{ backgroundColor: "#2A7D2D", color: 'white', textAlign: 'center', padding: '10px' }}>MyReads</h1>

      <div>
        <h2 style={{ marginLeft: '10px' }}>Currently Reading</h2>
        {data && <Books data={data} shelf='currentlyReading' />}
      </div>
      <div>
        <h2 style={{ marginLeft: '10px' }}>Want to Read</h2>
        {data && <Books data={data} shelf='wantToRead' />}
      </div>
      <div>
        <h2 style={{ marginLeft: '10px' }}>Read</h2>
        {data && <Books data={[data]} shelf='read' />}
      </div>
    </div>
  );
}

export default App;

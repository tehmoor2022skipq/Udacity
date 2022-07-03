import "./App.css";
import { useState, useEffect } from "react";
import { getAll, search, update } from './BooksAPI';
import Books from "./Books";
import Search from "./Search";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksDashboard from "./BooksDashboard";
function App() {
  const [data, setdata] = useState();

  const getData = async () => {
    getAll().then(data => {
      if (data) setdata(data)
    }).catch(e => console.log("Error while getting data", e))
  }

  useEffect(() => {
    getData();
  }, []);

  const handleUpdate = (book, shelf) => {
    book.shelf = shelf;
    let filter = data.filter((item) => item.title !== book.title);
    setdata([...filter, book]);
  }


  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/search" element={<Search books={data} update={handleUpdate} />} />

          <Route exact path="/" element={<BooksDashboard data={data} update={handleUpdate} />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

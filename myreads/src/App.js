import "./App.css";
import { useState, useEffect } from "react";
import { getAll, search, update } from './BooksAPI';
import Books from "./Books";
import Search from "./Search";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksDashboard from "./BooksDashboard";
function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [data, setdata] = useState();
  const getData = async () => {
    let da = await getAll();
    let s = await search('react')
    console.log('SEARCH', s);

    setdata(da);
  }
  useEffect(() => {
    let d = getData();
  }, []);

  const handleUpdate = (book, shelf) => {
    let filter = data.filter((item) => item.title === book.title);
    filter[0].shelf = shelf;
    let secondFilter = data.filter((item) => item.title !== book.title);
    setdata([...secondFilter, ...filter]);
  }


  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/search" element={<Search data={data} showSearchPage={showSearchPage} handler={setShowSearchpage} update={handleUpdate} />} />

          <Route exact path="/" element={<BooksDashboard data={data} update={handleUpdate} />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

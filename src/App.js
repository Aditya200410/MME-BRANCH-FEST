import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import './App.css';
import { useState, useEffect } from "react";
import Loader from "./components/Loader";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
      {
        isLoading ? (
          <Loader />
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<Error />} />
                
              </Route>
            </Routes>
          </Router>
        )
      }

    </>

  );
}

export default App;

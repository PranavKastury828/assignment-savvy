import { getPosts } from "./api/api";
import { useState, useEffect, createContext, useContext } from "react";
import SearchBar from "./SearchBar";
import PostPage from "./PostPage";
import Navbar from "./Navbar";
import "./App.css";

const AppContext = createContext(null);
function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPosts().then((json) => {
      setPosts(json);
      setSearchResults(json);
    });
  }, []);

  return (
    <AppContext.Provider value={{ posts, searchResults, setSearchResults }}>
      <div className="">
        <div className=" mx-auto">
          <Navbar />
          <SearchBar posts={posts} setSearchResults={setSearchResults} />
          <PostPage searchResults={searchResults} />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;

import React from "react";

const SearchBar = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);
    const resultsArray = posts.filter(
      (post) =>
        post.title.includes(e.target.value) ||
        post.body.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };
  return (
    <header className="w-100 bg-slate-200 flex justify-center items-center md:py-[4rem] py-[2rem]  max-w-[1440px] mx-auto">
      <form className="" onSubmit={handleSubmit}>
        <input
          className="py-4 text-slate-200 px-4 focus:border-black border rounded-3xl bg-search-gradient"
          type="text"
          id="search"
          onChange={handleSearchChange}
          placeholder="🔍 Search..."
        />
      </form>
    </header>
  );
};

export default SearchBar;

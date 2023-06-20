import { useCallback } from "react";
import { useState } from "react";
import Post from "./Post";

const PostPage = ({ searchResults }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = searchResults.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(searchResults.length / recordsPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changeCurrPage = (id) => {
    setCurrentPage(id);
  };

  const results = records.map((post) => <Post key={post.id} post={post} />);

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching Posts</p>
    </article>
  );

  return (
    <main className=" flex flex-col justify-between items-start md:my-[80px] my-[40px] max-w-[1440px] mx-auto">
      {content}
      <ul className="pagination">
        <li className="page-item">
          <a href="#" className="page-link" onClick={prevPage}>
            Prev
          </a>
        </li>
        {numbers.map((n, i) => (
          <li
            className={`page-item ${currentPage === n ? "active" : ""}`}
            key={i}
          >
            <a href="#" className="page-item" onClick={() => changeCurrPage(n)}>
              {n}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a href="#" className="page-link" onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
    </main>
  );
};
export default PostPage;

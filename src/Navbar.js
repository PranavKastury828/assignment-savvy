import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#14213d] w-full md:py-8 py-4">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl">Blogify</h1>
        <button
          type="button"
          className="py-3 px-3 rounded-lg transition delay-300 ease-in-out bg-[#fca311] hover:shadow-md hover:shadow-[#fca311]/40"
        >
          Submit post
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

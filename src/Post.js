import React from "react";

const Post = ({ post }) => {
  return (
    <article className="px-[5%] md:py-[20px] py-[12px] border-b-[2px] min-w-full transition duration-300 ease-in-out hover:shadow-xl shadow-[#e5e5e5]">
      <h2 className="text-xl font-semibold mb-[24px] text-[#000]">
        {post.title}
      </h2>
      <p className="text-lg text-[#14213d] mb-[12px]">{post.body}</p>
      <p className="text-base text-[#fca311]">Blog: {post.id}</p>
    </article>
  );
};

export default Post;

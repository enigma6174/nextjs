"use client";

import { useState, useEffect } from "react";

import PromptCardComponent from "@components/promptCard.component";

function PromptCardList({ data, handleTagClick }) {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCardComponent key={post._id} post={post} />
      ))}
    </div>
  );
}

function FeedComponent() {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  function handleOnSearch(e) {
    e.preventDefault();
  }

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          required
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleOnSearch}
          className="search_input peer"
        />
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
}

export default FeedComponent;

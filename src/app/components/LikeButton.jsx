"use client";
import { useState } from "react";

// I am a client component. I am like a "leaf" which has been pushed to the outer edge of my app.
// I have been made into a client component with the use of "use client" at the top of the file.
export default function LikeButton() {
  // I need to be a client component, because I am adding user interactivity, and using React Hooks like useState:
  const [likes, setLikes] = useState(1);

  function increaseLikes() {
    setLikes(likes + 1);
    console.log("I think I'm on the client console! Hello Chrome/Firefox!");
  }

  return (
    <>
      <button
        className="border border-b bg-purple-200 p-2"
        onClick={increaseLikes}
      >
        I am a Like button
      </button>
      <p>Likes: {likes}</p>
    </>
  );
}

import LikeButton from "./components/LikeButton";
import PostsDisplay from "./components/PostsDisplay";

export default async function Home() {
  // this function runs on the server:
  function sum() {
    const a = 1;
    const b = 2;
    console.log(a + b);
  }
  sum();
  // And this log will be seen on the server terminal
  console.log("I think I'm on the server terminal! Hello VS Code!");

  // And in our functions return below, we import...
  // A Client component - LikeButton. Just to test it
  // A Server component - PostsDisplay. Which displays our posts!
  return (
    <>
      <h1>Hello Home Page!</h1>
      <p>Welcome to the Client Server components Recap!</p>
      <LikeButton />
      <PostsDisplay />
    </>
  );
}

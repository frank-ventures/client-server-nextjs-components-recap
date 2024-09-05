import PostsDisplay from "../components/PostsDisplay";

// This is another server rendered page, which calls the PostsDisplay server component.
export default function PostsPage() {
  return (
    <>
      <h1>I am the posts page! Youre very welcome</h1>
      <p>Have a look at my posts:</p>
      <PostsDisplay />
    </>
  );
}

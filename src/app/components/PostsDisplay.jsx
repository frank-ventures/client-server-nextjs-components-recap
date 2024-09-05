import LikeButton from "./LikeButton";

// This is still a server component!
export default async function PostsDisplay() {
  //   console.log(" I am the data in the posts display", data);

  // Instead of fetching from JSON Placeholder, we make a fetch to our own API route:
  const response = await fetch("http://localhost:3000/api/get-posts");
  const data = await response.json();

  // And render the posts on the page as normal
  // But we call a client component, 'Likebutton' at the end leaf of our server tree!
  return (
    <>
      <h2>I am the posts display!</h2>
      <div className="flex flex-col gap-4">
        {data.map((post) => {
          return (
            <div key={post.id}>
              <p>{post.title}</p>
              <p>{post.body}</p>
              <LikeButton />
            </div>
          );
        })}
      </div>
    </>
  );
}

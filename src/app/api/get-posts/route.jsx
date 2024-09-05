// We have created our own API route within NextJS!
// We made an /api/ folder, much like we'd make an /about/ folder if we wanted an About page.
// The difference is in our /api/ folder we have a route.jsx file (or route.js, or route.ts)
// Then we define our end points!
export async function GET(req, res) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return Response.json(data);
}

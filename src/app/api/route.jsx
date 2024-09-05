export async function GET(req, res) {
  return Response.json("You are looking at my root route. Indeed you are!");
}

// Old Express way
// app.get("/" , (req, res) => {
//server stuff
// response.json("You are looking at my root route!")
// }

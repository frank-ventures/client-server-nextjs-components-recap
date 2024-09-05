"use client";

// Here we have a client component!
// We have used this component in /src/app/form/page.jsx
// It's a client side form, which takes a server action function as a prop ({submitForm})
// It has it's own handleSubmit function, explained below.

export default function Form({ submitForm }) {
  // A handleSubmit function, defined as an anonymous async function:
  const handleSubmit = async (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    // Create FormData
    const formData = new FormData(event.target);
    // Call the server action we passed in earlier, and pass in formData
    await submitForm(formData);
  };

  return (
    <>
      <h2>I am the form! Behold!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input name="username" placeholder="username" />
        <input type="submit" />
      </form>
    </>
  );
}

import Form from "../components/Form";

// I am aserver component
export default function FormPage() {
  // I am a server action!
  // I get passed into the Form component as a prop, below.
  async function submitForm(formData) {
    "use server";
    console.log("Form Submit called!");
    console.log("Form Data is, ", formData);
    console.log(formData.get("username"));
    const username = formData.get("username");
    // Do your form submission stuff here
  }

  return (
    <>
      <h1>I am the form page, wilkommen!</h1>
      {/* This is a client component: */}
      <Form submitForm={submitForm} />
    </>
  );
}

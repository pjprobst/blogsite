import PostForm from "../components/PostForm";
import { useState, useEffect } from "react";
function Posterwall() {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !post) {
      return;
    }
    console.log('Title:', title);
    console.log('Post:', post);
    // Saving to a JSON file is not possible directly from the browser.
    // You would typically send the data to a backend API to save it.
    // Example using fetch (assuming you have an endpoint /api/posts):
    /*
    fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, post })
    })
    .then(response => response.json())
    .then(data => console.log('Saved:', data))
    .catch(error => console.error('Error:', error));
    */
    setTitle('');
    setPost('');
  }
  return (
    <>
    <h1></h1>
    </>
  );
}

export default Posterwall;

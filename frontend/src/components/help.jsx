import React, { useState } from "react";

const Help = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your query has been submitted: ${query}`); // Replace with API call
    setQuery("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Help & Support</h1>
      <p style={styles.description}>Have a question? Submit your query below, and our team will get back to you soon.</p>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <textarea 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Enter your query here..." 
          style={styles.textarea} 
          required
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#000", // Set title text color to black
  },
  description: {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#000", // Set description text color to black
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    color: "#000", // Set text color inside textarea to black
    backgroundColor: "#fff", // Ensure background is white for contrast
  },
  button: {
    padding: "10px",
    fontSize: "18px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Help;

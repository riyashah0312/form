import React, { useState } from "react";

export default function Formtask() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [review, setReview] = useState(false);

  const styles = {
    page: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#eef2f7",
      fontFamily: "Arial"
    },
    card: {
      width: "380px",
      background: "#fff",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      textAlign: "center"
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "14px"
    },
    textarea: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "14px",
      resize: "none",
      height: "80px"
    },
    button: {
      width: "100%",
      padding: "12px",
      background: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "15px",
      marginTop: "10px"
    },
    btnGroup: {
      display: "flex",
      gap: "15px",
      marginTop: "20px"
    },
    submit: {
      background: "#28a745"
    },
    text: {
      margin: "10px 0",
      color: "#444"
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {!review ? (
          <>
            <h2>User Form</h2>

            <input
              style={styles.input}
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              style={styles.input}
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              style={styles.textarea}
              placeholder="Enter Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button style={styles.button} onClick={() => setReview(true)}>
              Review
            </button>
          </>
        ) : (
          <>
            <h2>Review Details</h2>

            <p style={styles.text}><b>Name:</b> {name}</p>
            <p style={styles.text}><b>Email:</b> {email}</p>
            <p style={styles.text}><b>Comment:</b> {comment}</p>

            <div style={styles.btnGroup}>
              <button
                style={styles.button}
                onClick={() => setReview(false)}
              >
                Edit
              </button>

              <button
                style={{ ...styles.button, ...styles.submit }}
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

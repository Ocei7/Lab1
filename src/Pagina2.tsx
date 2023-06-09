import React, { useState } from 'react';

const Pagina2 = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Pagina 2</h1>
      <p style={styles.counterText}>Counter: {counter}</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={incrementCounter}>Increment</button>
        <button style={styles.button} onClick={decrementCounter}>Decrement</button>
      </div>
      <p style={styles.description}>Bine ai venit pe Pagina 2! Aici poți incrementa și decrementa valoarea unui counter folosind butoanele de mai sus.</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
    
    backgroundColor: '#f2f2f2',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  counterText: {
    fontSize: '18px',
    marginBottom: '32px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '16px',
  },
  button: {
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 'bold',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  description: {
    fontSize: '16px',
    marginTop: '32px',
    textAlign: 'center',
  },
};

export default Pagina2;

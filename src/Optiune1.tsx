import React, { useState } from 'react';

const Optiune1 = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [solutions, setSolutions] = useState<number[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    if (name === 'a') {
      setA(Number(value));
    } else if (name === 'b') {
      setB(Number(value));
    } else if (name === 'c') {
      setC(Number(value));
    }
  };

  const solveEquation = (): void => {
    const delta = b ** 2 - 4 * a * c;
    if (delta > 0) {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      setSolutions([x1, x2]);
    } else if (delta === 0) {
      const x = -b / (2 * a);
      setSolutions([x]);
    } else {
      setSolutions([]);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Calcul ecuații de gradul 2</h1>
      <form style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="a" style={styles.label}>
            a:
          </label>
          <input
            type="number"
            id="a"
            name="a"
            value={a}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="b" style={styles.label}>
            b:
          </label>
          <input
            type="number"
            id="b"
            name="b"
            value={b}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="c" style={styles.label}>
            c:
          </label>
          <input
            type="number"
            id="c"
            name="c"
            value={c}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
      </form>
      <button style={styles.button} onClick={solveEquation}>
        Calculează
      </button>
      <div style={styles.solutionContainer}>
        {Array.isArray(solutions) && solutions.length > 0 ? (
          <p style={styles.solutionText}>
            Soluții: {solutions.map((solution) => solution.toFixed(2)).join(', ')}
          </p>
        ) : (
          <p style={styles.solutionText}>
            Nu există soluții reale pentru ecuația dată.
          </p>
        )}
      </div>
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
    marginBottom: '32px',
  },
  form: {
    marginBottom: '16px',
  },
  inputContainer: {
    marginBottom: '16px',
  },
  label: {
    fontSize: '18px',
    marginRight: '8px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
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
    marginBottom: '16px',
  },
  solutionContainer: {
    textAlign: 'center',
  },
  solutionText: {
    fontSize: '16px',
  },
};

export default Optiune1;

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
    <div>
      <h1>Calcul ecuații de gradul 2</h1>
      <form>
        <div>
          <label htmlFor="a">a:</label>
          <input
            type="number"
            id="a"
            name="a"
            value={a}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="b">b:</label>
          <input
            type="number"
            id="b"
            name="b"
            value={b}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="c">c:</label>
          <input
            type="number"
            id="c"
            name="c"
            value={c}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <button onClick={solveEquation}>Calculează</button>
      <div>
        {Array.isArray(solutions) && solutions.length > 0 ? (
          <p>
            Soluții: {solutions.map((solution) => solution.toFixed(2)).join(', ')}
          </p>
        ) : (
          <p>Nu există soluții reale pentru ecuația dată.</p>
        )}
      </div>
    </div>
  );
};

export default Optiune1;

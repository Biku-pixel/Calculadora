import './App.css';
import Calculator from './Componentes_Calculadora/Calculadora/Calculator';
import { useState, useEffect } from 'react';

function App() {
  let [modOscuro, setmodOscuro] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (modOscuro) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", modOscuro);
  }, [modOscuro]);

  const toggleDarkMode = () => {
    setmodOscuro(!modOscuro);
  };

  return (
    <>
      <button className="dark-toggle" onClick={toggleDarkMode}>
        {modOscuro ? "☀️" : "🌙"}
      </button>

      <div className='content'>
        <Calculator />
      </div>
    </>
  );
}

export default App;

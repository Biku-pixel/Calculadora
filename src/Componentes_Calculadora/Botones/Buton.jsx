import './Buton.css'

export default function Buton({ manejoEntrada }) {
  let botones = [
    ["C", "/", "*", "-"],
    ["7", "8", "9", "+"],
    ["4", "5", "6", "="],
    ["1", "2", "3", "."],
    ["0"]
  ]
  return (
    <div className="button-grid">
      {botones.map((fila, i) => (
        <div key={i} className="button-row">
          {fila.map((btnValor) => (
            <button
              key={btnValor}
              className="calc-btn"
              onClick={() => manejoEntrada(btnValor)}
            >
              {btnValor}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
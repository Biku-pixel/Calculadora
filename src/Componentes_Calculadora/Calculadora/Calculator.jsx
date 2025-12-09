import { useState, useEffect } from 'react'
import './Calculator.css'
import Buton from '../Botones/Buton.jsx'
import Pantalla from '../Pantalla/Display.jsx';

export default function Calculator() {
    let [pantalla, setPantalla] = useState("");

    function Entrada(valor) {
        let operador = ["/", "*", "-", "+",];
        let digUltimo = pantalla[pantalla.length - 1];

        if (valor === "Borrar") {
            setPantalla(pantalla.slice(0, -1));
            return;
        } else if (valor === "=") {
            if (pantalla.trim() === "") return;
            if (operador.includes(digUltimo)) {
                pantalla = pantalla.slice(0, -1);
            }
            setPantalla(eval(pantalla).toString());
            return;
        } else if (valor === "C") {
            setPantalla(""); return;
        } else if (operador.includes(valor) && operador.includes(digUltimo)) {
            setPantalla(pantalla.slice(0, -1) + valor);
            return;
        }

        setPantalla(pantalla + valor);
    }

    useEffect(() => {
        function Teclado(evento) {
            let permitido = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "."];
            if (permitido.includes(evento.key)) {
                Entrada(evento.key);
            }

            if (evento.key === "Enter") Entrada("=");
            else if (evento.key === "Escape") Entrada("C");
            else if (evento.key === "Backspace") Entrada("Borrar");
        }
        window.addEventListener("keydown", Teclado);
        return () => {
            window.removeEventListener("keydown", Teclado);
        }
    })
    return (
        <div className='calculator-container'>
            <Pantalla valor={pantalla} />
            <Buton Entrada={Entrada} />
        </div>
    )
}
import React, { useRef, useState } from 'react';

enum Operadores {
    suma, resta, multiplicar, dividir
}

const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState<string>('0')
    const [numero, setNumero] = useState<string>('100');

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
    }

    const armarNumero = (numeroTexto: string) => {
        console.log("numero: ", numero);
        if (numero === '0' && numeroTexto !== '.')
            setNumero(numeroTexto);
        else if (numero.includes('.') && numeroTexto === '.')
            setNumero(numero);
        else
            setNumero(numero + numeroTexto);
    }

    const postivoNegativo = () => {

        if (numero.includes('-'))
            setNumero(numero.replace('-', ''));
        else
            setNumero('-' + numero);
    }

    const btnDelete = () => {
        let negativo = '';
        let numeroTemp = numero;
        if (numero.includes('-')) {
            negativo = '-';
            numeroTemp = numero.substring(1);
        }

        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0, -1));
        } else {
            setNumero('0');
        }
    }

    const cambiarNumeroPorAnterior = () => {
        if (numero.endsWith('.'))
            setNumeroAnterior(numero.slice(0, -1))
        else
            setNumeroAnterior(numero);
        setNumero('0');
    }

    const btnDividir = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnSumar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.suma;
    }

    const btnRestar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.resta;
    }

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.suma:
                setNumero(`${num1 + num2}`);
                break;
            case Operadores.resta:
                setNumero(`${num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;
            default:
                break; 
        }
    }
    return {
        numero,
        numeroAnterior,
        limpiar,
        armarNumero,
        cambiarNumeroPorAnterior,
        postivoNegativo,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    }
}

export default useCalculadora
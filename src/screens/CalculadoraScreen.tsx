import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import BotonCal from '../components/BotonCal'
import useCalculadora from '../hooks/useCalculadora'
import { styles } from '../theme/appTheme'



const CalculadoraScreen = (): JSX.Element => {

    const {
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
    } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>

            <View style={styles.fila}>
                <BotonCal texto='C' color='#9B9B9B' accion={limpiar} />
                <BotonCal accion={postivoNegativo} texto='+/-' color='#9B9B9B' />
                <BotonCal accion={btnDelete} texto='del' color='#9B9B9B' />
                <BotonCal accion={btnDividir} texto='/' color='#FF9427' />
            </View>
            <View style={styles.fila}>
                <BotonCal accion={armarNumero} texto='7' />
                <BotonCal accion={armarNumero} texto='8' />
                <BotonCal accion={armarNumero} texto='9' />
                <BotonCal accion={btnMultiplicar} texto='X' color='#FF9427' />
            </View>
            <View style={styles.fila}>
                <BotonCal accion={armarNumero} texto='4' />
                <BotonCal accion={armarNumero} texto='5' />
                <BotonCal accion={armarNumero} texto='6' />
                <BotonCal accion={btnRestar} texto='-' color='#FF9427' />
            </View>
            <View style={styles.fila}>
                <BotonCal accion={armarNumero} texto='1' />
                <BotonCal accion={armarNumero} texto='2' />
                <BotonCal accion={armarNumero} texto='3' />
                <BotonCal accion={btnSumar} texto='+' color='#FF9427' />
            </View>
            <View style={styles.fila}>
                <BotonCal accion={armarNumero} texto='0' ancho />
                <BotonCal accion={armarNumero} texto='.' />
                <BotonCal accion={calcular} texto='=' color='#FF9427' />
            </View>
        </View>
    )
}

export default CalculadoraScreen;
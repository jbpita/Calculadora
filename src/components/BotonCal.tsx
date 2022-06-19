import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    texto: string,
    color?: string,
    ancho?: boolean,
    accion: (numeroTexto: string) => void
}

const BotonCal = ({ texto, color = "#2D2D2D", ancho = false, accion }: Props) => {


    return (
        <TouchableNativeFeedback
            onPress={() => accion(texto)}
        >
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (ancho) ? 180 : 80
            }}>
                <Text style={{
                    ...styles.botonTexto,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }}
                >
                    {texto}
                </Text>
            </View>
        </TouchableNativeFeedback>
    );
}

export default BotonCal;
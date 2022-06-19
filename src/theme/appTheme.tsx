import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        backgroundColor: 'black',
    },
    calculadoraContainer: {
        paddingHorizontal: 10,
        flex: 1,
        justifyContent: 'flex-end'
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',

    },
    resultadoPequeno: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    boton:{
        height:80,
        width:80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent:"center",
        marginHorizontal:10
    },
    botonTexto:{
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
        padding: 10,
        fontWeight: "bold"
    },
    fila:{
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 18,
        paddingHorizontal: 10
    }

});
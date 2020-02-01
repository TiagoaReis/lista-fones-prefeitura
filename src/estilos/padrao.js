import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2B5ADC',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontWeight: "bold",
      fontSize: 45,
      color: "#fff",
      
    },
    texto: {    
      fontSize: 15,
      color: "#fff",
      padding: 20
    },
    logo: {
       width: 350,
       height: 350 
    },
    botao: {
        width: 350,
        height: 350 
     },
     tituloitem: {
        fontSize: 15,
        color: "#fff",
        paddingTop: 10,
        paddingBottom: 5 
     },
     textoitem: {
         flex:1,
        fontSize: 12,
        color: "#fff",
        padding: 2 
     },
     textoitem2: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 10,
        color: "#fff",
        padding: 0 ,       
        borderWidth: 2,
        borderRadius: 10,
        textAlign: 'center',
        padding: 5,
        borderColor: '#fff'
        
    }
  
  });

  export default styles
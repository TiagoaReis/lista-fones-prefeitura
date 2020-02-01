import * as React from 'react';
import { Text, View, Button, Image } from 'react-native';
import padrao from '../estilos/padrao'
 import logo from '../../assets/tel.png'

function Main({navigation}){
    return (
        <View style={padrao.container}>
            <Image source={logo} style={{width: 150, height: 150}}></Image>
            <Text style={padrao.texto}>Prefeitura Municipal de Passos - MG</Text>
            <Button style={padrao.botao} 
            title="Telefones"
            onPress={() => {navigation.navigate('Telefones')}}
            />
        </View>
        // <View style={padrao.container}>           
        //   <Text style={padrao.titulo}>Lista Telefones</Text>
        //   <Text style={padrao.texto}>Prefeitura Municipal de Passos - MG</Text>
        // </View>
    )
}

export default Main
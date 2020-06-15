import React, { useState,useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import { View, TextInput, ImageBackground, Text, TouchableOpacity, Alert } from 'react-native';

import api from '../../services/api';

import styles from './styles';

import pucImage from '../../assets/pucpr.jpg';

export default function Login(){
    const[login, setLogin] = useState([]);
    const[senha, setSenha] = useState([]);

    const navigation = useNavigation();

    function alert(e){
        Alert.alert(
            "Erro",
            String(e),
            [{text: "OK",}],
            { cancelable: false}
        );
    }

    async function logon(){
        try{
            const response = await api.post('login', {login, senha});

            const authorization = response.data.id;
            const profile = response.data.perfil;

            navigation.navigate('Feed',{authorization, profile});
            
        }catch(erro){
            alert(erro);
        }
    }

    return(
        <ImageBackground source={pucImage} style={styles.backgroundImage}>
        <View style={styles.container}>
            
            <View style={styles.loginBox}>
                <View style={styles.contentBox}>
                    <Text style={styles.title}>PucResolve</Text>
                    <TextInput
                        style={styles.loginInput} 
                        placeholder='Login' 
                        placeholderTextColor="#003f5c" 
                        autoCorrect={false}
                        value={login}
                        onChangeText={setLogin}
                    />
                    <TextInput 
                        style={styles.loginInput} 
                        placeholder='Senha' 
                        placeholderTextColor='#003f5c' 
                        secureTextEntry={true} 
                        autoCorrect={false}
                        value={senha}
                        onChangeText={setSenha}
                    />
                </View>
                <TouchableOpacity onPress={logon} style={styles.loginButton}>
                    <Text>Logar</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        </ImageBackground>
    );
}
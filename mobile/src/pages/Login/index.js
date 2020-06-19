import React, { useState } from 'react';
import { useNavigation} from '@react-navigation/native';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function Login(){
    const[login, setLogin] = useState();
    const[senha, setSenha] = useState();

    const navigation = useNavigation();

    function alert(){
        Alert.alert(
            "Erro",
            "Usuário ou senha incorretos",
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
            alert();
        }
    }

    return(
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
    );
}
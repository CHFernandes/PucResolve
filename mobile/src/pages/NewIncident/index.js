import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute} from '@react-navigation/native';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function NewIncident(){
    const[localizacao, setLocalizacao] = useState();
    const[descricao, setdescricao] = useState();

    const navigation = useNavigation();
    const routes = useRoute();

    const authorization = routes.params.header;
    const profile = routes.params.profile;

    function goBack(){
        navigation.goBack();
    }

    function alert(alert, message){
        Alert.alert(
            String(alert),
            String(message),
            [{text: "OK",}],
            { cancelable: false}
        );
    }

    async function insertNewIncident(){
        if(!authorization){
            navigation.navigate('Login');
        }

        if(localizacao == null || descricao == null){
            alert(
                'Erro',
                'Inserir localização e descrição da ocorrência'
            );
        }else{
            try{
                const response = await api.post('incident', {descricao, localizacao},{
                    headers:{
                        'authorization':authorization,
                    }
                });

                console.log(response);
    
                alert('Sucesso', 'Ocorrência enviada com sucesso');
    
                navigation.navigate('Feed',{authorization, profile});
                
            }catch(erro){
                alert('Erro', erro);
            }
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.leftHeader}>
                    <TouchableOpacity onPress={goBack} style={styles.goBack}>
                        <Feather name='arrow-left' size={45} color='#fb5b5a'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.rightHeader}>
                    <Text style={styles.title}>Inserir nova ocorrência</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.upperBody}>
                    <TextInput
                        style={styles.localization} 
                        placeholder='Localização' 
                        placeholderTextColor="#003f5c" 
                        autoCorrect={false}
                        value={localizacao}
                        onChangeText={setLocalizacao}
                    />
                    <TextInput 
                        style={styles.description} 
                        placeholder='Descrição da ocorrência' 
                        placeholderTextColor='#003f5c'
                        multiline={true}
                        textAlignVertical='top'
                        autoCorrect={false}
                        value={descricao}
                        onChangeText={setdescricao}
                    />
                </View>
                <View style={styles.lowerBody}>
                    <TouchableOpacity onPress={insertNewIncident} style={styles.incidentBtn}>
                        <Text style={styles.incidentText}>Enviar  </Text>
                        <Feather name='arrow-right' size={35} color='#fff' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
import React, { useState,useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute} from '@react-navigation/native';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function Feed(){
    const navigation = useNavigation();
    const routes = useRoute();
    const header = routes.params.authorization;

    const [incidents, setIncidents] = useState([]);
    const [user, setUser] = useState("usuário");

    function upvote(){

    }

    function downvote(){

    }

    function countVotes(){

    }

    function logout(){
        navigation.navigate('Login');
    }

    async function findUser(user){
        if(!header){
            logout();
        }else{
            const url = `/getUser/${user}`;
            const response = await api.post(`${url}`);
            return response.data;
        }
    }

    async function loadIncidents(){
        const authenticatedUser = await findUser(header);
        setUser(authenticatedUser);
        const response = await api.get('showAll');
        setIncidents(response.data.docs);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.welcome}>Bem Vindo: </Text>
                    <Text style={styles.user}>{user}</Text>
                </View>
                <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
                    <Text style={styles.logoutText}>Sair</Text>
                    <Feather name='log-out' size={25} color='#fb5b5a' />
                </TouchableOpacity>              
            </View>
            <View style={styles.incidentList}>
                <FlatList
                    data={incidents}
                    keyExtractor={incident => String(incident._id) }
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: incident}) => (
                        <View style={styles.incident}>
                            <View style={styles.incidentLeft}>
                                <View style={styles.incidentHeader}>
                                    <Text style={styles.incidentDesc}>{incident.descricao}</Text>
                                    <Text style={styles.incidentDate}>{incident.data}</Text>
                                </View>
                                <View style={styles.incidentFooter}>
                                    <Text style={styles.incidentLoc}>{incident.localizacao}</Text>
                                    <View style={styles.incidentRegister}>
                                        <Text style={styles.incidentRegisterTitle}>Registrado por: </Text>
                                        <Text style={styles.incidentRegisterUser}>{incident.criador}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.incidentRight}>
                                <TouchableOpacity style={styles.upvote} onPress={upvote}>
                                    <Feather name='arrow-up' size={40} color='#fff'/>
                                </TouchableOpacity>
                                <Text style={styles.votesCounter}>0</Text>
                                <TouchableOpacity style={styles.downvote} onPress={downvote}>
                                    <Feather name='arrow-down' size={40} color='#fff'/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}
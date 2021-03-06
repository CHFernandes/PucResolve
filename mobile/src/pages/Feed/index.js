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
    const profile = routes.params.profile;
    const newIncident = routes.params.newIncident;

    if(newIncident){
        loadIncidents();
    }

    const [incidents, setIncidents] = useState([]);
    const [user, setUser] = useState("usuário");
    const [update, setUpdate] = useState([]);

    function increment(incident){
        if(incident.upvotes.includes(header)){
            incident.pontuacao = incident.pontuacao - 1;
        }else{
            incident.pontuacao = incident.pontuacao + 1;
        }
    }

    function decrement(incident){
        if(incident.downvotes.includes(header)){
            incident.pontuacao = incident.pontuacao + 1;
        }else{
            incident.pontuacao = incident.pontuacao - 1;
        }
    }

    async function upvote(incident){
        increment(incident);
        const id = incident._id;

        if(!header){
            logout();
        }else{
            const url = `/upvote/${id}`;
            await api.post(`${url}`,{},{
                headers:{
                    'authorization':header,
                }
            });
            const updateUrl = `/votes/${id}`
            const updatedVotes = await api.post(`${updateUrl}`);
            setUpdate(updatedVotes);
            return updatedVotes.data;
        }
    }

    function addNewIncident(){
        navigation.navigate('NewIncident',{header, profile});
    }

    function dataFormat(data){
        const dataArray = data.split('-');
        const formatedData = (dataArray[2] + '/' + dataArray[1] + '/' + dataArray[0]);
        return String(formatedData);
    }

    async function downvote(incident){
        decrement(incident);
        const id = incident._id;

        if(!header){
            logout();
        }else{
            const url = `/downvote/${id}`;
            await api.post(`${url}`,{},{
                headers:{
                    'authorization':header,
                }
            });
            const updateUrl = `/votes/${id}`
            const updatedVotes = await api.post(`${updateUrl}`);
            setUpdate(updatedVotes);
            return updatedVotes.data;
        }
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

    useEffect(() => {
        loadIncidents();
    }, [update]);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.welcome}>Bem Vindo: </Text>
                    <Text style={styles.user}>{user}</Text>   
                </View>
                <View style={styles.headerRight}>
                    
                        <TouchableOpacity style={styles.addIncidentBtn} onPress={addNewIncident}>
                            <Feather name='plus' size={30} color='#fff' backgroundColor='#00AA00'/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
                            <Text style={styles.logoutText}>Sair</Text>
                            <Feather name='log-out' size={25} color='#fb5b5a' />
                        </TouchableOpacity>
                    
                </View>         
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
                                    <Text style={styles.incidentDate}>{dataFormat(incident.data)}</Text>
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
                                <TouchableOpacity style={styles.upvote} onPress={() => upvote(incident)}>
                                    <Feather name='arrow-up' size={40} color='#fff'/>
                                </TouchableOpacity>
                                    <Text style={styles.votesCounter}>{incident.pontuacao}</Text>
                                <TouchableOpacity style={styles.downvote} onPress={() => downvote(incident)}>
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
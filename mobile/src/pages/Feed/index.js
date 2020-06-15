import React, { useState,useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute} from '@react-navigation/native';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function Feed(){
    const routes = useRoute();
    const header = routes.params.authorization;

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.welcome}>Bem Vindo: </Text>
                    <Text style={styles.user}>usuário</Text>
                </View>
                <TouchableOpacity style={styles.logoutBtn}>
                    <Text style={styles.logoutText}>Sair</Text>
                    <Feather name='log-out' size={25} color='#fb5b5a' />
                </TouchableOpacity>              
            </View>
            <View style={styles.incidentList}>
                <FlatList
                    data={[1,2,3,4,5,6,7,8]}
                    keyExtractor={incident => String(incident)}
                    showsVerticalScrollIndicator={false}
                    renderItem={() => (
                        <View style={styles.incident}>
                            <View style={styles.incidentLeft}>
                                <View style={styles.incidentHeader}>
                                    <Text style={styles.incidentDesc}>Vaso do banheiro masculino do segundo andar está entupido</Text>
                                    <Text style={styles.incidentDate}>11/06/2020</Text>
                                </View>
                                <View style={styles.incidentFooter}>
                                    <Text style={styles.incidentLoc}>Bloco 2</Text>
                                    <View style={styles.incidentRegister}>
                                        <Text style={styles.incidentRegisterTitle}>Registrado por: </Text>
                                        <Text style={styles.incidentRegisterUser}>Pedro Pedroso</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.incidentRight}>
                                <TouchableOpacity style={styles.upvote}>
                                    <Feather name='arrow-up' size={40} color='#fff'/>
                                </TouchableOpacity>
                                <Text style={styles.votesCounter}>0</Text>
                                <TouchableOpacity style={styles.downvote}>
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
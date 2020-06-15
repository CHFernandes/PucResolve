import React, { useState,useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute} from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function Feed(){
    const routes = useRoute();
    const header = routes.params.authorization;

    console.log(header);

    async function login(){
        
    }

    return(
        <View style={styles.container}>
            <View style={styles.loginBox}>
                <View style={styles.loginBox}>
                    <Text style={styles.incidentProperty}>Login:</Text>
                    <Text tyle={styles.incidentProperty}>Senha:</Text>
                </View>
                <TouchableOpacity>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
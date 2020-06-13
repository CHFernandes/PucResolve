import React, { useState,useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function Feed(){
    const[loading, setLoading] = useState(false);

    async function login(){
        
    }

    return(
        <View style={styles.container}>
            <View style={styles.loginBox}>
                <View style={styles.loginBox}>
                    <Text style={styles.incidentProperty}>Login:</Text>
                    <Text tyle={styles.incidentProperty}>Senha:</Text>
                </View>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
import React, { useState,useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import { View, TextInput, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

import pucImage from '../../assets/pucpr.jpg';

export default function Login(){

    return(
        <View style={styles.container}>
            <Image source={pucImage} style={styles.backgroundImage}/>
            <View style={styles.loginBox}>
                <View style={styles.contentBox}>
                    <TextInput style={styles.loginInput} placeholder="Login" placeholderTextColor="#999" autoCorrect={false}></TextInput>
                    <TextInput style={styles.loginInput} placeholder="Senha" placeholderTextColor="#999" secureTextEntry={true} autoCorrect={false}></TextInput>
                </View>
                <TouchableOpacity style={styles.loginButton}>
                    <Text>Logar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
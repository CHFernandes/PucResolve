import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
    },
    header:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingTop:10,
    },
    leftHeader:{
        marginRight:90,
    },
    rightHeader:{
        marginTop:5,
    },
    title:{
        color:'#fff',
        fontWeight:"bold",
        fontSize: 25,
    },
    body:{
        marginTop:'40%',
        backgroundColor: '#465881',
        borderRadius:15,
        height:348,
        width:'98%',
        padding:5,
    },
    localization:{
        padding:5,
        marginLeft:5,
        width:'97.5%',
        marginTop:5,
        marginBottom:10,
        backgroundColor: '#fff',
        borderRadius:15,
    },
    description:{
        padding:5,
        marginLeft:5,
        width:'97.5%',
        height: 200,
        marginTop:5,
        marginBottom:30,
        backgroundColor: '#fff',
        borderRadius:15,
    },
    lowerBody:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    incidentText:{
        color:'#fff',
        fontWeight:"bold",
        fontSize: 30,
        marginBottom:5,
    },
    incidentBtn:{
        flexDirection:'row',
        backgroundColor:'#fb5b5a',
        alignItems: 'center',
        justifyContent: 'center',
        width:'50%',
        borderRadius:15,
    }
});
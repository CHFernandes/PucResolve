import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    backgroundImage:{
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBox:{
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 10,
        width:"85%",
        backgroundColor:"#46588190", // cor é '#465881', o 90 é opacidade em jsx css
        borderRadius:25,
        height:305,
        marginBottom:20,
        padding:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:30
    },
    contentBox:{
        marginBottom:5,
    },
    loginInput:{
        height:50,
        backgroundColor:"#FFF",
        color:'#003f5c',
        borderRadius:25,
        marginBottom:10,
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10
    }
});
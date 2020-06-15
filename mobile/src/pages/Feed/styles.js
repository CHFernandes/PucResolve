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
    headerLeft:{
        flexDirection:'row',
        flex:1,
    },
    welcome: {
        paddingLeft:5,
        color:'#fff',
        fontWeight:"bold",
        fontSize: 25,
    },
    user:{
        justifyContent:'flex-start',
        flexDirection: 'row',
        color:'#fff',
        fontSize: 25,
    },
    logoutText:{
        color:'#fb5b5a',
        paddingRight:5,
        fontSize: 20,
        fontWeight:"bold",
    },
    logoutBtn:{
        flexDirection: 'row',
        paddingRight:5,
    },
    incidentList:{
        marginTop:20,
        backgroundColor: '#465881',
        borderRadius:15,
        height:'92%',
        width:'98%',
        padding:5,
    },
    incident:{
        padding:5,
        marginLeft:5,
        width:'97.5%',
        marginTop:5,
        marginBottom:10,
        backgroundColor: '#fff',
        borderRadius:15,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    incidentHeader:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    incidentFooter:{
        marginTop:40,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    incidentRegister:{
        flexDirection:'row',
    },
    incidentDesc:{
        flexBasis:250,
    },
    upvote:{
        backgroundColor:'#00AA00',
        borderRadius:60,
    },
    downvote:{
        backgroundColor:'#AA0000',
        borderRadius:60,
    },
    incidentLeft:{
        marginRight:5,
    },
    incidentRight:{
        alignItems: 'center',
    }
});
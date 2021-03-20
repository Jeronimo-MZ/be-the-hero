import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },
    headerTextBold: {
        fontWeight: 'bold',
    },
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        lineHeight:24,
        color: '#737388'
    },
    
    incidentList: {
        marginTop: 32
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 16,
    },
    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },
    incidentValue: {
        marginTop: 8,
        marginBottom: 24,
        fontSize: 15,
        color: '#737380',
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',

        borderTopColor: '#efefef',
        borderTopWidth: 1,
        paddingTop: 10
    },
    detailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold',
    }
});
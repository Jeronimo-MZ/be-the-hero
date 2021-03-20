import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import logo from './../../assets/logo.png';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

const Incidents = () => {
    const navigation = useNavigation();
    function navigateToDetail() {
        navigation.navigate('Detail');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>
            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.description}>Escolha um caso abaixo e salve o dia!</Text>

            <FlatList 
                style={styles.incidentList}
                data={[1,2,3,4]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>APAD</Text>

                        <Text style={styles.incidentProperty}>Caso:</Text>
                        <Text style={styles.incidentValue}>Cachorro Atropelado</Text>

                        <Text style={styles.incidentProperty}>Valor:</Text>
                        <Text style={styles.incidentValue}>R$ 120,00</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton}
                            onPress={ navigateToDetail }
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name='arrow-right' size={16} color="#E02041"/>
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    );
};

export default Incidents;
import React from "react";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import logo from "./../../assets/logo.png";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

const Detail = () => {
    const navigation = useNavigation();
    function navigateBack() {
        navigation.goBack();
    }

    function sendWhatsapp() {
        
    }

    function sendMail() {

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
                <TouchableOpacity
                    onPress={navigateBack}
                >
                    <Feather name="arrow-left" size={28} color="#E02041"/>
                </TouchableOpacity>
            </View>
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>APAD</Text>

                    <Text style={styles.incidentProperty}>Caso:</Text>
                    <Text style={styles.incidentValue}>Cachorro Atropelado</Text>

                    <Text style={styles.incidentProperty}>Valor:</Text>
                    <Text style={styles.incidentValue}>R$ 120,00</Text>
                </View>
                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Salve o dia!</Text>
                    <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                    <Text style={styles.heroDescription}>Entre em contacto:</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action}
                            onPress={() => {}}
                        ><Text style={styles.actionText}>Whatsapp</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.action}
                            onPress={() => {}}
                        ><Text style={styles.actionText}>E-mail</Text></TouchableOpacity>
                    </View>
                </View>
        </View>
    );
};

export default Detail;

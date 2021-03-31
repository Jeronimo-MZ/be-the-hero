import React from "react";
import { View, Image, Text, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import logo from "./../../assets/logo.png";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import * as MailComposer from "expo-mail-composer";

const Detail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;

    const whatsappNumber = `${incident.whatsapp}`;
    const message = `Olá ${incident.name}, estou entrando em contacto pois gostaria de ajudar no caso '${incident.title}' com o valor de R$120,00`;

    function navigateBack() {
        navigation.goBack();
    }

    function sendWhatsapp() {
        Linking.openURL(
            `whatsapp://send?phone=${whatsappNumber}&text=${message}`
        );
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text
                    style={styles.incidentValue}
                >{`${incident.name} - ${incident.city}/${incident.uf}`}</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>
				<Text style={styles.incidentProperty}>Descrição:</Text>
				<Text style={styles.incidentValue}>{incident.description}</Text>
                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>
                    {String(
                        Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        }).format(incident.value)
                    )}
                </Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>Entre em contacto:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity
                        style={styles.action}
                        onPress={sendWhatsapp}
                    >
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Detail;

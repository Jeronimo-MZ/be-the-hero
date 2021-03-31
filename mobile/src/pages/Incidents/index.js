import React, { useEffect, useState } from "react";
import { View, Image, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import logo from "./../../assets/logo.png";
import { Feather } from "@expo/vector-icons";
import api from "./../../services/api";

import styles from "./styles";

const Incidents = () => {
    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    function navigateToDetail(incident) {
        navigation.navigate("Detail", { incident });
    }

    async function loadIncidents() {
        if (loading) return;
        if (total > 0 && incidents.length === total) return;

        setLoading(true);
        await api
            .get("/incidents", { params: { page } })
            .then((response) => {
                setIncidents([...incidents, ...response.data]);
                setTotal(response.headers["x-total-count"]);
            })
            .catch((error) => {
                console.error(error);
            });

        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
        // console.log(incidents);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
                <Text style={styles.headerText}>
                    Total de{" "}
                    <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>
            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.description}>
                Escolha um caso abaixo e salve o dia!
            </Text>
            <FlatList
                style={styles.incidentList}
                data={incidents}
                keyExtractor={(incident) => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.3}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>
                            {incident.name}
                        </Text>

                        <Text style={styles.incidentProperty}>Caso:</Text>
                        <Text style={styles.incidentValue}>
                            {incident.title}
                        </Text>

                        <Text style={styles.incidentProperty}>Valor:</Text>
                        <Text style={styles.incidentValue}>
                            {String(
                                Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(incident.value)
                            )}
                        </Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(incident)}
                        >
                            <Text style={styles.detailsButtonText}>
                                Ver mais detalhes
                            </Text>
                            <Feather
                                name="arrow-right"
                                size={18}
                                color="#E02041"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default Incidents;

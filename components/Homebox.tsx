import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface Place {
    id: string;
    name: string;
    province: string;
    image: any;
    introduction : string;
}

interface HomeboxProps {
    places: Place[];
}

const PlaceCard: React.FC<{ place: Place }> = ({ place }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: place.image }} style={styles.image} resizeMode="cover" />
            <View style={styles.content}>
                <Text className="text-[18px] font-bold" numberOfLines={1} ellipsizeMode="tail">{place.name}</Text>
                <Text style={styles.location}>{place.province}</Text>
            </View>
        </View>
    );
};

const Homebox: React.FC<HomeboxProps> = ({ places }) => {
    const router = useRouter();

    const PresstoHomedetail = (place: Place) => {
        console.log("Sending to homedetail:", place);
        router.push({
            pathname: "/homedetail",
            params: {
                id: place.id,
                name: place.name,
                location: place.province,
                image: place.image || '',
                introduction: place.introduction,
            },
        });
    };

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
            {places.map((place) => (
                <TouchableOpacity key={place.id} activeOpacity={0.8} onPress={() => PresstoHomedetail(place)}>
                    <PlaceCard place={place} />
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default Homebox;

const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 10,
    },
    card: {
        backgroundColor: "#F8F9FA",
        borderRadius: 10,
        shadowRadius: 6,
        overflow: "hidden",
        elevation: 4,
        width: 160,
        marginRight: 12,
        left: 10,

    },
    image: {
        width: "100%",
        height: 80,
    },
    content: {
        padding: 10,
    },
    location: {
        fontSize: 14,
        color: "#6B7280",
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 2,
    },
    ratingText: {
        fontSize: 16,
        marginLeft: 4,
    },
});

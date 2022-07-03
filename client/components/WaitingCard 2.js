import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Chip } from 'react-native-paper';

const WaitingCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={item.image} />

                <Text style={styles.title}>{item.name}</Text>
            </View>
            <View style={styles.chipCotainer}>
                <View>
                    <Text style={styles.desc}>Request on: {item.requestedDate}</Text>
                </View>
                <View style={styles.chip}>
                {
                    item.symptomsList.map((symptom, index) => {
                        return <Chip style={styles.chipItem} key={index}>{symptom}</Chip>
                    })
                }
                </View>
                <Text numberOfLines={1} style={styles.description} ellipsizeMode='tail'>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        gap: 20,
        border: "1px solid gainsboro",
        margin: 20,
        padding: 10,
        borderRadius: 10
    },
    imageContainer: {
        gap: 10,
        textAlign: "center"
    },
    image: {
        width: 90,
        height: 85,
        borderRadius: "50%"
    },
    chipCotainer: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        justifyContent: "space-evenly"
    },
    chip: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-start"
    },
    title: {
        fontWeight: "bold"
    },
    desc: {
        color: "#718096"
    },
    description: {
        width: "70%"
    },
    chipItem: {
        fontSize: "10px !important"
    }
});

export default WaitingCard
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import NotificationItem from './Notification-item';

function Notification() {
    const listOFNotification = [
        {
            name: 'Dr. John',
            message: 'Hello, how are you? I am fine. Thank you. Hello, how are you? I am fine. Thank you. Thank you. Hello, how are you? I am fine. Thank you. Hello, how are you? I am fine. Thank you. Thank you.',
            time: '5 min ago'
        },
        {
            name: 'Dr. John',
            message: 'Hello, how are you? Hello, how are you? I am fine. Thank you. Hello, how are you? I am fine. Thank you.',
            time: '5 min ago'
        },
        {
            name: 'Dr. John',
            message: 'Hello, how are you? Hello, how are you? I am fine.',
            time: '5 min ago'
        }
    ]
    return (
        <ScrollView>
            <View style={{ marginTop: 50, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'unset' }}>
                    <AntDesign name="left" size={24} color="black" style={{ marginLeft: 10 }} />
                    <Text style={styles.heading}>Notification</Text>
                </View>
                <View style={styles.imageview}>
                    <Image
                        style={styles.imgstyle}
                        source={require("../assets/medico_icon_delete.png")}
                        resizeMode="contain"
                    />
                </View>
            </View>

            <View style={{ marginTop: 20, flexDirection: 'column' }}>
                {listOFNotification.map((item, index) => (
                    <NotificationItem key={index} item={item} />
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
        color: "#000",
    },
    imgstyle: {
        width: "100%",
        height: '100%',
        marginRight: 20,
    },
    imageview: {
        width: 20,
        alignItems: "flex-end",
    },
})

export default Notification

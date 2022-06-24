import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';


export default function PatientLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.google2}>
                <Image
                    style={styles.image2}
                    source={require('../../assets/arrow_back.png')}
                />
            </TouchableOpacity>
            <Text style={styles.head}>Welcome Back</Text>
            <StatusBar style="auto" />
            <Text style={styles.ide}>EMAIL</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="afs@af.com"
                    placeholderTextColor="#000000"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <Text style={styles.ids}>PASSWORD</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="******"
                    placeholderTextColor="#000000"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.touch}>Login with Touch ID</Text>
            <Text style={styles.google}>or connect with Google</Text>
            <TouchableOpacity style={styles.google1}>
                <Image
                    style={styles.image}
                    source={require('../../assets/google.png')}
                />
            </TouchableOpacity>

            <Text style={styles.dont}>Don’t have an account? Sign Up</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",


    },
    image: {
        width: "37px",
        height: "30px",
        marginTop: "8px",
        marginLeft: "3px",
    },
    inputView: {
        backgroundColor: "#ebf0f3",
        borderRadius: 30,
        width: "286px",
        height: 45,
        marginBottom: 20,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        borderColor: "#E2E8F0",
        borderRadius: "8px",
        borderWidth: "1px",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    ids: {
        marginBottom: "2px",
        marginLeft: "-207px",
    },
    ide: {
        marginBottom: "2px",
        marginLeft: "-243px",
    },
    forgot_button: {
        height: "17px",
        marginStart: "201px",
        width: "111px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "42px",
        /* identical to box height */

        display: "flex",
        textAlign: "center",
        letterSpacing: "-0.02em",
        alignItems: "flex-end",
        color: "#A0AEC0",
        textDecorationLine: "underline",

    },
    loginBtn: {
        marginLeft: "0%",
        marginRight: "0%",
        marginTop: "10%",
        marginBottom: "0%",
        width: "257px",
        height: "40px",


        /* grey/300 */

        backgroundColor: "#E2E8F0",
        borderRadius: "8px",
    },
    head: {
        Color: "#000000",
        width: "165px",
        marginTop: "0px",
        marginRight: "105px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "24px",
        lineHeight: "51px",
        display: "flex",
        alignItems: "flex",
        textAlign: "center",
        letterSpacing: "-0.02em",

    },
    loginText: {
        width: "48px",
        height: "19px",
        marginTop: "8px",
        marginLeft: "105px",
        marginRight: "104px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "51px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",

        /* grey/800 */

        Color: "#2D3748",


    },
    touch: {

        height: "19px",
        width: "144px",
        textDecorationLine: "underline",
        lineHeight: "38px",
        textAlign: "center",
        fontFamily: "Inter",
        fontStyle: "normal",

        textAlign: "center",
        letterSpacing: "-0.02em",
        color: "#A0AEC0",

    },
    google: {

        width: "175px",
        height: "19px",
        marginLeft: "0%",
        marginTop: "16%",

        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "1px",
        display: "flex",
        alignItems: "flex-end",
        textAlign: "center",
        letterSpacing: "-0.02em",

        color: "#A0AEC0",
    },
    dont: {
        width: "181px",
        height: "22px",
        marginLeft: "0px",
        marginTop: "168px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "22px",
        /* identical to box height, or 183% */

        display: "flex",
        alignItems: "center",

        color: "#000000",

    },
    google1: {
        boxSizing: "border-box",

        position: "absolute",
        width: "47px",
        height: "45px",
        marginleft: "464px",
        marginTop: "400px",

        borderWidth: "1px",
        borderColor: "#A0AEC0",
        borderStyle: "solid",

    },
    google2: {
        position: "absolute",
        top: 125 + getStatusBarHeight(),
        left: 4,




    },
    image2: {
        width: "37px",
        height: "30px",


    },

});


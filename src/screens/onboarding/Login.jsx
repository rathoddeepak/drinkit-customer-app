import React from "react"

// Components
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native"
import Loading from "../../components/loading/Loading"

// Constants
import { colors } from "../../themes/colors"
import { fontFamilies } from "../../themes/fonts"
import { sendOtp } from "../../backend/onboarding"
import { setAuthTokens } from "../../backend/session"

import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
    const [mobileNumber, setMobileNumber] = React.useState("")

    const sendOTP = async () => {
        try {
            const { data } = await sendOtp(mobileNumber)
            if(data?.txnId) {
                navigation.navigate('VerifyOtp', { transactionId: data.txnId  });
            } else {
                alert(data?.message || "Something went wrong!")
            }
        } catch (err) {
            alert(err.toString())
        }
    }

    const handleAuthToken = async () => {
        const data = await AsyncStorage.getItem('@authToken')
        if(data) {
            const authData = JSON.parse(data)
            setAuthTokens(authData.token, authData.refreshToken)
            navigation.navigate('MainTabs');
        }
    }

    React.useEffect(() => {
        handleAuthToken()
    }, [])

    return (
        <View style={styles.main}>
            <Loading isLoading={false} LoadingContent={<View />}>
                <View style={styles.titleHeader}>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.subTitle}>Enter your mobile numer</Text>
                    <TextInput onChangeText={setMobileNumber} placeholderTextColor={colors.textMuted} placeholder="9191919191" selectionColor={colors.text} style={styles.textInput} />
                    <Pressable style={styles.button} onPress={sendOTP}>
                        <Text style={styles.buttonText}>Send OTP</Text>
                    </Pressable>
                </View>
            </Loading>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.bgColor
    },
    titleHeader: {
        width: "90%"
    },
    title: {
        fontSize: 25,
        color: colors.text,
        fontFamily: fontFamilies.medium,
    },
    subTitle: {
        fontSize: 16,
        marginTop: -5,
        fontWeight: "400",
        color: colors.textNote,
    },
    textInput: {
        fontSize: 18,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 10,
        fontWeight: "bold"
    },
    button: {
        backgroundColor: "#E6F4FF",
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {        
        textAlign: "center",
        fontSize: 16,
        color: colors.primary,
        fontWeight: "500"
    }
})

export default LoginScreen
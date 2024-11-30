import React from "react"

// Components
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native"
import Loading from "../../components/loading/Loading"

// Constants
import { colors } from "../../themes/colors"
import { fontFamilies } from "../../themes/fonts"
import { verifyOTP } from "../../backend/onboarding"

const VerifyOTP = ({ route, navigation }) => {
    const { transactionId } = route.params
    const [currentOTP, setOTP] = React.useState("")

    const handleVerifyOTP = async () => {
        try {
            const { data: { users, txnId }} = await verifyOTP(transactionId, currentOTP)            
            navigation.navigate('SelectUser', { users, transactionId: txnId });
        } catch (err) {
            alert(err.toString())
        }
    }

    return (
        <View style={styles.main}>
            <Loading isLoading={false} LoadingContent={<View />}>
                <View style={styles.titleHeader}>
                    <Text style={styles.title}>Verify OTP</Text>
                    <Text style={styles.subTitle}>Enter valid otp</Text>
                    <TextInput onChangeText={setOTP} placeholderTextColor={colors.textMuted} placeholder="9191919191" selectionColor={colors.text} style={styles.textInput} />
                    <Pressable style={styles.button} onPress={handleVerifyOTP}>
                        <Text style={styles.buttonText}>Verify OTP</Text>
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

export default VerifyOTP
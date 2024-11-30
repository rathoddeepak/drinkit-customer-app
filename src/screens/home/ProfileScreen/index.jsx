import React from "react"
import { StyleSheet, View } from "react-native"
import { colors } from "../../../themes/colors"
import TabHeader from "../../../components/headers/TabHeader"


const ProfileScreen = () => {
    return (
        <View style={styles.main}>
            <TabHeader title="My Profile" />
            <View style={styles.content}>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.bgColor,
    },
    content: {
        paddingHorizontal: 15
    }
})

export default ProfileScreen
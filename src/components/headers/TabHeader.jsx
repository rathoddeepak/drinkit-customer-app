import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { colors } from "../../themes/colors"
import { fontFamilies } from "../../themes/fonts"

const TabHeader = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        paddingHorizontal: 10,
        backgroundColor: colors.bgColor,
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: colors.border
    },
    title: {
        fontSize: 24,
        color: colors.text,
        fontFamily: fontFamilies.title
    }
})

export default TabHeader
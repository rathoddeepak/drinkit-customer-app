import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import locationIcon from "../../../assets/icons/pin_filled.png"
import { colors } from "../../../themes/colors"
import { fontFamilies, fonts } from "../../../themes/fonts"

const LocationViewer = () => {
    const addressMain = "Latur, MH"
    const addressDesc = "Raje shivaji nagar, latur 413512"
    return (
        <View style={styles.main}>
            <Image
                style={styles.icon}
                source={locationIcon}
            />
            <View style={styles.textCover}>
                <Text style={styles.title}>{addressMain}</Text>
                <Text style={styles.desc}>{addressDesc}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: 70,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 14,  
    },
    icon: {
        height: 22,
        width: 22,
    },
    textCover: {
        marginLeft: 8,
    },
    title: {
        fontSize: 22,
        color: colors.text,
        fontFamily: fontFamilies.title
    },
    desc: {
        fontSize: 13,
        color: colors.text,
        fontFamily: fontFamilies.medium
    }
})

export default LocationViewer;
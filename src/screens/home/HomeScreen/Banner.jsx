import React from "react"
import { Image, StyleSheet, Dimensions } from "react-native"

const { width } = Dimensions.get("window")
const bannerHeight = (width * 0.95) / 2.06010928962

const Banners = () => {
    const bannerURL = "https://i.ibb.co/92RjPYy/banner.png"
    return (
        <Image style={[styles.main, { height: bannerHeight }]} source={{ uri: bannerURL }} />
    )
}

const styles = StyleSheet.create({
    main: {
        marginTop: 24,
        borderRadius: 10,
        width: "100%"
    },
})

export default Banners;
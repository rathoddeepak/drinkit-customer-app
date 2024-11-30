import React from "react"
import { StyleSheet, View, Text, ScrollView } from "react-native"
import { colors } from "../../../themes/colors"

import SearchBar from "./SearchBar"
import TypeList from "./TypeList"
import Banners from "./Banner"
import { fontFamilies } from "../../../themes/fonts"
import ProductList from "./ProductList"
import Loading from "../../../components/loading/Loading"
import HomeShimmer from "./HomeShimmer"
import LocationViewer from "./LocationViewer"

const HomeScreen = () => {
    return (
        <View style={styles.main}>
            <Loading isLoading={false} LoadingContent={HomeShimmer}>
                <LocationViewer />
                <ScrollView style={styles.content}>
                    <SearchBar />
                    <TypeList />
                    <Banners />
                    <View style={styles.titleHeader}>
                        <Text style={styles.title}>Friday Vibes</Text>
                        <Text style={styles.subTitle}>It's wine o'clock somewhere.</Text>            
                    </View>
                    <ProductList />
                </ScrollView>
            </Loading>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,        
        backgroundColor: colors.bgColor
    },
    content: {
        paddingHorizontal: 14,
        marginBottom: 60
    },
    titleHeader: {
        marginTop: 24
    },
    title: {
        fontSize: 20,
        color: colors.text,
        fontFamily: fontFamilies.medium,
    },
    subTitle: {
        fontSize: 16,        
        marginTop: -5,
        fontWeight: "400",
        color: colors.textNote,
    }
})

export default HomeScreen
import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import searchIcon from "../../../assets/icons/search.png"
import { colors } from "../../../themes/colors"

const SearchBar = () => {
    return (
        <View style={styles.main}>
            <Image
                style={styles.icon}
                source={searchIcon}
            />
            <View style={styles.textCover}>
                <Text style={styles.placeholder}>Search DrinkIT</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: 45,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: colors.bgColor,
        elevation: 3,
        borderRadius: 10,
        paddingHorizontal: 16,
        marginTop: 5
    },
    icon: {
        height: 20,
        width: 20,
    },    
    placeholder: {
        marginLeft: 20,
        fontSize: 16,
        color: colors.textNote,
    }    
})

export default SearchBar;
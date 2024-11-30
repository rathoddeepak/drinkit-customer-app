import React from "react";
import { View, Image, StyleSheet, useWindowDimensions } from "react-native"
import { colors } from "../../../themes/colors";
import useGetTypes from "../../../hooks/api/useGetTypes";

const TypeList = () => {
    const { data: types = []} = useGetTypes()
    const { width } = useWindowDimensions()    
    const cardSize = React.useMemo(() => {
        const contentWidth = width * 0.95
        return contentWidth / 4.5
    }, [width])

    const renderType = (item) => {
        return (           
            <View key={item.id} style={[styles.card, { width: cardSize, height: cardSize }]}>
                <Image
                    style={styles.image}
                    source={{ uri: item.image }}
                />
            </View>
        )
    }

    return (
        <View style={styles.main}>
            {types.map(renderType)}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    card: {
        borderColor: colors.border,
    },
    image: {
        height: "100%",
        width: "100%"
    }
})

export default TypeList
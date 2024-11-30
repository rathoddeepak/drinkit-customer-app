import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native"
import { colors } from "../../../themes/colors";

const tabs = [
    {
        id: "live_orders",
        title: "Live Orders",
    },
    {
        id: "past_orders",
        title: "Past Orders"
    }
]
const OrderTabs = () => {
    const [currentTab, setCurrentTab] = React.useState(tabs[0].id)
    return (
        <View style={styles.main}>
            {tabs.map((tab) => {
                const backgroundColor = currentTab == tab.id ? colors.primary : colors.bgColor
                const color = currentTab == tab.id ? colors.bgColor : colors.textNote
                return (
                    <Pressable onPress={() => setCurrentTab(tab.id)} style={[styles.tab, { backgroundColor }]}>
                        <Text style={[styles.tabText, { color }]}>{tab.title}</Text>
                    </Pressable>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.border,
        marginVertical: 10,
        height: 46,
        padding: 3,
    },
    tab: {
        width: "50%",
        borderRadius: 100,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    tabText: {
        fontSize: 14,
        fontWeight: "600"
    }
})

export default OrderTabs
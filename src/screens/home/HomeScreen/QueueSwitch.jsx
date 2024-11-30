import React, { act } from "react"
import { View, Image, StyleSheet, Pressable } from "react-native"
import { colors } from "../../../themes/colors"
import listIcon from "../../../assets/icons/list.png"
import calendarIcon from "../../../assets/icons/calendar.png"

const QueueViewSwitch = () => {
    const [activeMode, setActiveMode] = React.useState(1)
    const modes = [
        {
            id: 1,
            type: "list",
            icon: listIcon
        },
        {
            id: 2,
            type: "calendar",
            icon: calendarIcon
        }
    ]
    return (
        <View style={styles.main}>
            {modes.map(mode => {
                const isActive = activeMode == mode.id
                const backgroundColor = isActive ? colors.bgColor : colors.card
                const elevation = isActive ? 2 : 0
                const tintColor = isActive ? colors.primary : colors.text
                return (
                    <Pressable key={mode.id} onPress={() => setActiveMode(mode.id)} style={[styles.iconCover, { backgroundColor, elevation }]}>
                        <Image style={[styles.icon, { tintColor }]} source={mode.icon} />
                    </Pressable>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: colors.card,
        borderRadius: 200,
        flexDirection: "row",
        paddingVertical: 5,
        paddingHorizontal: 2,
        marginTop: 5
    },
    iconCover: {
        width: 30,
        height: 30,
        borderRadius: 200,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5
    },
    icon: {
        height: 20,
        width: 20
    }
})

export default QueueViewSwitch
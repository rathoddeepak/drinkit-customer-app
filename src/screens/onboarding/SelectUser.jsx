import React from "react"

// Components
import { StyleSheet, View, Text, Pressable, FlatList } from "react-native"
import Loading from "../../components/loading/Loading"

// Constants
import { colors } from "../../themes/colors"
import { fontFamilies } from "../../themes/fonts"
import { verifyUser } from "../../backend/onboarding"
import TabHeader from "../../components/headers/TabHeader"
import AsyncStorage from '@react-native-async-storage/async-storage';

const SelectUser = ({ route, navigation }) => {
    const { transactionId, users = [] } = route.params

    const handleVerifyUser = async (address) => {
        const { data } = await verifyUser(transactionId, address)
        if(data?.refreshToken) {
            await AsyncStorage.setItem('@authToken', json.Stringify(data))
            navigation.navigate('MainTabs');
        } else {
            alert(data?.message || "Something went wrong!")
        }
    }

    const renderUser = ({ item: { abhaAddress, fullName }}) => {
        return (
            <Pressable onPress={() => handleVerifyUser(abhaAddress)} style={styles.userCard}>
                <Text style={styles.fullName}>{fullName}</Text>
                <Text style={styles.address}>{abhaAddress}</Text>
            </Pressable>
        )
    }

    return (
        <View style={styles.main}>
            <TabHeader title="Select User" />
            <Loading isLoading={false} LoadingContent={<View />}>
                <View style={styles.content}>
                    <FlatList
                        data={users}
                        renderItem={renderUser}
                    />
                </View>
            </Loading>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.bgColor,        
    },
    content: {
        paddingHorizontal: 10,
        paddingTop: 10
    },
    userCard: {
        borderRadius: 10,
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        padding: 10
    },
    fullName: {
        fontSize: 18,
        color: colors.text,
        fontFamily: fontFamilies.medium,
    },
    address: {
        fontSize: 16,
        color: colors.textNote,
        fontFamily: fontFamilies.medium,
    }
})

export default SelectUser
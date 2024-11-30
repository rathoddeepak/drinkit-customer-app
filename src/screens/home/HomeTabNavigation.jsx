import React from "react";

// Native components
import { View, StyleSheet, Image, Pressable } from 'react-native';

// React Navigation
import { useLinkBuilder } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Home Tab Screens
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import OrderScreen from './OrderScreen';
import ProfileScreen from './ProfileScreen';

// Icons
import homeIconOutline from "../../assets/icons/home_outline.png"
import homeIconFilled from "../../assets/icons/home_filled.png"

import cartIconOutline from "../../assets/icons/cart_outline.png"
import cartIconFilled from "../../assets/icons/cart_filled.png"

import orderIconOutline from "../../assets/icons/order_outline.png"
import orderIconFilled from "../../assets/icons/order_filled.png"

import profileIconOutline from "../../assets/icons/profile_outline.png"
import profileIconFilled from "../../assets/icons/profile_filled.png"

// Constants
import { colors } from "../../themes/colors";

const Tab = createBottomTabNavigator();
const tabIconsMap = {
  'Home': {
    'true': homeIconFilled,
    'false': homeIconOutline,
  },
  'Cart': {
    'true': cartIconFilled,
    'false': cartIconOutline,
  },
  'Orders': {
    'true': orderIconFilled,
    'false': orderIconOutline,
  },
  'Profile': {
    'true': profileIconFilled,
    'false': profileIconOutline,
  }
}

function HomeTabBar({ state, navigation }) {
  const { buildHref } = useLinkBuilder();
  return (
    <View style={styles.tabMain}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const handleTabPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };
        const color = isFocused ? colors.text : colors.text
        const fontWeight = isFocused ? '700' : '500'
        const icon = tabIconsMap[route.name][isFocused]
        return (
          <PlatformPressable
            href={buildHref(route.name, route.params)}
            onPress={handleTabPress}
            key={route.name}
            style={styles.tab}
          >
            <Image 
              source={icon}
              style={styles.tabIcon}
            />
            <Text style={[styles.tabTitle, { color, fontWeight }]}>
              {route.name}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        animation: "fade",
        headerShown: false
      }}
      tabBar={(props) => <HomeTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Orders" component={OrderScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabMain: {
    flexDirection: 'row',
    height: 60,
    width: "100%",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 6,  
    elevation: 10,
    backgroundColor: "white",
    position: 'absolute',
    bottom: 0
  },
  tabIcon: {
    width: 28,
    height: 28,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  tabTitle: {    
    fontSize: 11
  }
})

export default HomeTabNavigator
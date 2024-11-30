import React from 'react';
import { Image, StyleSheet, Text, View, Switch } from 'react-native';

import Shimmer from "@rathoddeepak/react-native-shimmer";
import logoSource from "../../../assets/icons/pin_filled.png"
import LocationViewer from './LocationViewer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: "100%"
  },
  title: {
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  switch: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 16,
    color: "black",
    textAlign: "center"
  },
  loading: {
    marginVertical: 10,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  reactLogo: {
    width: 150,
    height: 150,
    backgroundColor: "#F5FCFF",
  },
});

export default function Example(props) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Shimmer
          animating={true}
          direction="down"
        >
          {isMounted ? <LocationViewer /> : null}
        </Shimmer>
      </View>
    </View>
  );
}
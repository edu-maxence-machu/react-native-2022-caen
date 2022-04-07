import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>{/* 
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello World</Text>

      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        /> */}

        <View style={styles.container}>
          <View style={styles.helloContainer}>
            <Text style={styles.helloText}>HELLO WORLD</Text>
          </View>
        </View>
        
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  helloContainer: {
      width: '100%',
      backgroundColor: '#104360',
      paddingVertical: 20,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30
  }, 
  helloText: {
    fontSize: 46,
    fontWeight: "900",
    textAlign: "center",
    letterSpacing: 5,
    color: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    padding: 20,
  },
  tinyLogo : {
    width: 100,
    height: 100
  }
});

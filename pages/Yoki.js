import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

function Application() {
  let deux = 1 + 1;

  return "Hello World";
}

export default function Yoki() {
  /*
    CODE JS ICI
    */
  // ..
  /*    console.log('Hello World');
    let trois = 1+2;
    console.log(trois);
    alert('Coucou') */
  function onScanPress() {
    alert("Coucou");
  }
  // Arrow function
  const onItemPress = () => {
    alert("Item press");
  };
  /*
    CODE FRONT IC
    */
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerText}>Yoki</Text>
      </SafeAreaView>

      <TouchableOpacity onPress={onScanPress} style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Scanner</Text>
        </View>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ flex: 1 }} style={styles.scrollView}>
        <TouchableOpacity onPress={onItemPress} style={styles.itemContainer}>
          <Text style={styles.itemName}>Bouteille d'eau</Text>
          <Text style={styles.itemTimestamp}>Scanné hier à 20h</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onItemPress} style={styles.itemContainer}>
          <Text style={styles.itemName}>Bouteille d'eau</Text>
          <Text style={styles.itemTimestamp}>Scanné hier à 20h</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onItemPress} style={styles.itemContainer}>
          <Text style={styles.itemName}>Bouteille d'eau</Text>
          <Text style={styles.itemTimestamp}>Scanné hier à 20h</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onItemPress} style={styles.itemContainer}>
          <Text style={styles.itemName}>Bouteille d'eau</Text>
          <Text style={styles.itemTimestamp}>Scanné hier à 20h</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  itemName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  itemTimestamp: {
    fontSize: 18,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  buttonContainer: {
    borderBottomWidth: 1,
    height: 125,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  button: {
    borderWidth: 1,
    backgroundColor: "grey",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 34,
    textTransform: "uppercase",
  },
  header: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  headerText: {
    fontSize: 28,
  },
  mainView: {
    flex: 1,
    backgroundColor: "white",
  },
});

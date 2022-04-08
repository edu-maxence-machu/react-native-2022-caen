import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppHeader from "../components/Header";
import ProductsHistory from "../components/ProductsHistory";
import ScanButtonView from "../components/ScanButtonView";

export default function PageStates() {
  //let number = 40;
  const [number, setNumber] = useState(120);

  const [isOpen, setIsOpen] = useState(true);

  function addOneToNumber() {
    let _n = number + 1;
    setNumber(_n);
  }

  function substractOneToNumber() {
    let _n = number - 1;
    setNumber(_n);
  }

  function toggleBox() {
    let _open = !isOpen;
    setIsOpen(_open);
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <AppHeader title="States" />

      <Text
        style={[
          styles.text,
          {
            backgroundColor: number > 100 ? "red" : "green",
            fontSize: number / 2,
          },
        ]}
      >
        {number}
      </Text>

      {number > 30 && <Text>30km en ville</Text>}
      {number > 130 && <Text>T'es sur l'autoroute j'espère</Text>}

      <TouchableOpacity onPress={addOneToNumber}>
        <Text style={styles.text}>Ajouter 1 au nombre</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={substractOneToNumber}>
        <Text style={styles.text}>Retirer 1 au nombre</Text>
      </TouchableOpacity>

      <Text>--------</Text>
      {/* {isOpen && <View style={styles.box}></View>} */}
      {isOpen ? (
        <View style={styles.box}></View>
      ) : (
        <Text>La boite est fermée</Text>
      )}

      <TouchableOpacity onPress={toggleBox}>
        <Text style={styles.text}>Toggle la boite</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
  box: {
    width: "100%",
    height: 250,
    backgroundColor: "orange",
  },
  mainView: {
    flex: 1,
    backgroundColor: "white",
  },
});

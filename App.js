import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import AppHeader from "./components/Header";
import ProductsHistory from "./components/ProductsHistory";
import ScanButtonView from "./components/ScanButtonView";
import PageStates from "./pages/PageStates";
import Yoki from "./pages/Yoki";
export default function App() {
  const [page, setPage] = useState("PageStates");

  function navigate(page) {
    setPage(page);
  }
  /*
    CODE FRONT IC
    */
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {page === "PageStates" && <PageStates />}
        {page === "Yoki" && <Yoki />}
        {page === "Homepage" && <Text>C'est l'accueil</Text>}
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => navigate("Homepage")}
          style={styles.navbarButton}
        >
          <Text style={styles.navbarText}>Homepage</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate("Yoki")}
          style={styles.navbarButton}
        >
          <Text style={styles.navbarText}>Yoki</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate("PageStates")}
          style={styles.navbarButton}
        >
          <Text style={styles.navbarText}>PageStates</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 70,
    borderTopWidth: 1,
  },
  navbarButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
  },
  navbarText: {},
  mainView: {
    flex: 1,
    backgroundColor: "white",
  },
});

// ETAPE 2: les imports
import { Text, View, StyleSheet } from "react-native";
import Header from "./Header";

// ETAPE 1: la fonction avec une majuscule
export default function TestComponent({title}){
    return (
        <View>
            <Text>{title}</Text>

            <Header/>
        </View>
    )
}

// ETAPE 3: les styles
const styles = StyleSheet.create({
});

// ETAPE 4: utiliser le composant avec <TestComponent/>
// Ne pas oublier d'importer le composant dans son parent
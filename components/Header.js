import { StyleSheet, SafeAreaView, Text } from "react-native";

export default function Header(){
    return (
        <SafeAreaView style={styles.header}>
            <Text style={styles.headerText}>Exercice 1</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header : {
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100
    },
    headerText : {
        fontSize: 28,
    },
})
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Article from "./components/Article";
import Header from "./components/Header";
import TextComponent from "./components/TestComponent";
export default function App(){
    return (
        <View style={styles.mainView}>
            <Header/>

            <ScrollView style={styles.scrollView}>
                <Article/>
                <Article/>
                <Article/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView : {
        paddingHorizontal: 30
    },
    mainView: {
        flex: 1,
        backgroundColor: 'white',
    }
})
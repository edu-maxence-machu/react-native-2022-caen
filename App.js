import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity  } from "react-native";
import  AppHeader from './components/Header' 
import ProductsHistory from "./components/ProductsHistory";
import ScanButtonView from "./components/ScanButtonView";

export default function App(){
    function onScanPress(){
        alert('Coucou tout le monde');
        // blabla.push({...})
        // etc...
    }

    // Arrow function 
    const onItemPress = () => {
        alert('Test depuis App');
        // Sur quel item j'ai cliqué ? 
    }
    /*
    CODE FRONT IC
    */
    return (
        <View style={{flex: 1}}>
            <AppHeader textColor="orange" title="Yoki" /> 
            {/* <AppHeader title="React c'est cool" /> 
            <AppHeader title="Yoshi" /> 
            <AppHeader title="Carnaval" />  */}

            <ScanButtonView
                handleScanPress={onScanPress}
            />

            <ProductsHistory
                handlePressItem={onItemPress}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white',
    }
})
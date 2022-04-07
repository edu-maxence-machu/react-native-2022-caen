import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";

export default function App(){
    return (
        <View style={styles.mainView}>
            <SafeAreaView style={styles.header}>
                    <Text style={styles.headerText}>Exercice 1</Text>
            </SafeAreaView>

            <ScrollView style={styles.scrollView}>
                <View style={styles.articleContainer}>  
                    <View style={styles.articleTitleContainer}>
                        <Text style={styles.articleTitle}>
                            Lorem ipsum dolor...
                        </Text>
                    </View>
                    <View style={styles.articleTextContainer}>
                        <Text style={styles.articleText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tortor in turpis sagittis molestie. Phasellus sagittis leo nisl, in maximus purus elementum vel. Vestibulum sodales metus dictum erat fringilla egestas. 
                        </Text>
                    </View>
                </View>

                <View style={styles.articleContainer}>  
                    <View style={styles.articleTitleContainer}>
                        <Text style={styles.articleTitle}>
                            Lorem ipsum dolor...
                        </Text>
                    </View>
                    <View style={styles.articleTextContainer}>
                        <Text style={styles.articleText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tortor in turpis sagittis molestie. Phasellus sagittis leo nisl, in maximus purus elementum vel. Vestibulum sodales metus dictum erat fringilla egestas. 
                        </Text>
                    </View>
                </View>

                <View style={styles.articleContainer}>  
                    <View style={styles.articleTitleContainer}>
                        <Text style={styles.articleTitle}>
                            Lorem ipsum dolor...
                        </Text>
                    </View>
                    <View style={styles.articleTextContainer}>
                        <Text style={styles.articleText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tortor in turpis sagittis molestie. Phasellus sagittis leo nisl, in maximus purus elementum vel. Vestibulum sodales metus dictum erat fringilla egestas. 
                        </Text>
                    </View>
                </View>

                <View style={styles.articleContainer}>  
                    <View style={styles.articleTitleContainer}>
                        <Text style={styles.articleTitle}>
                            Lorem ipsum dolor...
                        </Text>
                    </View>
                    <View style={styles.articleTextContainer}>
                        <Text style={styles.articleText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tortor in turpis sagittis molestie. Phasellus sagittis leo nisl, in maximus purus elementum vel. Vestibulum sodales metus dictum erat fringilla egestas. 
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView : {
        paddingHorizontal: 30
    },
    articleContainer :  {
        
    },
    articleTitleContainer :  {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    articleTitle :  {
        fontSize: 22
    },
    articleTextContainer :  {
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    articleText :  {
        fontSize: 16
    },
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
    mainView: {
        flex: 1,
        backgroundColor: 'white',
    }
})
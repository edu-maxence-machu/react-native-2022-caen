import { StyleSheet, View, Text } from "react-native"

export default function Article(){
    return (
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
    )
}

const styles = StyleSheet.create({

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
})
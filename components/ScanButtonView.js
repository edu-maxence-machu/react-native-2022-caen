import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function ScanButtonView(props) {

  return (
        <TouchableOpacity
                onPress={() => props.handleScanPress()}
                style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Scanner</Text>
                </View>
            </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    buttonContainer : {
        borderBottomWidth: 1,
        height: 125,
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    button : {
        borderWidth: 1,
        backgroundColor: 'grey',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText : {
        fontSize: 34,
        textTransform: 'uppercase'
    }
})

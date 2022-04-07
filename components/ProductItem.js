import React from 'react'
import { View , StyleSheet, Text, TouchableOpacity} from 'react-native'

export default function ProductItem(props) {

  return (
    <TouchableOpacity 
    onPress={props.handlePressItem}
    style={styles.itemContainer}>
        <Text style={styles.itemName}>{props.title}</Text>
        <Text style={styles.itemTimestamp}>Scanné le {props.date.toISOString()}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    itemContainer : {
        borderBottomWidth: 1,
        paddingVertical: 20
    },
    itemName : {
        fontSize: 22,
        fontWeight: 'bold',
    },
    itemTimestamp : {
        fontSize: 18
    },
    scrollView: {
        paddingHorizontal: 20
    }, 
})
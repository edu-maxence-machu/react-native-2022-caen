import { View, ScrollView, TouchableOpacity,Text, StyleSheet } from 'react-native'
import ProductItem from './ProductItem';

export default function ProductsHistory(props) {


  return (
    <ScrollView 
    contentContainerStyle={{flex:1}}
    style={styles.scrollView}
   >
       <ProductItem handlePressItem={props.handlePressItem} title="Oasis" date={new Date('01/10/2020')}/>
       <ProductItem handlePressItem={props.handlePressItem} title="Fanta" date={new Date('02/10/2022')}/>
       <ProductItem handlePressItem={props.handlePressItem} title="Eau" date={new Date('02/10/2022')}/>
       <ProductItem handlePressItem={props.handlePressItem} title="Dr. Pepper" date={new Date('02/10/2022')}/>
       <ProductItem handlePressItem={props.handlePressItem} title="Fanta" date={new Date('02/10/2022')}/>
       <ProductItem handlePressItem={props.handlePressItem} title="Fanta" date={new Date('02/10/2022')}/>
       <ProductItem handlePressItem={props.handlePressItem} title="Fanta" date={new Date('02/10/2022')}/>
  
</ScrollView>
  )
}

const styles = StyleSheet.create({
        scrollView: {
            paddingHorizontal: 20
        }, 
})
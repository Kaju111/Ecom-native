import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { FlatList } from 'react-native-gesture-handler'

const Home = () => {
    const [products,setProducts] = useState([])
  useEffect(()=>{
    getProducts()
  },[])
    const getProducts=()=>{ 
      firestore().collection("products").get().then(snapshot=>{
        if(snapshot.docs!=[]){
          setProducts(snapshot.docs)
        }
      })
    } 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.title}>ECom User App</Text>
      </View>
      <View>
        <FlatList data={products} renderItem={({item,index})=>{
          return(
            <View style={styles.itemkey}>
                <Text>kaju</Text>
            </View>
          )
        }}/>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    width:'100',
    height: 50,
    backgroundColor: 'white',
    elevation:5,
    justifyContent: 'center',

  },
  title:{
    fontSize:24,
    color:'#FF7F50',
    fontWeight:'600',
    marginLeft:15
  },
  itemkey:{
    width: Dimensions.get('window').width-20,
    height:100,
    backgroundColor:'white',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop:20
  }
})





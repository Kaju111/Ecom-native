import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Home from '../tabs/Home';
import Search from '../tabs/Search';
import Cart from '../tabs/Cart';
import Wishlist from '../tabs/Wishlist';
import User from '../tabs/User';

const Main = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      {activeTab == 0 ? (
        <Home />
      ) : activeTab == 1 ? (
        <Search />
      ) : activeTab == 2 ? (
        <Cart />
      ) : activeTab == 3 ? (
        <Wishlist />
      ) : (
        <User />
      )}
      <View style={styles.bottomView}>
        <TouchableOpacity style={StyleSheet.tab}
        onPress={()=>{
            setActiveTab(0)
        }}
        >
          <Image
            source={require('../images/Home.png')}
            style={[styles.tabIcon, {tintColor:activeTab==0?'#FF7F50':'black'}]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.tab}
        onPress={()=>{
            setActiveTab(1)
        }}>
          <Image
            source={require('../images/Search.png')}
            style={[styles.tabIcon, {tintColor:activeTab==1?'#FF7F50':'black'}]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.tab}
        onPress={()=>{
            setActiveTab(2)
        }}>
          <Image
            source={require('../images/Cart.png')}
            style={[styles.cart, {tintColor:activeTab==2?'#FF7F50':'black'}]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.tab}
        onPress={()=>{
            setActiveTab(3)
        }}>
          <Image
            source={require('../images/Wishlist.jpg')}
            style={[styles.love, {tintColor:activeTab==3?'#FF7F50':'black'}]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.tab}
        onPress={()=>{
            setActiveTab(4)
        }}>
          <Image
            source={require('../images/User.png')}
            style={[styles.use, {tintColor:activeTab==4?'#FF7F50':'black'}]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 80,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    elevation: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'row',
  },
  tab: {
    width: '20',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
  use:{
    height: 30, width: 30
  },
  love:{
    height: 40, width: 40
  },
  cart:{
    height: 30, width: 30
  }
});

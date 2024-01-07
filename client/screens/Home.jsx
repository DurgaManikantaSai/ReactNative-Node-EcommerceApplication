import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Layout from '../components/Layout/Layout'

import Banner from '../components/Banner/Banner'
import Products from '../components/Products/Products'
import Header from './../components/Layout/Header';
import Categories from '../components/category/Categories'

const Home = () => {
  return (
    <Layout>
        <Header/>
        <Categories/>
        <Banner/>
        <Products/>
        <View >
           <Text>Home Page</Text>
        </View>
    </Layout>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
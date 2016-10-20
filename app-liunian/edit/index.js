/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React,{Component} from 'react'
import{
   StyleSheet,
   Text,
   View,
 }from 'react-native'

 var Icon = require('react-native-vector-icons/Ionicons')

 // var ReactNative = require('react-native')
 // var React = require('react')
 // var Component = React.Component
 // var AppRegistry = ReactNative.AppRegist
 // var StyleSheet = ReactNative.StyleSheet
 // var Text = ReactNative.Text
 // var View = ReactNative.View
 // var TabBarIOS = ReactNative.TabBarIOS
 var Edit = React.createClass({
  render:function(){
    return(
        <View style={styles.container}>
          <Text>制作页面</Text>
        </View>
      )
  }
 })

 var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
})

 module.exports = Edit;
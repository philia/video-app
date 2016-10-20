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
   ListView,
   TouchableHighlight,
   Image,
   Dimensions
 }from 'react-native'

 var width = Dimensions.get('window').width
 var Icon = require('react-native-vector-icons/Ionicons')
 var ReactNative = require('react-native')
 var request = require('../common/request')
 var config = require('../common/config')  

 var List = React.createClass({
 	getInitialState() {
	  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	  return {
	    dataSource: ds.cloneWithRows([]),
	  }
	},

	renderRow(row){
		return(
			<TouchableHighlight>
				<View style={styles.item}>
					<Text style={styles.title}>{row.title}</Text>
					<Image
					  source={{uri:row.thumb}}
					  style={styles.thumb}
					>
					  <Icon 
					  	name='ios-play'
					  	size={28}
					  	style={styles.play} />
					</Image>
					<View style={styles.itemFooter}>
						<View style={styles.handleBox}>
						 <Icon 
					  	 name='ios-heart-outline'
					  	 size={28}
					  	 style={styles.up} />
					  	<Text style={styles.handleText}>喜欢</Text> 
						</View>
						<View style={styles.handleBox}>
						 <Icon 
					  	 name='ios-chatboxes-outline'
					  	 size={28}
					  	 style={styles.commentIcon} />
					  	<Text style={styles.handleText}>评论</Text> 
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	},

	 componentDidMount () {
		console.log("开始调用ajax方法");
    this._fetchData()
  },

  _fetchData(){

	  console.log("正在调用ajax方法");
    request.get(config.api.base + config.api.creations, {
      accessToken:'dasc'
    })
      .then((data) => {
        if (data.success) {
          console.log(data)
          this.setState({
            dataSource:this.state.dataSource.cloneWithRows(data.data)
          })
        }
      })
      .catch((error) => {
        console.warn(error);
      })
  },

  render(){
    return(
        <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>列表页面</Text>
        </View>
         <ListView
		      dataSource={this.state.dataSource}
		      renderRow={this.renderRow} 
		      enableEmptySections={true}
		      automaticallyAdjustContentInsets={false}
		      />
        </View>
      )
  }
 })

 var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5Fccf',
  },
  
  header: {
  	paddingTop: 25,
  	paddingBottom: 12,
  	backgroundColor: '#ee735c'
  },
  headerTitle: {
  	color: '#fff',
  	fontSize: 16,
  	textAlign: 'center',
  	fontWeight: '600'
  },
  item: {
  	width: width,
  	marginBottom:10,
  	backgroundColor:'#fff'
  },
  thumb:{
  	width:width,
  	height:width * 0.56,
  	resizeMode:'cover'
  },
  title:{
  	padding:10,
  	fontSize:18,
  	color:'#333'
  },
  itemFooter:{
  	flexDirection:'row',
  	justifyContent:'space-between',
  	backgroundColor:'#eee'
  },
  handleBox:{
  	padding:10,
  	flexDirection:'row',
  	width:width/2-0.5,
  	justifyContent:'center',
  	backgroundColor:'#fff'
  },
  play:{
  	position:'absolute',
  	bottom:14,
  	right:14,
  	height:46,
  	width:46,
  	paddingTop:9,
  	paddingLeft:18,
  	backgroundColor:'transparent',
  	borderColor:'#eee',
  	borderWidth:1,
  	borderRadius:23,
  	color:'#ed7b66'
  },
  handleText:{
  	paddingLeft:12,
  	fontSize:18,
  	color:'#333'
  },
  up:{
  	fontSize:22,
  	color:'#333'
  },
  commentIcon:{
  	fontSize:22,
  	color:'#333'
  }
})

 module.exports = List;
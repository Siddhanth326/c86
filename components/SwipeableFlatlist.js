import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
Dimensions,
Animated} from 'react-native';
import{listItem,Icon} from "react-native-elements"
import SantaAnimation from './SantaClaus.js';
import db from '../config';
import firebase from 'firebase';
import{SwipeListView} from "react-native-swipe-list-view"



export default class SwipeableFlatlist extends Component
{
    constructor(props){
        super(props);
        this.state={
            allNotifications:this.props.allNotifications
        }
    }
    updateMarkAsRead=Notification=>{
        db.collection("allNotifications").doc(Notification.doc_id).update({
            notification_status:"read"
        })
    }
    onSwipeValueChange=swipeData=>{
var Notifecation =this.state.allNotifications;
const{key,value}=swipeData;
if(value<-Dimensions.get("window").width)
{
    const NewData=[...allNotifications];
    this.updateMarkAsRead(allNotifications[key])
    NewData.splice(key,1);
    this.setState({allNotifications:NewData})
}
    }
    renderItem=data=>(
      <Animated.View>
          <ListItem 
          leftElement={<Icon name="book"type="font-awesome"color="#696969"/>}
          title={data.Item.book_name}
          titleStyle={{color:"black",fontWeight:"bold"}}
          subtitle={data.Item.massage}
          bottomDivider
          />
      </Animated.View>
    )
      renderHidenItem=()=>(
          <View style={styles.rowBack}>
            <View style={[styles.backRightBtn,styles.backRightBtnRight]}>
              <Text style={styles.backTextwhite}></Text>
            </View>
          </View>
      )
    
    render(){
        return(
            <View style={styles.container}>
               <SwipeListView 
               disableRightSwipe
               bata={this.state.allNotifications}
               renderItem={this.renderItem}
               renderHidenItem={this.renderHidenItem}
               rightOpenValue={-Dimensions.get('window').width}
               previewRowKey={'0'}
               previewOpenValue={-40}
               previewOpenDelay={3000}
               onSwipeValueChange={this.onSwipeValueChange}/>
            </View>
        )
    }
}

const style=StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1
    },
    backTextwhite:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:15
    },
    rowBack:{
        alignItems:"center",
        backgroundColor:'#29b9f6',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        peddingleft:15,
        
    },
    backRightBtn:{
        alignItems:'center',
        justifyContent:'center',
        bottom:0,
        position:'absolute',
        top:0,
        width:100,
    },
    backRightBtnRight:{
        backgroundColor:'#29b6f6',
        right:0
    }
})
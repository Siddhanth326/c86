import React, { Component} from 'react';
import { Header,Icon,Badge, registerCustomIconType } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';

const BellIconWithBadge=(props)=>{
  return(
    <View>
      <Icon name='bell'type='font-awesome' color='#696969' size={25}
      onPress={()=>this.props.navigation.navigate('Notifecation')}/>
      <Badge value={this.state.value} containerStyle={{position:'absolute',top:-4,right:-4}}/>
    </View>
  )
}
export default class MyHeader extends Component {
  constructor(props){
    super(props);
this.state={
  value:""
}
  }
  getNumberOfUnreadNotifications(){
    db.collection('all_notification').where('notification_status','==','unread')
    .onSnapshot((snapshot)=>{
      var unreadNotifications=snapshot.docs.map((doc)=>doc.data())
      this.setState({
        value:unreadNotifications.length
      })
    })
  }
  componentDidMount(){
    this.getNumberOfUnreadNotifications()
  }
  render(){
  return (
    <Header
      leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
      rightComponent={<BellIconWithBadge{...props}/>}
      backgroundColor = "#eaf8fe"
    />
  );
};
}

export default MyHeader;

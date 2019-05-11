import * as React from 'react';
import { NavigationActions } from 'react-navigation'
import { View, StyleSheet, Image ,Text,ActivityIndicator,TouchableOpacity,TextInput} from 'react-native';
import { Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
export default class Surveys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[],
      animate:false
    };
  }
  componentDidMount()
  {
     this.GetListData()
  }
  GetListData=()=>{
    this.Load()
    var obj = {  
      method: 'GET',
      headers: {
        'Content-Type'    : 'application/json',
        'Accept'          : 'application/json',
       'Authorization':'Bearer '+'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJJRCI6ImJmNDczYTU5LTQxNzAtNDQ2My05YTI2LWZlNWNhYTVlZjMwZiIsIkV4cGlyeSI6bnVsbH0.tUaime3lRYn7wAu2KCnW3oFwIZa18eIL_4AOnoGJiKU'.trim()   
         }
  }
  fetch("https://apptest.supplynow.co.uk/api/v1/Bookings/MyBookings",obj)  
  .then((res)=> {
    return res.json();
   })
   .then((resJson)=>{
     this.dataset(resJson)
   
    return resJson;
   })
   .catch((error) => {
    console.error(error);
});
}
dataset=(data)=>{
  this.setState({
    dataSource:data
  })
  this.hide()
}

Load(){
  this.setState({animate:true})
}
hide(){
  this.setState({animate:false})
}
space(){
  return(<View style={{height: 10, width: 1, backgroundColor: 'black'}}/>)
}
  render() {
    const { navigate } = this.props.navigation;
    return (  
      <View style={styles.Maincontainers}>
          <ActivityIndicator
               animating = {this.state.animate}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/>
                 <FlatList
      ItemSeparatorComponent={this.space}
      data={this.state.dataSource}
          renderItem={({item,separators})  =>
        <TouchableOpacity onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight} onPress = { this.clickedItemText.bind(this, item)}>
      <View style={{flex:1,backgroundColor:(item.Status=='Completed')?'#fff':'#fff'}}>
          <View style={{flex:1, flexDirection: 'row',justifyContent:'space-between'}}>
          <View style={{flexDirection: 'row',justifyContent:"center",alignItems:'center'}}> 
          <Image    source={require("./Assets/student.png")} style={{marginLeft:20,marginTop:10,width:50,height:50}}></Image>    
          <View style={{flexDirection:'column'}}>
          <Text  style={{marginLeft:20,marginTop:10}}>Elione</Text>   
       <Text  style={{marginRight:20,color:'#000000'}}>student@gmail.com</Text>    
          
          </View> 
       
      
          </View>   
         
      </View>  
      
  </View>
       
  </TouchableOpacity>  
       }
    />
      </View>
    
    );
      }
      clickedItemText=(item)=>
      {
         this.props.navigation.navigate('StudentDetails');
      }
}



const styles = StyleSheet.create({
 
  containers: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
    backgroundColor: '#fbfbfb',
  },
  Maincontainers: {
    flex: 1,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
  ButtonRow: {
    justifyContent: 'center', 
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
    marginTop:20,
    backgroundColor: '#fbfbfb',

   
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  input:{
      height: 50,
      backgroundColor: '#fff',
      borderWidth: 0.5,
     
      borderColor: '#d6d7da',
      width: '50%',
      color: '#000'
  },
  textStyle :{
    textAlign: 'center',   
    fontFamily: 'Arial',
    fontSize: 16
},
  buttonContainer:{
      backgroundColor: '#27a8e0',
      width: '40%',
      marginTop:15,
     
      paddingVertical: 15
  },
  SignInbuttonContainer:{
    backgroundColor: '#7f7f7f',
    width: '40%',
    marginTop:15,
    marginLeft:10,
    paddingVertical: 15
},
  buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  }
});

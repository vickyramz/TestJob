import * as React from 'react';
import { View,Text, TouchableOpacity, Picker,ScrollView,StyleSheet,Image} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Switch} from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#fff' }]} >
  <ScrollView>
  <View style={{justifyContent:'flex-start',marginTop:40,marginLeft:20,marginRight:20,borderRadius:15,marginBottom:20,borderColor:'grey',borderWidth:0.5,
shadowOffset:{  width: 20,  height: 20,  },
shadowColor: 'grey',
shadowOpacity: 1.0,
}}>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>Valution</Text>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>$233070</Text>

  </View>
  <View
  style={{
    marginTop:20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }}
/>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>Price paid(All in)</Text>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>$233070</Text>

  </View>
  
  <View
  style={{
    marginTop:20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }}
/>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>Purchase price</Text>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>$233070</Text>

  </View>
  <View
  style={{
    marginTop:20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }}
/>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>Reburbhisment</Text>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>$233070</Text>

  </View>
  <View
  style={{
    marginTop:20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }}
/>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20,paddingBottom:20}}>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>Profit/Loss</Text>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>$233070</Text>

  </View>
  
  </View>
  
  </ScrollView>
  <View style={{ position: 'absolute',
  bottom:0,
justifyContent:'flex-end',marginLeft:30}}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <Switch
        
          value = {true}/>
          
          <Text style={{fontSize:12,color:'#000000',fontWeight: '900'}}>LIVE valuation</Text>
          </View>
 
<Text style={{fontSize:12,color:'#000000',fontWeight: '900',marginLeft:100}}>$233070</Text>
  </View>
  </View>
  </View>
);
const SecondRoute = () => (
 
  <View style={[styles.container, { backgroundColor: '#fff' }]} >
  <ScrollView>
  <View style={{justifyContent:'flex-start',marginTop:40,marginLeft:20,marginRight:20,borderRadius:15,marginBottom:20,borderColor:'grey',borderWidth:0.5,
shadowOffset:{  width: 20,  height: 20,  },
shadowColor: 'grey',
shadowOpacity: 1.0,
}}>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>Relationship</Text>
  <View style={{flexDirection:'row'}}>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>Viewer</Text>
  <Picker
  style={{fontSize:12,width:50}}>
  <Picker.Item  label="Viewer" value="java" />
  <Picker.Item label="Owner" value="js" />
  <Picker.Item label="Renter" value="js" />
</Picker></View>
  

  </View>
  <View
  style={{
    marginTop:20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }}
/>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>My Primari Residence</Text>
  <View style={{flexDirection:'row'}}>
  <View style={{padding:10,justifyContent:'center',alignItems:'center',borderColor:'grey',borderWidth:1}}>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>Yes</Text></View>
  <View style={{padding:10,justifyContent:'center',alignItems:'center'}}>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>No</Text></View></View>
  


  </View>
  
  <View
  style={{
    marginTop:20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }}
/>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>Purchase price</Text>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>$233070</Text>

  </View>
  <View
  style={{
    marginTop:20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }}
/>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20}}>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>Reburbhisment</Text>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>$233070</Text>

  </View>
  <View
  style={{
    marginTop:20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }}
/>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:20,paddingBottom:20}}>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>Profit/Loss</Text>
  <Text style={{fontSize:12,color:'#000000',marginTop:30}}>$233070</Text>

  </View>
  
  </View>
  
  </ScrollView>
  <View style={{ position: 'absolute',
  bottom:0,
justifyContent:'flex-end',marginLeft:30}}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <Switch
        
          value = {true}/>
          
          <Text style={{fontSize:12,color:'#000000',fontWeight: '900'}}>LIVE valuation</Text>
          </View>
 
<Text style={{fontSize:12,color:'#000000',fontWeight: '900',marginLeft:100}}>$233070</Text>
  </View>
  </View>
  </View>
);
const ThirdRoute = () => (
    <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
  );
  const FourthRoute = () => (
    <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
  );
export default class LiveValution extends React.Component {
    static navigationOptions = {
        header:null
      };
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Accounts' },
      { key: 'second', title: 'Status' },
      { key: 'Third', title: 'Details' },
      { key: 'Third', title: 'Uploads' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 0
                ),
              })
            ),
            0,
            0
          );

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    Third: ThirdRoute,
    Fourth: FourthRoute,
  });

  render() {
    const{navigate}=this.props.navigation;
    return (
    <View style={styles.container}>
  <View style={{flex:0.3,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <Text style={{fontSize:12,color:'#000000',marginLeft:20,fontWeight: 'bold',}}>3 Woodpecker Place, Bracknell Forest, Bracknell Forest</Text>
  <Image source={require('./Assets/delete.png')} style={{width:20,height:20,marginLeft:10}}></Image>
  </View>
  <Text style={{fontSize:12,color:'#000000',marginLeft:30,fontWeight: 'bold',}}>• BRACKNELL • RG12 8BH</Text>
  </View>
    <TabView style={{marginTop:10}}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />

    </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  Mapcontainer: {
    marginLeft:20,
    marginRight:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LinkedCircle: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    backgroundColor: 'green',
    borderWidth:0,
    borderColor:'#fff',
    justifyContent:'center',
   
    alignItems:'center'
  
  },
  map: {
    height: 250,
    width: '90%',
  },
});


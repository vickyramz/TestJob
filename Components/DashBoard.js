import * as React from 'react';
import { View,Text, TouchableOpacity, StyleSheet,Image} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#fff' }]} >
  <View style={styles.Mapcontainer}>
  <Text style={{fontSize:20,color:'#000000',marginTop:40}}>SHRAES REMAINING</Text>
<Text style={{fontSize:12,color:'#000000',marginTop:10}}>110,966,900CRD</Text>

<View style={{padding:40,borderColor:'#000000',justifyContent:'center',alignItems:'center'}}>
<Image source={require('./Assets/wallet.png')} style={{width:50,height:50}} />
</View>
<Text style={{fontSize:20,color:'#000000'}}>Welcome to CREID.</Text>
<Text style={{fontSize:12,color:'#000000'}}>We've set aside 111,000,000CRD shares for you to claim, equivalent to 10% of Creid Technologies Limited.</Text>
<Text style={{fontSize:12,color:'#000000',marginTop:20}}>Share CREID. Share in the property disruption.</Text>
<TouchableOpacity>
<View style={{padding:30,justifyContent:'center',alignItems:'center',backgroundColor:'#ac9f6b',borderRadius:10,marginTop:20}}>
<Text style={{color:'#fff'}}>COLLECT SHRAES</Text>
</View>
</TouchableOpacity>


  </View>
  </View>
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#fff' }]} >
<View style={styles.Mapcontainer}>
<Text style={{fontSize:20,color:'#000000'}}>3 WoodPeacker Place</Text>
<Text style={{fontSize:12,color:'grey'}}>Bracknel . RG1288H</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<View style={{borderRightWidth:1,padding:30,borderColor:'#000000',justifyContent:'center',alignItems:'center'}}>
<Image source={require('./Assets/menu.png')} style={{width:35,height:35}} />
<Text style={{fontSize:12,color:'grey'}}>?</Text>
</View>
<View style={{borderRightWidth:1,padding:30, borderColor:'#000000',justifyContent:'center',alignItems:'center'}}>
<Image source={require('./Assets/bed.png')} style={{width:35,height:35}} />
<Text style={{fontSize:12,color:'grey'}}>?Bed</Text>
</View>
<View style={{borderRightWidth:1,padding:30,borderColor:'#000000',justifyContent:'center',alignItems:'center'}}>
<Image source={require('./Assets/bath.png')} style={{width:35,height:35}} />
<Text style={{fontSize:12,color:'grey'}}>?Bath</Text>
</View>
<View style={{borderRightWidth:1,padding:30,borderColor:'#000000',justifyContent:'center',alignItems:'center'}}>
<Image source={require('./Assets/land.png')} style={{width:35,height:35}} />
<Text style={{fontSize:12,color:'grey'}}>?sq/m</Text>
</View>
</View>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
    <Marker
      coordinate={{
        latitude: 37.78825,
        longitude: -122.4324,
      }}
      title={'Home'}
      description={'My Property'}
    />
     </MapView>
     <View style={{marginLeft:20,justifyContent:'center',alignItems:'center',paddingLeft:20,
    marginRight:20}}>
 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
 <Image source={require('./Assets/currency.png')} style={{width:30,height:30}} />
 <Text style={{marginLeft:10,fontSize:15,color:'#000000'}}>Purchase Price</Text>
 <Text style={{marginLeft:150,fontSize:15,color:'#000000',marginRight:20}}>$180000</Text>
 
 </View>
 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
 <Image source={require('./Assets/green.png')} style={{width:30,height:30}} />
 <Text style={{marginLeft:10,fontSize:15,color:'#000000'}}>CREID Live Evalution</Text>
 <Text style={{marginLeft:150,fontSize:15,color:'#000000',marginRight:20}}>$180000</Text>
 
 </View>
     </View>
   </View>

  </View>
);
const ThirdRoute = () => (
    <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
  );
export default class DashBoard extends React.Component {
    static navigationOptions = {
        header:null
      };
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Wallet' },
      { key: 'second', title: 'My Property' },
      { key: 'Third', title: 'HouseKeeping' },
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
  });

  render() {
    return (
    <View style={styles.container}>
  
    <TabView style={{marginTop:150}}
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
  map: {
    height: 250,
    width: '90%',
  },
});


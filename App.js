import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const data = ["MILSHAKE","SMOOTHIES","JUICES","COCKTAIL"];

const List=()=>{
  return <View style={{position:"absolute",top:60,flexDirection:"row",
  paddingLeft:20,justifyContent:"space-between",marginBottom:20,paddingTop:10,marginTop:10
  }}>
    {data.map((item,index)=>(<TouchableOpacity style={{paddingLeft:10}}>
     <Text> {item}</Text>
      </TouchableOpacity>))}
  </View>
}


export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.nasky}>NASKY's </Text>
      </View>
      <List />
      <View style={styles.list}>
        <View style={styles. shakes1}>
        <Text style={styles.oreo}>Oreo Shakes</Text>
        </View>
        <View>
        <Text style={styles.vanilla}>Vanilla Shakes</Text>
        <Text style={styles.choco}>Chocolate Shakes</Text>
        </View>
        <View>
        <Text style={styles.strawberry}>Strawberry Shakes</Text>
        <Text style={styles.extra}>Extra Jumbo Shakes</Text>
        </View>
        <View>
        <Text style={styles.cookies}>Cookies Shakes</Text>
        <Text style={styles.mocha}>Mocha Shakes</Text>
        </View>
        <View>
        <Text style={styles.marshmallow}>Marshmallow Shakes</Text>
        <Text style={styles.mint}>Mint Milkshakes</Text>
        </View>
        <View>
        <Text style={styles.bubble}>Bubble Gum Shakes</Text>
        <Text style={styles.Malt}>Malt  Milkshakes</Text>
        </View>
      </View>
      <View>
        <Text style={styles.smoothies}>SMOOTHIES</Text>
      </View>
      <View style={styles.berry}>
        <Text style={styles.berries}>Strawberry / Blackberry / </Text>
        <Text style={styles.berries1}>Raspberry / Blueberry</Text>
      </View>
      <TouchableOpacity style={styles.touch}>
        <Text styles={styles.proceed}>PROCEED TO CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nasky:{
    bottom: 120,
    fontWeight: "700",
    fontSize: 30,
    fontStyle: "italic",
    color: "orange"

  },
  list:{
    bottom: 80,
    marginRight: 160,


  },
  shakes1:{
    flexDirection: "row"
  },
  twentythree:{
    bottom: 10,
    fontFamily: "Cochin",
    fontSize: 20,
    marginLeft: 80

  },
  oreo:{
    bottom: 10,
    fontFamily: "Cochin",
    fontSize: 20

  },
  vanilla:{
    fontFamily: "Cochin",
    fontSize: 20

  },
  choco:{
    top: 10,
    fontFamily: "Cochin",
    fontSize: 20

  },
  strawberry:{
    top: 20,
    fontFamily: "Cochin",
    fontSize: 20

  },
  extra:{
    top: 30,
    fontFamily: "Cochin",
    fontSize: 20

  },
  cookies:{
    top: 40,
    fontFamily: "Cochin",
    fontSize: 20

  },
  mocha:{
    top: 50,
    fontFamily: "Cochin",
    fontSize: 20

  },
  marshmallow:{
    top: 60,
    fontFamily: "Cochin",
    fontSize: 20

  },
  mint:{
    top: 70,
    fontFamily: "Cochin",
    fontSize: 20

  },
  bubble:{
    top: 80,
    fontFamily: "Cochin",
    fontSize: 20

  },
  Malt:{
    top: 90,
    fontFamily: "Cochin",
    fontSize: 20

  },
  smoothies:{
    top: 20,
    fontSize: 25,
    marginRight: 170, 
  },
  berries:{
    top: 30
  },
  berries1:{
  top: 35
  },
  berry:{
    marginRight: 190,

  },
  touch:{
    top: 70,
    backgroundColor: "orange",
    borderRadius: 10,

  },
  proceed:{
    textAlign: "center",
  },

});

import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import PaddockCard from 'components/Products/paddockCard.js';
import Style from './Style.js';

const height = Math.round(Dimensions.get('window').height);

const Herbicide = ({ navigation, data }) => {
  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Style.MainContainer, { minHeight: height }}>
          <Text style={{ fontWeight:'bold', fontSize: 20 }}>
            Product
          </Text>
          {
            data != null && data.length ? data.map((item, idx) => {
              const name = item.title.toUpperCase()
              const volume = item.volume || '(100L)'
              const details = {
                dataFrom: 'inventory',
                name,
                volume,
                ...item
              }
              return (
                <TouchableOpacity key={idx} onPress={() => {
                  navigation.navigate('InventoryItem', { name, volume, data: item })
                }}>
                  <PaddockCard details={details} key={item.id} />
                </TouchableOpacity>
              )}) : (
                <Text style={{ marginTop: 10 }}>No product found</Text>
              )
          }
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 26,
          alignSelf: 'flex-end'
        }}
      >
        <TouchableOpacity onPress={() => {
         navigation.navigate('ApplyTask')
        }}>
          <Image
            style={{
              padding: 30,
              height: 50,
              width:'100%'
            }}
            source={require('../../assets/taskIcon.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const mapStateToProps = state => ({state: state});
const mapDispatchToProps = dispatch => {
  const {actions} = require('@redux');
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Herbicide);

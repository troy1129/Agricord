import React, { Component } from 'react';
import {View, Image,TouchableHighlight,Text,ScrollView,FlatList, Dimensions,TouchableOpacity,ImageBackground} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Thumbnail, List, ListItem, Separator } from 'native-base';
import { connect } from 'react-redux';
import {faUserCircle,faMapMarker, faUniversity,faKaaba,faFilter} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Style from './Style.js';
import Api from 'services/api/index.js'
import { Routes, Color, Helper, BasicStyles } from 'common';
import { Spinner, Empty, SystemNotification } from 'components';
import { MainCard, Feature, Card, MainFeature, PromoCard } from 'components/ProductThumbnail'
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { Divider } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Pagination from 'components/Pagination';
import { Pager, PagerProvider } from '@crowdlinker/react-native-pager';
import PaddockCard from 'components/Products/paddockCard.js'
import TitleLogo from 'assets/inventory/title_logo.svg';
import SwipeButton from 'components/SwipeableButton'
import arrowRight from 'assets/ArrowRight.png';


const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class MixName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      products:[],
    };
     
    }
  

  componentDidMount(){
    const { user } = this.props.state;
    if (user != null) {
    }
    console.log(Routes.sprayMixesRetrieve)
    console.log(this.props)
    const parameter={
      offset:0,
      limit:10,
      merchant_id:38,
    }
    Api.request(Routes.sprayMixesRetrieve, parameter, response => {
      console.log(response.data)
      this.setState({products:response.data})
     }, error => {
      console.log({ error })
     
    }) 
  }
    


 
  render() {
    const {details}=this.props.navigation.state.params
    const {dataFrom}=this.props.navigation.state.params
    return (
      <ImageBackground
      source={require('assets/backgroundlvl2.png')}
      style={Style.BackgroundContainer}>
      <ScrollView>
      <View style={{alignItems:'center',margin:10,height:'100%',flex:1}}>
        <View style={[Style.paddockContainer]}>
          <View style={Style.paddockInfo}>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontWeight:'bold',fontSize:18}}>Applied Rate</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'flex-end',width:'25%'}}>   
          <Text style={{fontSize:16,fontWeight:'bold'}}>{details.appliedRate}</Text>
          </View> 
          <View style={{backgroundColor:'#C4E392',height:10,borderBottomEndRadius:20,borderBottomStartRadius:20,bottom:-1,width:'100%',position:'absolute'}}>
          </View> 
        </View>

        {this.state.products.map((item,index)=>(
          <PaddockCard details={{item,dataFrom:'paddockPage',status:details.status}} key={item.id}></PaddockCard>
        ))}

      </View>
      </ScrollView>
      
    {dataFrom=="due" && (
       <SwipeButton
       thumbIconBackgroundColor="#5A84EE"
       thumbIconBorderColor="#5A84EE"
       thumbIconImageSource={arrowRight}
       shouldResetAfterSuccess={true}
       resetAfterSuccessAnimDelay={100}
       title=""
       height={55}
         railStyles={{
               backgroundColor: '#5A84EE',
               borderColor: '#5A84EE',
             }}
       onSwipeSuccess={() =>
         alert('Action Complete Here')
       }
     />
    )}

    </ImageBackground>
    );
  }
}
const mapStateToProps = state => ({state: state});

const mapDispatchToProps = dispatch => {
  const {actions} = require('@redux');
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MixName);

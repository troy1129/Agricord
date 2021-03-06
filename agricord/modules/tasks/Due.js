import React, { Component } from 'react';
import {View, Image,TouchableHighlight,Text,ScrollView,FlatList, Dimensions,TouchableOpacity,TextInput,SafeAreaView} from 'react-native';
import { NavigationActions,StackActions } from 'react-navigation';
import { Thumbnail, List, ListItem, Separator } from 'native-base';
import { connect } from 'react-redux';
import {faPlus,faMinus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Style from './Style.js';
import Api from 'services/api/index.js'
import { Routes, Color, Helper, BasicStyles } from 'common';
import { Spinner, Empty, SystemNotification } from 'components';
import { MainCard, Feature, Card, MainFeature, PromoCard } from 'components/ProductThumbnail'
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { Divider } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import PaddockCard from 'components/Products/paddockCard.js';
import {products} from './data-test.js';
import TaskIcon from 'components/Products/TaskIcon.js'


const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class Due extends Component {
  constructor(props) {
    super(props);
    this.state = {
    products:[
     ],
    }
     
    }
  

  componentDidMount(){
    const { user } = this.props.state;
    if (user == null) {
      
    }
    this.retrieveData();
  }

  retrieveData=async()=>{
    this.setState({
      isLoading: true
    })

    const parameter={
      status:"approved",
      offset:0,
      limit:10,
      merchant_id:38
    }
  Api.request(Routes.tasksRetrieve, parameter, response => {
    if(response.data!=null){
      this.setState({products:response.data.paddocks,isLoading:false})
    }
     }, error => {
      console.log("ERROR HAPPENS",error )
     
    })
  }
  
  
  render() {
    const {isLoading} = this.state;
    const {user} = this.props.state;
    const data = this.state.products.paddocks
    return (
      <SafeAreaView style={{ position: 'relative',height:'80%'}}>
      <ScrollView  showsVerticalScrollIndicator={false}>
      <View style={Style.MainContainer,{marginBottom:15}}>
        <Text style={{fontWeight:'bold'}}>Paddocks Due</Text>
      {this.state.products.map((item,index)=>(
           <TouchableOpacity onPress={()=>{
            const name = item.name.toUpperCase()
          
            this.props.parentNav.navigate('paddockStack', { name, data: item,dataFrom:'due' })
        }}>
           <PaddockCard details={item} key={item.id}></PaddockCard>
        </TouchableOpacity>
          
      ))}
       </View>
       </ScrollView>
    <TaskIcon details={this.props}></TaskIcon>
       </SafeAreaView>
 
  
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
)(Due);

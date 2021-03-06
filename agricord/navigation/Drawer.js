import React, {Component} from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import Slider from 'modules/slider';
import {Color, BasicStyles} from 'common';
import Homepage from 'modules/homepage';
import InventoryScreen from 'modules/inventory';
import Dashboard from 'modules/basics/Welcome.js';
import Notification from 'modules/basics/Welcome.js';
import Profile from 'modules/basics/Welcome.js';
import HelpCenter from 'modules/basics/Welcome.js';
import OptionRight from './OptionRight';
import Tasks from 'modules/tasks';
import Orders from 'modules/orders';
import AccountSettings from 'modules/accountSettings';
import TermsAndConditions from 'modules/basics/Welcome.js';
import PrivacyPolicy from 'modules/basics/Welcome.js';
import Merchant from 'modules/basics/Welcome.js';
import MyAddress from 'modules/basics/Welcome.js';
import Settings from 'modules/basics/Welcome.js';
import Referral from 'modules/basics/Welcome.js';
import MyOrders from 'modules/basics/Welcome.js';
import MyOrderDetails from 'modules/basics/Welcome.js';
import MessengerMessages from 'modules/basics/Welcome.js';
import ForgotPassword from 'modules/basics/ForgotPassword.js';
import SettingsPage from 'modules/settingsPage';
import OrderDetails from 'modules/orderDetails';
import OrderDetailsStack from 'modules/orderDetails/OrderDetailsScreen.js';
import {connect} from 'react-redux';

const width = Math.round(Dimensions.get('window').width);

class MenuDrawerContentStructure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginState: true,
    };
  }
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    const {theme} = this.props.state;
    const {color} = this.props;
    return (
      <View style={{flexDirection: 'row'}}>
        {this.state.loginState === true && (
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            {/*Donute Button Image */}
            <FontAwesomeIcon
              icon={faBars}
              size={BasicStyles.iconSize}
              style={[
                BasicStyles.iconStyle,
                {
                  color: color ? color : theme ? theme.primary : Color.primary,
                },
              ]}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({state: state});

const mapDispatchToProps = dispatch => {
  const {actions} = require('@redux');
  return {
    setActiveRoute: route => dispatch(actions.setActiveRoute(route)),
  };
};

let MenuDrawerStructure = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuDrawerContentStructure);

const Homepage_StackNavigator = createStackNavigator({
  Homepage: {
    screen: Homepage,
    navigationOptions: ({navigation}) => {
      console.log({navigation});
      return {
        headerShown: false,
      };
    },
  },
  // Merchant: {
  //   screen: Merchant,
  //   navigationOptions: {
  //     headerStyle: {
  //       backgroundColor: Color.white,
  //     },
  //     headerTintColor: '#000',
  //     headerTitle: 'Merchant',
  //   },
  // },
  // Dashboard: {
  //   screen: Dashboard,
  //   navigationOptions: ({navigation}) => ({
  //     headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
  //     headerRight: <OptionRight navigationProps={navigation} />,
  //     headerStyle: {
  //       backgroundColor: Color.white,
  //     },
  //     headerTintColor: '#fff',
  //   }),
  // },
  // HelpCenter: {
  //   screen: HelpCenter,
  //   navigationOptions: ({navigation}) => ({
  //     headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
  //     headerRight: <OptionRight navigationProps={navigation} />,
  //     headerStyle: {
  //       backgroundColor: Color.white,
  //     },
  //     headerTintColor: '#fff',
  //   }),
  // },
  // PrivacyPolicy: {
  //   screen: PrivacyPolicy,
  //   navigationOptions: ({navigation}) => ({
  //     headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
  //     headerRight: <OptionRight navigationProps={navigation} />,
  //     headerStyle: {
  //       backgroundColor: Color.white,
  //     },
  //     headerTintColor: '#fff',
  //   }),
  // },
  // TermsAndConditions: {
  //   screen: TermsAndConditions,
  //   navigationOptions: ({navigation}) => ({
  //     headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
  //     headerRight: <OptionRight navigationProps={navigation} />,
  //     headerStyle: {
  //       backgroundColor: Color.white,
  //     },
  //     headerTintColor: '#fff',
  //   }),
  // },
  // Notification: {
  //   screen: Notification,
  //   navigationOptions: {
  //     headerStyle: {
  //       backgroundColor: Color.white,
  //     },
  //     headerTintColor: '#000',
  //     headerTitle: 'Notifications',
  //   },
  // },
  MyOrders: {
    screen: MyOrders,
    navigationOptions: ({navigation}) => ({
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.white,
      },
      headerTintColor: '#fff',
    }),
  },
  //=================ORDERS ROUTES========================//
  UpcomingOrders: {
    screen: Homepage,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
    params: {initialRouteName: 'Orders'},
  },
  HistoricalOrders: {
    screen: Homepage,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
    params: {initialRouteName: 'Orders'},
  },
  //=========================================================//

  //==========================INVENTORY ROUTES===================//
  InventoryHerbicides: {
    screen: Homepage,
    navigationOptions: () => ({
      headerShown: false,
    }),
    params: {initialRouteName: 'Inventory'},
  },
  InventoryFungicides: {
    screen: Homepage,
    navigationOptions: () => ({
      headerShown: false,
    }),
    params: {initialRouteName: 'Inventory'},
  },
  InventoryInsecticides: {
    screen: Homepage,
    navigationOptions: () => ({
      headerShown: false,
    }),
    params: {initialRouteName: 'Inventory'},
  },
  InventoryOther: {
    screen: Homepage,
    navigationOptions: () => ({
      headerShown: false,
    }),
    params: {initialRouteName: 'Inventory'},
  },
  //=========================================================//

  //==========================TASKS ROUTES===================//
  TasksInProgress: {
    screen: Homepage,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
    params: {initialRouteName: 'Task'},
  },
  TasksDue: {
    screen: Homepage,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
    params: {initialRouteName: 'Task'},
  },
  TasksHistory: {
    screen: Homepage,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
    }),
    params: {initialRouteName: 'Task'},
  },
  //============================================================//

  //==========================SETTINGS ROUTES===================//
  AccountSettings: {
    screen: Homepage,
    navigationOptions: () => ({
      headerShown: false,
    }),
    params: {initialRouteName: 'AccountSetting'},
  },
  AppSettings: {
    screen: Homepage,
    navigationOptions: () => ({
      headerShown: false,
    }),
    params: {initialRouteName: 'AccountSetting'},
  },
  //============================================================//
  MyOrderDetails: {
    screen: MyOrderDetails,
    navigationOptions: ({navigation}) => ({
      headerTintColor: Color.primary,
      headerBackTitleStyle: {
        color: '#fff',
      },
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.white,
      },
    }),
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.white,
      },
      headerTintColor: '#fff',
    }),
  },
  // MyAddress: {
  //   screen: MyAddress,
  //   navigationOptions: ({navigation}) => ({
  //     headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
  //     headerRight: <OptionRight navigationProps={navigation} />,
  //     headerStyle: {
  //       backgroundColor: Color.white,
  //     },
  //     headerTintColor: '#fff',
  //   }),
  // },
  SettingsPage: {
    screen: SettingsPage,
    navigationOptions: ({navigation}) => ({
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.white,
      },
      headerTintColor: '#fff',
    }),
  },
  OrderDetails: {
    screen: OrderDetailsStack,
    navigationOptions: ({navigation}) => ({
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.white,
      },
      headerTintColor: '#fff',
    }),
  },
  // InviteFriends: {
  //   screen: Referral,
  //   navigationOptions: ({navigation}) => ({
  //     headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
  //     headerRight: <OptionRight navigationProps={navigation} />,
  //     headerStyle: {
  //       backgroundColor: Color.white,
  //     },
  //     headerTintColor: '#fff',
  //   }),
  // },
  // PaymentMethods: {
  //   screen: Referral,
  //   navigationOptions: ({navigation}) => ({
  //     headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
  //     headerRight: <OptionRight navigationProps={navigation} />,
  //     headerStyle: {
  //       backgroundColor: Color.white,
  //     },
  //     headerTintColor: '#fff',
  //   }),
  // },
  MessengerMessages: {
    screen: MessengerMessages,
    navigationOptions: ({navigation}) => ({
      title: navigation.getParam('messengerHeaderTitle'),
      headerTintColor: Color.primary,
      headerBackTitleStyle: {
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: Color.white,
        color: Color.black,
      },
    }),
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: ({navigation}) => ({
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.white,
      },
      headerTintColor: '#fff',
    }),
  },
  Settings: {
    screen: AccountSettings,
    navigationOptions: ({navigation}) => ({
      headerLeft: <MenuDrawerStructure navigationProps={navigation} />,
      headerRight: <OptionRight navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: Color.white,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Drawer = createDrawerNavigator(
  {
    Homepage: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    Dashboard: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    //ROUTES FOR ORDERS
    UpcomingOrders: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    HistoricalOrders: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    ///////////////////

    //ROUTES FOR INVENTORIES
    InventoryHerbicides: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    InventoryFungicides: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    InventoryInsecticides: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    InventoryOther: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    ///////////////////

    // ROUTES FOR TASKS
    TasksInProgress: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },

    TasksDue: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },

    TasksHistory: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    ///////////////////

    // ROUTES FOR SETTINGS
    AccountSettings: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    AppSettings: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    ///////////////////

    HelpCenter: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    MyOrders: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    Profile: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    MyAddress: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    TermsAndConditions: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    PrivacyPolicy: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    Notification: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    Settings: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    InviteFriends: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    PaymentMethods: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    MessengerMessages: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    MyOrderDetails: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    ForgotPassword: {
      screen: Homepage_StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
  },
  {
    contentComponent: Slider,
    drawerWidth: width,
    initialRouteName: 'Homepage',
  },
);

export default Drawer;

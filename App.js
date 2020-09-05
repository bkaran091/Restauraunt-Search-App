import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen";
import BottomTab from './src/screens/BottomTab'

const navigator = createStackNavigator({
        Search: SearchScreen,
        BottomTab: BottomTab
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Business Search'
        }
    });


export default createAppContainer(navigator);

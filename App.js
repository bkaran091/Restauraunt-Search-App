import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultShowScreen";
import GalleryScreen from './src/screens/GalleryScreen'
import BottomTab from './src/screens/BottomTab'

const navigator = createStackNavigator({
        Search: SearchScreen,
        ResultsShow: ResultsShowScreen,
        Gallery: GalleryScreen,
        BottomTab: BottomTab
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Business Search'
        }
    });


export default createAppContainer(navigator);

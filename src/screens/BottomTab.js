import React, {useState, useEffect} from 'react';
import {BottomNavigation} from 'react-native-paper';
import {Text, View} from 'react-native';
import GalleryScreen from "./GalleryScreen";
import ResultsShowScreen from "./ResultShowScreen";



const BottomTab = ({navigation}) => {
    const id = navigation.getParam('id');
    const Overview = () => <ResultsShowScreen id={id}/>;

    const Photos = () => <GalleryScreen id={id}/>;

    const Reviews = () => <Text>Recents</Text>;

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'Overview', title: 'Overview'},
        {key: 'Photos', title: 'Photos'},
        {key: 'Reviews', title: 'Reviews'},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: Overview,
        albums: Photos,
        recents: Reviews,
    });

    return (
        <BottomNavigation
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
            activeColor={'red'}
            inactiveColor={'white'}
            sceneAnimationEnable={true}
            barStyle={{backgroundColor:'#F194FF'}}
        />
    )


}

export default BottomTab;

import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import {Text, View, StyleSheet} from 'react-native';
import GalleryScreen from "./GalleryScreen";
import ResultsShowScreen from "./ResultShowScreen";
import ReviewScreen from "./ReviewScreen";


const BottomTab = ({navigation}) => {
    const id = navigation.getParam('id');
    const Overview = () => <ResultsShowScreen id={id}/>;

    const Photos = () => <GalleryScreen id={id}/>;
    const Reviews = () => <ReviewScreen id={id}/>;

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'overview', title: 'Overview'},
        {key: 'photos', title: 'Photos'},
        {key: 'reviews', title: 'Reviews'},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        overview: Overview,
        photos: Photos,
        reviews: Reviews,
    });


    return (
        <BottomNavigation
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
            sceneAnimationEnable={true}
            barStyle={{backgroundColor: 'white'}}
            renderLabel={({route, focused}) => <View style={styles.bottomBarContainer}>
                <Text
                    style={{fontSize: 18,color:'rgb(237,90,107)'}}> {route.title}</Text>
            </View>
            }

        />
    )
}

const styles = StyleSheet.create({
    bottomBarContainer: {
        alignItems: 'center',
        height: 40,
    },
    bottomBarText: {
        fontSize: 18,
    }
})

export default BottomTab;

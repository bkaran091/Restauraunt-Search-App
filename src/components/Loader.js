import React, {Component} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

class Loader extends Component {
    state = {animating: true}

    closeActivityIndicator = () => setTimeout(() => this.setState({
        animating: false
    }), 1000)

    componentDidMount = () => this.closeActivityIndicator()

    render() {
        const animating = this.state.animating
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={animating}
                    color='#bc2b78'
                    size="large"
                    style={styles.activityIndicator}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        left: '50%',
        top: '40%',
        position: 'absolute',
        zIndex: 29,
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
})

export default Loader;

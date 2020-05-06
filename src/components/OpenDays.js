import React, from 'react';
import {StyleSheet} from 'react-native';
import {List} from 'react-native-paper';

const OpenDays = ({result}) => {
    const changeString = (string) => {
        return string[0] + string[1] + ':' + string[2] + string[3];
    }
    const getString = (i) => {
        return changeString(result.hours[0].open[i].start) + " to " + changeString(result.hours[0].open[i].end);
    }
    const styles = StyleSheet.create({
        Heading: {
            fontSize: 21,
            borderWidth: 1,
            borderColor: 'black',
        },
        description: {
            fontSize: 17,
        }

    });
    return (
        <List.Accordion
            title="Timings"
            titleStyle={styles.Heading}
            left={props => <List.Icon  {...props} icon="clock"/>}
        >
            <List.Item title={`Monday: ${getString(0)}`} descriptionStyle={styles.description}/>
            <List.Item title={`Tuesday: ${getString(1)}`} descriptionStyle={styles.description}/>
            <List.Item title={`Wednesday: ${getString(2)}`} descriptionStyle={styles.description}/>
            <List.Item title={`Thursday: ${getString(3)}`} descriptionStyle={styles.description}/>
            <List.Item title={`Friday: ${getString(4)}`} descriptionStyle={styles.description}/>
            <List.Item title={`Saturday: ${getString(5)}`} descriptionStyle={styles.description}/>
            <List.Item title={`Sunday: ${getString(5)}`} descriptionStyle={styles.description}/>
        </List.Accordion>
    );
};

export default OpenDays;
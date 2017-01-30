import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import Button from 'react-native-button';

export default class Summary extends Component {
    constructor(props) {
        super(props);

        var total = 0;
        var right = 0;
        for (i = 0; i < this.props.people.length -1; i++) {
            total++;
            if (this.props.people[i].answered == this.props.people[i].answer) {
                right++;
            }
        }

        this.state = {
            total: total,
            right: right
        }
    }

    render() {

        return (
            <View>
                <Text style={styles.title}>Aciertos</Text>
                <Text style={styles.result}>{this.state.right}/{this.state.total}</Text>
                <Button onPress={() => this.props.onRestart()} style={styles.restart}>Jugar de nuevo</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    result: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },
    restart: {
        margin: 5,
        padding: 10,
        color: 'white',
        backgroundColor: 'steelblue'
    }
});

module.exports = Summary;

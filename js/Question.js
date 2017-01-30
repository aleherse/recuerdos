import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import Button from 'react-native-button';

export default class Question extends Component {

    render() {
        var buttons;
        if (typeof this.props.person.answered !== 'undefined') {
            buttons = <Text style={styles.answer}>{this.props.person.answer}</Text>;
        } else {
            buttons = this.props.person.options.map(function(option, index){
                return <Button style={styles.options} key={index} onPress={() => this.props.onChooseAnswer(option)}>{option}</Button>
            }, this);
        }

        var prev = <Text></Text>;
        if (this.props.person.index != 0) {
            prev = <Button style={styles.options} onPress={() => this.props.onBackward()}>&lt; Anterior</Button>;
        }

        var next = <Text></Text>;
        if (typeof this.props.person.answered !== 'undefined') {
            next = <Button style={styles.options} onPress={() => this.props.onForward()}>Siguiente &gt;</Button>;
        }

        return (
            <ScrollView contentContainerStyle={styles.questionBox}>
                <Image style={styles.image} source={this.props.person.picture()} />
                <Text style={styles.title}>{this.props.person.question}</Text>
                {buttons}
                <View style={{margin: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
                    {prev}
                    {next}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        alignSelf: 'center',
        marginTop: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 10
    },
    answer: {
        fontSize: 20,
        marginVertical: 20,
        textAlign: 'center',
    },
    questionBox: {
    },
    options: {
        flex: 1,
        margin: 5,
        padding: 10,
        color: 'white',
        backgroundColor: 'steelblue'
    }
});

module.exports = Question;

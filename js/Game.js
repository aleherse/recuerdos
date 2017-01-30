import React, {Component} from 'react';
import {StyleSheet, Navigator, Text} from 'react-native';

var Question = require('./Question');
var Summary = require('./Summary');
var buildGame = require('./buildGame');

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: buildGame(),
        }
    }

    _onForward(navigator, index) {
        if (typeof this.state.people[index].answered !== 'undefined' && index < this.state.people.length - 1) {
            navigator.push(this.state.people[index + 1]);
        }
    }

    _onBackward(navigator, index) {
        if (index > 0) {
            navigator.pop();
        }
    }

    _onRestart(navigator) {
        this.setState(function() {
            var people = buildGame();

            navigator.resetTo(people[0]);

            return {people: people};
        });
    }

    chooseAnswer(index, option) {
        this.setState(function(prevState, props) {
                prevState.people[index].answered = option;

                return {people: prevState.people};
            }
        );
    }

    render() {
        return (
            <Navigator
                initialRoute={this.state.people[0]}
                configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump}
                renderScene={(route, navigator) => {
                    if (route.last) {
                        return <Summary
                            people={this.state.people}
                            onRestart={() => this._onRestart(navigator)}
                        />;
                    } else {
                        return <Question
                            person={route}
                            onForward={() => this._onForward(navigator, route.index)}
                            onBackward={() => this._onBackward(navigator, route.index)}
                            onChooseAnswer={(option) => this.chooseAnswer(route.index, option)}
                        />
                    }
                }}
            />
        );
    }
}

module.exports = Game;

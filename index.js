import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import PropTypes from 'prop-types';

export default class Progress extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.animation = new Animated.Value(this.props.value);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            Animated.timing(this.animation, {
                toValue: this.props.value,
                duration: this.props.duration,
            }).start();
        }
    }

    render() {
        const { height, barColor, innerColor, borderRadius } = this.props;

        const widthInterpolated = this.animation.interpolate({
            inputRange: [0, 100],
            outputRange: ["0%", "100%"],
            extrapolate: "clamp"
        });

        return (
            <View style={{ ...styles.container, height: height, backgroundColor: innerColor, borderRadius: borderRadius }}>
                <Animated.View style={{ flex: 1, width: widthInterpolated, backgroundColor: barColor }} />
            </View>
        );
    }
}

Progress.propTypes = {
    value: PropTypes.number,
    height: PropTypes.number,
    innerColor: PropTypes.string,
    barColor: PropTypes.string,
    borderRadius: PropTypes.number,
}
Progress.defaultProps = {
    value: 0,
    height: 20,
    innerColor: "#d4d4d4",
    barColor: "#07b807",
    borderRadius: 28,
}

export default Progress
import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchNextMatch} from './store/actions/next_match_action';
import ItemList from './component/item_list';

class NextMatchScreen extends Component {

    componentDidMount () {
        this.props.fetchNextMatch();
    }

    render() {
        return (
            <View style={{flex: 1}}>
            {
                this.props.NextMatch.events.length === 0 ? (
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                ) : (
                    <FlatList
                    style={{flex: 1}}
                    showsVerticalScrollIndicator={false}
                    data={this.props.NextMatch.events}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <ItemList
                            data={item}
                            index={index}
                        />
                    )}
                />
                )
            }
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    NextMatch: state.NextMatch
});

const mapDispatchToProps = (dispatch, getState) => bindActionCreators({
    fetchNextMatch
}, dispatch, getState);

export default connect(mapStateToProps, mapDispatchToProps)(NextMatchScreen);
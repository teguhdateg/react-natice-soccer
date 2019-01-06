import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPrevMatch} from './store/actions/prev_match_action';
import ItemList from './component/item_list';

class PrevMatchScreen extends Component {

    componentDidMount () {
        this.props.fetchPrevMatch();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    style={{flex: 1}}
                    showsVerticalScrollIndicator={false}
                    data={this.props.PrevMatch.events}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <ItemList
                            data={item}
                            index={index}
                        />
                    )}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    PrevMatch: state.PrevMatch
});

const mapDispatchToProps = (dispatch, getState) => bindActionCreators({
    fetchPrevMatch
}, dispatch, getState);

export default connect(mapStateToProps, mapDispatchToProps)(PrevMatchScreen);
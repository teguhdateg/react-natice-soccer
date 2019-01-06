import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTeam} from './store/actions/teams_action';
import ItemList from '../teams/component/item_list';

class TeamsScreen extends Component {

    componentDidMount () {
        this.props.fetchTeam();
    }

    render() {
        return (
            <View style={{flex: 1}}>
            {
                this.props.Teams.teams.length === 0 ? (
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                ) : (
                    <FlatList
                    style={{flex: 1}}
                    showsVerticalScrollIndicator={false}
                    data={this.props.Teams.teams}
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
    Teams: state.Teams
})

const mapDispatchToProps = (dispatch, getState) => bindActionCreators({
    fetchTeam
}, dispatch, getState);

export default connect(mapStateToProps, mapDispatchToProps)(TeamsScreen);
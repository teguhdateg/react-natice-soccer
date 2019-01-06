import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';

class ItemList extends Component {
    render () {
        const {data, index} = this.props;
        return (
            <View style={{
                marginLeft: 20,
                marginRight: 20,
                marginTop: index === 0 ? 20 : 0,
                marginBottom: 25,
            }}>
                <View style={{
                elevation: 8,
                backgroundColor: '#ffffff',
                borderRadius: 10, marginTop: 30
            }}>
                <Image
                    source={{uri: data.strThumb}}
                    resizeMode={'stretch'}
                    style={{
                        width: '100%',
                        height: 200,
                        borderRadius: 5
                    }}
                />
                </View>
                <View style={{
                elevation: 8,
                backgroundColor: '#ffffff',
                borderRadius: 5,
                padding: 10,
                marginLeft: 20,
                marginRight: 20,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                flexDirection: 'row',
                height: 50
            }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        width: '35%'
                    }}>
                        <Text
                            style={{fontFamily: 'Poppins-Bold', textAlign: 'center'}}
                        >{data.strHomeTeam}</Text>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '10%'
                    }}>
                        <Text
                            style={{fontFamily: 'Poppins-Medium', textAlign: 'center', fontSize: 18}}
                        >{data.intHomeScore}</Text>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '10%'
                    }}>
                        <Text
                            style={{fontFamily: 'Poppins-Regular', textAlign: 'center', fontSize: 18}}
                        >VS</Text>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '10%'
                    }}>
                        <Text
                            style={{fontFamily: 'Poppins-Medium', textAlign: 'center', fontSize: 18}}
                        >{data.intAwayScore}</Text>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        width: '35%'
                    }}>
                        <Text
                            style={{fontFamily: 'Poppins-Bold', textAlign: 'center'}}
                        >{data.strAwayTeam}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default ItemList;
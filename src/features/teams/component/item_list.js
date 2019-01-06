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
                marginBottom: 20,
            }}>
                <View style={{
                elevation: 8,
                backgroundColor: '#ffffff',
                borderRadius: 10
            }}>
                <Image
                    source={data.strStadiumThumb === null ? 
                    require('../../../../assets/Image/no-image-landscape.png')
                    : {uri: data.strStadiumThumb}
                    }
                    resizeMode={'stretch'}
                    style={{
                        width: '100%',
                        height: 200,
                        borderRadius: 5
                    }}
                />
                <View style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5
                }}>
                <Image
                    source={{uri: data.strTeamBadge}}
                    resizeMode={'contain'}
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 20
                    }}
                />
                    <Text
                    style={{
                        fontFamily: 'Poppins-Bold',
                        fontSize: 24
                    }}
                    >{data.strTeam}</Text>
                </View>
                </View>
            </View>
        );
    }
}

export default ItemList;
import React from 'react'
import { Image, Text, View } from 'react-native'
import normalize from 'react-native-normalize'

export default function Styling() {
    return (
        <View>
            <View style={{ borderWidth: 5, borderRadius: 10, borderColor: 'blue', width:normalize(200), height:normalize(100) }}>
                <View style={{ width: normalize(100), height: normalize(50), backgroundColor: 'red'}}>

                </View>
            </View>
        </View>
    )
}

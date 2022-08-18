import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import normalize from 'react-native-normalize'
import { insta } from '../assets'

export default function Instagram() {
    return (
        <View style={{ paddingTop: normalize(20) }}>
            <Text style={{ textAlign: 'center' }}>English</Text>
            <View style={{ alignItems: 'center', paddingTop: normalize(150) }}>
                {/* Ini Instagram Image */}
                <Image source={insta} style={styles.imageSize} />

                {/* Ini teks 1 */}
                <View style={{ paddingHorizontal: normalize(50) }}>
                    <Text style={{ fontSize: normalize(15), textAlign: 'center' }}>
                        Sign up to see photos and videos from your friends.
                    </Text>
                </View>

                {/* Ini Component Button */}
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={{ color: 'white', fontSize: normalize(16) }}>Get the Instagram App</Text>
                    </View>
                </TouchableOpacity>

                {/* Ini Component Text Login or Signup */}
                <View style={{ flexDirection: 'row', marginTop: normalize(10), alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: normalize(16), color: 'blue' }}>Log In </Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: normalize(14), color: 'black' }}>or </Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: normalize(16), color: 'blue' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageSize: {
        width: normalize(200),
        height: normalize(60)
    },
    button: {
        width: normalize(200),
        height: normalize(35),
        backgroundColor: 'blue',
        marginTop: normalize(20),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
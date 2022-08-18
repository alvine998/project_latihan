import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { odoo } from '../assets'
import normalize from 'react-native-normalize'

export default function Odoo() {
  return (
    <View>
        <View style={{alignItems:"center", justifyContent:"center", marginTop:normalize(20)}}>
            <Image source={odoo} style={styles.imageSize} />
            <View style={{padding:normalize(20)}}>
                <View style={styles.blueBanner}>
                    <Text style={{fontSize:normalize(14), textAlign:'center', color:'blue'}}>
                        Access and manage your instances from this Odoo account
                    </Text>
                </View>
                <View style={{borderBottomWidth:1, marginTop:normalize(20), opacity:0.5}} />

                {/* Ini Input Email */}
                <View style={{marginTop:normalize(20)}}>
                    <Text style={{fontWeight:'bold', color:'black', fontSize:normalize(18)}}>Email</Text>
                    <View style={styles.formInput}>
                        <TextInput style={{fontSize:normalize(15)}} placeholder='Email' />
                    </View>
                </View>

                {/* Ini Input Password */}
                <View style={{marginTop:normalize(20)}}>
                    <Text style={{fontWeight:'bold', color:'black', fontSize:normalize(18)}}>Password</Text>
                    <View style={styles.formInput}>
                        <TextInput style={{fontSize:normalize(15)}} placeholder='********' />
                    </View>
                </View>

                {/* Ini Tombol Sign In */}
                <View style={{marginTop:normalize(50)}}>
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={{color:'white', fontSize:normalize(16)}}>SIGN IN</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Ini Forgot Password */}
                <View style={{marginTop:normalize(10), flexDirection:'row', alignItems:'center', justifyContent:"space-between"}}>
                    <TouchableOpacity>
                        <Text style={{color:'blue', fontSize:normalize(15)}}>Don't have account ?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{color:'blue', fontSize:normalize(15)}}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    imageSize:{
        width:normalize(120),
        height:normalize(40)
    },
    blueBanner:{
        width:normalize(300),
        height:normalize(100),
        backgroundColor:'#9DCFE2',
        borderRadius:10,
        paddingTop:normalize(20),
        paddingHorizontal:normalize(20)
    },
    button:{
        backgroundColor:'#57CC59',
        height:normalize(40),
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    },
    formInput:{
        borderWidth:1, 
        borderRadius:10, 
        borderColor:'#808080', 
        marginTop:normalize(10), 
        paddingLeft:normalize(15)
    }
})
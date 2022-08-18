import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Beranda() {
    // Nama
    const [nama, setNama] = useState('')
    // Umur
    const [umur, setUmur] = useState(0)
    // Alamat
    const [alamat, setAlamat] = useState('')
    // No Hp
    const [phone, setPhone] = useState('')
    // Email
    const [email, setEmail] = useState('')

    const [toggle, setToggle] = useState(false)

    const printVariables = (a, b, c, d, e) => {
        setToggle(!toggle)
        setNama(a)
        setUmur(b)
        setAlamat(c)
        setPhone(d)
        setEmail(e)
    }

    return (
        <View style={{backgroundColor:'green', height:'100%'}}>
            <Text style={styles.title}>Registrasi</Text>
            <View style={{ paddingHorizontal: 100 }}>
                {/* 1. Nama 2. Umur 3. Alamat 4. No Hp 5. Email */}
                <TextInput
                    underlineColorAndroid={'black'}
                    placeholder="Masukkan Nama"
                    style={{ fontSize: 24, marginTop: 30 }}
                    onChangeText={(e) => setNama(e)}
                    value={nama}
                />
                <TextInput
                    underlineColorAndroid={'black'}
                    placeholder="Masukkan Umur"
                    style={{ fontSize: 24, marginTop: 30 }}
                    keyboardType='numeric'
                    maxLength={2}
                    onChangeText={(e) => setUmur(e)}
                    value={umur.toString()}
                />
                <TextInput
                    underlineColorAndroid={'black'}
                    placeholder="Masukkan Alamat"
                    style={{ fontSize: 24, marginTop: 30 }}
                    onChangeText={(e) => setAlamat(e)}
                    value={alamat}
                />
                <TextInput
                    underlineColorAndroid={'black'}
                    placeholder="Masukkan No Hp"
                    style={{ fontSize: 24, marginTop: 30 }}
                    keyboardType='numeric'
                    maxLength={12}
                    onChangeText={(e) => setPhone(e)}
                    value={phone}
                />
                <TextInput
                    underlineColorAndroid={'black'}
                    placeholder="Masukkan Email"
                    style={{ fontSize: 24, marginTop: 30 }}
                    onChangeText={(e) => setEmail(e)}
                    value={email}
                />

                <TouchableOpacity onPress={() => printVariables(nama, umur, alamat, phone, email)} style={styles.button}>
                    <Text style={styles.textButton}>Cetak</Text>
                </TouchableOpacity>

                {
                    toggle ? (
                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.textPrint}>Nama : {nama}</Text>
                            <Text style={styles.textPrint}>Umur : {umur} tahun</Text>
                            <Text style={styles.textPrint}>Alamat : {alamat}</Text>
                            <Text style={styles.textPrint}>No Hp : {phone}</Text>
                            <Text style={styles.textPrint}>Email : {email}</Text>
                        </View>
                    ) : (<></>)
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        color: 'black',
        textAlign: 'center',
        marginTop: 50
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10
    },
    textButton: {
        fontSize: 24,
        color: 'white'
    },
    textPrint: {
        fontSize: 24,
        color: 'black'
    }
})

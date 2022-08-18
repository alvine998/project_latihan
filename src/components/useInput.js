import React, { useState } from 'react'
import { View } from 'react-native'

export default function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const reset = () => {
        setValue('')
    }
    const bind = (e) => {
        value,
        setValue(e)
    }
    return [value, bind, reset]
}

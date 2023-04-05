import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconChatActive, IconChatNonActive } from '../../../assets'
import { colors } from '../../../utils'

const BtnIconSend = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
    {disable && <IconChatNonActive />}
    {!disable && <IconChatActive />}
    </View>
  )
}

export default BtnIconSend

const styles = StyleSheet.create({
    container: disable => (
        {
            backgroundColor: disable ? colors.disable : colors.tertiary,
            width: 45,
            height: 45,
            borderRadius: 10,
            paddingTop: 3,
            paddingBottom: 8,
            paddingLeft: 8
        }
    )
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IsMe from './IsMe'
import Other from './Other'

const ChatItem = ({isMe}) => {
  if(isMe){
    return <IsMe />
  }
    return <Other />
}

export default ChatItem

const styles = StyleSheet.create({})
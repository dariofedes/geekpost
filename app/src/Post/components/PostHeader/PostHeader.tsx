import { View, ViewStyle } from 'react-native'
import { Text } from '@shared/components'
import styles from './PostHeader.sass'

export default function PostHeader({ authorName, style }: PostHeaderProps) {
  return (
    <View style={[styles.postHeader, style]}>
      <Text style={styles.postHeader__author}>{authorName}</Text>
    </View>
  )
}

type PostHeaderProps = {
  authorName: string
  style?: ViewStyle
}

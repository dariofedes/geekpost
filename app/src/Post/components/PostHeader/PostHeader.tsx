import { View } from 'react-native'
import { Text } from '@shared/components'
import styles from './PostHeader.sass'

export default function PostHeader({ authorName }: PostHeaderProps) {
  return (
    <View style={styles.postHeader}>
      <Text style={styles.postHeader__author}>{authorName}</Text>
    </View>
  )
}

type PostHeaderProps = {
  authorName: string
}

import { View, ViewStyle } from 'react-native'
import { Text } from '@shared/components'
import styles from './PostDetails.sass'

export default function PostDetails({ description, style }: PostDetailsProps) {
  return (
    <View style={[styles.postDetails, style]}>
      <Text style={styles.postDetails__description}>{description}</Text>
    </View>
  )
}

type PostDetailsProps = {
  description: string
  style?: ViewStyle
}

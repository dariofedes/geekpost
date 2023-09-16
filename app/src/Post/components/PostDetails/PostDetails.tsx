import { View } from 'react-native'
import { Text } from '@shared/components'
import styles from './PostDetails.sass'

export default function PostDetails({ description }: PostDetailsProps) {
  return (
    <View style={styles.postDetails}>
      <Text style={styles.postDetails__description}>{description}</Text>
    </View>
  )
}

type PostDetailsProps = {
  description: string
}

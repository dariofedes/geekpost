import { Image, Text, View } from 'react-native'
import styles from './Post.sass'

export default function Post({ data }: PostProps) {
  const { authorName, description, image } = data

  return (
    <View style={styles.post}>
      <View style={styles.post__header}>
        <Text style={styles.post__author}>{authorName}</Text>
      </View>
      <Image
        style={styles.post__image}
        source={{ uri: image }}
        testID="post-image"
        resizeMode="cover"
      />
      <Text style={styles.post__description}>{description}</Text>
    </View>
  )
}

type PostProps = {
  data: PostData
}

type PostData = {
  authorName: string
  description: string
  image: string
}

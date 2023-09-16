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
        testID="post-image"
        source={{ uri: image }}
        resizeMode="cover"
      />
      <View style={styles.post__details}>
        <Text style={styles.post__description}>{description}</Text>
      </View>
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

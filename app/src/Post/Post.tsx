import { Image, View } from 'react-native'
import styles from './Post.sass'
import { Text } from '@shared/components/index'
import PostHeader from './components/PostHeader/PostHeader'

export default function Post({ data }: PostProps) {
  const { authorName, description, image } = data

  return (
    <View style={styles.post}>
      <PostHeader authorName={authorName} />
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

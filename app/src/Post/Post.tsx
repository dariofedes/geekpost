import { Image, View } from 'react-native'
import PostHeader from './components/PostHeader/PostHeader'
import PostDetails from './components/PostDetails/PostDetails'
import styles from './Post.sass'

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
      <PostDetails description={description} />
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

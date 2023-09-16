import { View } from 'react-native'
import PostHeader from './components/PostHeader/PostHeader'
import PostDetails from './components/PostDetails/PostDetails'
import PostImage from './components/PostImage/PostImage'
import styles from './Post.sass'

export default function Post({ data }: PostProps) {
  const { authorName, description, image } = data

  return (
    <View style={styles.post}>
      <PostHeader authorName={authorName} />
      <PostImage imageUri={image} />
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

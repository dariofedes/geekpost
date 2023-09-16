import { View } from 'react-native'
import { PostDetails, PostHeader, PostImage } from './components'
import PostData from './PostData'
import styles from './Post.sass'

export default function Post({ data }: PostProps) {
  const { authorName, description, image } = data

  return (
    <View style={styles.post} testID="post">
      <PostHeader authorName={authorName} />
      <PostImage imageUri={image} />
      <PostDetails description={description} />
    </View>
  )
}

type PostProps = {
  data: PostData
}

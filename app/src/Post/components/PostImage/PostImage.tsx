import { Image } from 'react-native'
import styles from './PostImage.sass'

export default function PostImage({ imageUri }: PostImageProps) {
  return (
    <Image
      style={styles.postImage}
      testID="post-image"
      source={{ uri: imageUri }}
      resizeMode="cover"
    />
  )
}

type PostImageProps = {
  imageUri: string
}

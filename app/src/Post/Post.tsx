import { Image, Text, View } from 'react-native'

export default function Post({ data }: PostProps) {
  const { authorName, description } = data

  return (
    <View>
      <Text>{authorName}</Text>
      <Image source={{ uri: data.image }} testID="post-image" />
      <Text>{description}</Text>
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

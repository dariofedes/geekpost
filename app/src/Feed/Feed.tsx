import { FlatList } from 'react-native'
import PostData from 'Post/PostData'
import Post from '../Post/Post'

export default function Feed() {
  const posts: PostData[] = [
    {
      id: '1',
      authorName: 'another-author',
      description:
        'Nostrud laborum duis sunt consequat eiusmod. Commodo est officia qui aliqua culpa do aute dolore labore dolore fugiat esse tempor. Cupidatat quis dolore veniam cillum dolor elit.',
      image:
        'https://thecreativearmory.com/wp-content/uploads/2018/03/cole_gearsofwar_980x690.jpg',
    },
    {
      id: '2',
      authorName: 'author',
      description:
        'Nostrud laborum duis sunt consequat eiusmod. Commodo est officia qui aliqua culpa do aute dolore labore dolore fugiat esse tempor. Cupidatat quis dolore veniam cillum dolor elit.',
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8f8b3453951257.5947e7e4a9579.jpg',
    },
    {
      id: '3',
      authorName: 'another-author',
      description:
        'Nostrud laborum duis sunt consequat eiusmod. Commodo est officia qui aliqua culpa do aute dolore labore dolore fugiat esse tempor. Cupidatat quis dolore veniam cillum dolor elit.',
      image:
        'https://thecreativearmory.com/wp-content/uploads/2018/03/cole_gearsofwar_980x690.jpg',
    },
    {
      id: '4',
      authorName: 'author',
      description:
        'Nostrud laborum duis sunt consequat eiusmod. Commodo est officia qui aliqua culpa do aute dolore labore dolore fugiat esse tempor. Cupidatat quis dolore veniam cillum dolor elit.',
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8f8b3453951257.5947e7e4a9579.jpg',
    },
    {
      id: '5',
      authorName: 'another-author',
      description:
        'Nostrud laborum duis sunt consequat eiusmod. Commodo est officia qui aliqua culpa do aute dolore labore dolore fugiat esse tempor. Cupidatat quis dolore veniam cillum dolor elit.',
      image:
        'https://thecreativearmory.com/wp-content/uploads/2018/03/cole_gearsofwar_980x690.jpg',
    },
    {
      id: '6',
      authorName: 'author',
      description:
        'Nostrud laborum duis sunt consequat eiusmod. Commodo est officia qui aliqua culpa do aute dolore labore dolore fugiat esse tempor. Cupidatat quis dolore veniam cillum dolor elit.',
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8f8b3453951257.5947e7e4a9579.jpg',
    },
  ]

  const renderItem = ({ item: post }: { item: PostData }) => {
    return <Post data={post} />
  }

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(post: PostData) => post.id}
    />
  )
}

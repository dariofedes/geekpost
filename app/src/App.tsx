import { SafeAreaView } from 'react-native'
import Post from './Post/Post'

export default function App() {
  return (
    <SafeAreaView>
      <Post
        data={{
          authorName: 'author',
          description:
            'Nostrud laborum duis sunt consequat eiusmod. Commodo est officia qui aliqua culpa do aute dolore labore dolore fugiat esse tempor. Cupidatat quis dolore veniam cillum dolor elit.',
          image:
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8f8b3453951257.5947e7e4a9579.jpg',
        }}
      />
      <Post
        data={{
          authorName: 'another-author',
          description:
            'Nostrud laborum duis sunt consequat eiusmod. Commodo est officia qui aliqua culpa do aute dolore labore dolore fugiat esse tempor. Cupidatat quis dolore veniam cillum dolor elit.',
          image:
            'https://thecreativearmory.com/wp-content/uploads/2018/03/cole_gearsofwar_980x690.jpg',
        }}
      />
    </SafeAreaView>
  )
}

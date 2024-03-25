// pages/posts/[id].tsx
import { GetServerSideProps, NextPage } from 'next';
import styles from "./[id].module.css"

interface Post {
 id: number;
 title: string;
 body: string;
}

interface PostProps {
 post: Post;
}

const Post: NextPage<PostProps> = ({ post }) => {
 return (
    <div className={styles.postContainer}>
      <h1 className={styles.postTitle}>{post.title}</h1>
      <p className={styles.postBody}>{post.body}</p>
    </div>
 );
};

export const getServerSideProps: GetServerSideProps<PostProps> = async (context) => {
 const { id } = context.params as {id:string};
 const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
 const post: Post = await res.json();

 return {
    props: { post },
 };
};

export default Post;

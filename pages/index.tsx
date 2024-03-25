// pages/index.tsx
import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next';
import styles from './index.module.css'
import BlogPost from "@/components/BlogPost"

interface User {
    id: number;
    name: string;
}

interface Post {
    id: number;
    title: string;
    userId: number;

}

interface HomeProps {
    posts: Post[];
    users: User[];
}

const Home: NextPage<HomeProps> = ({ posts, users }) => {
    return (
    <div className={styles.container}>
        <h1>Blog Posts</h1>
        <ul className={styles.postList}>
        {posts.map((post) => (
            <BlogPost post={post} users={users}/>
        ))}
        </ul>
    </div>
    );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const [res1, res2] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/users')
    ]) 
     
    const posts: Post[] = await res1.json();
    const users: User[] = await res2.json();
    
    return {
        props: { posts, users },
    };
};

export default Home;

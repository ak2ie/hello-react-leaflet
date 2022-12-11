import { getDatabase } from "./notion";
import Link from "next/link";
import { Text } from "./[id]";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Notion({ posts }) {
  return (
    <ol className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/${post.id}`}>
            <Text text={post.properties.Name.title} />
          </Link>
        </li>
      ))}
    </ol>
  );
}

export const getStaticProps = async () => {
  if (databaseId === undefined) {
    return;
  }
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};

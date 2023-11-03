import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {cache:"no-store"});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map(x => (<Link href={`/blog/${x._id}`} className={styles.container} key={x._id}>
           <div className={styles.imgContainer}>
          <Image
            src={x.img}
            alt="img"
            width={300}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{x.title}</h1>
          <p className={styles.desc}>{x.desc}</p>
        </div>
      </Link>))}
         </div>
  );
};

export default Blog;

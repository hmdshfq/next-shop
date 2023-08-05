'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import useSWR from 'swr'

const ENDPOINT = 'https://dummyjson.com/products';

async function fetcher(endpoint) {
  let response = await fetch(endpoint);
  let json = await response.json();
  return json;
}

export default function Home() {
  const { data, error } = useSWR(
      ENDPOINT,
      fetcher
  );
  return (
    <main className={styles.main}>
      <ul className={styles.wrapper}>
        {data?.products.map(product => {
          return (
              <li key={product.id}>
                  <Link href={`/products/${product.id}`}>
                      <div className='card'>
                          <div className='card--image'>
                              <Image
                                  src={product.thumbnail}
                                  alt={product.title}
                                  width={100}
                                  height={100}
                              ></Image>
                          </div>
                          <p className='card--title'>{product.title}</p>
                          <p className='card--description'>
                              {product.description}
                          </p>
                      </div>
                  </Link>
              </li>
          );
        })} 
      </ul>
    </main>
  )
}

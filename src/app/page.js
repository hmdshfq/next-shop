'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import useSWR from 'swr'
import fetcher from '@/utilities/fetcher'

const ENDPOINT = 'https://dummyjson.com/products';

export default function Home() {
  const { data, isLoading, error } = useSWR(ENDPOINT, fetcher);
  if (isLoading) {
    return <p>Loading...</p>
  }
  return (

      <ul className={styles.wrapper}>
        {data.products.map(product => {
          return (
              <li className={styles.li} key={product.id}>
                  <Link href={`/products/${product.id}`}>
                      <div className={styles.card}>
                          
                    <Image
                          className={styles.image}
                                  src={product.thumbnail}
                                  alt={product.title}
                                  width={300}
                                  height={300}
                              ></Image>
                          
                          <div className={styles.information}>
                              <p className={styles.title}>{product.title}</p>
                              <p className={styles.description}>
                                  {product.description}
                              </p>
                              <p className={styles.price}>
                                  {`$${product.price}`}
                              </p>
                          </div>
                      </div>
                  </Link>
              </li>
          );
        })} 
      </ul>

  )
}

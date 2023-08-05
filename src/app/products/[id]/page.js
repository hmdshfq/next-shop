'use client'
import useSWR from 'swr';
import Image from 'next/image'
import fetcher from '@/utilities/fetcher'

export default function Product({ params }) {
    const ENDPOINT = `https://dummyjson.com/products/${params.id}`;
    const { data, isLoading, error } = useSWR(ENDPOINT, fetcher);
    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Something went wrong!</p>
    }
    return (
        <div>
            <h1>{data.title}</h1>
            <div>
                <Image src={data.thumbnail} alt={data.title} width="500" height="500"></Image>
            </div>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <p>{data.discountPercentage}</p>
            <p>{data.rating}</p>
            <p>{data.brand}</p>
            <p>{data.category}</p>
        </div>
    );
}

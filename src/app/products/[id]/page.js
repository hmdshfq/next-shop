'use client'
import useSWR from 'swr';
import Image from 'next/image'


async function fetcher(endpoint) {
    let response = await fetch(endpoint);
    let json = await response.json();
    return json;
}

export default function Product({ params }) {
    const ENDPOINT = `https://dummyjson.com/products/${params.id}`;
    const { data, error } = useSWR(ENDPOINT, fetcher);
    console.log(data)
    return (
        data ? <div>
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
        </div> : ''
    );
}

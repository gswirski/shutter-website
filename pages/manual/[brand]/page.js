import { useRouter } from 'next/router'

export default function Page(params) {
    const router = useRouter()
    return <p>Brand: {router.query.brand}</p>
}
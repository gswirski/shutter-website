import Link from "next/link"

export default function Page({ params }) {
    return (
        <>
            <div className="lg:text-center">
                <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Product Manual</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Learn how to use Shutter
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Select your camera brand to view detailed documentation on every feature available in Shutter.
                </p>
            </div>
            <div className="grid grid-cols-2 max-w-2xl mx-auto">
                <div>
                    <h3 className="text-xl font-extrabold text-gray-700">
                        Shutter for <span className="text-red-600">Sony</span>
                    </h3>
                    <ol className="list-decimal list-inside">
                        <li><Link href="/manual/sony/installation">Installation</Link></li>
                        <li><Link href="/manual/sony/camera-connection">Camera connection</Link></li>
                        <li><Link href="/manual/sony/photo-transfer">Photo transfer</Link></li>
                        <li><Link href="/manual/sony/remote-control">Remote control</Link></li>
                        <li><Link href="/manual/sony/apple-watch">Apple Watch app</Link></li>
                        <li><Link href="/manual/sony/tips-tricks">Tips & tricks</Link></li>
                        <li><Link href="/manual/sony/troubleshooting">Troubleshooting</Link></li>
                        <li><Link href="/manual/sony/getting-help">Getting help</Link></li>
                    </ol>
                </div>

                <div>
                    <h3 className="text-xl font-extrabold text-gray-700">
                        Shutter for <span className="text-red-600">Canon</span>
                    </h3>
                    <ol className="list-decimal list-inside">
                        <li><Link href="/manual/canon/installation">Installation</Link></li>
                        <li><Link href="/manual/canon/camera-connection">Camera connection</Link></li>
                        <li><Link href="/manual/canon/photo-transfer">Photo transfer</Link></li>
                        <li><Link href="/manual/canon/remote-control">Remote control</Link></li>
                        <li><Link href="/manual/canon/apple-watch">Apple Watch app</Link></li>
                        <li><Link href="/manual/canon/tips-tricks">Tips & tricks</Link></li>
                        <li><Link href="/manual/canon/troubleshooting">Troubleshooting</Link></li>
                        <li><Link href="/manual/canon/getting-help">Getting help</Link></li>
                    </ol>
                </div>

            </div>
        </>
    )
}
/* This example requires Tailwind CSS v2.0+ */
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer'
import Menu from '../components/menu'

export default function Buy() {
  return (
    <div>
      <Head>
        <title>Shutter</title>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      </Head>

      <Menu />

      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-12">
            <Link href="/buy">
              <a className="block lg:text-center default-a font-semibold tracking-wide uppercase">
                App Store
              </a>
            </Link>
            <p className="lg:text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Select Shutter Version
            </p>
          </div>

          <div className="mt-6 space-y-12 space-y-0 grid grid-cols-2 gap-x-6">
            <a href="https://apps.apple.com/us/app/shutter-camera-remote/id1459044148?ls=1" className="group relative">
              <div className="relative w-full h-40 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-40 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  className="h-36 w-auto mx-auto"
                  src="/sony_icon.svg"
                  />              </div>
              <p className="text-xl font-bold text-gray-900 text-center group-hover:underline underline-offset-4 decoration-1 decoration-gray-400">
                <span className="text-orange-600">Sony</span> cameras
              </p>
            </a>

            <a href="https://apps.apple.com/us/app/shutter-canon-eos-remote/id1562636889" className="group relative">
              <div className="relative w-full h-40 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-40 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  className="h-36 w-auto mx-auto"
                  src="/icon.svg"
                  />
              </div>
              <p className="text-xl font-bold text-gray-900 text-center group-hover:underline underline-offset-4 decoration-1 decoration-gray-400">
                <span className="text-red-600">Canon</span> cameras
              </p>
            </a>

          </div>

        </div>
      </div>


      <Footer />
    </div>


  )
}

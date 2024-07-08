import Link from 'next/link'
import Footer from '../components/footer'
import ShutterHead from '../components/head'
import Menu from '../components/menu'

export default function Buy() {
  return (
    <div>
      <ShutterHead />

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

          <div className="mt-6 space-y-12 space-y-0 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-12">
          <a href="https://apps.apple.com/us/app/shutter-canon-eos-remote/id1562636889" className="group relative">
              <p className="text-xl font-bold text-gray-900 text-center mb-2">
                Canon
              </p>

              <div className="relative w-full h-40 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:h-40">
                <img
                  className="h-36 w-auto mx-auto"
                  src="/icon.svg"
                  />
              </div>
            </a>

            <a href="https://apps.apple.com/us/app/shutter-fujifilm-camera-remote/id6478856044" className="group relative">
              <p className="text-xl font-bold text-gray-900 text-center mb-2">
                Fujifilm
              </p>

              <div className="relative w-full h-40 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:h-40">
                <img
                  className="h-36 w-auto mx-auto"
                  src="/icon_fuji.png"
                  />
              </div>
            </a>



            <a href="https://apps.apple.com/us/app/shutter-camera-remote/id1459044148?ls=1" className="group relative">
              <p className="text-xl font-bold text-gray-900 text-center mb-2">
                Sony
              </p>

              <div className="relative w-full h-40 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:h-40">
                <img
                  className="h-36 w-auto mx-auto"
                  src="/sony_icon.svg"
                  />
              </div>
            </a>


          </div>

        </div>
      </div>


      <Footer />
    </div>


  )
}

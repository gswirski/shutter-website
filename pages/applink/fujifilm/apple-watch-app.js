import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../../components/footer'
import ShutterHead from '../../../components/head'
import Header from '../../../components/header'

export default function Home() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Major Update</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Fujifilm remote app for Apple Watch now available
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Easily control your Fujifilm X camera from the wrist!
            Capture photos & videos, easily control exposure, focus and timer settings.
          </p>
          <p  className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Connect your camera to Shutter on iPhone and you are ready to shoot!
          </p>
        </div>
      </div>
    </div>
  )
}

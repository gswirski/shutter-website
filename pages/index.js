import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shutter</title>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      </Head>

      <Header />

      <section className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28 border-t">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-4">
          <div className="col-span-2 md:order-2">
            <h3 className='mt-8 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl'>Beautiful &amp; Easy to Use</h3>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl'>Shutter gets out of the way so you can focus on what matters the most &mdash; capturing beautiful moments.</p>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl'>With our app designed to work with iPhone, iPad and Apple Watch, Shutter is always with you.</p>
          </div>
          <div className="col-span-1 md:order-1 text-center">
            <div className='relative h-[450px]'>
              <Image
                className='mx-auto'
                layout='fill'
                objectFit='scale-down'
                src="/feat-interval.png" />
            </div>
            <p className='px-6 mt-2 text-sm text-gray-500'>
              Whether you are a hobbyist or a creative professional, Shutter makes the work easier and more enjoyable.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-4">
          <div className="col-span-2 md:order-1">
            <h3 className='mt-8 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl'>
              Exposure Bracketing (HDR)
            </h3>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl italic'>
              Travel · Landscape · Real-Estate
            </p>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl'>
              Photographing landscapes or architecture? Your camera can only do so much. Shutter can do the rest.
            </p>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl'>
              Bright skies and dark shadows pose a serious challenge for your camera. With Shutter’s multi-exposure automation, you keep your post-processing options open.
            </p>
          </div>
          <div className="col-span-1 md:order-2 text-center">
            <div className='relative h-[450px]'>
              <Image
                className='mx-auto'
                layout='fill'
                objectFit='scale-down'
                src="/feat-bracket.png" />
            </div>
            <p className='px-6 mt-2 text-sm text-gray-500'>
              Preserve dramatic skies and shadow detail by automating multiple exposures.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-4">
          <div className="col-span-2 md:order-2">
            <h3 className='mt-8 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl'>
            Intervalometer
            </h3>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl italic'>
              Travel · Social Media · Astrophotography · Time-lapse
            </p>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl'>
              Intervalometer will transform your travel and social media photography. No more running around to set the self-timer up and jump into the frame. Schedule multiple photos and pose easily.
            </p>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl'>
              Our intervalometer can also be used to capture hundreds of frames for astrophotography or for time-lapse. Also in RAW.
            </p>
          </div>
          <div className="col-span-1 md:order-1 text-center">
            <div className='relative h-[450px]'>
              <Image
                className='mx-auto'
                layout='fill'
                objectFit='scale-down'
                src="/feat-travel.png" />
            </div>
            <p className='px-6 mt-2 text-sm text-gray-500'>
              Set up the intervalometer and get the best travel photos everywhere you go.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-4">
          <div className="col-span-2 md:order-1">
            <h3 className='mt-8 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl'>
              Battery Friendly
            </h3>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl'>
              We all hate dying batteries. That’s why we’ve optimized Shutter to use as little battery as possible.
            </p>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl'>
              When shooting longer sequences, you can lock the screen to preserve power. We will still keep track of the progress. Yep, we thought about those little details, too.
            </p>
          </div>
          <div className="col-span-1 md:order-2 text-center">
            <div className='relative h-[450px]'>
              <Image
                className='mx-auto'
                layout='fill'
                objectFit='scale-down'
                src="/feat-battery.png" />
            </div>
            <p className='px-6 mt-2 text-sm text-gray-500'>
              Conveniently check progress when running longer sequences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-4">
          <div className="col-span-2 md:order-2">
            <h3 className='mt-8 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl'>
            For Photo & Video
            </h3>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl'>
            Everyone benefits from Shutter. As a videographer, you no longer need expensive external monitors. Your phone can do everything. Or even your Watch.

</p>
          </div>
          <div className="col-span-1 md:order-1 text-center">
            <div className='relative h-[450px]'>
              <Image
                className='mx-auto'
                layout='fill'
                objectFit='scale-down'
                src="/feat-video.png" />
            </div>
            <p className='px-6 mt-2 text-sm text-gray-500'>
              Choose a shooting mode to only show relevant controls.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

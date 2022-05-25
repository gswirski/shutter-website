import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import ShutterHead from '../components/head'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <ShutterHead />

      <Header />
      <main>

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


        <section className="bg-gray-900 mt-24 lg:mt-32" id="testimonials">
          <h2 className="text-center text-3xl font-extrabold text-gray-100 sm:text-4xl pt-12 md:pt-16" id="customer-reviews">Customer Reviews</h2>

          <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
            <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-slate-900 lg:pr-16">
              <p className='text-gray-100 font-extrabold text-lg'>
                Shutter gives us the features Sony left out
              </p>
              <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                <div className="relative text-lg text-gray-400 md:flex-grow">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-800"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    This app works great as an intervalometer for the Sony cameras. I use it for timelapses and for taking multiple astrophotography exposures for stacking. I love not having to bring a physical intervalometer around or pay Sony for a feature that should have been included. Grzegorz, the developer, is also very polite responsive to questions. I am using it on a Sony a7rii.
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="text-base font-medium text-gray-400">&mdash; Charles Gerhard DeBroglie</div>
                </footer>
              </blockquote>
            </div>
            <div className="py-12 px-4 border-t-2 border-slate-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
              <p className='text-gray-100 font-extrabold text-lg'>
                Works great while hiking
              </p>
              <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                <div className="relative text-lg text-gray-400 md:flex-grow">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-800"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    This app has made controlling my camera so much better! Especially when I’m out and about in the wild
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="text-base font-medium text-gray-400">&mdash; SeanA0001</div>
                </footer>
              </blockquote>
              <a
                href="https://apps.apple.com/us/app/shutter-camera-remote/id1459044148?ls=1#see-all/reviews"
                className="mt-8 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                See All Customer Reviews
                <svg className="-mr-1 ml-3 h-5 w-5 text-gray-400" x-description="Heroicon name: solid/external-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </a>

            </div>
          </div>
        </section>

        <section id="refunds">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Satisfaction Guaranteed</h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Still not convinced? You can give Shutter a try and return it if you don’t like it! If you are unhappy with the product, for whatever reason, you can{' '}
                <a className="underline text-black" href="https://support.apple.com/en-us/HT204084">request a refund</a>{' '}within 7 days of the purchase.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link href="/buy">
                  <a
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg"
                  >
                    Download Shutter
                  </a>
                </Link>
              </div>


            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-white" aria-labelledby="join-heading">
          <div className="hidden absolute inset-x-0 h-1/2 bg-white lg:block" aria-hidden="true" />
          <div className="max-w-7xl mx-auto bg-slate-300 lg:bg-transparent lg:px-8">
            <div className="lg:grid lg:grid-cols-12">
              <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                <div className="absolute inset-x-0 h-1/2 bg-white lg:hidden" aria-hidden="true" />
                <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                  <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                    <div className="object-cover object-center rounded-3xl shadow-2xl overflow-hidden bg-slate-200">
                      <Image
                        objectFit='cover'
                        objectPosition="center"
                        src="/DSC09268.jpg"
                        layout="fill"
                        alt=""
                      /></div>
                  </div>
                </div>
              </div>

              <div className="relative bg-slate-300 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
                <div className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                  <svg
                    className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect x={0} y={0} width={4} height={4} className="text-slate-200" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                  </svg>
                  <svg
                    className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect x={0} y={0} width={4} height={4} className="text-blue-500" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                  </svg>
                </div>
                <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                  <h2 className="text-3xl font-extrabold text-slate-900" id="join-heading">
                    About Us
                  </h2>
                  <p className="text-lg text-slate-700">
                    We're Kalina &amp; Grzegorz, and we love traveling to secluded places.
                    We also love capturing beautiful moments.
                    Sometimes, when no one is around, it was hard to get a perfect picture of both of us.
                  </p>
                  <p className="text-lg text-slate-700">

                    That’s why we’ve created Shutter – to make our travel photography easier. It started as a passion project after a visit to the beautiful Swiss Alps. It’s been a faithful companion on countless trips. We even used it to photograph our engagement!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

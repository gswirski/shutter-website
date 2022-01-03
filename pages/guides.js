/* This example requires Tailwind CSS v2.0+ */
import { DocumentTextIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Link from 'next/link'
import Menu from '../components/menu'


const features = [
  {
    name: 'Frequently Asked Questions',
    description: "",
    icon: DocumentTextIcon,
    href: "/guides/faq"
  },
  {
    name: 'How to connect with the camera',
    description:
      "We’ve designed Shutter to be as easy to connect as possible. Follow this guide to connect the app with your camera.",
    icon: DocumentTextIcon,
    href: "/guides/connect"
  },
  {
    name: 'How to update Sony’s Smart Remote Control',
    description:
      "Some Sony cameras come with an older version of “Smart Remote Control” software. The most popular examples are Sony a5000, a5100, a6000, a6300, a6500, a7 I / II, a7R I / II, a7S I / II. If exposure settings are greyed out, please follow the update guide to fix the problem.",
    icon: DocumentTextIcon,
    href: "/update"
  },
  {
    name: 'How to focus with the Sony a7III',
    description:
      "… or a6100, a6400, a6600, a7RIII. Unfortunately, these cameras don’t allow remote apps like Imaging Edge Mobile or Shutter to control focus points. This is a hardware limitation that no remote app can work around.      This doesn’t mean you cannot take sharp pictures. Read on this guide to learn more.            ",
    icon: DocumentTextIcon,
    href: "/guides/focus"
  },
]

export default function Guides() {
  return (
    <div>
      <Head>
        <title>Shutter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Guides</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Learn how to use Shutter
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We are in the process of adding more guides.
              If there is a specific topic that you would like to learn more about, please let us know.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              You can use our{' '}
              <Link href="/contact">
                <a className="underline underline-offset-2 decoration-1 decoration-gray-400 hover:text-black hover:decoration-black">contact form</a>
              </Link>{' '}
              or email us at{' '}
              <a
                href="mailto:help@shutter.dev"
                className="underline underline-offset-2 decoration-1 decoration-gray-400 hover:text-black hover:decoration-black"
              >
                help@shutter.dev
              </a>
              .
            </p>
          </div>

          <div className="mt-20">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-20">
              {features.map((feature) => (
                <Link href={feature.href} key={feature.name}>
                  <a className="relative group block">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-red-900 bg-red-100 group-hover:bg-red-200 ">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-2xl font-bold leading-6 font-medium text-gray-800 underline underline-offset-2 decoration-1 decoration-gray-400 group-hover:text-black group-hover:decoration-black">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                  </a>
                </Link>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

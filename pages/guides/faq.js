/* This example requires Tailwind CSS v2.0+ */
import { DocumentTextIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Link from 'next/link'
import Menu from '../../components/menu'


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
          <div className="">
            <Link href="/guides">
                <a className="block lg:text-center text-base text-red-600 font-semibold tracking-wide uppercase hover:underline underline-offset-2 decoration-1">
                    Guides
                </a>
            </Link>
            <p className="lg:text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </p>

            <h4 className="mt-4 text-xl text-gray-900 font-semibold">The app doesn’t connect to the camera.</h4>

            <p className="mt-4 text-xl text-gray-500">
                This sounds like a bug. Please make sure you’ve attached a diagnostic report and we will investigate right away. If you haven’t attached the report yet, you can do so from the app. Please go to “Help & Support” -> “Email Support” and choose “Yes” to attach the report.
            </p>

<h4>The app is showing an error: “Please upgrade Smart Remote Control”. Exposure controls don’t work.</h4>

<p className="mt-4 text-xl text-gray-500">
You need to upgrade Sony’s Smart Remote Control in camera. This will enable exposure settings, focus controls, continuous and video modes. Upgrade instructions here.
</p>

I cannot control focus from the app.

If you don’t see an orange “please upgrade remote control” message, it means that your camera does not support remote focus control. Unfortunately, this is hardware limitation and no app can solve that. The good news is that your camera probably has Eye-AF — you can leverage it to get great results:

When photographing people, set AF to “Wide AF area” and let the camera do the work. Sony cameras are great at finding faces. You can even prioritize certain people in camera settings.
When photographing other subjects, pre-select the focus point in camera and make sure your subject will be inside that point when you remotely trigger the camera. The wider the point, the easier it’ll be to focus on the subject.
Consider switching to manual focus. You can use AF to focus on your subject, and then switch camera to MF mode to avoid focus changes.
Exposure controls disappear when focusing.

This is how your camera works. Whenever you focus (whether it’s in camera or via our app), the camera will lock the exposure settings until you take a photo or cancel action.

My camera is shooting JPEG. How do I switch to RAW?

Cameras that connect using “Smart Remote Control” have separate settings for remote shooting. Please make sure you switch to the RAW format in the camera menu after you connect to our app.

I have a feature request/feedback.

Simply contact us at help@shutter.dev or use the web form. We love feedback. Please make sure you attach as many details as you can. What is your camera, what is your use case (real-estate, astrophotography, photographing birds…), what would be required to make your work easier…

I want a refund.

No problem. We would love your feedback and a chance to fix the issue first. If you don’t want to wait, you can Request a Refund here.

I love the app. I want to help.

That’s great to hear! If you enjoy using Shutter, please make sure to leave a review in the App Store. It really helps us a lot. 
            </div>
        </div>
      </div>
    </div>
  )
}

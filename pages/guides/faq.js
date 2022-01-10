import Link from 'next/link'
import Footer from '../../components/footer'
import Menu from '../../components/menu'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import ReactMarkdown from 'react-markdown'
import React from 'react'
import ShutterHead from '../../components/head'

const faqs = [
  {
    question: "The app doesn’t connect to the camera.",
    answer:
      `This sounds like a bug. Please send us a diagnostic report
      and we will investigate right away. To attach the report, please
      go to “Help & Support” → “Share Diagnostic Report” and email
      files to [help@shutter.dev](mailto:help@shutter.dev).`
  },
  {
    question: "Does the app use Bluetooth or Wi-Fi? Can I use it off grid?",
    answer:
      `Shutter uses Wi-Fi Direct to provide camera controls.
      This means the network is generated by the camera itself, you don't need to stay on your
      home or office network. You can take Shutter to the most remote location and it will still work.
      
With the Sony a7 IV, you can use Bluetooth to initialize the Wi-Fi connection eliminating the need to navigate
      camera or iOS menus. All other Sony cameras use NFC to achieve similarly easy connection process.
      
With Canon, you need to manually join the camera's Wi-Fi in iOS Settings app.`
  },
  {
    question: "Can I transfer photos?",
    answer:
      `No. Shutter is mostly a shooting tool and will only transfer small previews of photos taken with the app.
      
We are planning a photo transfer in the future. However, for the fastest and most reliable file transfers we'll
always recommend a dedicated card reader ([like the one directly from Apple](https://www.apple.com/shop/product/MJYT2AM/A/lightning-to-sd-card-camera-reader)).`
  },
  {
    question: "The app is showing an error: “Please upgrade Smart Remote Control”. Exposure controls don’t work.",
    answer:
      `You need to upgrade Sony’s Smart Remote Control app in camera.
      This will enable exposure settings, focus controls, continuous
      and video modes. [We provide update instructions here](/update).`
  },
  {
    question: "I cannot control focus from the app",
    answer: 
    `* If you see an orange "Please upgrade remote control" message, that means your
    camera software (Smart Remote Control app) is out of date. [Please follow these
    update instructions to enable focus and exposure controls.](/update)

* If you have Sony a7 III, a7R III, a6100, a6400, a6600 &mdash; your camera does not support remote
    focus control. Unfortunately, this is hardware limitation and no app can solve that.
    The good news is that you can leverage the excellent Eye-AF to get great results.
    [See our focus guide here.](/guides/focus-help)

* If your camera is not on the list above, and you do not see an orange error message, please
      make sure your AF Area in camera is set to "Spot", "Expand Spot" or "Tracking Spot"
      (i.e. a point that you can move with the joystick).`
  },
  {
    question: "Exposure controls disappear when focusing.",
    answer: "This is how your camera works. Whenever you focus (whether it’s in camera or via our app), the camera will lock exposure settings until you take a photo or cancel action."
  },
  {
    question: "My camera is shooting JPEG. How do I switch to RAW?",
    answer: "Cameras that connect using “Smart Remote Control” have separate settings for remote shooting. Please make sure you switch to the RAW format in the camera menu after you connect to our app."
  },
  {
    question: "I have a feature request/feedback.",
    answer: "Simply contact us at [help@shutter.dev](mailto:help@shutter.dev) or [use the web form](/contact). We love feedback. Please make sure you attach as many details as you can. What is your camera, what is your use case (real-estate, astrophotography, photographing birds…), what would be required to make your work easier…"
    },
  {
    question: "I want a refund.",
    answer: "No problem. We would love your feedback and a chance to fix the issue first. If you don’t want to wait, you can [request a refund here.](https://support.apple.com/en-us/HT204084)"
  },
  {
    question: "I love the app. I want to help.",
    answer: "That’s great to hear! If you enjoy using Shutter, please make sure to leave a review in the App Store ([review Sony app](https://itunes.apple.com/app/id1459044148?action=write-review), [review Canon app](https://itunes.apple.com/app/id1562636889?action=write-review)). It really helps us a lot."
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Guides() {
  return (
    <div>
      <ShutterHead />
      <Menu />

      <div className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-12">
            <Link href="/guides">
              <a className="block lg:text-center default-a font-semibold tracking-wide uppercase">
                Guides
              </a>
            </Link>
            <p className="lg:text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </p>

            <p className="mt-4 max-w-lg text-xl text-gray-500 lg:mx-auto lg:text-center">
              Can't find the answer you are looking for? Reach out to our{' '}
              <Link href="/contact">
                <a className="default-a">customer support</a>
              </Link>
              {' '}team.
            </p>
          </div>

          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <div className="text-base text-gray-500 prose">
                        <ReactMarkdown children={faq.answer} />
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>

        </div>
      </div>


      <Footer />
    </div>


  )
}

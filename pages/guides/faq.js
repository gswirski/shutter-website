/* This example requires Tailwind CSS v2.0+ */
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../../components/footer'
import Menu from '../../components/menu'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import ReactMarkdown from 'react-markdown'
import React from 'react'

const faqs = [
  {
    question: "The app doesn’t connect to the camera.",
    answer:
      "This sounds like a bug. Please make sure you’ve attached a diagnostic report and we will investigate right away. If you haven’t attached the report yet, you can do so from the app. Please go to “Help & Support” -> “Email Support” and choose “Yes” to attach the report."
  },
  {
    question: "The app is showing an error: “Please upgrade Smart Remote Control”. Exposure controls don’t work.",
    answer: "You need to upgrade Sony’s Smart Remote Control in camera. This will enable exposure settings, focus controls, continuous and video modes. Upgrade instructions here."
  },
  {
    question: "I cannot control focus from the app",
    answer: `If you don’t see an orange “please upgrade remote control” message, it means that your camera does not support remote focus control. Unfortunately, this is hardware limitation and no app can solve that. The good news is that your camera probably has Eye-AF — you can leverage it to get great results:

When photographing people, set AF to “Wide AF area” and let the camera do the work. Sony cameras are great at finding faces. You can even prioritize certain people in camera settings. When photographing other subjects, pre-select the focus point in camera and make sure your subject will be inside that point when you remotely trigger the camera. The wider the point, the easier it’ll be to focus on the subject. Consider switching to manual focus. You can use AF to focus on your subject, and then switch camera to MF mode to avoid focus changes.`
  },
  {
    question: "Exposure controls disappear when focusing.",
    answer: "This is how your camera works. Whenever you focus (whether it’s in camera or via our app), the camera will lock the exposure settings until you take a photo or cancel action."
  },
  {
    question: "My camera is shooting JPEG. How do I switch to RAW?",
    answer: "Cameras that connect using “Smart Remote Control” have separate settings for remote shooting. Please make sure you switch to the RAW format in the camera menu after you connect to our app."
  },
  {
    question: "I have a feature request/feedback.",
    answer: "Simply contact us at help@shutter.dev or use the web form. We love feedback. Please make sure you attach as many details as you can. What is your camera, what is your use case (real-estate, astrophotography, photographing birds…), what would be required to make your work easier…"
    },
  {
    question: "I want a refund.",
    answer: "No problem. We would love your feedback and a chance to fix the issue first. If you don’t want to wait, you can Request a Refund here."
  },
  {
    question: "I love the app. I want to help.",
    answer: "That’s great to hear! If you enjoy using Shutter, please make sure to leave a review in the App Store. It really helps us a lot."
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Guides() {
  return (
    <div>
      <Head>
        <title>Shutter</title>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      </Head>

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

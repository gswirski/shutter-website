/* This example requires Tailwind CSS v2.0+ */
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../../components/footer'
import Menu from '../../components/menu'

export default function Guides() {
  return (
    <div>
      <Head>
        <title>Shutter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div>

            <h4 className="mt-4 text-xl text-gray-900 font-semibold">The app doesn’t connect to the camera.</h4>

            <p className="mt-4 text-base text-gray-500">
                This sounds like a bug. Please make sure you’ve attached a diagnostic report and we will investigate right away. If you haven’t attached the report yet, you can do so from the app. Please go to “Help & Support” -> “Email Support” and choose “Yes” to attach the report.
            </p>

            <h4 className="mt-4 text-xl text-gray-900 font-semibold">
              The app is showing an error: “Please upgrade Smart Remote Control”. Exposure controls don’t work.
            </h4>

            <p className="default-p">
              You need to upgrade Sony’s Smart Remote Control in camera. This will enable exposure settings, focus controls, continuous and video modes. Upgrade instructions here.
            </p>

            <h4 className="mt-4 text-xl text-gray-900 font-semibold">
              I cannot control focus from the app.
            </h4>

            <p className="default-p">
              If you don’t see an orange “please upgrade remote control” message, it means that your camera does not support remote focus control. Unfortunately, this is hardware limitation and no app can solve that. The good news is that your camera probably has Eye-AF — you can leverage it to get great results:
            </p>

            <p className="default-p">
              When photographing people, set AF to “Wide AF area” and let the camera do the work. Sony cameras are great at finding faces. You can even prioritize certain people in camera settings.
              When photographing other subjects, pre-select the focus point in camera and make sure your subject will be inside that point when you remotely trigger the camera. The wider the point, the easier it’ll be to focus on the subject.
              Consider switching to manual focus. You can use AF to focus on your subject, and then switch camera to MF mode to avoid focus changes.
            </p>

            <h4 className="mt-4 text-xl text-gray-900 font-semibold">
              Exposure controls disappear when focusing.
            </h4>

            <p className="default-p">
              This is how your camera works. Whenever you focus (whether it’s in camera or via our app), the camera will lock the exposure settings until you take a photo or cancel action.
            </p>

            <h4 className="mt-4 text-xl text-gray-900 font-semibold">
              My camera is shooting JPEG. How do I switch to RAW?
            </h4>

            <p className="default-p">
              Cameras that connect using “Smart Remote Control” have separate settings for remote shooting. Please make sure you switch to the RAW format in the camera menu after you connect to our app.
            </p>

            <h4 className="mt-4 text-xl text-gray-900 font-semibold">
              I have a feature request/feedback.
            </h4>

            <p className="default-p">
              Simply contact us at help@shutter.dev or use the web form. We love feedback. Please make sure you attach as many details as you can. What is your camera, what is your use case (real-estate, astrophotography, photographing birds…), what would be required to make your work easier…
            </p>

            <h4 className="mt-4 text-xl text-gray-900 font-semibold">
              I want a refund.
            </h4>

            <p className="default-p">
              No problem. We would love your feedback and a chance to fix the issue first. If you don’t want to wait, you can Request a Refund here.
            </p>

            <h4 className="mt-4 text-xl text-gray-900 font-semibold">
              I love the app. I want to help.
            </h4>

            <p className="default-p">
              That’s great to hear! If you enjoy using Shutter, please make sure to leave a review in the App Store. It really helps us a lot.
            </p>
          </div>
        </div>
      </div>


      <Footer />
    </div>


  )
}

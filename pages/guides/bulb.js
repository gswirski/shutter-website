import Link from 'next/link'
import Footer from '../../components/footer'
import ShutterHead from '../../components/head'
import Menu from '../../components/menu'

export default function Guides() {
  return (
    <div>
      <ShutterHead />
      <Menu />

      <div className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-12">
            <Link href="/guides">
              <a className="block lg:text-center default-a font-semibold tracking-wide uppercase">
                Guides
              </a>
            </Link>
            <h2 className="lg:text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How to focus without "tap to focus"
            </h2>

            <p className="mt-4 max-w-lg text-xl text-gray-500 lg:mx-auto lg:text-center">
              For users of Sony a6100, a6400, a6600, a7 III, a7R III.
            </p>
          </div>
          <div className='prose mx-auto'>

            <p>If you own Sony a6100, a6400, a6600, a7 III, a7R III you might have noticed that the remote app is unable to control focus points. Neither Imaging Edge Mobile, nor any other 3rd party app can do it. But we have a solution that will allow you to take sharp pictures.</p>

            <p>Sadly, the control of focus points is not allowed by the camera itself. This is a hardware limitation and no remote app can work around that. However, that doesn’t mean that you cannot take sharp self-portraits or travel photos with these cameras. The excellent Eye Autofocus comes to the rescue.</p>

            <ul>
              <li>When photographing people, set AF to “Wide AF area” and let the camera do the work. Sony cameras are great at finding faces. You can even prioritize certain people in camera settings.
              </li>
              <li>When photographing other subjects, pre-select the focus point in camera and make sure your subject will be inside that point when you remotely trigger the camera. The wider the point, the easier it’ll be to focus on the subject.
              </li>
              <li>Consider switching to manual focus. You can use AF to focus on your subject, and then switch camera to MF mode to avoid focus changes.
              </li>
            </ul>
          </div>
        </div>
      </div>


      <Footer />
    </div>


  )
}

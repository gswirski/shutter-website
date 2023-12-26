
import Image from 'next/image'
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pb-12">
              <Link
                  href="#"
                  className="block lg:text-center default-a font-semibold tracking-wide uppercase">
                
                  Announcement
                
              </Link>
              <h2 className="lg:text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Photo Transfers &amp; PowerShot support
              </h2>

              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto lg:text-center">
              We just released a new version of Shutter. It’s full of new features and enhancements so I thought I’d share how it can improve your photography workflow.             </p>
            </div>
            <div className='prose mx-auto'>
              <p>Summary of what’s new:</p>

              <ul>
                  <li><a href="#new-icons" data-type="URL">New icons</a></li>
                  <li><a href="#powershot-support">Canon PowerShot support</a></li>
                  <li><a href="#photo-transfer">Photo Transfer</a></li>
                  <li><a href="#download">Download Shutter update</a></li>
              </ul>


              <h2 id="new-icons">New Icons</h2>
              <div className="relative h-24">
              <Image
                    layout='fill'
                    objectFit='scale-down'
                    src="/logo_change.png" />
              </div>
              <p>Shutter started as a simple intervalometer app (think advanced timer). Since then, it grew to be a complete companion for your Canon camera. To represent that change, we’re changing our app icon!</p>
              <p>Shutter comes with a set of beautiful alternative icons. If you want to customize your home screen, head over to the “Support” tab → “Change app icon” and select one of our 15 beautiful designs.</p>

              <h2 id="powershot-support">Canon PowerShot support</h2>
              <p>If you have a PowerShot camera released in the last 7 years, you can now fully enjoy Shutter! This includes popular models like PowerShot G1 X, G5 X, G7 X, G9 X, SX-series… <a href="/cameras">head on to our website to see the full list.</a></p>

              <h2 id="photo-transfer">Photo Transfer</h2>
              <p>We took extra long to make sure it’s extra polished! A few highlights:</p>
              <ul>
                  <li><a href="#photo-transfer-filter">Filter by date and rating</a></li>
                  <li><a href="#photo-transfer-raw-jpeg">JPEG/RAW selector</a></li>
                  <li><a href="#photo-transfer-photos">Photos library integration</a></li>
                  <li><a href="#photo-transfer-speed">Faster shooting experience</a></li>
              </ul>

              <h3 id="photo-transfer-filter">Filter by date and rating</h3>
              <div className="grid grid-cols-3 items-center gap-4">
                  <div className='col-span-2'>
                      <p>Instead of loading all the thumbnails, rate your favorite images in camera, and pull up exactly what you’re looking for in Shutter.</p>
                  </div>
                  <div>
                  <div className="relative h-48">
                      <Image
                          layout='fill'
                          objectFit='scale-down'
                          src="/rating_filter.png" />
                      </div>
                  </div>
              </div>

              <h3 id="photo-transfer-raw-jpeg">JPEG/RAW selector</h3>
              <p>If you shoot RAW, Shutter gives you two options:</p>
              <ul>
                  <li>Download the original RAW image for a full creative control in your favorite editor (e.g. Photos, Lightroom or similar).</li>
                  <li>Automatically develop the image in camera, and get a JPEG file ready to be shared with your friends and family.</li>
              </ul>

              <h3 id="photo-transfer-photos">Photos library integration</h3>
              <p>All photos downloaded with Shutter go directly to your Photos collection. This way, they are easily available in your favorite photo editor, and ready to be shared with your friends and family.</p>

              <h3 id="photo-transfer-speed">Faster shooting experience</h3>
              <p>Now that photo transfers are directly integrated with our photo viewer, Shutter no longer needs to fetch photo previews immediately after shot. This means much faster shooting speed!</p>

              <h2 id="download">Download Shutter update</h2>
              <div className="grid grid-cols-3 items-center gap-4">
                  <div className='col-span-2'>
                      <p><a href="https://apps.apple.com/us/app/shutter-canon-eos-remote/id1562636889">Click here to download the latest version from the App Store.</a></p>
                      <p>If you are reading this on your computer, point your iPhone or iPad camera to the QR code on the right.</p>
                  </div>
                  <div>
                  <div className="relative h-48">
                      <Image
                          layout='fill'
                          objectFit='scale-down'
                          src="/download_canon_qr.png" />
                      </div>
                  </div>
              </div>

              <hr />

  <p>So there you have it. I’m sure you are going to enjoy these updates.</p>
  <p>If you created something cool using Shutter, please share it with us. Nothing makes us happier than seeing how creative people around the world use our tools.</p>
  <p>&mdash; Grzegorz</p>

            </div>
          </div>
        </div>
      </div>
  );
}
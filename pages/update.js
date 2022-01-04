
/* This example requires Tailwind CSS v2.0+ */
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer'
import Menu from '../components/menu'

export default function Guides() {
  return (
    <div>
      <Head>
        <title>Shutter</title>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      </Head>

      <Menu />

      <div className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-12">
            <Link href="/guides">
              <a className="block lg:text-center default-a font-semibold tracking-wide uppercase">
                Guides
              </a>
            </Link>
            <p className="lg:text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Update Sony’s Smart Remote Control
            </p>

            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto lg:text-center">
              Some Sony cameras require a software update to allow for exposure and focus controls. This document will walk you through the update process to unlock all Shutter features.
            </p>
          </div>
          <div className='prose mx-auto'>

            <p>You’ll need around 20 min, your camera charged to at least 60%, and access to Wi-Fi. We recommend following this guide at a computer. To open this page, simply type this address in your web browser:</p>



            <p className='bg-gray-800 text-gray-200 rounded-xl p-6 text-xl text-center tracking-wide'>
              <span className='text-gray-500 font-light'>https://</span><span className='font-medium'>shutter.dev/update</span></p>


            <h2>Option A. Easier, but requires a computer</h2>



            <ul class="has-normal-font-size"><li><a href="https://www.playmemoriescameraapps.com/portal/usbdetail.php?eid=IS9104-NPIA09014_00-F00002">Navigate to Sony’s PlayMemories website.</a></li><li>Click the “Install” button on the left.</li><li>Follow the instructions provided by Sony.</li></ul>



            <h2>Option B. Update mostly in camera</h2>



            <p>If for some reason you cannot complete “Option A”, you can still update “Smart Remote Control” using Wi-Fi in your camera. The process takes a little longer but sometimes it’s the only option.</p>



            <h3>Step 1. Create an account with Sony</h3>



            <p>We recommend doing this step at a computer, tablet or smartphone. You could do it in camera but having a real keyboard helps a lot.</p>



            <p>To start, create an account with&nbsp;<a href="http://account.sonyentertainmentnetwork.com/">Sony Entertainment Network</a>. We have a few tips here:</p>



            <ol class="has-normal-font-size"><li>Make sure you select a region that matches your current location. Otherwise, you might be unable to log in.</li><li>Pick an easy password. You’ll need to enter it in camera. You can change it to something more secure after the upgrade.</li><li>Sony will send you an email. Make sure to follow the confirmation link from that email.&nbsp;<strong>Skip 2 factor authentication and phone number verification.</strong></li></ol>



            <h3>Step 2. Update Smart Remote Control</h3>



            <p>Once your account is created and activated, you may proceed to the update process. Make sure your camera is well charged (at least 60%) and your Sony account has 2 factor authentication disabled.</p>



            <ol class="has-normal-font-size"><li>Make sure your camera’s time and region are correct. Otherwise you won’t be able to connect to Sony website. To set time in camera: “Menu” → toolbox icon (the last one) → Area and time → set accordingly</li><li>Go back to the main menu → 4th tab with little squares → “Application List”</li><li>Select “PlayMemories Camera Apps”</li><li>Connect to your home Wi-Fi<ol><li>Click “Network Settings”</li><li>“Access Point Set.”</li><li>Select your Wi-Fi name</li><li>Enter password and click “OK”</li></ol></li><li>Once connected to the Wi-Fi network, you should see the “PlayMemories Camera Apps” website with “Smart Remote Control” and “Update” buttons. Click on the “Update”.</li><li>Click “Update” again</li><li>You should be presented with a question: “You must have a Sony account. Do you have one?”. Choose “Yes”.</li><li>Enter the login and password that you’ve created earlier.</li><li>Click “Agree and continue”.</li><li>Start the update process. It should take about 5 minutes.</li></ol>



            <h3>Getting help</h3>



            <p>If you have any problems along the way or after the update, don’t hesitate to contact us at&nbsp;<a href="mailto:help@shutter.dev">help@shutter.dev</a>.</p>
          </div>
        </div>
      </div>


      <Footer />
    </div>


  )
}


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
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-12">
            <Link href="/guides">
              <a className="block lg:text-center default-a font-semibold tracking-wide uppercase">
                Guides
              </a>
            </Link>
            <p className="lg:text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How To Connect
            </p>

            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto lg:text-center">
            We’ve designed Shutter to be as easy to connect as possible. If you are using an iPhone 7 or newer, you should be able to connect with your Sony Alpha or Cyber-shot simply by touching the NFC logo (little “N” mark) printed on the side of the camera.
            </p>
          </div>
          <div className='prose mx-auto'>




<p>Table of contents:</p>



<ul><li><a href="#tap-to-connect-short" data-type="URL">Use “Tap to Connect” on iPhone 7 or newer</a><ul><li><a href="#tap-to-connect-long" data-type="URL">Longer explanation</a></li></ul></li><li><a href="#connect-manually">Manually connect on iPad or iPhone</a></li><li><a href="#connect-watch">Connect Apple Watch to your camera</a></li><li><a href="#live-view-performance">Improve connection performance</a></li></ul>



<h2 id="tap-to-connect-short">“Tap to connect” and done</h2>



<p>If you have an iPhone 7 or newer, just follow these simple steps. If you need more information, you’ll find complete explanation below.</p>



<ol><li>Open Shutter and click “Tap to connect”.</li><li>Locate the
{' '}<Image src="/how-to-connect/nfc.png" width={20} height={20} />{' '}
NFC logo on the side of the camera and touch it with the top edge of your iPhone.</li><li>Click “Join” to connect with the camera.</li><li><em>iOS 14 only: if step 3 fails and you see an error, just try again – it resolves the problem.</em></li><li><strong>That’s it</strong>.</li></ol>



<h2 id="tap-to-connect-long">“Tap to connect” – longer explanation</h2>



<p>If you have an iPhone 7 or newer, Shutter will display a “Tap to connect” button at the top of the screen.</p>


<div className='grid grid-cols-2'>
    <div className='col-1 relative h-96'>
      <Image src="/how-to-connect/tap-1.jpeg" layout='fill' 
                objectFit='scale-down'/>
    </div>
    <div className='col-1 relative h-96'>
      <Image src="/how-to-connect/tap-2.jpeg" layout='fill' 
                objectFit='scale-down'/>
    </div>
</div>

<p class="has-text-align-center">When you click “Tap to connect”, you will be prompted to touch the camera with your phone. </p>



<p>First, click “Tap to connect” to initiate connection process. Then find a little
{' '}<Image src="/how-to-connect/nfc.png" width={20} height={20} />{' '}
   NFC logo printed on the side of your camera. If you have a Sony Alpha (e.g. a5000-series, a6000-series, a7-series, a9-series) camera, it’ll be printed on the grip, right next to the SD card slot. If you have a Cyber-shot (RX-series, ZV-series or other) it’ll be on the left side of the camera.</p>



<p>You need to <strong>touch the 
{' '}<Image src="/how-to-connect/nfc.png" width={20} height={20} />{' '}
   NFC logo with the top edge of your iPhone</strong>. The same way as if you would use Apple Pay. After successful NFC scan, you will be asked if you want to join a Wi-Fi network. Click “Join”.</p>


<div className='grid grid-cols-2 gap-8'>
    <div className='col-1 relative h-48'>
      <Image src="/how-to-connect/tap-4.jpeg" layout='fill' 
                objectFit='scale-down'/>
    </div>
    <div className='col-1 relative'>
    <p class="has-secondary-color has-text-color"><strong>Technical Note: </strong>Sony cameras use Wi-Fi to communicate with remote devices. This doesn’t mean that you need to stay at home or office to use the app. The camera generates its own network that can be used anywhere you want.</p>
    </div>
</div>



<p class="wp-block-coblocks-highlight">On some iOS 14/15 devices, the initial connection attempt might fail and display a “Unable to join the network” error. When that happens, click “Tap to connect” again, touch the “N” mark and click “Join” again. It always succeeds on the second try.</p>



<p><strong>That’s it.</strong> You are now connected.</p>



<h2 id="connect-manually">Connect by manually entering camera details</h2>



<p>If you are using iPad, iPhone older than iPhone 7, or find NFC impractical due to your setup (e.g. due to a video rig or camera placement), you can manually enter camera details in the iOS Settings app. The initial setup takes a little more time but subsequent connections are really easy!</p>



<p>First, you need to identify what kind of camera you have. Turn on the camera and go to “Menu”. Depending on what you see, choose one of the options below.</p>



<ul><li>
<a href="#connect-manually-gen1" data-type="internal" data-id="#connect-manually-gen1">
<Image src="/how-to-connect/toolbar-a.png" height={24} width={290} objectFit='scale-down'/><br />
If you see an Applications icon
{' '}<Image src="/how-to-connect/toolbar-a-icon.png" width={24} height={24} />{' '}, go to PlayMemories Cameras.</a><br /></li>
<li>
<a href="#connect-manually-gen2">
<Image src="/how-to-connect/toolbar-b.png" height={24} width={240} objectFit='scale-down'/><br />
If you see a green Network icon
{' '}<Image src="/how-to-connect/toolbar-b-icon.png" width={24} height={24} />{' '}
, go to cameras released after 2017</a>.</li></ul>



<h3 id="connect-manually-gen1">PlayMemories Cameras</h3>



<p>Open Network1 tab and make sure Airplane Mode is switched OFF.</p>

<div className='text-center'>
<Image src="/how-to-connect/gen1_step1.jpg" width={300} height={170} objectFit='scale-down' />
</div>


<p>Open Applications List from Applications tab.</p>



<div className='text-center'>
<Image src="/how-to-connect/gen1_step2.jpg" width={300} height={170} objectFit='scale-down' />
</div>


<p>Select Smart Remote Control. <a href="https://shutter.dev/update/" data-type="page" data-id="62">If you see “Smart Remote Embedded” that’s OK, too. The camera will connect with limited options. Please follow our update guide to enable all features.</a></p>



<div className='text-center'>
<Image src="/how-to-connect/gen1_step3.jpg" width={300} height={170} objectFit='scale-down' />
</div>


<p>Camera will display connection details.</p>



<div className='text-center'>
<Image src="/how-to-connect/gen1_step4.jpg" width={300} height={170} objectFit='scale-down' />
</div>


<p>Open your smartphone’s Wi-Fi settings and enter details displayed by the camera.</p>



<div className='text-center'>
<Image src="/how-to-connect/network-4.png" width={300} height={170} objectFit='scale-down' />
</div>


<p><strong>Smart Remote Embedded uses different settings than the default shooting mode. Make sure the file format and exposure settings are right!</strong></p>



<div className='text-center'>
<Image src="/how-to-connect/gen1_step5.jpg" width={300} height={170} objectFit='scale-down' />
</div>



<p class="wp-block-coblocks-highlight"><mark class="wp-block-coblocks-highlight__content"><a href="https://shutter.dev/update/" data-type="page" data-id="62">If all exposure settings are disabled in Shutter app, please update "Smart Remote Control" app in camera. Follow official Sony instructions on how to upgrade camera software.</a></mark></p>



<h3 id="connect-manually-gen2">Cameras Released After 2017 (Sony a7 III and newer)</h3>



<p>Open Network1 tab in camera Menu. Click on Ctrl w/ Smartphone option.</p>



<div className='text-center'>
<Image src="/how-to-connect/network-1.png" width={300} height={170} objectFit='scale-down' />
</div>



<p>Make sure both Ctrl w/ Smartphone and Always Connected options are On.</p>



<div className='text-center'>
<Image src="/how-to-connect/network-2.png" width={300} height={170} objectFit='scale-down' />
</div>



<p>Open Connection page and click trash icon to switch to password view.</p>



<div className='text-center'>
<Image src="/how-to-connect/network-3.png" width={300} height={170} objectFit='scale-down' />
</div>



<p>Open your smartphone’s Wi-Fi settings and enter details displayed by the camera.</p>



<div className='text-center'>
<Image src="/how-to-connect/network-4.png" width={300} height={170} objectFit='scale-down' />
</div>



<h2 id="watch-connect">Connecting Apple Watch to the camera</h2>



<ol><li><a href="#tap-to-connect-short" data-type="URL">Make sure your iPhone is connected to your camera’s network.</a></li><li>Open the Apple Watch app.</li><li><strong>That’s it!</strong> The Watch will automatically detect the camera.</li></ol>
	</div>
        </div>
      </div>


      <Footer />
    </div>


  )
}


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

<p>We’ve designed Shutter to be as easy to connect as possible. If you are using an iPhone 7 or newer, you should be able to connect with your Sony Alpha or Cyber-shot simply by touching the NFC logo (little “N” mark) printed on the side of the camera.</p>



<p>Table of contents:</p>



<ul><li><a href="#tap-to-connect-short" data-type="URL">Use “Tap to Connect” on iPhone 7 or newer</a><ul><li><a href="#tap-to-connect-long" data-type="URL">Longer explanation</a></li></ul></li><li><a href="#connect-manually">Manually connect on iPad or iPhone</a></li><li><a href="#connect-watch">Connect Apple Watch to your camera</a></li><li><a href="#live-view-performance">Improve connection performance</a></li></ul>



<h2 id="tap-to-connect-short">“Tap to connect” and done</h2>



<p>If you have an iPhone 7 or newer, just follow these simple steps. If you need more information, you’ll find complete explanation below.</p>



<ol id="block-12482c58-5ee9-487c-a893-812f610337ca" class="has-small-font-size"><li>Open Shutter and click “Tap to connect”.</li><li>Locate the <img data-attachment-id="249" data-permalink="https://shutter.dev/guides/connect/2000px-nfc_logo-svg/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?fit=2000%2C2000&amp;ssl=1" data-orig-size="2000,2000" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="2000px-NFC_logo.svg" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?fit=300%2C300&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?fit=750%2C750&amp;ssl=1" loading="lazy" width="750" height="750" class="wp-image-249" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=750%2C750&amp;ssl=1" alt="" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?w=2000&amp;ssl=1 2000w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=1024%2C1024&amp;ssl=1 1024w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=768%2C768&amp;ssl=1 768w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=1536%2C1536&amp;ssl=1 1536w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=1200%2C1200&amp;ssl=1 1200w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=800%2C800&amp;ssl=1 800w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=400%2C400&amp;ssl=1 400w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=200%2C200&amp;ssl=1 200w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=1568%2C1568&amp;ssl=1 1568w" sizes="(max-width: 750px) 100vw, 750px" data-recalc-dims="1" /> NFC logo on the side of the camera and touch it with the top edge of your iPhone.</li><li>Click “Join” to connect with the camera.</li><li><em>iOS 14 only: if step 3 fails and you see an error, just try again – it resolves the problem.</em></li><li><strong>That’s it</strong>.</li></ol>



<h2 id="tap-to-connect-long">“Tap to connect” – longer explanation</h2>



<p>If you have an iPhone 7 or newer, Shutter will display a “Tap to connect” button at the top of the screen.</p>



<div class="wp-block-columns">
<div class="wp-block-column is-vertically-aligned-center">
<figure class="wp-block-image size-large"><img data-attachment-id="237" data-permalink="https://shutter.dev/guides/connect/img_61255aab258c-1/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_61255AAB258C-1.jpeg?fit=1125%2C1290&amp;ssl=1" data-orig-size="1125,1290" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;1&quot;}" data-image-title="IMG_61255AAB258C-1" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_61255AAB258C-1.jpeg?fit=262%2C300&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_61255AAB258C-1.jpeg?fit=750%2C860&amp;ssl=1" loading="lazy" width="750" height="860" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_61255AAB258C-1.jpeg?resize=750%2C860&amp;ssl=1" alt="" class="wp-image-237" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_61255AAB258C-1.jpeg?resize=893%2C1024&amp;ssl=1 893w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_61255AAB258C-1.jpeg?resize=262%2C300&amp;ssl=1 262w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_61255AAB258C-1.jpeg?resize=768%2C881&amp;ssl=1 768w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_61255AAB258C-1.jpeg?w=1125&amp;ssl=1 1125w" sizes="(max-width: 750px) 100vw, 750px" data-recalc-dims="1" /></figure>
</div>



<div class="wp-block-column is-vertically-aligned-center">
<figure class="wp-block-image size-large"><img data-attachment-id="245" data-permalink="https://shutter.dev/img_3e94ee4952a7-1-2/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_3E94EE4952A7-1-edited.jpeg?fit=1125%2C1500&amp;ssl=1" data-orig-size="1125,1500" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;1&quot;}" data-image-title="IMG_3E94EE4952A7-1" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_3E94EE4952A7-1-edited.jpeg?fit=225%2C300&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_3E94EE4952A7-1-edited.jpeg?fit=750%2C1000&amp;ssl=1" loading="lazy" width="750" height="1000" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_3E94EE4952A7-1-edited.jpeg?resize=750%2C1000&amp;ssl=1" alt="" class="wp-image-245" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_3E94EE4952A7-1-edited.jpeg?w=1125&amp;ssl=1 1125w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_3E94EE4952A7-1-edited.jpeg?resize=225%2C300&amp;ssl=1 225w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_3E94EE4952A7-1-edited.jpeg?resize=768%2C1024&amp;ssl=1 768w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_3E94EE4952A7-1-edited.jpeg?resize=900%2C1200&amp;ssl=1 900w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_3E94EE4952A7-1-edited.jpeg?resize=600%2C800&amp;ssl=1 600w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_3E94EE4952A7-1-edited.jpeg?resize=300%2C400&amp;ssl=1 300w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_3E94EE4952A7-1-edited.jpeg?resize=150%2C200&amp;ssl=1 150w" sizes="(max-width: 750px) 100vw, 750px" data-recalc-dims="1" /></figure>
</div>
</div>



<p class="has-text-align-center">When you click “Tap to connect”, you will be prompted to touch the camera with your phone. </p>



<p>First, click “Tap to connect” to initiate connection process. Then find a little <img data-attachment-id="249" data-permalink="https://shutter.dev/guides/connect/2000px-nfc_logo-svg/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?fit=2000%2C2000&amp;ssl=1" data-orig-size="2000,2000" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="2000px-NFC_logo.svg" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?fit=300%2C300&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?fit=750%2C750&amp;ssl=1" loading="lazy" width="750" height="750" class="wp-image-249" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=750%2C750&amp;ssl=1" alt="" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?w=2000&amp;ssl=1 2000w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=1024%2C1024&amp;ssl=1 1024w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=768%2C768&amp;ssl=1 768w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=1536%2C1536&amp;ssl=1 1536w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=1200%2C1200&amp;ssl=1 1200w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=800%2C800&amp;ssl=1 800w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=400%2C400&amp;ssl=1 400w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=200%2C200&amp;ssl=1 200w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=1568%2C1568&amp;ssl=1 1568w" sizes="(max-width: 750px) 100vw, 750px" data-recalc-dims="1" /> NFC logo printed on the side of your camera. If you have a Sony Alpha (e.g. a5000-series, a6000-series, a7-series, a9-series) camera, it’ll be printed on the grip, right next to the SD card slot. If you have a Cyber-shot (RX-series, ZV-series or other) it’ll be on the left side of the camera.</p>



<p>You need to <strong>touch the <img data-attachment-id="249" data-permalink="https://shutter.dev/guides/connect/2000px-nfc_logo-svg/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?fit=2000%2C2000&amp;ssl=1" data-orig-size="2000,2000" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="2000px-NFC_logo.svg" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?fit=300%2C300&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?fit=750%2C750&amp;ssl=1" loading="lazy" width="750" height="750" class="wp-image-249" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=750%2C750&amp;ssl=1" alt="" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?w=2000&amp;ssl=1 2000w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=1024%2C1024&amp;ssl=1 1024w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=768%2C768&amp;ssl=1 768w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=1536%2C1536&amp;ssl=1 1536w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=1200%2C1200&amp;ssl=1 1200w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=800%2C800&amp;ssl=1 800w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=400%2C400&amp;ssl=1 400w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=200%2C200&amp;ssl=1 200w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/2000px-NFC_logo.svg_-1.png?resize=1568%2C1568&amp;ssl=1 1568w" sizes="(max-width: 750px) 100vw, 750px" data-recalc-dims="1" /> NFC logo with the top edge of your iPhone</strong>. The same way as if you would use Apple Pay. After successful NFC scan, you will be asked if you want to join a Wi-Fi network. Click “Join”.</p>



<div class="wp-block-columns">
<div class="wp-block-column is-vertically-aligned-center">
<div class="wp-block-image"><figure class="aligncenter size-medium"><img data-attachment-id="251" data-permalink="https://shutter.dev/guides/connect/img_04b042232600-1/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_04B042232600-1.jpeg?fit=1125%2C577&amp;ssl=1" data-orig-size="1125,577" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;1&quot;}" data-image-title="IMG_04B042232600-1" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_04B042232600-1.jpeg?fit=300%2C154&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_04B042232600-1.jpeg?fit=750%2C385&amp;ssl=1" loading="lazy" width="300" height="154" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_04B042232600-1.jpeg?resize=300%2C154&amp;ssl=1" alt="" class="wp-image-251" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_04B042232600-1.jpeg?resize=300%2C154&amp;ssl=1 300w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_04B042232600-1.jpeg?resize=1024%2C525&amp;ssl=1 1024w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_04B042232600-1.jpeg?resize=768%2C394&amp;ssl=1 768w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/IMG_04B042232600-1.jpeg?w=1125&amp;ssl=1 1125w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></figure></div>
</div>



<div class="wp-block-column is-vertically-aligned-center">
<p class="has-secondary-color has-text-color"><strong>Technical Note: </strong>Sony cameras use Wi-Fi to communicate with remote devices. This doesn’t mean that you need to stay at home or office to use the app. The camera generates its own network that can be used anywhere you want.</p>
</div>
</div>



<p class="wp-block-coblocks-highlight"><mark class="wp-block-coblocks-highlight__content">On some iOS 14 devices, the initial connection attempt might fail and display a “Unable to join the network” error. When that happens, click “Tap to connect” again, touch the “N” mark and click “Join” again. It always succeeds on the second try.</mark></p>



<p><strong>That’s it.</strong> You are now connected.</p>



<h2 id="connect-manually">Connect by manually entering camera details</h2>



<p>If you are using iPad, iPhone older than iPhone 7, or find NFC impractical due to your setup (e.g. due to a video rig or camera placement), you can manually enter camera details in the iOS Settings app. The initial setup takes a little more time but subsequent connections are really easy!</p>



<p>First, you need to identify what kind of camera you have. Turn on the camera and go to “Menu”. Depending on what you see, choose one of the options below.</p>



<ul><li><a href="#connect-manually-gen1" data-type="internal" data-id="#connect-manually-gen1"><img data-attachment-id="264" data-permalink="https://shutter.dev/guides/connect/screenshot-2021-01-13-at-14-24-16/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.24.16.png?fit=1990%2C166&amp;ssl=1" data-orig-size="1990,166" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="Screenshot 2021-01-13 at 14.24.16" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.24.16.png?fit=300%2C25&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.24.16.png?fit=750%2C62&amp;ssl=1" loading="lazy" width="750" height="63" class="wp-image-264" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.24.16.png?resize=750%2C63&amp;ssl=1" alt="" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.24.16.png?w=1990&amp;ssl=1 1990w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.24.16.png?resize=300%2C25&amp;ssl=1 300w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.24.16.png?resize=1024%2C85&amp;ssl=1 1024w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.24.16.png?resize=768%2C64&amp;ssl=1 768w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.24.16.png?resize=1536%2C128&amp;ssl=1 1536w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.24.16.png?resize=1200%2C100&amp;ssl=1 1200w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.24.16.png?resize=1568%2C131&amp;ssl=1 1568w" sizes="(max-width: 750px) 100vw, 750px" data-recalc-dims="1" /><br />If you see an Applications icon <img data-attachment-id="265" data-permalink="https://shutter.dev/guides/connect/screenshot-2021-01-13-at-14-24-22/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.24.22.png?fit=118%2C110&amp;ssl=1" data-orig-size="118,110" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="Screenshot 2021-01-13 at 14.24.22" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.24.22.png?fit=118%2C110&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.24.22.png?fit=118%2C110&amp;ssl=1" loading="lazy" width="118" height="110" class="wp-image-265" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.24.22.png?resize=118%2C110&amp;ssl=1" alt="" data-recalc-dims="1" />, go to PlayMemories Cameras.</a><br /></li><li><a href="#connect-manually-gen2"><img data-attachment-id="268" data-permalink="https://shutter.dev/guides/connect/screenshot-2021-01-13-at-14-26-25/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.26.25.png?fit=2760%2C276&amp;ssl=1" data-orig-size="2760,276" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="Screenshot 2021-01-13 at 14.26.25" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.26.25.png?fit=300%2C30&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.26.25.png?fit=750%2C75&amp;ssl=1" loading="lazy" width="750" height="75" class="wp-image-268" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.26.25.png?resize=750%2C75&amp;ssl=1" alt="" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.26.25.png?w=2760&amp;ssl=1 2760w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.26.25.png?resize=300%2C30&amp;ssl=1 300w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.26.25.png?resize=1024%2C102&amp;ssl=1 1024w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.26.25.png?resize=768%2C77&amp;ssl=1 768w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.26.25.png?resize=1536%2C154&amp;ssl=1 1536w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.26.25.png?resize=2048%2C205&amp;ssl=1 2048w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.26.25.png?resize=1200%2C120&amp;ssl=1 1200w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.26.25.png?resize=1568%2C157&amp;ssl=1 1568w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.26.25.png?w=2250&amp;ssl=1 2250w" sizes="(max-width: 750px) 100vw, 750px" data-recalc-dims="1" /><br />If you see a green Network icon <img data-attachment-id="267" data-permalink="https://shutter.dev/guides/connect/screenshot-2021-01-13-at-14-26-33/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.26.33.png?fit=294%2C248&amp;ssl=1" data-orig-size="294,248" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="Screenshot 2021-01-13 at 14.26.33" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.26.33.png?fit=294%2C248&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.26.33.png?fit=294%2C248&amp;ssl=1" loading="lazy" width="294" height="248" class="wp-image-267" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/Screenshot-2021-01-13-at-14.26.33.png?resize=294%2C248&amp;ssl=1" alt="" data-recalc-dims="1" />, go to cameras released after 2017</a>.</li></ul>



<h3 id="connect-manually-gen1">PlayMemories Cameras</h3>



<p>Open Network1 tab and make sure Airplane Mode is switched OFF.</p>



<figure class="wp-block-image size-medium"><img data-attachment-id="274" data-permalink="https://shutter.dev/guides/connect/gen1_step1/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step1.jpg?fit=1000%2C570&amp;ssl=1" data-orig-size="1000,570" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="gen1_step1" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step1.jpg?fit=300%2C171&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step1.jpg?fit=750%2C428&amp;ssl=1" loading="lazy" width="300" height="171" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step1.jpg?resize=300%2C171&amp;ssl=1" alt="" class="wp-image-274" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step1.jpg?resize=300%2C171&amp;ssl=1 300w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step1.jpg?resize=768%2C438&amp;ssl=1 768w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step1.jpg?w=1000&amp;ssl=1 1000w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></figure>



<p>Open Applications List from Applications tab.</p>



<figure class="wp-block-image size-medium"><img data-attachment-id="276" data-permalink="https://shutter.dev/guides/connect/gen1_step2/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step2.jpg?fit=1000%2C570&amp;ssl=1" data-orig-size="1000,570" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="gen1_step2" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step2.jpg?fit=300%2C171&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step2.jpg?fit=750%2C428&amp;ssl=1" loading="lazy" width="300" height="171" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step2.jpg?resize=300%2C171&amp;ssl=1" alt="" class="wp-image-276" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step2.jpg?resize=300%2C171&amp;ssl=1 300w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step2.jpg?resize=768%2C438&amp;ssl=1 768w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step2.jpg?w=1000&amp;ssl=1 1000w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></figure>



<p>Select Smart Remote Control. <a href="https://shutter.dev/update/" data-type="page" data-id="62">If you see “Smart Remote Embedded” that’s OK, too. The camera will connect with limited options. Please follow our update guide to enable all features.</a></p>



<figure class="wp-block-image size-medium"><img data-attachment-id="277" data-permalink="https://shutter.dev/guides/connect/gen1_step3/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step3.jpg?fit=1000%2C570&amp;ssl=1" data-orig-size="1000,570" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="gen1_step3" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step3.jpg?fit=300%2C171&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step3.jpg?fit=750%2C428&amp;ssl=1" loading="lazy" width="300" height="171" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step3.jpg?resize=300%2C171&amp;ssl=1" alt="" class="wp-image-277" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step3.jpg?resize=300%2C171&amp;ssl=1 300w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step3.jpg?resize=768%2C438&amp;ssl=1 768w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step3.jpg?w=1000&amp;ssl=1 1000w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></figure>



<p>Camera will display connection details.</p>



<figure class="wp-block-image size-medium"><img data-attachment-id="278" data-permalink="https://shutter.dev/guides/connect/gen1_step4/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step4.jpg?fit=1000%2C570&amp;ssl=1" data-orig-size="1000,570" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="gen1_step4" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step4.jpg?fit=300%2C171&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step4.jpg?fit=750%2C428&amp;ssl=1" loading="lazy" width="300" height="171" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step4.jpg?resize=300%2C171&amp;ssl=1" alt="" class="wp-image-278" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step4.jpg?resize=300%2C171&amp;ssl=1 300w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step4.jpg?resize=768%2C438&amp;ssl=1 768w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step4.jpg?w=1000&amp;ssl=1 1000w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></figure>



<p>Open your smartphone’s Wi-Fi settings and enter details displayed by the camera.</p>



<figure class="wp-block-image size-medium"><img data-attachment-id="282" data-permalink="https://shutter.dev/guides/connect/network-4/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network-4.png?fit=585%2C420&amp;ssl=1" data-orig-size="585,420" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="network-4" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network-4.png?fit=300%2C215&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network-4.png?fit=585%2C420&amp;ssl=1" loading="lazy" width="300" height="215" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network-4.png?resize=300%2C215&amp;ssl=1" alt="" class="wp-image-282" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network-4.png?resize=300%2C215&amp;ssl=1 300w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network-4.png?w=585&amp;ssl=1 585w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></figure>



<p><strong>Smart Remote Embedded uses different settings than the default shooting mode. Make sure the file format and exposure settings are right!</strong></p>



<figure class="wp-block-image size-medium"><img data-attachment-id="280" data-permalink="https://shutter.dev/guides/connect/gen1_step5/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step5.jpg?fit=1000%2C570&amp;ssl=1" data-orig-size="1000,570" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;1&quot;}" data-image-title="gen1_step5" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step5.jpg?fit=300%2C171&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step5.jpg?fit=750%2C428&amp;ssl=1" loading="lazy" width="300" height="171" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step5.jpg?resize=300%2C171&amp;ssl=1" alt="" class="wp-image-280" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step5.jpg?resize=300%2C171&amp;ssl=1 300w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step5.jpg?resize=768%2C438&amp;ssl=1 768w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/gen1_step5.jpg?w=1000&amp;ssl=1 1000w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></figure>



<p class="wp-block-coblocks-highlight"><mark class="wp-block-coblocks-highlight__content"><a href="https://shutter.dev/update/" data-type="page" data-id="62">If all exposure settings are disabled in Shutter app, please update your camera firmware. Follow official Sony instructions on how to upgrade camera software.</a></mark></p>



<h3 id="connect-manually-gen2">Cameras Released After 2017 (Sony a7 III and newer)</h3>



<p>Open Network1 tab in camera Menu. Click on Ctrl w/ Smartphone option.</p>



<figure class="wp-block-image size-medium"><img data-attachment-id="284" data-permalink="https://shutter.dev/guides/connect/network_1/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network_1.png?fit=1422%2C1066&amp;ssl=1" data-orig-size="1422,1066" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="network_1" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network_1.png?fit=300%2C225&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network_1.png?fit=750%2C563&amp;ssl=1" loading="lazy" width="300" height="225" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network_1.png?resize=300%2C225&amp;ssl=1" alt="" class="wp-image-284" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network_1.png?resize=300%2C225&amp;ssl=1 300w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network_1.png?resize=1024%2C768&amp;ssl=1 1024w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network_1.png?resize=768%2C576&amp;ssl=1 768w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network_1.png?resize=1200%2C900&amp;ssl=1 1200w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network_1.png?resize=800%2C600&amp;ssl=1 800w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network_1.png?resize=400%2C300&amp;ssl=1 400w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network_1.png?resize=200%2C150&amp;ssl=1 200w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network_1.png?w=1422&amp;ssl=1 1422w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></figure>



<p>Make sure both Ctrl w/ Smartphone and Always Connected options are On.</p>



<figure class="wp-block-image size-medium"><img data-attachment-id="285" data-permalink="https://shutter.dev/guides/connect/network2/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network2.png?fit=1422%2C1066&amp;ssl=1" data-orig-size="1422,1066" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="network2" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network2.png?fit=300%2C225&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network2.png?fit=750%2C563&amp;ssl=1" loading="lazy" width="300" height="225" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network2.png?resize=300%2C225&amp;ssl=1" alt="" class="wp-image-285" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network2.png?resize=300%2C225&amp;ssl=1 300w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network2.png?resize=1024%2C768&amp;ssl=1 1024w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network2.png?resize=768%2C576&amp;ssl=1 768w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network2.png?resize=1200%2C900&amp;ssl=1 1200w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network2.png?resize=800%2C600&amp;ssl=1 800w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network2.png?resize=400%2C300&amp;ssl=1 400w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network2.png?resize=200%2C150&amp;ssl=1 200w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network2.png?w=1422&amp;ssl=1 1422w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></figure>



<p>Open Connection page and click trash icon to switch to password view.</p>



<figure class="wp-block-image size-medium"><img data-attachment-id="286" data-permalink="https://shutter.dev/guides/connect/network3/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network3.png?fit=2332%2C1740&amp;ssl=1" data-orig-size="2332,1740" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="network3" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network3.png?fit=300%2C224&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network3.png?fit=750%2C560&amp;ssl=1" loading="lazy" width="300" height="224" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network3.png?resize=300%2C224&amp;ssl=1" alt="" class="wp-image-286" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network3.png?resize=300%2C224&amp;ssl=1 300w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network3.png?resize=1024%2C764&amp;ssl=1 1024w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network3.png?resize=768%2C573&amp;ssl=1 768w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network3.png?resize=1536%2C1146&amp;ssl=1 1536w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network3.png?resize=2048%2C1528&amp;ssl=1 2048w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network3.png?resize=1200%2C895&amp;ssl=1 1200w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network3.png?resize=800%2C600&amp;ssl=1 800w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network3.png?resize=400%2C300&amp;ssl=1 400w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network3.png?resize=200%2C150&amp;ssl=1 200w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network3.png?resize=1568%2C1170&amp;ssl=1 1568w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network3.png?w=2250&amp;ssl=1 2250w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></figure>



<p>Open your smartphone’s Wi-Fi settings and enter details displayed by the camera.</p>



<figure class="wp-block-image size-medium"><img data-attachment-id="282" data-permalink="https://shutter.dev/guides/connect/network-4/" data-orig-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network-4.png?fit=585%2C420&amp;ssl=1" data-orig-size="585,420" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="network-4" data-image-description="" data-image-caption="" data-medium-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network-4.png?fit=300%2C215&amp;ssl=1" data-large-file="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network-4.png?fit=585%2C420&amp;ssl=1" loading="lazy" width="300" height="215" src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network-4.png?resize=300%2C215&amp;ssl=1" alt="" class="wp-image-282" srcset="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network-4.png?resize=300%2C215&amp;ssl=1 300w, https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/network-4.png?w=585&amp;ssl=1 585w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></figure>



<h2 id="watch-connect">Connecting Apple Watch to the camera</h2>



<ol><li><a href="#tap-to-connect-short" data-type="URL">Make sure your iPhone is connected to your camera’s network.</a></li><li>Open the Apple Watch app.</li><li><strong>That’s it!</strong> The Watch will automatically detect the camera.</li></ol>
	</div>
        </div>
      </div>


      <Footer />
    </div>


  )
}

import Head from "next/head"

export default function ShutterHead() {
    return (
      <Head>
        <title>Shutter - Remote Control App for Sony &amp; Canon Cameras</title>
        <meta
          name="description"
          content="Focus on making the best pictures. This smart iOS remote app is always with you.
                   Shutter is a trusted tool of over 25,000 photo &amp; video creators." />
        <meta
          name="keywords"
          content="Sony, Canon, Camera, Remote, Control, App, iOS, Smart" />
        <meta name="author" content="Camera Control Apps sp. z o.o." />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <script defer data-domain="shutter.dev" src="https://plausible.io/js/plausible.js"></script>
      </Head>
    )
}
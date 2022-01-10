import Head from "next/head"

export default function ShutterHead() {
    return (
      <Head>
        <title>Shutter</title>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <script defer data-domain="shutter.dev" src="https://plausible.io/js/plausible.js"></script>
      </Head>
    )
}
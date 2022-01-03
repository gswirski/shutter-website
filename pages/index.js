import Head from 'next/head'
import Header from '../components/header'
import Menu from '../components/menu'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shutter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      
      <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
        App Features
      </h2>


      <div className="snap-x w-full flex gap-6 overflow-x-auto no-scrollbar">
        <div className="scroll-ml-6 snap-start w-2/5 shrink-0 rounded-lg mt-8">
        <img src="https://i0.wp.com/shutter.dev/wp-content/uploads/2021/01/screenshot-2021-01-02-at-16.38.02.png?resize=278%2C451&ssl=1" />
          <h3 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-2xl">Beautiful &amp; Easy to Use</h3>
          <p>Shutter gets out of the way so you can focus on what matters the most – capturing beautiful moments.</p>
          <p>With our app designed to work with iPhone, iPad and Apple Watch, Shutter is always with you.</p>
        </div>

        <div className="scroll-ml-6 snap-start w-2/5 shrink-0 bg-red-100 rounded-lg p-4 mt-8">
          <h3>Beautiful & Easy to Use</h3>
          <p>Shutter gets out of the way so you can focus on what matters the most – capturing beautiful moments.</p>
          <p>With our app designed to work with iPhone, iPad and Apple Watch, Shutter is always with you.</p>
        </div>

        <div className="scroll-ml-6 snap-start w-2/5 shrink-0 bg-red-100 rounded-lg p-4 mt-8">
          <h3>Beautiful & Easy to Use</h3>
          <p>Shutter gets out of the way so you can focus on what matters the most – capturing beautiful moments.</p>
          <p>With our app designed to work with iPhone, iPad and Apple Watch, Shutter is always with you.</p>
        </div>

        <div className="scroll-ml-6 snap-start w-2/5 shrink-0 bg-red-100 rounded-lg p-4 mt-8">
          <h3>Beautiful & Easy to Use</h3>
          <p>Shutter gets out of the way so you can focus on what matters the most – capturing beautiful moments.</p>
          <p>With our app designed to work with iPhone, iPad and Apple Watch, Shutter is always with you.</p>
        </div>

        <div className="scroll-ml-6 snap-start w-96 shrink-0 bg-red-100 rounded-lg p-4 mt-8">
          <h3>Beautiful & Easy to Use</h3>
          <p>Shutter gets out of the way so you can focus on what matters the most – capturing beautiful moments.</p>
          <p>With our app designed to work with iPhone, iPad and Apple Watch, Shutter is always with you.</p>
        </div>

        <div className="scroll-ml-6 snap-start w-96 shrink-0 bg-red-100 rounded-lg p-4 mt-8">
          <h3>Beautiful & Easy to Use</h3>
          <p>Shutter gets out of the way so you can focus on what matters the most – capturing beautiful moments.</p>
          <p>With our app designed to work with iPhone, iPad and Apple Watch, Shutter is always with you.</p>
        </div>

        <div className="scroll-ml-6 snap-start w-96 shrink-0 bg-red-100 rounded-lg p-4 mt-8">
          <h3>Beautiful & Easy to Use</h3>
          <p>Shutter gets out of the way so you can focus on what matters the most – capturing beautiful moments.</p>
          <p>With our app designed to work with iPhone, iPad and Apple Watch, Shutter is always with you.</p>
        </div>

        <div className="scroll-ml-6 snap-start w-96 shrink-0 bg-red-100 rounded-lg p-4 mt-8">
          <h3>Beautiful & Easy to Use</h3>
          <p>Shutter gets out of the way so you can focus on what matters the most – capturing beautiful moments.</p>
          <p>With our app designed to work with iPhone, iPad and Apple Watch, Shutter is always with you.</p>
        </div>

      </div>

      </section>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{' '}
            <a className="text-red-600" href="https://nextjs.org">
              Next.js!
            </a>
          </h1>

          <p className="mt-3 text-2xl">
            Get started by editing{' '}
            <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
              pages/index.js
            </code>
          </p>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <a
              href="https://nextjs.org/docs"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
              <p className="mt-4 text-xl">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t">
          <a
            className="flex items-center justify-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
          </a>
        </footer>
      </div>
    </div>
  )
}

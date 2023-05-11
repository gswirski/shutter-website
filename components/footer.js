import Link from "next/link"

const navigation = [
    { name: 'Features', href: '/' },
    { name: 'Cameras', href: '/cameras' },
    { name: 'Guides', href: '/guides' },
    { name: 'FAQ', href: '/guides/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Download', href: '/buy' }
  ]

export default function Footer() {
    return (
      <footer className="" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
        <div className="mt-12 border-t border-gray-200 py-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2023 Camera Control Apps sp. z o.o.</p>
        </div>
      </div>
    </footer>
    )
}
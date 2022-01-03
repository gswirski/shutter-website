import Link from "next/link"

const navigation = [
    { name: 'Features', href: '/' },
    { name: 'Cameras', href: '/cameras' },
    { name: 'Guides', href: '/guides' },
    { name: 'FAQ', href: '/guides/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Buy Now', href: '/buy' }
  ]

export default function Footer() {
    return (
        <footer className="flex items-center justify-center w-full h-24 border-t">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
          <span className="text-gray-400">&copy; 2022 Camera Control Apps sp. z o.o.</span>
          {/*<div className="md:ml-10 md:pr-4 md:space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="font-medium text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              </Link>
            ))}
            </div>*/}
        </nav>
      </footer>
    )
}
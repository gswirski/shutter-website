import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

const pages = [
    { name: 'Product Manual', href: '#', current: false },
    { name: 'Sony', href: '#', current: false },
]

export default function Example() {
    return (
        <>
            <nav className="flex" aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-4">
                    <li>
                        <div>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                <span className="sr-only">Home</span>
                            </a>
                        </div>
                    </li>
                    {pages.map((page) => (
                        <li key={page.name}>
                            <div className="flex items-center">
                                <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                <a
                                    href={page.href}
                                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                    aria-current={page.current ? 'page' : undefined}
                                >
                                    {page.name}
                                </a>
                            </div>
                        </li>
                    ))}
                </ol>
            </nav>

            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Installation
            </p>

            <div className='prose'>
                Lorem ipsum
            </div>
        </>

    )
}

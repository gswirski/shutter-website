'use client'

import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

const pages = [
    { name: 'Product Manual', href: '#', current: false },
    { name: 'Sony', href: '#', current: false },
]

export function ArticleLayout({ article, children }) {
    return (
        <div>
            <div className="xl:relative">
                <div className="mx-auto max-w-2xl">
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

                    <article>
                        <header className="flex flex-col">
                            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                {article.title}
                            </h1>
                            {/* <time
                                dateTime={article.date}
                                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                            >
                                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                                <span className="ml-3">{article.date}</span>
                            </time> */}
                        </header>
                        <div className="prose mt-8" data-mdx-content>
                            {children}
                        </div>
                    </article>
                </div>
            </div>
        </div >
    )
}

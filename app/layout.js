import '../styles/globals.css'
import Menu from '../components/menu'

export const metadata = {
    title: 'Shutter - Remote Control App for Sony &amp; Canon Cameras',
    description: `Focus on making the best pictures. This smart iOS remote app is always with you.
        Shutter is a trusted tool of over 25,000 photo & video creators.`,
    keywords: 'Sony, Canon, Camera, Remote, Control, App, iOS, Smart',
    author: 'Camera Control Apps sp. z o.o.',
}

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <body>
                <Menu />
                <div className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}
import { DownloadIcon, SearchIcon } from "@heroicons/react/outline"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import Footer from "../components/footer"
import Menu from "../components/menu"


/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
function SearchBar({onChange}) {
  const scrollToInput = function (input) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      const top = input.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({top: top, left: 0, behavior: 'smooth'})
    }
  };

  return (
    <div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="text-gray-500 h-6 w-6" />
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="focus:ring-red-500 focus:border-red-500 block w-full pl-12 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="Search: Sony a7 IV..."
          onChange={(e) => onChange(e.target.value)}
          onFocus={(e) => scrollToInput(e.target)}
        />
      </div>
    </div>
  )
}


const camerasShort = [
  'a1', 'a9', 'a9 II', 'a7', 'a7 II', 'a7 III', 'a7 IV', 'a7R I', 'a7R II', 'a7R III', 'a7R IV',
  'a7S I', 'a7S II', 'a7S III', 'ZV-1', 'ZV-E10', 'RX100 VII'
];

const cameras = camerasShort.map((camera) => (
  {
    name: `Sony ${camera}`,
    department: 'Optimization',
    role: 'Admin',
    email: camera,
  },
));

export default function Cameras() {
  const [searchQuery, setSearchQuery] = useState("")

  const displayCameras = cameras.filter((camera) => (
    camera.name.toLowerCase().includes(searchQuery.toLowerCase().trim().replace(/\s+/g, ' '))
  ))

  return (
    <div>
      <Head>
        <title>Shutter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Compatibility</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Supported Cameras
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Your camera not on the list?{' '}
              <Link href="/contact">
                <a className="default-a">Contact us</a>
              </Link>{' '}
              and we will see what we can do!
            </p>
          </div>

          <div className="max-w-xl lg:mx-auto mt-12">
           <SearchBar onChange={setSearchQuery}/>
          </div>


          <div className="flex flex-col mt-8">
            
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Role
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {displayCameras.map((person) => (
                        <tr key={person.email}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{person.department}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-gray-300 hover:text-gray-500">
                              <DownloadIcon className="h-6 w-6" aria-hidden="true" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

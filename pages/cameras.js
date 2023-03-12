import { DownloadIcon, SearchIcon, CheckIcon, XIcon, ExclamationIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useState } from "react"
import { cameras } from "../components/cameras"
import Footer from "../components/footer"
import ShutterHead from "../components/head"
import Menu from "../components/menu"

function SearchBar({onChange}) {
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
        />
      </div>
    </div>
  )
}

export default function Cameras() {
  const [searchQuery, setSearchQuery] = useState("")

  const displayCameras = cameras.filter((camera) => (
    camera.name.toLowerCase().replace(/\s/g, '').includes(searchQuery.toLowerCase().replace(/\s/g, ''))
  ));

  return (
    <div>
      <ShutterHead />
      <Menu />

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Compatibility</h2>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Supported Cameras
            </h2>
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
                          Camera
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Supported
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Tap Focus
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Focus Bracketing
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Video
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Burst Shoot.
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          BULB
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {displayCameras.map((camera) => (
                        <tr key={camera.name}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{camera.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            { camera.expiredSupport &&
                                <span className="border-b-2 border-gray-500 border-dotted inline-block has-tooltip">
                                  <span className="tooltip text-gray-500 text-sm">
                                    Only firmware &lt; 2.00.
                                  </span>
                                  <CheckIcon className="w-6 h-6 text-green-600 mx-auto inline-block" /> *
                                </span>
                              }
                            { !camera.expiredSupport &&
                              <CheckIcon className="w-6 h-6 text-green-600 mx-auto" />
                            }
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            { camera.focus == 'spot-required' &&
                              <span className="border-b-2 border-gray-500 border-dotted inline-block has-tooltip">
                                <span className="tooltip text-gray-500 text-sm">
                                  AF Area must be set to "Spot", "Expand<br />Spot" or "Tracking Spot" in the camera.
                                </span>
                                <CheckIcon className="w-6 h-6 text-green-600 mx-auto inline-block" /> *
                              </span>
                            }
                            { (camera.focus == 'normal' || camera.focus == 'tracking') &&
                              <CheckIcon className="w-6 h-6 text-green-600 mx-auto" />}

                            { (camera.focus == 'none') &&
                              <XIcon className="w-6 h-6 text-red-700 mx-auto" /> }
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                          { camera.focusBracketing
                              ? <CheckIcon className="w-6 h-6 text-green-600 mx-auto" />
                              : <XIcon className="w-6 h-6 text-red-700 mx-auto" /> }
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                          { camera.video
                              ? <CheckIcon className="w-6 h-6 text-green-600 mx-auto" />
                              : <XIcon className="w-6 h-6 text-red-700 mx-auto" /> }
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                          { camera.burst
                              ? <CheckIcon className="w-6 h-6 text-green-600 mx-auto" />
                              : <XIcon className="w-6 h-6 text-red-700 mx-auto" /> }
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          { camera.bulb
                              ? <CheckIcon className="w-6 h-6 text-green-600 mx-auto" />
                              : <XIcon className="w-6 h-6 text-red-700 mx-auto" /> }
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href={camera.download} className="text-gray-300 hover:text-gray-500">
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

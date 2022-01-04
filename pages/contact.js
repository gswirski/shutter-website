/* This example requires Tailwind CSS v2.0+ */
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Footer from '../components/footer'
import Menu from '../components/menu'

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [camera, setCamera] = useState("");
  const [message, setMessage] = useState("");
  const [sendState, setSendState] = useState("idle");

  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = "required";
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = "required";
      isValid = false;
    } else if (!email.match(/.+@.+\..+/)) {
      tempErrors["email"] = "invalid";
      isValid = false;
    }
    if (camera.length <= 0) {
      tempErrors["camera"] = "required";
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = "required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setSendState("sending")

      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
            email: email,
            name: name,
            camera: camera,
            message: message
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        setSendState("error")
      } else {
        setSendState("success")
      }
    }
  };


  return (
    <div>
      <Head>
        <title>Shutter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <div className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-12">
            <Link href="/contact">
              <a className="block lg:text-center default-a font-semibold tracking-wide uppercase">
                Contact
              </a>
            </Link>
            <p className="lg:text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Send Us A Message
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Let’s talk 👋 Don’t hesitate to reach out with any question or issue you might have. We respond in less than 24 hours (except Sundays.)
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            You can email us at <a href="mailto:help@shutter.dev" className="default-a">help@shutter.dev</a> or use the contact form below.
            </p>
          </div>

          {sendState == "success" &&
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-green-50 sm:p-6">
                <p className="text-green-700 text-base italic">Message successfully sent. We will get back to you shortly.</p>
              </div>
            </div>}

          {sendState != "success" &&
            <form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <p className="text-gray-500 text-base italic mb-4">All fields are required.</p>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label htmlFor="email-address" className={`block text-sm font-medium ${errors["email"] ? "text-red-700": "text-gray-700"}`}>
                        Email address{' '}
                        { errors["email"] &&
                          <span className="font-regular">is {errors["email"]}</span>}
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className={`mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm ${errors["email"] ? "border-red-300" : "border-gray-300"} rounded-md`}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first-name" className={`block text-sm font-medium ${errors["name"] ? "text-red-700": "text-gray-700"}`}>
                        Name{' '}
                        { errors["name"] &&
                          <span className="font-regular">is {errors["name"]}</span>}
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        onChange={(e) => setName(e.target.value)}
                        className={`mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm ${errors["name"] ? "border-red-300" : "border-gray-300"} rounded-md`}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="camera-model" className={`block text-sm font-medium ${errors["name"] ? "text-red-700": "text-gray-700"}`}>
                        Camera Model{' '}
                        { errors["camera"] &&
                          <span className="font-regular">is {errors["camera"]}</span>}
                      </label>
                      <input
                        type="text"
                        name="camera-model"
                        id="camera-model"
                        autoComplete="camera-model"
                        onChange={(e) => setCamera(e.target.value)}
                        className={`mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm ${errors["camera"] ? "border-red-300" : "border-gray-300"} rounded-md`}
                      />
                    </div>


                    <div className="col-span-6">
                    <label htmlFor="message-text" className={`block text-sm font-medium ${errors["name"] ? "text-red-700": "text-gray-700"}`}>
                        Message{' '}
                        { errors["message"] &&
                          <span className="font-regular">is {errors["message"]}</span>}
                      </label>
                      <textarea
                        name="message-text"
                        id="message-text"
                        onChange={(e) => setMessage(e.target.value)}
                        className={`h-32 mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm ${errors["message"] ? "border-red-300" : "border-gray-300"} rounded-md`}
                        ></textarea>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  {sendState == "error" &&
                    <span className="text-red-700 text-sm mr-4">Error sending. Please try again.</span>}{' '}
                  <button
                    disabled={sendState == "sending"}
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black disabled:text-gray-700 bg-gray-300 hover:bg-gray-200 disabled:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    {sendState == "sending" ? "Sending..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>}
        </div>
      </div>


      <Footer />
    </div>


  )
}

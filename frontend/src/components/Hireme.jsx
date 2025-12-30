// src/components/HireMe.js
import React from "react";
import WebGig from "../assets/WebGig.png"; // Ensure the path is correct
import MobileGig from "../assets/ReactGig.png"; // Ensure the path is correct
import AddSer from "../assets/AddSer.png"; // Ensure the path is correct

const gigs = [
  {
    title: "Full Stack Web Development",
    description:
      "I will maintain, develop all types of website with react and wordpress",
    link: "https://www.fiverr.com/s/Q7GPoWe",
    image: WebGig,
  },
  {
    title: "React Native App Development",
    description:
      "Get a professional mobile app for Android and iOS using React Native & Expo with backend integration.",
    link: "https://www.fiverr.com/itz_tarunsingh/reskin-redesign-create-your-react-native-app-from-scratch?context_referrer=seller_page&ref_ctx_id=a099ef0873344601a57f36190822dc2c&pckg_id=1&pos=1&seller_online=true&imp_id=9b9a07e8-88be-4483-8a78-c64aeada7030",
    image: MobileGig,
  },
  {
    title: "Additional Services",
    description:
      "I can also help you with your projects in Python, Java, and C++ or Some custom projects. ",
    link: "/contact",
    image: AddSer, // Placeholder image, replace with actual
  },
];

function HireMe({ setActiveTab }) {
  return (
    <>
      <div id="hireme" className="p-5 pt-20 text-black min-h-screen scroll-mt-28">
        <h2 className="text-4xl font-bold text-center mb-10">Hire Me</h2>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {gigs.map((gig, index) => (
              <div
                key={index}
                className="lg:blur-none backdrop-blur-md p-5 rounded-4xl shadow-lg flex flex-col"
              >
                <div className="aspect-[4/3] mb-5">
                  {" "}
                  {/* Custom aspect ratio 4:3 */}
                  <img
                    src={gig.image} // Dynamically use gig.image
                    alt={gig.title}
                    className="w-full h-full aspect-[4/3] object-cover  rounded-3xl"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">{gig.title}</h3>
                <p className="mb-3">{gig.description}</p>
                {gig.link === "/contact" ? (
                  <button
                    onClick={() => setActiveTab("contact")}
                    className="mt-auto text-center inline-block rounded-3xl shadow-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 transition duration-300"
                  >
                    More Services
                  </button>
                ) : (
                  <a
                    href={gig.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-center inline-block rounded-3xl shadow-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 transition duration-300"
                  >
                    Get This!
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HireMe;

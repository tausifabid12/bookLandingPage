'use client'
import BasicButton from '@/components/BasicButton';
import React from 'react';

const contactMethods = [
    {
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ,
        contact: "Support@example.com"
    },
    {
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ,
        contact: "+1 (555) 000-000"
    },
    {
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ,
        contact: "Mountain View, California, United State."
    },
]


//component
export default function ContactUs() {



    return (
        <main className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto lg:gap-16 grid grid-cols-1 lg:grid-cols-2 lg:max-w-none">

                    <div className="flex-1 mt-12  ">
                        <p className='text-dimText border-b-2 border-primary w-full capitalize pb-1'>
                            BUY
                        </p>
                        <h1 className="title-font sm:text-5xl mt-6 text-3xl  font-medium text-white mb-20">
                            FILL THE FORM
                        </h1>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-5"
                        >
                            <div>

                                <input
                                    type="text"
                                    required
                                    placeholder='First Name'
                                    className="w-full mt-2  py-2 placeholder:text-dimText bg-transparent border-b-2 border-primary"
                                />
                            </div>
                            <div>

                                <input
                                    type="text"
                                    required
                                    placeholder='Last Name'
                                    className="w-full mt-2  py-2 placeholder:text-dimText bg-transparent border-b-2 border-primary"
                                />
                            </div>
                            <div>

                                <input
                                    type="text"
                                    required
                                    placeholder='Phone'
                                    className="w-full mt-2  py-2 placeholder:text-dimText bg-transparent border-b-2 border-primary"
                                />
                            </div>
                            <div>

                                <input
                                    type="text"
                                    required
                                    placeholder='Email'
                                    className="w-full mt-2  py-2 placeholder:text-dimText bg-transparent border-b-2 border-primary"
                                />
                            </div>


                            <div className='w-full'>
                                <BasicButton title='Submit' width='full' />
                            </div>

                        </form>

                    </div>
                    <div className=" space-y-3 bg-primary h-full p-5 mt-10 lg:mt-0 lg:p-16">

                        <h1 className="title-font sm:text-6xl mt-6 text-3xl  font-medium text-white mb-12">
                            CONTACT US

                        </h1>

                        <div>
                            <ul className="mt-6 grid grid-cols-1 gap-9">
                                {
                                    contactMethods.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-x-3">
                                            <div className="flex-none text-gray-200">
                                                {item.icon}
                                            </div>
                                            <p className='text-dimText'>{item.contact}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
const Footer = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <footer className="bg-green-800 mt-auto">
                <div className="flex">
                <div className="flex flex-col cursor-pointer ml-40">
                    <div className="flex items-center py-5 lg:ml-180 lg:w-fit">
                        <img
                            className="h-auto w-24 md:w-26 lg:w-28 xl:w-50"
                            src="./assets/conxpert_logo1.svg"
                            alt="logo"
                        />
                        <h1 className="-ml-3">
                            <span className="text-2xl lg:text-3xl font-bold pt-1 font-display text-white">
                                CON
                            </span>
                            <span className="text-2xl lg:text-3xl font-gray font-display text-white">
                                X
                            </span>
                            <span className="text-2xl lg:text-3xl font-bold pt-1 font-display text-white">
                                PERT
                            </span>
                        </h1>
                    </div>
                    <p className="font-space w-72 ml-8 text-white">
                        Elevate your skills with ConXpert. where expertise meets opportunity
                        in 1:1 sessions. Unlock your potential and achieve success with our
                        personalized virtual meets.
                    </p>
                </div>

                <div className="flex flex-col justify-center ml-96 mt-5">
                    <h1 className="font-bold text-2xl text-white mb-4">Support</h1>

                    <h3 className="text-xl text-white font-semibold mb-1">Address</h3>
                    <p className="text-gray-300 mb-1">151/1, BEACH ROAD TUTICORIN</p>

                    <h1 className="text-xl text-white font-semibold mb-1">Contact</h1>

                    <p className="text-gray-300">srikishore9080676683@gmail.com</p>
                    <p className="text-gray-300">9360746049</p>
                </div>
                </div>
                <hr className="w-11/12 mx-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>

                <div className="flex text-white">
                <p className="text-white ml-48 mb-5 text-sm">Copywrite © 2024.CONXPERT | Privacy Policy | Cookies Policy</p>

                <p className="ml-72 text-sm">Created by <span className="underline italic cursor-pointer">Sri Kishore</span></p>
                </div>

            </footer>
        </div>
    )
}

export default Footer;

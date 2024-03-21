
const Navbar = () => {
    return (
        <>
            <nav className="pt-3 flex items-center lg:justify-evenly mb-10 bg-orange-50">
                <div className="flex items-center pr-5">
                    <img className="h-auto w-20 md:w-22 lg:w-20 xl:w-50" src="./assets/conxpert_logo1.svg" alt="logo" />
                    <h1 className="-ml-3"><span className="text-2xl lg:text-3xl font-bold pt-1 font-display text-green-900">CON</span><span className="text-2xl lg:text-3xl font-gray font-display text-green-900">X</span><span className="text-2xl lg:text-3xl font-bold pt-1 font-display text-green-900">PERT</span></h1>
                </div>

                <div className="hidden lg:flex gap-8 text-sm font-semibold cursor-pointer justify-center items-center">
                    <span className="flex gap-8 mr-10">
                        <p>ABOUT</p>
                        <p>CONXPERT</p>
                        <p>CONTACT US</p>
                    </span>
                    <button className="hidden lg:block px-4 py-4 font-semibold text-xs text-white bg-green-900 border rounded-md">BECOME A MENTOR</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

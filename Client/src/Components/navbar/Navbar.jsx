
const Navbar = () => {
    return (
        <>
            <nav className="mt-3 flex items-center justify-evenly">
                <div className="flex items-center   ">
                    <img className="h-auto w-20 md:w-22 lg:w-20 xl:w-50" src="./assets/conxpert_logo1.svg" alt="logo" />
                    <h1><span className="text-2xl lg:text-3xl font-bold pt-1font-display">CON</span><span className="text-3xl font-gray font-display">X</span><span className="text-2xl lg:text-3xl font-bold pt-1font-display">PERT</span></h1>
                </div>

                <div className="hidden lg:flex gap-8 text-sm font-semibold cursor-pointer justify-center items-center">
                    <p>ABOUT</p>
                    <p>CONXPERT</p>
                    <p>CONTACT US</p>

                    <button className="hidden lg:block px-4 py-4 font-semibold text-xs text-white bg-green-900 border rounded-md">BECOME A MENTOR</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

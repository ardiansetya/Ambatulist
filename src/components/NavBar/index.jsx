import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"


const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col justify-between md:items-center gap-2 p-4">
                <Link href="/" className="font-bold text-2xl" >AMBATULIST</Link>
                <InputSearch/>
                <UserActionButton/>
            </div>
        </header>
    )
}

export default Navbar
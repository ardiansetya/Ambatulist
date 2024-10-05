"use client"

import { ArrowCircleLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
const Header = ({title}) => {
    const router = useRouter()

    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return (
        <div className="flex justify-between items-center mb-4 px-4">
            <button className="text-color-primary"><ArrowCircleLeft size={38} onClick={handleBack} /></button>
            <h3 className="text-2xl font-bold text-color-primary">{title}</h3>
        </div>
    )
}

export default Header
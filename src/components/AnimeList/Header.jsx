import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div>
            <div className="flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
                {linkHref && linkTitle ? <Link href={linkHref} className="text-color-primary md:text-xl text-md underline hover:text-color-accent 
                transition-all">{linkTitle}</Link> : null }
                
            </div>
        </div>
    )
}

export default Header
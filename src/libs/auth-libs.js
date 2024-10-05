import { getServerSession } from "next-auth"
import { authOptions } from "next-auth"

export const authUserSession = async() => {
    const session = await getServerSession(authOptions)
    return session?.user
}


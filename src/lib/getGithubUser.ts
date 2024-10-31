import { query } from "@lib/query"
import type { UserType } from "src/types"

const myGithubUser = import.meta.env.GITHUB_USER

export const getGithubUser = async(): Promise<UserType> => {
    const path = `/users/${myGithubUser}`
    const user: UserType = await query(path)
    return user
}

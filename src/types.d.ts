import { country, language } from "src/const"

export interface UserType {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    user_view_type: string
    site_admin: boolean
    name: string
    company: any
    blog: string
    location: any
    email: string
    hireable: any
    bio: any
    twitter_username: any
    public_repos: number
    public_gists: number
    followers: number
    following: number
    created_at: string
    updated_at: string
  }

export type country = keyof typeof country
export type language = keyof typeof language

export interface Location {
  linkToMaps: string,
  city: string,
  region: region,
  country: country,
  language: language
}

export interface Stack {
  name: string,
  icon: any,
  href: string
}

export interface Project {
  name: string,
  madeWith: string,
  href: string,
  src: string,
}

export interface Data {
  picture: string | null,
  greeting: string | null,
  location: string | null,
}


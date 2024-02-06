// import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import type { Image } from "sanity"

interface SanityBody {
    _createdAt: string
    _id: string
    _rev: string
    _updatedAt: string
}

interface ImageStr {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface Tech {
    title: string
    slug: string
}

// type Image = SanityImageSource;

export interface Social extends SanityBody {
    _type: "social"
    title: string
    url: string
}

export interface Project extends SanityBody {
    _type: "project"
    index: string
    title: string
    description: string
    tech: Tech[]
    link: string
    image: Image
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo"
    address: string
    backgroundInformation: string
    email: string
    role: string
    heroImage: Image
    name: string
    phoneNumber: string
    profilePic: Image
}

export interface Skill extends SanityBody {
    _type: "skill"
    title: string
    progress: number
    image: Image
}

export interface WorkExperience extends SanityBody {
    _type: "workExperience"
    index: string
    position: string
    company: string
    from: string
    to: string
    description: string
    image: Image
    tech: Tech[]
    summaryPoints: string[]
}
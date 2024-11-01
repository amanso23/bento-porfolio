import { JavaScript, TypeScript, Tailwind, ReactIcon, Docker, Git, Visual } from "@icons/stack";
import type { Stack } from "src/types";

export const front: Stack[] = [
    {
        name: "React",
        icon: ReactIcon,
        href: "https://reactjs.org/"
    },
    {
        name: "JavaScript",
        icon: JavaScript,
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        name: "TypeScript",
        icon: TypeScript,
        href: "https://www.typescriptlang.org/"
    },
    {
        name: "Tailwind CSS",
        icon: Tailwind,
        href: "https://tailwindcss.com/"
    }
]

export const other: Stack[] = [
    {
        name: "Visual Studio Code",
        icon: Visual,
        href: "https://code.visualstudio.com/"
    },
    {
        name: "Git",
        icon: Git,
        href: "https://git-scm.com/"
    },
    {
        name: "Docker",
        icon: Docker,
        href: "https://www.docker.com/"
    }
]


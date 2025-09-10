export interface Link {
    icon?: string,
    label: string,
    text?: string,
    href: string,
}

export type ContactLinks = Record<string, Link[]>;

export const data: ContactLinks = {
    SNS: [
        {icon: "ph:at-bold", label: "Email", text: "cassie@soopy.moe", href: "mailto:cassie@soopy.moe"},
        {icon: "ph:matrix-logo-bold", label: "Matrix", text: "@sophie:nue.soopy.moe", href: "https://matrix.to/#/@sophie:nue.soopy.moe"},
        {icon: "simple-icons:discord", label: "Discord", text: "soopy.moe", href: "https://discord.com/users/397273885701177347"},
        {icon: "simple-icons:bluesky", label: "Bluesky", text: "soopy.moe", href: "https://bsky.app/profile/soopy.moe"},
        {icon: "simple-icons:bluesky", label: "Bluesky (Alt)", text: "pds.soopy.moe", href: "https://bsky.app/profile/pds.soopy.moe"},
        {icon: "ph:fediverse-logo-bold", label: "Fediverse", text: "@soopyc@tech.lgbt", href: "https://tech.lgbt/@soopyc"},
    ],
    Services: [
        {icon: "ph:lastfm-logo-bold", label: "last.fm", text: "kcomain", href: "https://last.fm/user/kcomain"},
        {icon: "simple-icons:musicbrainz", label: "Musicbrainz", text: "soopyc", href: "https://musicbrainz.org/user/soopyc"},
        {icon: "ph:music-notes-fill", label: "Listenbrainz", text: "soopyc", href: "https://listenbrainz.org/user/soopyc"},
    ],
    "Code Forges": [
        {icon: "simple-icons:forgejo", label: "Patchy (Forgejo)", text: "cassie@patchy.soopy.moe", href: "https://patchy.soopy.moe/cassie"},
        {icon: "ph:github-logo-fill", label: "GitHub", text: "soopyc", href: "https://github.com/soopyc"},
        {icon: "ph:gitlab-logo-simple-fill", label: "GitLab SaaS", text: "soopyc", href: "https://gitlab.com/soopyc"},
    ],
    Games: [
        {icon: "simple-icons:osu", label: "osu!", text: "soopyc", href: "https://osu.ppy.sh/u/soopyc"},
        {icon: "simple-icons:namemc", label: "NameMC", text: "soopyc", href: "https://namemc.com/profile/soopyc.1"},
        {icon: "simple-icons:steam", label: "Steam", text: "soopyc", href: "https://steamcommunity.com/id/soopyc/"},
        {icon: "ph:arrow-right-bold",label: "Other...", href: "/games"}
    ],
    Miscellaneous: [
        {icon: "ph:key-bold", label: "Encryption Keys", href: "/keys"}
    ],
}

export default data;

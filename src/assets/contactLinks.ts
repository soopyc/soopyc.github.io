export interface Link {
    icon?: string,
    label: string,
    text?: string,
    href: string,
}

export type ContactLinks = Record<string, Link[]>;

export const data: ContactLinks = {
    SNS: [
        {icon: "ph:at-bold", label: "Email", text: "s+invis@soopy.moe", href: "mailto:Replace user part with anything else!<s+cntctmlto@soopy.moe>?body=I%20will%20not%20read%20or%20reply%20to%20emails%20with%20the%20following%20topics%3B%20your%20address%20will%20also%20be%20blocked%20and%20reported%20for%20spam.%0A%20%20-%20Advertisement%20for%20any%20services%2C%20including%20your%20own.%0A%20%20-%20Security%20reports%20not%20following%20standards%2C%20please%20see%20security.txt%20for%20more%20information%2C%20you%20ought%20to%20know%20what%20it%20is.%0A%20%20-%20Anything%20I%20deem%20spammy.%0A%20%20-%20Anything%20that%20includes%20this%20section.%0A%0AQuestions%20are%20welcome%2C%20but%20I%20would%20prefer%20if%20you%20have%20first%20researched%20about%20the%20topic%2C%20and%20please%20do%20not%20expect%20a%20speedy%20reply%20for%20questions.%0APlease%20understand%20this%20is%20used%20to%20filter%20out%20some%20spam%20from%20important%20emails."},
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

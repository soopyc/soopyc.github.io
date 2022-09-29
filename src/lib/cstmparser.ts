interface ParserOut {
    url: string;
    platform: string;
    reference?: string;
}

type ParserOutput = ParserOut | undefined;

const parsers = {
    pixiv: (input: string): ParserOutput => {
        const match = input.match(/^pixiv\/(?<id>\d+)$/i);
        if (!match || !match.groups || !match.groups.id) return undefined;

        return {
            url: `https://www.pixiv.net/en/artworks/${match.groups.id}`,
            platform: "pixiv",
        };
    },
};

export default function parser(input: string | undefined): ParserOutput {
    if (!input) return

    const regex = /^(?<platform>\w+?)\/(.*)$/i;
    const match = input.match(regex);

    if (!match || !match.groups) return undefined;
    for (const [platform, parse] of Object.entries(parsers)) {
        if (match.groups.platform !== platform) continue;

        const parsed = parse(input);
        if (!parsed) continue;  // piece of shit

        return parsed;
    }
    return;
}

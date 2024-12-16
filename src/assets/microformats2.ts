/**
 * Subset of the microformats2 types for webmention usage. NOT complete in any way.
 * Also assumes some things will always exist, which is obviously never the case.
 * This is sufficient for webmentions though. We will fix stuff as the servers explode.
 *
 * Reference: https://microformats.org/wiki/microformats2
 */

/**
 * Stricter subset of the h-entry format. This follows the webmention.io schema.
 */
export interface HEntry {
    type: "entry",
    author: HCard,
    url: string,
    content?: {
        text: string,
        html?: string,
    },
    published: string,
    "wm-received": string,
    "wm-property": "in-reply-to", // TODO: add more later
}

export interface HCard {
    type: "card",
    name?: string,
    photo?: string,
    url?: string,
}

export interface HFeed {
    type: "feed",
    name: string,
    children: HEntry[],
}

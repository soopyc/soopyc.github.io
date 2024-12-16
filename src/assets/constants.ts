interface Author {
    url: string,
}

export const avatar = "https://www.libravatar.org/avatar/58a08528a7e2b3fd738b25d0c63f5c82?s=512";
export const authors: Record<string, Author> = {
    soopyc: {url: "https://soopy.moe"},
};

export default {
    avatar,
    authors,
}

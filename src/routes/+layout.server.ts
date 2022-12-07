import type { PageLoad } from "./$types";

export const load: PageLoad = async ({fetch, setHeaders}) => {
    setHeaders({
        'strict-transport-security': 'max-age=63072000; includeSubDomains; preload'
    })
}

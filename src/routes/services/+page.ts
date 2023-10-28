import type { PageLoad } from "./$types";
import sites from "$lib/constants/sites"

interface Service {
    name: string
    description: string | null,
    uptime: number,
    favicon: string,
}

interface Result {
    kernel: string,
    xnix: string,
    services: Array<Service>
}

export const load: PageLoad = async ({fetch}): Promise<Result> => {
    let siteData

    try {
        siteData = await (await fetch(sites.system.info.koumakan)).json()
        // fetch a list of sites from status page
    } catch (e) {
        console.warn("unable to fetch server data, using bogus values")
        siteData = {kver: "Unknown Linux", op: "Unknown OS"}
    }

    return {
        kernel: siteData.kver,
        xnix: siteData.op,
        services: [],
    }
}

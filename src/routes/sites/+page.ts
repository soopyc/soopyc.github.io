import type { PageLoad } from "./$types";
import sites from "$lib/constants/sites"

export const load: PageLoad = async ({fetch}) => {
    const siteData = await (await fetch(sites.system.info.koumakan)).json()

    return {
        kernel: siteData.kver,
        xnix: siteData.op
    }
}

import type {PageLoad} from './$types';
import sites from '$lib/constants/sites'

export const load: PageLoad = async ({fetch}) => {
    const discordData = await (await fetch(sites.lanyard.rest('397029587965575170'))).json()
    return {
        discordUser: discordData.data.discord_user,
        lanyardkv: discordData.data.kv
    }
}

import type {PageLoad} from './$types';
import sites from '$lib/constants/sites'

export const load: PageLoad = async ({fetch}) => {
    let discordData: any = {data: {discord_user: {}, kv: {}}};  // FIXME: we had to use `any` here to silence ts warnings.
    try {
        discordData = await (await fetch(sites.lanyard.rest('397029587965575170'))).json()
    } catch (e) {
        console.error('could not load discord user, bailing.')
    }
    return {
        discordUser: discordData.data.discord_user,
        lanyardkv: discordData.data.kv
    }
}

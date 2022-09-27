const sites = {
    test() { return "as" },
    system: {
        info: {
            koumakan: "https://gensokyo.soopy.moe/backend/sysinfo"
        }
    },
    lanyard: {
        websocket: "https://shitcord.soopy.moe/socket",
        rest(userId: string) {return `https://shitcord.soopy.moe/v1/users/${userId}`}
    },
    shitcord: {
        asset(appId: string, assetId: string) {return `https://cdn.discordapp.com/app-assets/${appId}/${assetId}.png`}
    },
    pronounspage: {
        profile(username: string) {return `https://pronouns.page/api/profile/get/${username}?version=2`}
    }
}

export default sites;

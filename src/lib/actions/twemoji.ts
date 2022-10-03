import { afterUpdate } from 'svelte';
import twemoji from 'twemoji';

/**
 * Transforms emojis into twitter emojis
 */
export default function loadTwemoji(node: HTMLElement, config = {"folder":"svg","ext":".svg"}) {
    afterUpdate(() => {
        twemoji.parse(node, {
            callback(icon, options: any, variant) {
                return ''.concat(options.base, options.size, '/', icon, options.ext)
            },
            ...config
        })
    })

    return {
        update() {
            console.error("Changing config after component load will not work.")
        }
    }
}

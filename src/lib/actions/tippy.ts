// :pray: https://dev.to/danawoodman/svelte-quick-tip-using-actions-to-integrate-with-javascript-libraries-tippy-tooltips-2m94
import tippy, { animateFill } from 'tippy.js';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import type { Props as tippyProps } from 'tippy.js';

// DEFAULT OPTIONS EXISTS OKAY TYPESCRIPT
declare interface Ok {
    content?: string,
    allowHTML?: boolean,
    maxWidth?: number | string
}

const defaultProps = {
    maxWidth: '300px'
}


export default function setupTippy(node: HTMLElement, params: tippyProps | Ok = defaultProps) {
    const content = params.content || node.title || node.getAttribute('aria-label') || "No content";
    console.debug("node", node, `using content: ${content} as value`)
    console.debug("params:", params)
    console.debug("node title:", node.title)

    if (!node.getAttribute('aria-label')) node.setAttribute('aria-label', typeof params.content == "string" ? params.content : node.title)
    node.title = "";
    params.content = content

    const _tippy = tippy(node, {
        ...params,
        animateFill: true,
        plugins: [animateFill]
    })
    return {
        update(newParams: tippyProps) { _tippy.setProps(newParams) },
        destroy() {
            console.debug(`destroyed tippy for DOM object`, node);
            _tippy.destroy();
        }
    }
}

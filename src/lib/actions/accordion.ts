// Thank you https://css-tricks.com/how-to-animate-the-details-element-using-waapi/
// sorry this sucks :(

interface AccordionOptions {
    easing?: string
    animationDuration?: number
}

class Accordion {
    el: HTMLDetailsElement;
    options: AccordionOptions;
    summary: HTMLElement | null;
    content: HTMLElement | null;
    animation: Animation | null;
    isClosing: boolean;
    isExpanding: boolean;


    constructor(element: HTMLDetailsElement, options?: AccordionOptions) {
        this.el = element;
        this.options = options ?? {};
        this.summary = element.querySelector('summary');
        this.content = element.querySelector('div');

        this.animation = null;
        this.isClosing = false;
        this.isExpanding = false;
        this.summary?.addEventListener('click', (event) => this.onClick(event));
    }

    onClick(event: Event) {
        event.preventDefault();

        this.el.style.overflow = 'hidden';
        if (this.isClosing || !this.el.open) {
            this.open();
        } else if (this.isExpanding || this.el.open) {
            this.close();
        }
    }

    open() {
        this.el.style.height = `${this.el.offsetHeight}px`;
        this.el.open = true;

        window.requestAnimationFrame(() => this.expand());
    }

    expand() {
        this.isExpanding = true;
        // thanks ts
        if (!this.summary?.offsetHeight) throw new Error("summary offset height is not valid");
        if (!this.content?.offsetHeight) throw new Error("content offset height is not valid");

        const startHeight = `${this.el.offsetHeight}px`;
        const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

        // cancel running animation
        if (this.animation) this.animation.cancel();

        this.animation = this.el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: this.options.animationDuration ?? 300,
            easing: this.options.easing ?? 'ease-out'
        });
        this.animation.onfinish = () => this.onAnimationFinish(true);
        this.animation.oncancel = () => this.isExpanding = false;
    }

    close() {
        this.isClosing = true;
        const startHeight = `${this.el.offsetHeight}px`;
        const endHeight = `${this.summary?.offsetHeight}px`

        // cancel current running animation
        if (this.animation) {
            this.animation.cancel();
        }

        // BEGIN the ANIMATING
        this.animation = this.el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: this.options.animationDuration ?? 300,
            easing: this.options.easing ?? 'ease-out'
        });

        // set some attrs
        this.animation.onfinish = () => this.onAnimationFinish(false);
        this.animation.oncancel = () => this.isClosing = false;
    }

    onAnimationFinish(status: boolean) {
        this.el.open = status;

        // junk cleanup
        this.animation = null;
        this.isClosing = this.isExpanding = false;
        this.el.style.height = this.el.style.overflow = "";
    }
}

export default Accordion;

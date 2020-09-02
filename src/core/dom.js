class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector;
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html;
            return this;
        }
        return this.$el.outerHTML.trim();
    }

    clear() {
        this.html('');
        return this;
    }

    on() {

    }

    // нода это элемен в жс
    append(node) {
        if (node instanceof Dom) {
            node = node.$el;
        }

        if (Element.prototype.append) {
            this.$el.append(node);
        } else {
            this.$el.appendChild(node);
        }

        return this;
    }
}

export function $(selector) {
    return new Dom(selector);
}

$.create = (tagname, clases = '') => {
    const el = document.createElement(tagname);
    if (clases) {
        el.classList.add(clases);
    }
    return $(el);
};
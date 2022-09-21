export const FieldClassesMixin = {
    computed: {
        classes() {
            const r = ['lkt-field'];

            if (this.palette) {
                r.push(`lkt-field--${this.palette}`);
            }

            if (this.changed) {
                r.push('is-changed');
            }

            if (this.multiple) {
                r.push('is-multiple');
            }

            r.push(this.isValid ? 'is-valid' : 'is-error');
            r.push(!!this.modelValue ? 'is-filled' : 'is-empty');

            return r.join(' ');
        }
    }
}
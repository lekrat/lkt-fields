export const FieldClassesMixin = {
    computed: {
        classes() {
            const r = ['lkt-field'];

            if (this.state) {
                r.push(`lkt-field--${this.state}`);
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
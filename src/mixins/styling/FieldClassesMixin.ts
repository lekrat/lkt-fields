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

            if ('multiple' in this && this.multiple) {
                r.push('is-multiple');
            }

            if ('disabled' in this && this.disabled) {
                r.push('is-disabled');
            }

            if ('stateConfigValue' in this) {
                const amountEnabled = this.stateConfigValue.amountEnabled();
                if (amountEnabled > 0) {
                    r.push(`has-icons`);
                    r.push(`has-icons-${amountEnabled}`);
                }
            }

            r.push(this.isValid ? 'is-valid' : 'is-error');
            r.push(!!this.modelValue ? 'is-filled' : 'is-empty');

            return r.join(' ');
        }
    }
}
<script setup lang="ts">
defineProps({
    label: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: true,
    }
})

</script>

<template>
    <div class="v-input">
        <div class="v-input__inner-box">
            <input
                class="v-input__input"
                :placeholder="placeholder"
                type="text"
                name="text"
                id="lorem"
            >
            <label
                class="v-input__label"
                for="lorem"
            >
                {{ label }}
            </label>
        </div>
    </div>
</template>

<style lang="scss">
.v-input {
    $root: &;

    &__inner-box {
        display: flex;
        flex-direction: column-reverse;
    }

    &__input {
        padding: 8px;
        background: transparent;
        outline: none;
        border: none;
        border: 1px solid $input-border;
        // border-bottom: 1px solid $input-border;

        &:placeholder-shown + #{ $root }__label {
            // transform: translateY(17px);
            transform: translateY(25px);
        }

        &::placeholder,
        &::-webkit-input-placeholder {
            opacity: 0;
            transition: inherit;
        }

        &:focus {
            border-bottom: 1px solid $input-border--focus;

            &::placeholder,
            &::-webkit-input-placeholder {
                opacity: 1;
            }

            & + #{ $root }__label,
            &:not(:placeholder-shown) + #{ $root }__label {
                // transform: translateY(0);
                transform: translateY(9px);
            }
        }

    }

    &__label {
        display: inline-block;
        background-color: #1a1a1a;
        color: $font-passive;
    }

    &__label,
    &__input {
        transition: all .3s;
        touch-action: manipulation;
    }
}
</style>
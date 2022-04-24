<script setup lang="ts">
import { computed, ref, Ref } from "vue";
import { EyeOutline } from "@vicons/ionicons5";
import { Icon } from "@vicons/utils";

const id = (Date.now() * Math.random()).toString();

const PASSWORD_INPUT_TYPE = "password";
const TEXT_INPUT_TYPE = "text";

const props = defineProps({
    modelValue: {
        type: [String, Number],
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: true,
    },
    error: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(["update:modelValue"]);

const value = computed({
    get() {
        return props.modelValue;
    },

    set(val) {
        emit("update:modelValue", val);
    }
});

const isPasswordInput = computed(() => {
    return props.type === PASSWORD_INPUT_TYPE;
});

const refInputType = ref(props.type);

function showPassword(e: Event) {
    if (isShownPassword(refInputType.value)) {
        refInputType.value = PASSWORD_INPUT_TYPE;
    } else {
        refInputType.value = TEXT_INPUT_TYPE;
    }
}

function isShownPassword(inputType: string) {
    return inputType === TEXT_INPUT_TYPE;
}

</script>

<template>
    <div class="v-input">
        <div class="v-input__input-box">
            <input
                :class="{
                    'v-input__input': true,
                    'v-input__input--error': error.length > 0,
                }"
                v-model="value"
                :placeholder="placeholder"
                :type="refInputType"
                :id="id"
            >

            <label
                :class="{
                    'v-input__label': true,
                    'v-input__label--error': error.length > 0,
                }"
                :for="id"
            >
                <span class="v-input__label-text">
                    {{ label }}
                </span>
            </label>

            <button
                v-if="isPasswordInput"
                class="v-input__show-pass-btn"
                type="button"
                @click="showPassword"
            >
                <Icon
                    :class="{
                        'v-input__show-pass-ico': true,
                        'v-input__show-pass-ico--crossed': isShownPassword(refInputType),
                    }"
                >
                    <EyeOutline></EyeOutline>
                </Icon>
            </button>
        </div>

        <div class="v-input__error-box">
            <span
                v-if="error.length > 0"
                class="v-input__error-text"
            >
                {{ error }}
            </span>
        </div>
    </div>
</template>

<style lang="scss">
.v-input {
    $root: &;

    &__input-box {
        position: relative;
        display: flex;
        flex-direction: column-reverse;
    }

    &__input {
        padding: 12px 16px;
        background: transparent;
        outline: none;
        border: none;
        border-radius: $border-radius;
        border: 1px solid $input-border;
        color: $font-general;

        &:placeholder-shown + #{ $root }__label {
            transform: translate(8px, 12.5px);
        }

        &::placeholder,
        &::-webkit-input-placeholder {
            opacity: 0;
            transition: inherit;
            color: $input-border;
        }

        &:focus {
            border: 1px solid $input-border--focus;

            &::placeholder,
            &::-webkit-input-placeholder {
                opacity: 1;
            }

            & + #{ $root }__label {
                transform: translate(8px, -10px);
                color: $font-general;
            }
        }

        &:not(:placeholder-shown) + #{ $root }__label {
            transform: translate(8px, -10px);
        }

        // error styles
        &#{ $root }__input--error {
            border: 1px solid $error-color;

            &:focus + #{ $root }__label {
                color: $error-color;
            }
        }
    }

    &__label {
        display: inline-block;
        width: min-content;
        height: 0;
        color: $font-passive;
        white-space: nowrap;

        // error styles
        &#{ $root }__label--error {
            color: $error-color;
        }

        @include device-with-hover {
            &:hover {
                cursor: text;
            }
        }
    }

    &__label-text {
        position: relative;
        display: inline-block;
        padding: 0 8px;

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            height: 100%;
            background-color: $second-color;
        }
    }

    &__label,
    &__input {
        transition: all $animation-duration;
        touch-action: manipulation;
    }

    &__show-pass-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
        display: flex;
        background-color: transparent;
        border: none;

        @include device-with-hover {
            &:hover {
                cursor: pointer;

                #{ $root }__show-pass-ico {
                    color: $font-general;
                }
            }
        }
    }

    &__show-pass-ico {
        color: $font-passive;
        transition: color $animation-duration;

        &::after {
            content: "";
            position: absolute;
            top: 50%;
            width: 100%;
            height: 2px;
            background-color: currentColor;
            transform: rotate(30deg) translateY(-50%);
            opacity: 0;
            transition: opacity $animation-duration;
        }

        &#{ $root }__show-pass-ico--crossed {
            &::after {
                opacity: 1;
            }
        }
    }

    &__error-box {
        padding: 0 4px;
        height: 18.5px;
    }

    &__error-text {
        font-size: 14px;
        color: $error-color;
    }
}
</style>
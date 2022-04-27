import errors from "./errors.json";
import { computed, ref, Ref, reactive } from "vue";
import { ValidationErrors, ServerSignInErrorCode } from "@/types/Validation";
import debounce from "lodash.debounce";
import {
    isEmailValid,
    isPasswordConfirmationMatch,
    isPasswordContainsDigit,
    isPasswordLengthValid,
} from "./helpers";

function createDebouncedSetter<T>(refVal: Ref<T>): (val: T) => void {
    const TIMEOUT = 800;

    return debounce((newVal: T) => {
        refVal.value = newVal;
    }, TIMEOUT);
}

export function useValidation() {
    const _email = ref("");
    const email = computed({
        get() {
            return _email.value;
        },
        set: createDebouncedSetter(_email),
    });

    const _password = ref("");
    const password = computed({
        get() {
            return _password.value;
        },
        set: createDebouncedSetter(_password),
    });

    const _repeatPassword = ref("");
    const repeatPassword = computed({
        get() {
            return _repeatPassword.value;
        },
        set: createDebouncedSetter(_repeatPassword),
    });

    const emailErrors = computed<ValidationErrors>(() => {
        const errorsList: ValidationErrors = [];

        if (email.value.length === 0) {
            return errorsList;
        }

        if (!isEmailValid(email.value)) {
            errorsList.push(errors.email.invalid);
        }

        return errorsList;
    });

    const passwordErrors = computed<ValidationErrors>(() => {
        const errorsList: ValidationErrors = [];

        if (password.value.length === 0) {
            return errorsList;
        }

        if (!isPasswordContainsDigit(password.value)) {
            errorsList.push(errors.password.no_digits);
        }

        if (!isPasswordLengthValid(password.value)) {
            errorsList.push(errors.password.short);
        }

        return errorsList;
    });

    const repeatPasswordErrors = computed(() => {
        const errorsList: ValidationErrors = [];

        if (repeatPassword.value.length === 0 || password.value.length === 0) {
            return errorsList;
        }

        if (!isPasswordConfirmationMatch(password.value, repeatPassword.value)) {
            errorsList.push(errors.password.confirmation_is_not_match);
        }

        return errorsList;
    });

    const serverSignInErrorCodes = reactive<ServerSignInErrorCode[]>([]);

    const serverSignInErrors = computed<string[] | []>(() => {
        return serverSignInErrorCodes.map((code: ServerSignInErrorCode) => {
            return errors.server.sign_in[code];
        });
    });

    return {
        email,
        emailErrors,
        password,
        passwordErrors,
        repeatPassword,
        repeatPasswordErrors,
        serverSignInErrors,
        serverSignInErrorCodes,
    }
}
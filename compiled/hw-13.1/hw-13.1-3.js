"use strict";
// Завдання #3: Experimental decorators
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upgradedTeam2 = exports.UpgradedFootballTeam2 = exports.ValidateParameters = void 0;
// Використайте попередню версію декораторів, переробіть MinLength, MaxLength та Email так, щоб їх можна було використовувати разом.
function ValidateParameters({ minLength, maxLength, email, }) {
    return function (originalMethod, context) {
        if (context.kind !== 'setter')
            throw new Error('Setter-only decorator');
        function replacementMethod(value) {
            if (minLength !== undefined && value.length < minLength) {
                throw new Error(`${String(context.name)} must have at least ${minLength} characters.`);
            }
            if (maxLength !== undefined && value.length > maxLength) {
                throw new Error(`${String(context.name)} must have at most ${maxLength} characters.`);
            }
            if (email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(value)) {
                    throw new Error(`Invalid email format for ${String(context.name)}.`);
                }
            }
            originalMethod.apply(this, [value]);
        }
        return replacementMethod;
    };
}
exports.ValidateParameters = ValidateParameters;
let UpgradedFootballTeam2 = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _set_teamName_decorators;
    let _set_coachEmail_decorators;
    return _a = class UpgradedFootballTeam2 {
            constructor(teamName, coachEmail) {
                this._teamName = (__runInitializers(this, _instanceExtraInitializers), '');
                this._coachEmail = '';
                this.teamName = teamName;
                this.coachEmail = coachEmail;
            }
            set teamName(value) {
                this._teamName = value;
            }
            get teamName() {
                return this._teamName;
            }
            set coachEmail(value) {
                this._coachEmail = value;
            }
            get coachEmail() {
                return this._coachEmail;
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _set_teamName_decorators = [ValidateParameters({ minLength: 5, maxLength: 20 })];
            _set_coachEmail_decorators = [ValidateParameters({ email: true })];
            __esDecorate(_a, null, _set_teamName_decorators, { kind: "setter", name: "teamName", static: false, private: false, access: { has: obj => "teamName" in obj, set: (obj, value) => { obj.teamName = value; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _set_coachEmail_decorators, { kind: "setter", name: "coachEmail", static: false, private: false, access: { has: obj => "coachEmail" in obj, set: (obj, value) => { obj.coachEmail = value; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.UpgradedFootballTeam2 = UpgradedFootballTeam2;
exports.upgradedTeam2 = new UpgradedFootballTeam2('Dreamers', 'coach@dream.com');
try {
    exports.upgradedTeam2.teamName = 'FC G';
}
catch (error) {
    console.error(error);
}
try {
    exports.upgradedTeam2.coachEmail = 'wrong@sticker.penalty';
}
catch (error) {
    console.error(error);
}
exports.upgradedTeam2.teamName = 'New Dreamer FC';
console.log(exports.upgradedTeam2.teamName);
exports.upgradedTeam2.coachEmail = 'newcoach@dreamers.com';
console.log(exports.upgradedTeam2.coachEmail);

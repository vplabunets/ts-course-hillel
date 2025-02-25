"use strict";
// Завдання #1: DeprecatedMethod
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
exports.FootballTeam = exports.DeprecatedMethod = void 0;
// Створіть декоратор DeprecatedMethod і навчіть його працювати з об'єктом,
//  який може приймати причину, через яку метод не варто використовувати,
// а також назву методу, яким його можна замінити, якщо це можливо.
function DeprecatedMethod(reason, replacement) {
    return function (originalMethod, context) {
        if (context.kind !== 'method')
            throw new Error('Method-only decorator');
        function replacementMethod(...args) {
            console.warn(`${String(context.name)} is deprecated and will be removed in a future version.` +
                (reason ? ` Reason: ${reason}.` : '') +
                (replacement ? ` Use ${replacement} instead.` : ''));
            return originalMethod.apply(this, args);
        }
        return replacementMethod;
    };
}
exports.DeprecatedMethod = DeprecatedMethod;
let FootballTeam = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _oldTactic_decorators;
    let _oldPlayerStats_decorators;
    return _a = class FootballTeam {
            constructor(teamName, players) {
                this.teamName = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this.teamName = teamName;
                this.players = players;
            }
            oldTactic() {
                console.log(`Using the old tactic for team ${this.teamName}.`);
            }
            newTactic() {
                console.log(`Using the new, more efficient tactic for team ${this.teamName}.`);
            }
            oldPlayerStats(player) {
                if (!this.players.includes(player)) {
                    console.error(`Player ${player} not found in the team ${this.teamName}.`);
                    return;
                }
                console.log(`Showing old stats for player ${player}.`);
            }
            newPlayerStats(player) {
                if (!this.players.includes(player)) {
                    console.error(`Player ${player} not found in the team ${this.teamName}.`);
                    return;
                }
                console.log(`Showing new, detailed stats for player ${player}.`);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _oldTactic_decorators = [DeprecatedMethod('This tactic is outdated', 'newTactic')];
            _oldPlayerStats_decorators = [DeprecatedMethod('This stats method is no longer accurate', 'newPlayerStats')];
            __esDecorate(_a, null, _oldTactic_decorators, { kind: "method", name: "oldTactic", static: false, private: false, access: { has: obj => "oldTactic" in obj, get: obj => obj.oldTactic }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _oldPlayerStats_decorators, { kind: "method", name: "oldPlayerStats", static: false, private: false, access: { has: obj => "oldPlayerStats" in obj, get: obj => obj.oldPlayerStats }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.FootballTeam = FootballTeam;
const team = new FootballTeam('FC Dreamer', ['Illia Zabarnyi', 'Andrii Lunin', 'Volodymyr Brazhko']);
team.oldTactic(); // oldTactic is deprecated and will be removed in a future version.
// Reason: This tactic is outdated. Use newTactic instead.
team.oldPlayerStats('Diego Maradona'); //oldPlayerStats is deprecated and will be removed in a future version. Reason: This stats method is no longer accurate. Use newPlayerStats instead.
//Player Diego Maradona not found in the team FC Dreamer.
team.newTactic(); // Using the new, more efficient tactic for team FC Dreamer.
// team.newPlayerStats('John Doe'); // Player John Doe not found in the team FC Dreamer..
team.newPlayerStats('Illia Zabarnyi'); // Showing new, detailed stats for player Illia Zabarnyi.

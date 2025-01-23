"use strict";
const playerDeepRequireReadonly = {
    name: { firstName: 'Bill', secondName: 'Gates' },
    // position: 'Defender',
}; //Property 'position' is missing in type '{ name: { firstName: string; secondName: string; }; }'
//  but required in type 'DeepRequireReadonly<IDeepPlayer>'.ts(2741)
playerDeepRequireReadonly.name.firstName = 'Antonio';

"use client";
const start_exp = 100;
const mult_ext = 1.50;

export function get_level(exp) {
    return parseInt(Math.pow(exp / start_exp, 1 / mult_ext)) + 1;
}

export function get_max_exp_lvl(lvl) {
    return parseInt(start_exp * (Math.pow(lvl, mult_ext)))
}

export function get_current_exp_lvl(exp, lvl) {
    let _exp = 0;
    for (let i = 1; i < lvl; i++) {
        _exp += get_max_exp_lvl(i - 1)
        console.log(exp, _exp);
    }

    return parseInt(exp - _exp)
}
"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();
        let b = (a) => {
            for (let i = 1; i <= a; i++) {
                $('.textbox').append(`<div class="btn">${a}</div>`);

            }
        }
        b($('input').val());
    });












});
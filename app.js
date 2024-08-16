"use strict";
$(document).ready(function () {

    $('.button').click(function (e) { 
        e.preventDefault();
        let b= (a)=>{
            for( let i=1; i<=a; i++) {
                $('.textbox').append(`<div class="btn">${'salam'}</div><div class="btn">${'salam salam salam'}</div>`);
            }
        }
        b($('input').val());
    });












});
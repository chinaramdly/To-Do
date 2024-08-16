"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) { 
        e.preventDefault();
        let b= (a)=>{
            for( let i=1; i<=a; i++) {
                $('.textbox').append(`<h2>${'5f'}<h2>`);
            }
        }
        b($('input').val());
    });












});
/*global $, alert, console*/


$(function() {

    'use strict';
    //Adjust Header Height
    var myHeader = $('.header');
    myHeader.height($(window).height());

    $(window).resize(function() {
        myHeader.height($(window).height());

    });
    //Links active
    $('.links li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
});
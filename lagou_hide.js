// ==UserScript==
// @name         拉勾职位隐藏
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  隐藏不想看到的职位。
// @author       chroming
// @match        https://www.lagou.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-1.11.0.min.js

var id_list = ['3917781', '2561733'];
var company_list = ['83552', '154789']

(function() {
    'use strict';
    $('.con_list_item').each(function(){
        var p = $(this).attr('data-positionid');
        var c = $(this).attr('data-companyid');
        if (id_list.includes(p)||company_list.includes(c)){
            $(this).hide();
        }
    });
});

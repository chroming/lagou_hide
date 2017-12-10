// ==UserScript==
// @name         拉勾职位隐藏
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  隐藏不想看到的职位。
// @author       chroming
// @match        https://www.lagou.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==
var position_list = ['3917781', '2561733'];
var company_list = ['83552', '154789'];


append_list = function(id, id_list){
    console.log(id_list);
    id_list.push(id);
};

$(function(){
    $('.con_list_item').each(function(){
        var p = $(this).attr('data-positionid');
        var c = $(this).attr('data-companyid');
        $(this).find('.p_top').append('<button type="button" onclick="append_list(p, position_list)">隐藏职位</button>');
        $(this).find('.company_name').append('<button type="button" onclick="append_list(c, company_list)">隐藏公司</button>');
        if (position_list.includes(p)||company_list.includes(c)){
            $(this).hide();
            console.log('hide:'+c);
        }
    });
});

// ==UserScript==
// @name         拉勾职位隐藏
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  隐藏不想看到的职位。
// @author       chroming
// @match        https://www.lagou.com/jobs/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_listValues
// @grant        GM_notification
// @require      http://code.jquery.com/jquery-1.11.0.min.js

// ==/UserScript==

var position_list = JSON.parse(GM_getValue('lagou_hide_pl')||'[]');
var company_list = JSON.parse(GM_getValue('lagou_hide_cl')||'[]');

append_list = function(id, tag){
    if (tag === true){
        position_list.push(id.toString());
        GM_setValue('lagou_hide_pl', JSON.stringify(position_list));
        GM_notification(text='职位已隐藏', timeout='1');

    }
    else {
        company_list.push(id.toString());
        GM_setValue('lagou_hide_cl', JSON.stringify(company_list));
        GM_notification(text='公司已隐藏', timeout='1');
    }
    window.location.reload();
};

$(function(){
    $('.con_list_item').each(function(){
        var p = $(this).attr('data-positionid');
        var c = $(this).attr('data-companyid');
        if (position_list.includes(p)||company_list.includes(c)){
            $(this).hide();
            console.log('hide:'+c);
        }
        else{
        $(this).find('.p_top').append('<button type="button" onclick="append_list('+p+', true)">隐藏职位</button>');
        $(this).find('.company_name').append('<button type="button" onclick="append_list('+c+', false)">隐藏公司</button>');
        }
    });
});

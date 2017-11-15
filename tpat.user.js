// ==UserScript==
// @name         TagPro Anti-Toxicity
// @version      0.1
// @description  Hides the chat (planned update: block individual players, message white-/blacklist)
// @author       Ko
// @include      http://tagpro-*.koalabeast.com:*
// @include      http://tangent.jukejuice.com:*
// @include      http://*.newcompte.fr:*
// @downloadURL  https://github.com/wilcooo/TagPro-AntiToxicity/raw/master/tpat.user.js
// @supportURL   https://www.reddit.com/message/compose/?to=Wilcooo
// @website      https://www.reddit.com/r/TagPro/comments/7d6cp2/chat_should_be_removed_from_pubs/dpvh709/
// ==/UserScript==

tagpro.ready(function(){$('#chatHistory').hide();});

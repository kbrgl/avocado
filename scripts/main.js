!function e(n,t,r){function i(o,d){if(!t[o]){if(!n[o]){var c="function"==typeof require&&require;if(!d&&c)return c(o,!0);if(a)return a(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var f=t[o]={exports:{}};n[o][0].call(f.exports,function(e){var t=n[o][1][e];return i(t?t:e)},f,f.exports,e,n,t,r)}return t[o].exports}for(var a="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,n,t){function r(e){function n(){0===d?(c+=1,c%e.extendedBreakCycles===0?(d=2,u=new i(e.extendedBreakTime,f)):(d=1,u=new i(e.breakTime,f))):(d=0,u=new i(e.workTime,f))}function t(){u.start(),e.render(d,!0)}function r(){u.pause()}function a(){d=e.initialState,0===d?u=new i(e.workTime,f):1===d?u=new i(e.breakTime,f):2===d&&(u=new i(e.extendedBreakTime,f)),c=0}function o(n){e=n||{},e.initialState=n.initialState||0,e.workTime=n.workTime||15e5,e.breakTime=n.breakTime||3e5,e.extendedBreakTime=n.extendedBreakTime||18e5,e.extendedBreakCycles=n.extendedBreakCycles||4,e.render=n.render||function(){},e.delay=n.delay||1,0===d?u.time=e.workTime:1===d?u.time=e.breakTime:2===d&&(u.time=e.extendedBreakTime)}e=e||{},e.initialState=e.initialState%3||0,e.workTime=e.workTime||15e5,e.breakTime=e.breakTime||3e5,e.extendedBreakTime=e.extendedBreakTime||18e5,e.extendedBreakCycles=e.extendedBreakCycles||4,e.render=e.render||function(){},e.delay=e.delay||1;var d,c,u,f={render:e.render.bind(this,d,!1),callback:function(){n(),e.render(d,!1),t()},delay:e.delay};a(),this.refresh=o,this.start=t,this.reset=a,this.pause=r}var i=e("./Timer").Timer;t.PomodoroTimer=r},{"./Timer":2}],2:[function(e,n,t){function r(e,n){function t(){f||(u=Date.now(),f=setInterval(r,n.delay))}function r(){c-=i(),0>c?(o(),n.callback()):d()}function i(){var e=Date.now(),n=e-u;return u=e,n}function a(){f&&(clearInterval(f),f=null)}function o(){a(),c=e,d()}function d(){n.render(c)}if(e&&!(e instanceof Object)){n=n||{},n.delay=n.delay||1,n.callback=n.callback||function(){},n.render=n.render||function(){};var c,u=0,f=null;o(),this.__defineSetter__("time",function(n){e>=0&&(e=n,c=e,d())}),this.__defineGetter__("time",function(){return c}),this.__defineGetter__("totalTime",function(){return e}),this.__defineSetter__("options",function(e){n=e||{},n.delay=e.delay||1,n.callback=e.callback||function(){},n.render=e.render||function(){}}),this.__defineGetter__("options",function(){return n}),this.start=t,this.pause=a,this.reset=o}}t.Timer=r},{}]},{},[1]);
!function n(e,t,r){function i(u,c){if(!t[u]){if(!e[u]){var f="function"==typeof require&&require;if(!c&&f)return f(u,!0);if(o)return o(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var l=t[u]={exports:{}};e[u][0].call(l.exports,function(n){var t=e[u][1][n];return i(t?t:n)},l,l.exports,n,e,t,r)}return t[u].exports}for(var o="function"==typeof require&&require,u=0;u<r.length;u++)i(r[u]);return i}({1:[function(n,e,t){function r(n,e){function t(){l||(a=Date.now(),l=setInterval(r,e.delay))}function r(){f-=i(),0>f?(u(),e.callback()):c()}function i(){var n=Date.now(),e=n-a;return a=n,e}function o(){l&&(clearInterval(l),l=null)}function u(){o(),f=n,c()}function c(){e.render(f)}if(n&&!(n instanceof Object)){e=e||{},e.delay=e.delay||1,e.callback=e.callback||function(){},e.render=e.render||function(){};var f,a=0,l=null;u(),this.__defineSetter__("time",function(e){n>=0&&(n=e,f=n,c())}),this.__defineGetter__("time",function(){return f}),this.__defineGetter__("totalTime",function(){return n}),this.__defineSetter__("options",function(n){e=n||{},e.delay=n.delay||1,e.callback=n.callback||function(){},e.render=n.render||function(){}}),this.__defineGetter__("options",function(){return e}),this.start=t,this.pause=o,this.reset=u}}t.Timer=r},{}]},{},[1]);
!function e(r,t,n){function i(a,l){if(!t[a]){if(!r[a]){var m="function"==typeof require&&require;if(!l&&m)return m(a,!0);if(o)return o(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var c=t[a]={exports:{}};r[a][0].call(c.exports,function(e){var t=r[a][1][e];return i(t?t:e)},c,c.exports,e,r,t,n)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(e,r,t){function n(e){function r(){0===l?(m+=1,m%e.extendedBreakCycles===0?(l=2,d=new i(e.extendedBreakTime,c)):(l=1,d=new i(e.breakTime,c))):(l=0,d=new i(e.workTime,c))}function t(){d.start(),e.render(l,!0)}function n(){d.pause()}function o(){l=e.initialState,0===l?d=new i(e.workTime,c):1===l?d=new i(e.breakTime,c):2===l&&(d=new i(e.extendedBreakTime,c)),m=0}function a(r){e=r||{},e.initialState=r.initialState||0,e.workTime=r.workTime||15e5,e.breakTime=r.breakTime||3e5,e.extendedBreakTime=r.extendedBreakTime||18e5,e.extendedBreakCycles=r.extendedBreakCycles||4,e.render=r.render||function(){},e.delay=r.delay||1,0===l?d.time=e.workTime:1===l?d.time=e.breakTime:2===l&&(d.time=e.extendedBreakTime)}e=e||{},e.initialState=e.initialState%3||0,e.workTime=e.workTime||15e5,e.breakTime=e.breakTime||3e5,e.extendedBreakTime=e.extendedBreakTime||18e5,e.extendedBreakCycles=e.extendedBreakCycles||4,e.render=e.render||function(){},e.delay=e.delay||1;var l,m,d,c={render:e.render.bind(this,l,!1),callback:function(){r(),e.render(l,!1),t()},delay:e.delay};o(),this.refresh=a,this.start=t,this.reset=o,this.pause=n}var i=e("./Timer").Timer;t.PomodoroTimer=n},{"./Timer":2}],2:[function(e,r,t){function n(e,r){function t(){c||(d=Date.now(),c=setInterval(n,r.delay))}function n(){m-=i(),0>m?(a(),r.callback()):l()}function i(){var e=Date.now(),r=e-d;return d=e,r}function o(){c&&(clearInterval(c),c=null)}function a(){o(),m=e,l()}function l(){r.render(m)}if(e&&!(e instanceof Object)){r=r||{},r.delay=r.delay||1,r.callback=r.callback||function(){},r.render=r.render||function(){};var m,d=0,c=null;a(),this.__defineSetter__("time",function(r){e>=0&&(e=r,m=e,l())}),this.__defineGetter__("time",function(){return m}),this.__defineGetter__("totalTime",function(){return e}),this.__defineSetter__("options",function(e){r=e||{},r.delay=e.delay||1,r.callback=e.callback||function(){},r.render=e.render||function(){}}),this.__defineGetter__("options",function(){return r}),this.start=t,this.pause=o,this.reset=a}}t.Timer=n},{}],3:[function(e,r,t){"use strict";var n=e("./PomodoroTimer").PomodoroTimer;!function(e){e(function(){var r={workTime:15e5,breakTime:3e5,extendedBreakTime:18e5,extendedBreakCycles:4};localStorage.getItem("workTime")||localStorage.setItem("workTime",r.workTime),localStorage.getItem("breakTime")||localStorage.setItem("breakTime",r.breakTime),localStorage.getItem("longerBreakTime")||localStorage.setItem("longerBreakTime",r.extendedbreakTime),localStorage.getItem("longerBreakRequiredCycles")||localStorage.setItem("longerBreakRequiredCycles",r.extendedBreakCycles);var t=function(r){e("body").css("background",r),e('meta[name="theme-color"]').attr("content",r)},i=function(){var e=new Audio("./assets/audio/nt.mp3");e.play()},o=function(e,r){navigator.serviceWorker.register("./scripts/sw.js"),Notification.requestPermission(function(t){"granted"===t&&navigator.serviceWorker.ready.then(function(t){t.showNotification(e,r)})})},a={workBgColor:"#303030",breakBgColor:"#2fe7ad",defaultBgColor:"#00e676",flashColor:"#7c4dff"},l={render:function(r,n,l){(r||0===r)&&(0===r?(e("#type").html("work"),t(a.workBgColor)):1===r?(e("#type").html("break"),t(a.breakBgColor)):2===r&&(e("#type").html("extended break"),t(a.breakBgColor)),n||(i(),o("minty",{body:"Your pomodoro has ended!",icon:"./assets/images/favicon.png",tag:"statechanged",vibrate:[200,100,200,100,200,100,200]}))),(l||0===l)&&(l=Math.ceil(l/1e3),l=Math.trunc(l/60)+":"+(10>l%60?"0":"")+l%60,e("#clock").html(l))},workTime:localStorage.getItem("workTime"),breakTime:localStorage.getItem("breakTime"),extendedBreakTime:localStorage.getItem("longerBreakTime"),extendedBreakCycles:localStorage.getItem("longerBreakRequiredCycles"),delay:1e3},m=new n(l);t(a.defaultBgColor),e("#options").hide(),e("#pause-timer, #resume-timer, #reset-timer").hide(),e('input[name="workTime"]').val(l.workTime/1e3/60),e('input[name="breakTime"]').val(l.breakTime/1e3/60),e('input[name="longerBreakTime"]').val(l.extendedBreakTime/1e3/60),e('input[name="longerBreakRequiredCycles"]').val(l.extendedBreakCycles),window.startTimer=function(){t(a.workBgColor),m.start(),e("#start-timer").hide(),e("#pause-timer, #clock").show(),e("#type").fadeIn(500,"linear")},window.pauseTimer=function(){m.pause(),e("#pause-timer, #resume-timer, #reset-timer").toggle()},window.resumeTimer=function(){m.start(),e("#pause-timer, #resume-timer, #reset-timer").toggle()},window.resetTimer=function(){m.reset(),e("#type").html(""),e("#start-timer, #reset-timer, #resume-timer, #type").toggle(),t(a.defaultBgColor)},window.toggleOptions=function(){e("#options").slideToggle()},window.saveOptions=function(){l.workTime=1e3*e('input[name="workTime"]').val()*60,l.breakTime=1e3*e('input[name="breakTime"]').val()*60,l.extendedBreakTime=1e3*e('input[name="longerBreakTime"]').val()*60,l.extendedBreakCycles=e('input[name="longerBreakRequiredCycles"]').val(),m.refresh(l),localStorage.setItem("workTime",l.workTime),localStorage.setItem("breakTime",l.breakTime),localStorage.setItem("longerBreakTime",l.extendedBreakTime),localStorage.setItem("longerBreakRequiredCycles",l.extendedBreakCycles);var r=e("body").css("background-color");e("#options").hide(200),e("body").css("background-color",a.flashColor),setTimeout(function(){e("body").css("background-color",r)},500)},window.defaultifyOptions=function(){e('input[name="workTime"]').val(r.workTime/1e3/60),e('input[name="breakTime"]').val(r.breakTime/1e3/60),e('input[name="longerBreakTime"]').val(r.extendedBreakTime/1e3/60),e('input[name="longerBreakRequiredCycles"]').val(r.extendedBreakCycles)}})}(jQuery)},{"./PomodoroTimer":1}]},{},[3]);
!function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n?n:r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}({1:[function(r,e,n){},{}]},{},[1]);
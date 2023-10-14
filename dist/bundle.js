// ==UserScript==
// @name        synth_usercripts
// @description <any>Monkey oriented userscript template
// @namespace   SynthMonkey Scripts
// @match       *://*/*
// @version     0.1.0
// @author      Synthlace <synthlace@gmail.com>
// @license     GPL-3.0
// @grant       none
// ==/UserScript==

/* this is an instructive banner */

(function () {
    'use strict';

    function theAnswer() {
        return 42;
    }

    main();
    function main() {
        // oh hi!
        let answer = theAnswer();
        console.log(answer);
    }

})();

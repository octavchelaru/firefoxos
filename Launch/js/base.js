/* global MozActivity, alert, console, Notification */
"use strict";
(function () {
    var pickImage = document.querySelector("#action");
    if (pickImage) {
        pickImage.onclick = function () {
            var videos = navigator.getDeviceStorage('videos');

            var request = videos.usedSpace();

            request.onsuccess = function () {
              // The result is express in bytes, lets turn it into megabytes
              var size = this.result / 1048576;
              console.log("The videos on your device use a total of " + size.toFixed(2) + "Mo of space.");
            }

            request.onerror = function () {
              console.warn("Unable to get the space used by videos: " + this.error.name);
            }
        };
    }
})();
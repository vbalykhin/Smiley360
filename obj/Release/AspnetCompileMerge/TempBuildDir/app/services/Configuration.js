﻿smiley360 = smiley360 || {};
smiley360.configuration = smiley360.configuration || {};


smiley360.configuration.isDebugMode = function () {
    return false;
}

smiley360.configuration.getServerDomain = function () {
    return "http://smileys.ekonx.net.ua/";
}

smiley360.configuration.getServerUrl = function () {
    return "http://smileys.ekonx.net.ua/index.php/";
}

smiley360.configuration.getResourceDomain = function () {
    return "http://uat.smiley360.com";
}
smiley360.configuration.getProfilePic = function (memberID, memberImage_file_name) {
	return Ext.String.format("{0}/images/members/{1}/{2}/{3}",
        smiley360.configuration.getResourceDomain(), memberID.toString().substring(memberID.toString().length - 2, memberID.toString().length - 1), memberID.toString().substring(memberID.toString().length - 1, memberID.toString().length), memberImage_file_name);
}
smiley360.configuration.getOfferImagesUrl = function (missionID, imageName) {
    return Ext.String.format("{0}/images/missions/mission{1}/{2}",
        smiley360.configuration.getResourceDomain(), missionID, imageName);
}
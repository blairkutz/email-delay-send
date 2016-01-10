/*
Copyright 2015 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/**********************
 Interactions with the WEB-UI
**********************/
function doGet() {
  return HtmlService.createTemplateFromFile('User_UI.html').evaluate();
}

function parseUserDate(datestr) {
  debug('Parsing user date string:"' + datestr +'"');
  
  var user_timezone_string = parseDateToUserTimezoneString(datestr);
  
  if (user_timezone_string != null)
    return 'Your date was parsed successfully to:\n' + user_timezone_string;
  else
    return 'Sorry, I could not understand the date that you typed: ' + datestr + '.\nFor help see this page:\nhttps://code.google.com/p/gmail-delay-send/wiki/GmailDelaySendSpecifyingDates';
}

function savePrefs(form_object) {
  return savePrefsFromForm(form_object);
}

function getPrefs() {
  return loadPrefsForForm();
}

function restoreDefaultPrefs(form_object) {
  return clearPreferences();
}

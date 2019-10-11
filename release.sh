#!/bin/bash

d=`date "+%y%m%d%H%M%S"`
zip -R "${d}.zip" src/*
URL="https://chrome.google.com/webstore/developer/dashboard"

if which xdg-open > /dev/null
then
  xdg-open URL
elif which gnome-open > /dev/null
then
  gnome-open URL
fi

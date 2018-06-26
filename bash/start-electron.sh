#!/bin/sh
while [ true ]
do
  if [ -e 'dist/index.html' ]
  then
    node_modules/.bin/electron .
    break
  else
    sleep 3
  fi
done

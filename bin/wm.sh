#! /bin/bash
set -e

img=$1

#xy=`identify $img | awk '{print $3}'`
#w=${xy%x*}
#
#if [ $w -gt 400 ];
#then
#  size="s";
#else
#  size="s"; #small
#fi;
#

size="s"

rel=`magick $img -quiet -colorspace Gray -resize 1x1 txt:  | grep -v '^#' | cut -d '(' -f 2 | cut -d ')' -f 1`

if [ $rel -gt 192 ];
then
#use dark logo"
  logo=~/development/qr-hugo/design/watermark-b${size}.png;
else
#use bright logo"
  logo=~/development/qr-hugo/design/watermark-w${size}.png;
fi;

composite -gravity SouthEast $logo $1 $1

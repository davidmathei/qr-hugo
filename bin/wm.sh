#! /bin/bash
set -e

img=$1

rel=`magick $img -quiet -colorspace Gray -gravity SouthEast -crop 200x200+200+200 -resize 1x1 txt:  | grep -v '^#' | cut -d '(' -f 2 | cut -d ')' -f 1`

if [ $rel -gt 192 ];
then
#use dark logo"
  logo=~/development/qr-hugo/design/watermark-b.png;
else
#use bright logo"
  logo=~/development/qr-hugo/design/watermark-w.png;
fi;


composite -gravity SouthEast $logo $1 $1

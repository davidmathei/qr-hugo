f=$1

ext="${1##*.}"

f2=`basename $1 .${ext}`

wm="$f2-wm.${ext}"
cp $f $wm
~/bin/wm.sh $wm

for s in 380 200 120 
do 
  o="$f2-${s}w.${ext}"
  magick $wm -resize ${s}x $o
done

rm -f $wm

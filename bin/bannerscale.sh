f=$1
f2=`basename $1 .jpg`

wm="$f2-wm.${ext}"
cp $f $wm
~/bin/wm.sh $wm


for s in 960 750 500 360 
do 
  o="$f2-${s}w.jpg"
  magick $wm -resize ${s}x $o
done

rm -f $wm

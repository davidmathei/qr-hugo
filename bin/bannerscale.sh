f=$1
f2=`basename $1 .jpg`

for s in 960 750 500 360 
do 
  o="$f2-${s}w.jpg"
  magick $f -resize ${s}x $o
done

rm -f $wm

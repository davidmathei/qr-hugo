f=$1
off=$2
f2=`basename $1 .jpg`

xy=`identify $f | awk '{print $3}'`

w=${xy%x*}
h=`bc <<< "$w/3"`

thecrop="${f2}-cropped.jpg"
#w is original width, $h result height, $off top offset
magick $f -crop ${w}x${h}+0+${off} $thecrop

~/bin/wm.sh $thecrop

for s in 960 750 500 360 
do 
  o="$f2-${s}w.jpg"
  magick $thecrop -resize ${s}x $o
done

rm -f $thecrop

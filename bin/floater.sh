f=$1

ext="${1##*.}"

f2=`basename $1 .${ext}`

for s in 380 200 120 
do 
  o="$f2-${s}w.${ext}"
  magick $f -resize ${s}x $o
done

rm -f $wm

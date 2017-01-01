#!/bin/bash
#
#  Define the starting search point:
#  This script is used to change the name of all jpg files inside a folder to a consecutive number list
#
start="~/Downloads/photos/"

#
#  Define the prefix for renaming
#
prefix="image_"

#
#  Initialize progressive number
#
count=100

#
#  Loop over JPEG images. Note: no chronological sorting is applied here.
#
while read file
do
  dir=$(dirname "$file")
  echo mv "$file" "$dir"/$prefix$(printf "%07d" $count).jpg
  count=$((count + 100))
done < <(find $start \( -iname \*.jpg -o -iname \*.jpeg \))

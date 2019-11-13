#!/bin/bash

DIR=$1

if [[ -z $DIR ]];
then
    echo `directory`" - Missing file pattern directory, ej: ./dir "
    exit 1
fi

for filename in "$DIR"/*; do 
    
    fullname=$(basename -- "$filename")
    path="${filename:0:${#filename} - ${#fullname}}"
    extension="${fullname##*.}"
	name="${fullname%.*}"

	echo file "$path""$fullname"

	ffmpeg -i "$filename" -vf scale=32x32 "$path""$name"_1."$extension"
	rm "$filename"
	mv "$path""$name"_1."$extension" "$filename"
done
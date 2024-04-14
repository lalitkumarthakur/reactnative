#!/bin/bash

for filename in *.png; do
  new_name=${filename/WeatherIcon /WeatherIcon}
  new_name=${new_name/- /-}
  mv "$filename" "$new_name"
  echo "Renamed $filename to $new_name"
done

#!/usr/bin/bash
#update tambahan
apt-get update -y
apt-get upgrade -y
apt-get install -y git nodejs libwebp ffmpeg

sleep 1
clear
sleep 1
echo "\n"
sleep 1

echo "Bentar Coy,Install module dulu"

    npm install --no-bin-links
    
echo "Okeh udah selesai sekarang lu tinggal path nya aja langsung npm start"

    npm start
echo "done"
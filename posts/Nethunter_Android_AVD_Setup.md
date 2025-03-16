---
title: Nethunter Development Setup
date: 2024-08-30
description: Nethunter Development Setup using Android Studio, some qemu hacks, and the built in nh tools
lastUpdated: true
---

# Nethunter AVD Development Setup
This has been a long requested writeup and I am all for it,
developing nethunter can be a pain, from kernel development, to the chroot to the app itself

## Getting Started
This can be done whether you are on 1linux or windows and i will provide examples for both

You can download android studio from [Here](https://developer.android.com/studio)

After downloading and installing android studio you can go ahead and go to the devices tab and click the add button

![Add Button](/images/android_studio_add_button.png)

Click create new virtual device and select a new device template

Download your desired android version and setup your android virtual device (AVD)

After your AVD is setup download rootAVD from [Here](https://gitlab.com/newbit/rootAVD)

If you are on windows run ``.\rootAVD.bat ListAllAVDs`` 
<br>
If you are on linux run ``./rootAVD.sh ListAllAVDs``
<br>
<br>
<strong> Your AVD must be running for this next step </strong>

Find your desired api version and run the command it gives you eg. 
<br>
``rootAVD.bat/sh system-images\android-27\google_apis\x86\ramdisk.img``

| Android Version         | API |
|-------------------------|-----|
| Kitkat (4.4)            | 19  |
| Lollipop (5)            | 21  |
| Lollipop (5.1)          | 22  |
| Marshmallow (6)         | 23  |
| Nougat  (7)             | 24  |
| Oreo  (7.1)             | 25  |
| Oreo  (8.0)             | 26  |
| Oreo  (8.1)             | 27  |
| Pie   (9)               | 28  |
| Quince Tart (10)        | 29  |
| Red Velvet Cake   (11)  | 30  |
| Snow Cone   (12)        | 31  |
| Snow Cone   (12L)       | 32  |
| Tiramisu    (13)        | 33  |
| Upside Down Cake (14)   | 34  |
| Vanilla Ice Cream (15)  | 35  |

After picking your desired API version and downloading it you will be presented wit a bunch of options like ram, storage etc.
<br>
Most of these are personal preference but you want 30-40gb of storage to play around with (installing packages, apps, chroot etc).
<br>
<br>
The next step is to download a nifty tool named RootAVD written by newbit
You can download it [Here](https://gitlab.com/newbit/rootAVD)


## Rooting the AVD
For the next step: **Make sure the AVD is running**
<br>
After running the script it will give you an output like the one below
<br>cdc 
![RootAVD Output](/images/root-avd-output.png)
<br>
You want to select your api version in my case I am developing for android 8 (27) so I will run
``./rootAVD.sh system-images/android-27/google_apis/x86/ramdisk.img``

This will automatically install magisk, patch the Boot.img, root the device.
If it turns off the AVD do not be alarmed just restart it and it should boot.
Go into the magisk app on the AVD and you should see a popup asking you to apply changes and reboot, this is ok, click ok, the avd will turn off (and usually turn back on) but if it doesnt your more than ok to manually start it back up
<br>
Congrats your AVD is now rooted!

## Build x64 Nethunter Image
The next step is to clone the NH Image Builder from [Here](https://gitlab.com/kalilinux/nethunter/build-scripts/kali-nethunter-installer)
1. Cd into the project directory
2. You need to generate a kernel list by running ``./bootstrap.sh``
3. You need to generate a image for x64 architecture, I built mine for android 8 but you can change this is you chose a different AVD version ``./build.py -g amd64 --oreo``
4. Wait until the builder finishes
5. You can upload the image to the AVD in a variety of ways (sftp, android studio file manager), I spun up a python webserver and downloaded it from chrome in the AVD using ``python -m http.server`` while cded into the image directory into the builder directory, I connected in the AVD using 10.0.2.2:8000
6. After the image is transfered go the the magisk app -> modules -> install from disk and select the image, when it asks to reboot do so
Congrats you have flashed the NH image
## Build x64 Nethunter Chroot

## Flashing the Device

## Device pass through
You can passthrough a multitude of devices into the AVD, from wifi, to SDR, to bluetooth, to a proxmark3
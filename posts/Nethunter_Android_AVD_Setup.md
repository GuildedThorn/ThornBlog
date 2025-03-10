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

After picking your desired API version
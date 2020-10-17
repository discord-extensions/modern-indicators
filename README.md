# Better Channel Indicators
Adds a nice touch to Discord's current channel indicators.

## Preview
![Preview](https://github.com/LuckFire/BetterChannelIndiactors/blob/main/src/Preview.gif?raw=true)

## Installation
For manual installation, go to **your themes folder, open a command prompt / powershell / terminal / or git bash** and enter the following:
```
git clone https://github.com/LuckFire/BetterChannelIndicators
```

For quick installation, go to **Settings -> Themes -> Quick CSS** and copy-paste the following code:
```
@import url("https://raw.githack.com/LuckFire/BetterChannelIndicators/main/src/source.css")

:root {
    --unread-badge: rgba(255, 255, 255, 0.6);
    --unread-bg: rgba(255, 255, 255, 0.01);
    --selected-badge: rgb(112, 135, 215);
    --selected-bg: rgba(112, 135, 215, 0.1);
    --selected-bg-hover: rgba(112, 135, 215, 0.18);
    --hovered-bg: rgba(79, 84, 92, 0.25);
    --bg-rounding: 0 50px 50px 0;
    --border-info: 2px solid;
}
```

## Customization
There's a lot that you can customize using the varibles. To customize, go to **Themes Folder -> Open indicators.css**, there you can change anything that you want to change. This ranges from the badge colors/background colors and transparency to the rounding of the background and how wide the badge is. 

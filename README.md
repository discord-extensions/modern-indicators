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
@import url("https://raw.githack.com/LuckFire/BetterChannelIndicators/main/src/source.css");

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

## Variable Customization
Using the variables in the indicators.css file, you are able to customize a multitude of things. Ranging from the color/transparency of the color for the badges/backgrounds, to the rounding of the borders, you can customize basically everything. If you don't know how to access this file, go to your **Themes Folder -> BetterChannelIndicators -> indicators.css**, and inside of the :root, you should see all of the variables. If you need even more of a guide on which changes which, read below.
```
- Anything with -bg is the backgruond of the channel that is selected/unread. (unread-bg, selected-bg, hovered-bg)
- Anything that has -badge next to it is the thing that appears to the left of the channel that is selected/unread. (unread-badge, selected-badge).
- selected-bg-hover is the hovering for the selected channel, and hovered-bg is the hovering of any other channel (unread and ones that aren't unread).
- bg-rounding is the rounding of the right side of the channel, make sure you only change the middle variables, otherwise it wont round properly. If you'd like to remove rounding entirely, just remove everything and put 0.
- border-info is how the badge looks (the thing all the way to the left), you can customize the length of it as well as some other things, such as if you wanted a dashed line or maybe it double lined. For more information, refer to this link: https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style
```

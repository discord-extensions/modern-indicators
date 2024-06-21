### ![replugged](https://discord-extensions.github.io/assets/icons/replugged.png) **[Replugged](https://replugged.dev)**
- [Direct Install](https://replugged.dev/install?identifier=dev.LuckFire.ModernIndicators)
- [Maintained by Saltssaumure](https://github.com/MiniDiscordThemes/modern-indicators) -- please report Replugged issues to them!

### ![betterdiscord](https://discord-extensions.github.io/assets/icons/betterdiscord.png) **[BetterDiscord](https://betterdiscord.app)**
- [Direct Download](https://github.com/discord-extensions/modern-indicators/releases/latest/download/modern-indicators.theme.css)
- [Compiled Source](https://discord-extensions.github.io/modern-indicators/src/source.css)

### ![vencord](https://discord-extensions.github.io/assets/icons/vencord.gif) **[Vencord](https://github.com/Vendicated/Vencord)**
1. Go to user settings (CTRL + ,)
2. Go to the "Vencord" category and select the "Themes" tab.
3. In the input field under "THEMES" paste the following URL.
```
https://discord-extensions.github.io/modern-indicators/src/source.css
```

### ![stylus](https://discord-extensions.github.io/assets/icons/stylus.png) **Stylus**
> **Warning**
> Firefox users must have "Patch CSP to allow style assets" enabled for the theme to work. This can be found in Stylus' settings under "Advanced"
1. Install the browser extensions for your respective browser.
    - [Chrome Webstore](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)
    - [Firefox Addons](https://addons.mozilla.org/en-US/firefox/addon/styl-us/)
2. Once installed, open [this link](https://github.com/discord-extensions/modern-indicators/raw/main/clients/modern-indicators.user.css) in a new browser tab. This opens the page where you will install this userstyle.
3. Press the `Install Style` button.
---
### Customization
You can add the variables below into your Quick CSS and modify the basic colors. Please use HSL values.
```css
:root {
    --indicator-border-size: 2px;
    --indicator-border-style: solid;
    --indicator-rounding: 0;
}

.theme-light {
    --indicator-unread: var(--primary-900-hsl);
    --indicator-unread-mention: var(--red-430-hsl);
    --indicator-selected: var(--brand-500-hsl);
    --indicator-connected: var(--green-430-hsl);
}

.theme-dark {
    --indicator-unread: var(--primary-130-hsl);
    --indicator-unread-mention: var(--red-400-hsl);
    --indicator-selected: var(--brand-500-hsl);
    --indicator-connected: var(--green-230-hsl);
}
```
---
### Licensing
This theme is licensed under the MIT license. Please refer to the [LICENSE](./LICENSE) file for more details regarding rights and limitations.

### Credits
Everyone who has contributed can be found on the [CREDITS.md](./CREDITS.md) file. A personal thank you to everyone who has helped!

### Support Server
If you are having any issues with the theme, feel free to join the [support server](https://discord.gg/vYdXbEzqDs), or make an issue on this repository.
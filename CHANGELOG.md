# Version 1.6.1 - 01/22/2022
- Fix for Active Threads (thanks to **[FeroshUX](https://github.com/FeroshUX)**).

<details>
<summary><b> Version 1.6.0 - 01/13/2022 </b></summary>

Fixed theme being broken due to class reroll.
</details>

<details>
<summary><b> Version 1.5.0 - 12/10/2021 </b></summary>

- Better compatibility for both light and dark mode.
- Powercord & Vizality will now use the `_theme.scss` file located in src.
- Minor changes to code to be a bit more efficient.
- Updated readme info.

It is recommended to reinstall if you're on a version older than this one, especially if you're using BetterDiscord.
</details>

<details>
<summary><b> Version 1.4.1 - 12/9/2021 </b></summary>

- Temporary adjustments for better light mode support.
- Removal of scuffed fallback system (since I can just include the variables in the import file).
</details>

<details>
<summary><b> Version 1.4.0 </b></summary>

- Indicators now apply on discovery pages.
- Some minor code clean-up / changes.
</details>

<details>
<summary><b> Version 1.3.0 </b></summary>

- Added 2 new variables for text and icons, meaning you can change the color of those two if you want to. You'll have to redownload the theme if you want to properly use these (or at least copy-paste them into your index / theme files).
- I've added fallback values to the variables. It'll first check for a default variable, and if it cant detect that it'll attempt to use the RGB value variable, and if neither of those are detected it'll default to a fallback RGB value variable. (can someone tell me if the way i've done this causes any performance issues?)

This update messes with variables **A TON**, so to prevent yourself from running into any issues, please be sure to redownload the theme.
</details>

<details>
<summary><b> Version 1.2.2 </b></summary>

Icons are now colored in the direct messages list (i.e friends, library icons).
</details>

<details>
<summary><b> Version 1.2.1 </b></summary>

- Colors have been adjusted to match **[Discord's branding](https://discord.com/branding)**. You are still able to change the colors, but this change was made for consistency sake.
- Icons now have colors depending on their indicator (parent) color.
- Updated README assets.
</details>

<details>
<summary><b> Version 1.2.0 </b></summary>

- Eveyrthing has been redone from scratch, which should make this loads better.
- Add more variables and better labeling; this should make customization a lot simpler.
- Added support for connection to a voice channel, incase anyone wanted color customization on those.

Please ignore the changes in version labeling. It may cause confusion since it seems like the version was downgraded, but please know this was intentional as I wanted to get rid of the unnecessary version jumps.
</details>

<details>
<summary><b> Version 1.1.0 </b></summary>

- Rewrote everything to use SCSS, helping me maintain this a bit better.
- Added support for BetterDiscord, Vizlaity and Web.
</details>

<details>
<summary><b> Version 1.0.4 </b></summary>

Changed back to using `::before` due to `box-shadow: inset;` not having as much customability. (this reverts v1.0.2)
</details>

<details>
<summary><b> Version 1.0.3 </b></summary>

Fix for Discord changing channel classes.
</details>

<details>
<summary><b> Version 1.0.2 </b></summary>

Changed from using a `::before` pseudo element to using `box-shadow: inset;`
</details>

<details>
<summary><b> Version 1.0.1 </b></summary>

Fixed position for channels and avatars.
</details>

<details>
<summary><b> Version 1.0.0 </b></summary>

Inital release.
</details>
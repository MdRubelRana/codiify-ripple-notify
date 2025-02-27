
[![npm version](https://img.shields.io/npm/v/ripple-notify.svg?label=%E2%9B%B1npm&style=for-the-badge)](https://badge.fury.io/js/ripple-notify)
![License: ISC](https://img.shields.io/npm/l/ripple-notify.svg?label=%F0%9F%93%9Clicense&style=for-the-badge)
[![Tweeting](https://img.shields.io/twitter/follow/codiify_ui?style=for-the-badge&logo=x)](https://x.com/codiify_ui)
[![Support Server](https://img.shields.io/discord/1246870627537653860.svg?label=Discord&logo=Discord&colorB=4493f8&style=for-the-badge)](https://discord.gg/vmr2FFzCKX)





Ripple notify is a sleek and efficient notification package designed to deliver subtle yet effective alerts across various digital platforms. Its intuitive design seamlessly integrates into web and mobile applications, providing unobtrusive notifications that capture user attention without disrupting workflow. Stay informed with Ripple notify's prompt and seamless communication.

## Installation

You can install this package via npm:

```bash
npm i ripple-notify
```

## Usage

After successful installation, you can import the package and use it in your project. You can customize the notification as per your need.
You need a `ripple.js` to your project `root` folder to customize the notification globally. You can customize the timeout, animation speed, colors and many more.

###
File name must be `ripple.js` and the content should be like below:
```javascript
export const RippleConfig = {
    timeout: 3000,
    animationSpeed: '0.5s',
    duration: 500,
    colorful: false,
    icon: true,
    position: 'top-right',
    colors: {
        success: {
            backgroundColor: '#ECFDF3',
            color: '#008A2E',
            borderColor: '#D3FDE5'
        },
        error: {
            backgroundColor: '#FFF0F0',
            color: '#E60000',
            borderColor: '#FFE0E1'
        },
        info: {
            backgroundColor: '#F0F8FF',
            color: '#0973DC',
            borderColor: '#D3E0FD'
        },
        warning: {
            backgroundColor: '#FFFCF0',
            color: '#DC7609',
            borderColor: '#FDF5D3'
        },
        default: {
            backgroundColor: '#FFFFFF',
            color: '#171717',
            borderColor: '#EDEDED'
        }
    }
};
```
#

Some of the options you can customize are:
- `timeout`: Represents the time in milliseconds that the notification will be displayed. Default is `3000`.
####
- `animationSpeed`: Animation speed of the notification. Default is `0.5s`.
####
- `duration`: It will disappear after the duration. Default is `500`.
####
- `colorful`: If you want to show the colorful notification, you can set it to `true`. Default is `false`.
####
- `icon`: If you don't want to show the icon, you can set it to `false`. Default is `true`.
####
- `position`: You can customize the position of the notification. Available options are `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`.

#

```html
<link rel="stylesheet" href="node_modules/ripple-notify/styles.css">
```

###

```javascript
<script type="module">
    import RippleNotify from './node_modules/ripple-notify/index.js';

    const ripple = RippleNotify;

    window.ripple = ripple;
</script>
```
###
## Documentation

Provide details about the functions, classes, or methods exposed by your package. Include parameters, return values, and usage examples.
Check the documentation to get you started with the package [here](https://mdrubelrana.github.io/ripple-notify/).

## Release Notes

You can find the release note for the latest release [here](https://www.npmjs.com/package/@codiify/ripple-notify?activeTab=versions).

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments
### Author
[![Tweeting](https://img.shields.io/twitter/follow/rubel_codiify?style=for-the-badge&logo=x)](https://x.com/rubel_codiify)
[![Support Server](https://img.shields.io/discord/1246870627537653860.svg?label=Discord&logo=Discord&colorB=4493f8&style=for-the-badge)](https://discord.gg/vmr2FFzCKX)



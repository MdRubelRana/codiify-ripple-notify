/*
  Copyrights: Codiify
  Website: https://www.codiify.com
  Developer: Md. Rubel Rana
  Dev website: https://www.rubelrana.dev

  Official x account: https://x.com/codiify_ui
  Developer x account: https://www.x.com/rubel_codiify
 */
export let RippleConfig;

(async () => {
    // Default configuration
    RippleConfig = {
        timeout: 3000,
        animationSpeed: '0.5s',
        duration: 500,
        colorful: true,
        icon: true,
        position: 'bottom-right',
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

    // console.log('Using default configuration:', RippleConfig);

    // Specify the custom config path
    const customConfigPath = '../../ripple.js'; // Adjust the path as needed

    try {
        // Try to import the custom config file
        const customConfigModule = await import(customConfigPath);

        // Merge the custom config with the default config
        RippleConfig = {
            ...RippleConfig,
            ...customConfigModule.RippleConfig,
            colors: {
                ...RippleConfig.colors, // Preserve the default colors
                ...customConfigModule.RippleConfig.colors // Override with custom colors
            },
        };
        // console.log('Custom configuration loaded:', customConfigModule.RippleConfig);
    } catch (e) {
        // console.warn(`Custom configuration file not found at ${customConfigPath}. Using default configuration.`);
    }
})();

class RippleNotify {
    static success(message = 'This is a success message!', options = {}) {
        this.createToast('success', message, options);
    }

    static error(message = 'This is an error message!', options = {}) {
        this.createToast('error', message, options);
    }

    static info(message = 'This is an info message!', options = {}) {
        this.createToast('info', message, options);
    }

    static warning(message = 'This is a warning message!', options = {}) {
        this.createToast('warning', message, options);
    }

    static default(message = 'This is a default message!', options = {}) {
        this.createToast('default', message, options);
    }

    static createToast(type = 'default', message, options = {}) {
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;

        const icon = document.createElement('i');

        const showIcon = options.hasOwnProperty('icon') ? options.icon : RippleConfig.icon;

        if (showIcon) {
            icon.className = `toast-icon`;
            switch (type) {
                case 'success':
                    icon.classList.add('fas', 'fa-check-circle');
                    break;
                case 'error':
                    icon.classList.add('fas', 'fa-times-circle');
                    break;
                case 'info':
                    icon.classList.add('fas', 'fa-info-circle');
                    break;
                case 'warning':
                    icon.classList.add('fas', 'fa-exclamation-circle');
                    break;
                default:
                    icon.classList.add('fas', 'fa-bell');
            }
        }

        const text = document.createElement('span');
        text.textContent = message;

        toast.appendChild(icon);
        toast.appendChild(text);

        // Set the position of the toast
        const position = options.position || RippleConfig.position || 'top-right';
        toast.style.position = 'fixed';
        toast.style.animationDuration = options.animationSpeed || RippleConfig.animationSpeed;

        switch (position) {
            case 'top-left':
                toast.style.top = '14px';
                toast.style.left = '14px';
                toast.style.animation = `slideInLeft ${toast.style.animationDuration} ease-in-out`;
                break;
            case 'top-center':
                toast.style.top = '14px';
                toast.style.left = '50%';
                toast.style.transform = 'translateX(-50%)';
                toast.style.animation = `slideInTop ${toast.style.animationDuration} ease-in-out`;
                break;
            case 'top-right':
                toast.style.top = '14px';
                toast.style.right = '14px';
                toast.style.animation = `slideInRight ${toast.style.animationDuration} ease-in-out`;
                break;
            case 'bottom-left':
                toast.style.bottom = '14px';
                toast.style.left = '14px';
                toast.style.animation = `slideInLeft ${toast.style.animationDuration} ease-in-out`;
                break;
            case 'bottom-center':
                toast.style.bottom = '14px';
                toast.style.left = '50%';
                toast.style.transform = 'translateX(-50%)';
                toast.style.animation = `slideInBottom ${toast.style.animationDuration} ease-in-out`;
                break;
            case 'bottom-right':
                toast.style.bottom = '14px';
                toast.style.right = '14px';
                toast.style.animation = `slideInRight ${toast.style.animationDuration} ease-in-out`;
                break;
            default:
                toast.style.top = '14px';
                toast.style.right = '14px';
        }

        const colorful = options.hasOwnProperty('colorful') ? options.colorful : RippleConfig.colorful;

        if (colorful) {
            const colorConfig = RippleConfig.colors[type] || RippleConfig.colors.default;
            toast.style.backgroundColor = options.backgroundColor || colorConfig.backgroundColor;
            toast.style.color = options.color || colorConfig.color;
            toast.style.borderColor = options.borderColor || colorConfig.borderColor;
        } else {
            const defaultColorConfig = RippleConfig.colors.default;
            toast.style.backgroundColor = options.backgroundColor || defaultColorConfig.backgroundColor;
            toast.style.color = options.color || defaultColorConfig.color;
            toast.style.borderColor = options.borderColor || defaultColorConfig.borderColor;
        }

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.transition = 'opacity 2s ease';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), options.duration || RippleConfig.duration);
        }, options.timeout || RippleConfig.timeout);
    }
}

window.RippleNotify = RippleNotify;

export default RippleNotify;

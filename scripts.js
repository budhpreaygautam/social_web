// Sidebar

const menuItems = document.querySelectorAll('.menu-item');

// Messages
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


//Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');



// ***************** Sidebar Menu ****************
// Function to remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
};

// Add click event listener to each menu item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const notificationPopup = document.querySelector('.notification-popup');
        const notificationCount = document.querySelector('#notification .notification-count');

        // Check if the clicked item is "Notifications"
        if (item.id === 'notification') {
            // Toggle the visibility of the notification popup
            if (notificationPopup) {
                if (notificationPopup.style.display === 'block') {
                    notificationPopup.style.display = 'none'; // Hide popup
                } else {
                    notificationPopup.style.display = 'block'; // Show popup
                    if (notificationCount) {
                        notificationCount.style.display = 'none'; // Hide notification count
                    }
                }
            }
        } else {
            // Hide notification popup for other menu items
            if (notificationPopup) {
                notificationPopup.style.display = 'none';
            }
        }

        // Toggle active state for menu items
        changeActiveItem();
        item.classList.add('active');
    });
});

// ********************* Messages ****************
// Search chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) !== -1) {
            chat.style.display = 'flex'; // Show matching messages
        } else {
            chat.style.display = 'none'; // Hide non-matching messages
        }
    });
};

// Attach event listener to the search bar
messageSearch.addEventListener('input', searchMessage);

// Highlight messages on notification click
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none'; // Hide notification count
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});

// Theme/Display Customization

// Open Modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
};
theme.addEventListener('click', openThemeModal);

// Close Modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
};
themeModal.addEventListener('click', closeThemeModal);

// ****************** Fonts ****************

const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}

fontSize.forEach(size => {


    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }
        else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }
        else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }
        else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }
        else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }
        // change font size of the root element
        document.querySelector('html').style.fontSize = fontSize;
    })
})


// Remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(color => {
        color.classList.remove('active');
    });
};

// Change primary color
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;

        // Remove active class from colors
        changeActiveColorClass();

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        }
        else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        }
        else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        }
        else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        }
        else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }

        // Add active class to the clicked color
        color.classList.add('active');

        // Set the primary color hue in CSS
        document.documentElement.style.setProperty('--primary-color-hue', primaryHue);
    });
});

//Theme Background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    //add active class
    Bg1.classList.add('active');

    //remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    window.location.reload();
})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    Bg2.classList.add('active');

    //remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');

    changeBG();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    Bg3.classList.add('active');

    //remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');

    changeBG();
})
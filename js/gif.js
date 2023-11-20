const gifArray = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDVzbmFjZ3Zud2M4bWp1d2E0M2hqcnF3dTAwdXIwaXQ0amcwbWx0eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6q0qelNtLoas4025sy/giphy.gif",
    "https://media.giphy.com/media/iNQ2cIve8rUqI/giphy.gif",
    "https://media.giphy.com/media/1iW2g0lzwdRqNu3m/giphy.gif",
    "https://media.giphy.com/media/3o72EYG2c0LFepRbJ6/giphy.gif",
    "https://media.giphy.com/media/5yccPytI1wapjfrq0V/giphy.gif",
    "https://media.giphy.com/media/KPn24x701Asus/giphy.gif",
    "https://media.giphy.com/media/PwLYfy05MBVVm/giphy.gif",
    "https://media.giphy.com/media/l0MYODQzHE3ibZ62A/giphy.gif",
    "https://media.giphy.com/media/PBp2jmQEq7NQngslm4/giphy.gif",
    "https://media.giphy.com/media/YBHXE5IlEBZiyNXf30/giphy.gif",
    "https://media.giphy.com/media/gjAd5llUlKZjom2iuL/giphy.gif",
    "https://media.giphy.com/media/8Aj8rqu5Cbf9xJeGbj/giphy.gif",
    "https://media.giphy.com/media/4Bj93EkX1UiQM/giphy.gif",
    "https://media.giphy.com/media/1XeHuHcR6Mo50PibPW/giphy.gif",
    "https://media.giphy.com/media/f9NaK0iIjpY5Vm80a0/giphy.gif",
    "https://media.giphy.com/media/3fk0i2VKOX1TEZQbcJ/giphy.gif",
    "https://media.giphy.com/media/3ohjV8FXjCy65yzifK/giphy.gif",
    "https://media.giphy.com/media/tsWaSVkKfk4eZKI90b/giphy.gif",
    "https://media.giphy.com/media/5SAfs1VA33KykHOC53/giphy.gif",
    "https://media.giphy.com/media/YEnCFt9Joy8fdhY0oc/giphy.gif"
  ];

var randomGif = Math.floor(Math.random() * (gifArray.length));
const GIFUrl = gifArray[randomGif];
document.querySelector(".card .gif").style.backgroundImage = 'url('+GIFUrl+')'
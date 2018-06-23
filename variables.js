"use strict";

module.exports = {
    project: {
        title: "knzk.work",
        description: "",
        author: "KanzakiKino",
    },
    notifications: require( "./notifications.js" ),
    menu: [
        {
            name: "Home",
            url : "/",
            image: "/img/home.png",
        },
        {
            name: "Works",
            url : "/works/",
            image: "/img/works.png",
        },
    ],
    sns: [
        {
            url: "https://twitter.com/knzk_work",
            image: "/img/twitter.png",
        },
        {
            url: "https://github.com/KanzakiKino",
            image: "/img/github.png",
        },
        {
            url: "https://www.youtube.com/channel/UCR_YxYbOl-SqVbXNzOLMn2w",
            image: "/img/youtube.png",
        }
    ],
};

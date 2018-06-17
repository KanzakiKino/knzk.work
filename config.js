"use strict";

module.exports = {
    pkg: require("./package.json"),
    path: {
        src    : "./src",
        release: "./release",
    },
    tasks: {
        css : ["sass","cssmin"],
        html: ["ect","htmlmin"],
        image: ["imagemin"],

        default: ["html","css","imagemin"],
        all    : ["clean:release","default"],
    },

    clean: {
        release: ["<%= path.release %>/*"],
    },

    connect: {
        server: {
            options: {
                base: "<%= path.release %>",
//                hostname: "dev1.knzk.work",
                keepalive: true,
                port: 8080,
            },
        },
    },

    cssmin: {
        css: {
            files: [
                {
                    expand: true,
                    cwd: "<%= path.release %>",
                    src: ["**/*.css","!**/*.min.css"],
                    dest: "<%= path.release %>",
                },
            ],
        }
    },

    ect: {
        options: {
            root: "<%= path.src %>"
        },
        html: {
            expand: true,
            cwd: "<%= path.src %>",
            src: ["**/*[^.temp].html"],
            dest: "<%= path.release %>",
            ext: ".html",
            variables: require("./variables.js"),
        }
    },

    htmlmin: {
        html: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
            },
            files: [
                {
                    expand: true,
                    src: ["<%= path.release %>/**/*.html", "<%= path.release %>/**/*.html"],
                    dest: "./",
                }
            ],
        },
    },

    imagemin: {
        image: {
            expand: true,
            cwd: "<%= path.src %>",
            src: ["**/*.{png|jpg|gif}"],
            dest: "<%= path.release %>",
        },
    },

    sass: {
        css: {
            options: {
                style: "expanded",
                sourcemap: "none",
            },
            files: {
                "<%= path.release %>/main.css": "<%= path.src %>/main.scss"
            },
        },
    },

    watch: {
        html: {
            files: ["<%= path.src %>/**/*.html"],
            tasks: ["html"],
        },
        image: {
            files: ["<%= path.src %>/**/*.{png|jpg|gif}"],
            tasks: ["image"],
        },
        css: {
            files: ["<%= path.src %>/**/*.scss"],
            tasks: ["css"]
        },
    },
};

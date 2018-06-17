#!/bin/sh

lxterminal -e /usr/bin/grunt watch:css
lxterminal -e /usr/bin/grunt watch:html
lxterminal -e /usr/bin/grunt watch:image
/usr/bin/grunt connect

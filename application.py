from flask import Flask, render_template, url_for
import requests
from xml.dom import minidom
from init_app import app
from python import bart, actransit


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")

if __name__ == '__main__':
    app.debug = True
    app.run()

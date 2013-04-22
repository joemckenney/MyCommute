from flask import Flask, render_template, url_for
import requests
from xml.dom import minidom 
import xmltodict
import json
from init_app import app


BART_URL = "http://api.bart.gov/api/"
BART_KEY = "key=EMKL-256J-IU39-EDPT"
@app.route('/bart/advisory')
def advisory(payload):
    # 
    # http://api.bart.gov/api/bsa.aspx
    #
    return 'bart system advisory'


@app.route('/bart/etd')
def etd():
    # 
    # http://api.bart.gov/api/etd.aspx
    #
    return 'bart estimated time of departure'

@app.route('/api.bart.gov/api/routes')
def routes():
    # 
    # http://api.bart.gov/api/routes.aspx
    #
    r = requests.get(BART_URL + 'route.aspx?cmd=routes&' + BART_KEY)
    return r.text

@app.route('/bart/schedule')
def schedule():
    # 
    # http://api.bart.gov/api/sched.aspx
    #
    return 'bart schedule information'


@app.route('/bart/station')
def station():
    # 
    # http://api.bart.gov/api/stn.aspx
    #
    return 'bart station information'

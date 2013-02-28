from flask import Flask, request, render_template, url_for
import requests
from xml.dom import minidom
from init_app import app


ACTRANSIT_URL = "http://webservices.nextbus.com/service/publicXMLFeed?"

@app.route('/actransit/advisory')
def actransit_advisory():
    
    return 'actransit system advisory'


#http://webservices.nextbus.com/service/publicXMLFeed?command=predictions&a=<agency_tag>&r=<route tag>&s=<stop tag>
@app.route('/actransit/etd')
def actransit_etd():
    p = {
        "command":  "predictions",
        "a": "actransit",
        "s": request.args.get("s"),
        "r": request.args.get("r")
    }
    response = requests.get(ACTRANSIT_URL, params=p )
    return response.text

@app.route('/actransit/routes')
def actransit_routes():
   #command = 
   #params =
    return 'actransit route(s) information'


@app.route('/actransit/schedule')
def actransit_schedule():
    #command = 
    #params =
    return 'actransit schedule information'


@app.route('/actransit/station')
def actransit_station():
    #command = 
    #params =
    return 'actransit station information'
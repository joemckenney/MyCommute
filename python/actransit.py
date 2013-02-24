from flask import Flask, render_template, url_for
import requests
from xml.dom import minidom
from init_app import app


ACTRANSIT_URL = "http://api.actransit.gov/api/"
class ACTransit():

    @app.route('/actransit/advisory')
    def advisory(payload):
        # 
        # http://api.actransit.gov/api/bsa.aspx
        #
        return 'actransit system advisory'


    @app.route('/actransit/etd')
    def etd():
        # 
        # http://api.actransit.gov/api/etd.aspx
        #
        return 'actransit estimated time of departure'

    @app.route('/actransit/routes')
    def routes():
        # 
        # http://api.actransit.gov/api/routes.aspx
        #
        return 'actransit route(s) information'


    @app.route('/actransit/schedule')
    def schedule():
        # 
        # http://api.actransit.gov/api/sched.aspx
        #
        return 'actransit schedule information'


    @app.route('/actransit/station')
    def station():
        # 
        # http://api.actransit.gov/api/stn.aspx
        #
        return 'actransit station information'
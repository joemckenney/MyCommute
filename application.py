from flask import Flask, render_template, url_for
import requests
from xml.dom import minidom
app = Flask(__name__)

BART_URL = "http://api.bart.gov/api/"

@app.route('/bart/advisory')
def advisory(payload):
    advisory_url = BART_URL + 'bsa.aspx'

    resp = requests.get(advisory_url, params=payload)
    # 
    # http://api.bart.gov/api/bsa.aspx
    #
    return 'bart system advisory'


@app.route('/bart/etd')
def etd():
    print 'fooook'
    advisory_url = BART_URL + 'bsa.aspx'
    resp = requests.get("http://api.bart.gov/api/bsa.aspx?cmd=bsa&key=EMKL-256J-IU39-EDPT")
    # 
    # http://api.bart.gov/api/etd.aspx
    #
    return resp.text

@app.route('/bart/routes')
def routes():
    # 
    # http://api.bart.gov/api/routes.aspx
    #
    return 'bart route(s) information'


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

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")

if __name__ == '__main__':
    app.run()

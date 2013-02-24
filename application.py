from flask import Flask, render_template, url_for

app = Flask(__name__)


@app.route('/bart/advisory')
def advisory():
    # 
    # http://api.bart.gov/api/bsa.aspx
    #
    return 'bart system advisory'


@app.route('/bart/etd')
def advisory():
    # 
    # http://api.bart.gov/api/etd.aspx
    #
    return 'bart estimated time of departure'

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

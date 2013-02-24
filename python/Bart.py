class Bart():
    BART_URL = "http://api.bart.gov/api/"

    @app.route('/bart/advisory')
    def advisory(payload):
        advisory_url = BART_URL + 'bsa.aspx'

        resp = requests.get(advisory_url, params=payload)
        if resp.status_code is 200:
            

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



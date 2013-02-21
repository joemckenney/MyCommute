from flask import Flask, render_template, url_for

app = Flask(__name__)




@app.route('/bart')
def bart():
    return 'suck it joe'


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")

if __name__ == '__main__':
    app.run()

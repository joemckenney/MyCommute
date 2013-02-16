from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('python/index.html', require=url_for('static', filename='js/require.js'), shims=url_for('static', filename='js/shims.js'))


if __name__ == '__main__':
    app.run()

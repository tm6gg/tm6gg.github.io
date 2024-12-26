from flask import Flask, render_template

app = Flask(__name__.split('.')[0], template_folder='src/views', static_folder='src/assets')

@app.route('/')
def root():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000, debug=True, load_dotenv=False)
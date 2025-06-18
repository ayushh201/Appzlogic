from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load model and vectorizer
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

with open("vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

@app.route('/')
def home():
    return "Flask AI API Running", 200

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({"error": "Missing 'text' field"}), 400

    vector = vectorizer.transform([data['text']])
    prediction = model.predict(vector)[0]
    return jsonify({"result": prediction})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)


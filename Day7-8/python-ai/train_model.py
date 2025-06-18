import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

# Training data
texts = ["I love this", "This is amazing", "I hate this", "Terrible experience"]
labels = ["positive", "positive", "negative", "negative"]

# Vectorize
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(texts)

# Model
model = MultinomialNB()
model.fit(X, labels)

# Save
with open("model.pkl", "wb") as f:
    pickle.dump(model, f)

with open("vectorizer.pkl", "wb") as f:
    pickle.dump(vectorizer, f)

print("✅ Model and vectorizer saved.")

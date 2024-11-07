from flask import Flask
from flask_cors import CORS
from routes.auth_routes import auth_bp
from config.db import engine
from models import user

app = Flask(__name__)
CORS(app)

# Create database tables
user.Base.metadata.create_all(bind=engine)

# Register blueprints with URL prefix
app.register_blueprint(auth_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)

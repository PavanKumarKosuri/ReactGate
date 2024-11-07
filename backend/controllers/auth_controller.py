import jwt
from werkzeug.security import generate_password_hash, check_password_hash
from flask import jsonify, request
from models.user import User
from config.db import SessionLocal
from datetime import datetime, timedelta

SECRET_KEY = "pavan"
def generate_token(username):
    payload = {
        'username': username,
        'exp': datetime.utcnow() + timedelta(hours=1)  # Token valid for 1 hour
    }
    return jwt.encode(payload, SECRET_KEY, algorithm='HS256')

def signup():
    data = request.get_json()
    hashed_password = generate_password_hash(data['password'], method='pbkdf2:sha256')
    new_user = User(
        first_name=data['first_name'],
        last_name=data['last_name'],
        username=data['username'],
        password=hashed_password,
        emp_id=data['emp_id'],
        email=data['email'],
        phone_number=data['phone_number']
    )

    session = SessionLocal()
    session.add(new_user)
    session.commit()
    session.close()

    return jsonify({'message': 'User created successfully'}), 201

def login():
    data = request.get_json()
    session = SessionLocal()
    user = session.query(User).filter_by(username=data['username']).first()

    if user and check_password_hash(user.password, data['password']):
        token = generate_token(user.username)
        session.close()
        return jsonify({'message': 'Login successful', 'token': token}), 200
    else:
        session.close()
        return jsonify({'message': 'Invalid credentials'}), 401

def get_user_details():
    username = request.args.get('username')
    if not username:
        return jsonify({'message': 'Username is required'}), 400

    session = SessionLocal()
    user = session.query(User).filter_by(username=username).first()
    session.close()

    if user:
        user_data = {
            'first_name': user.first_name,
            'last_name': user.last_name,
            'username': user.username,
            'emp_id': user.emp_id,
            'email': user.email,
            'phone_number': user.phone_number
        }
        return jsonify({'user_details': user_data}), 200
    else:
        return jsonify({'message': 'User not found'}), 404

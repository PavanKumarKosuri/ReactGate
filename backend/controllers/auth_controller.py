from werkzeug.security import generate_password_hash, check_password_hash
from flask import jsonify, request
from models.user import User
from config.db import SessionLocal

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
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

    session.close()

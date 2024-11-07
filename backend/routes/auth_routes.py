from flask import Blueprint
from controllers.auth_controller import signup, login, get_user_details

auth_bp = Blueprint('auth_bp', __name__)

auth_bp.route('/signup', methods=['POST'])(signup)
auth_bp.route('/login', methods=['POST'])(login)
auth_bp.route('/userDetails', methods=['GET'])(get_user_details)

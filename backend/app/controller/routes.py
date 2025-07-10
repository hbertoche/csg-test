from flask import Blueprint, request, jsonify
from app.services.user import UserService
bp = Blueprint('routes', __name__)

@bp.route('/api/repos', methods=['POST'])
def fetch_repos():
    username = request.json.get('username')
    if not username:
        return jsonify({'error': 'Username is required'}), 400

    message, repos, status = UserService.fetch_and_store_repos(username)
    if repos is not None:
        return jsonify({'message': message, 'repos': repos}), status
    else:
        return jsonify({'error': message}), status

@bp.route('/api/repos/<username>', methods=['GET'])
def get_repos(username):
    message, repos, status = UserService.get_repos(username)
    if repos is not None:
        return jsonify(repos), status
    else:
        return jsonify({'error': message}), status
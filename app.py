import json

import pymongo
from werkzeug.exceptions import HTTPException
from flask import Flask, jsonify, request

app = Flask(__name__)
client = pymongo.MongoClient("mongodb+srv://deep:Deep1234@cluster0.qsrrpli.mongodb.net/?retryWrites=true&w=majority")
db = client.test


@app.route('/users', methods=['POST'])
def create_user_in_db():
    data = request.get_json()
    if 'id' not in data:
        return "Please enter id"
    elif 'firstName' not in data:
        return "Please enter firstName"
    elif 'email' not in data:
        return "Please enter email"
    db.users.insert_one(data)
    return jsonify({'message': 'User created successfully.', 'success': True})


@app.route('/users', methods=['GET'])
def get_all_users_from_db():
    users = db.users.find()
    response = []
    for user in users:
        print(user,"user>>>>")
        response.append({'id': user['id'], 'email': user['email'], 'firstName': user['firstName']})
    return jsonify({'message': response, 'success': True})


@app.route('/users/<i>', methods=['GET'])
def get_user_by_id_from_db(i):
    query_result = db.users.find_one({'id': i})
    if query_result:
        response = {'id': query_result['id'], 'email': query_result['email'], 'firstName': query_result['firstName']}
    else:
        response = 'No user found.'
    return jsonify({'message': response, 'success': True})


@app.route('/users/<i>', methods=['PUT'])
def update_user_in_db(i):
    new_values = request.get_json()
    db.users.update_one({'id': i}, {'$set': new_values})
    return jsonify({'message': 'User updated successfully.', 'success': True})


@app.route('/users/<i>', methods=['DELETE'])
def delete_user_from_db(i):
    db.users.delete_one({'id': i})
    return jsonify({'message': 'User deleted successfully.', 'success': True})


@app.errorhandler(HTTPException)
def handle_errors_of_apis(e):
    result = e.get_response()
    result.data = json.dumps({
        "code": e.code,
        "message": e.description,
        "success": False,
    })
    result.content_type = "application/json"
    return result


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

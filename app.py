import requests
from flask import Flask, request
import json
import random
import string
from flask import json
from werkzeug.exceptions import HTTPException

app = Flask(__name__)

my_response = {
  "users": [
    {
      "email": "abc@abc.ca",
      "firstName": "ABC",
      "id": "5abf6783"
    },
    {
      "email": "xyz@xyz.ca",
      "firstName": "XYZ",
      "id": "5abf674563"
    }
  ]
}


@app.route('/users', methods=['GET'])
def get_users():
    temp_response = {"message": "Users retrieved", "success": True}
    temp_response.update(my_response)
    return temp_response


@app.route('/user/<index>', methods=['GET'])
def get_user_by_id(index):
    temp_response = {}
    for each_item in my_response['users']:
        if each_item["id"] == index:
            temp_response["email"] = each_item["email"]
            temp_response["firstName"] = each_item["firstName"]
    if "email" in temp_response:
        temp_response["success"] = True
    else:
        temp_response["success"] = False
        temp_response["message"] = "User not found"
    return temp_response


@app.route('/add', methods=['POST'])
def add_user():
    temp_response = {"message": "User added", "success": True}
    s1 = json.dumps(my_response)
    data = json.loads(s1)
    id_chars = string.ascii_lowercase + string.digits
    my_id = ''.join(random.choice(id_chars) for i in range(10))
    json_obj = {
        "email": request.json['email'],
        "firstName": request.json['firstName'],
        "id": my_id
    }
    data['users'].append(json_obj)
    my_response['users'] = data['users']
    return temp_response


@app.route('/update/<index>', methods=['PUT'])
def update_user(index):
    temp_response = {}
    json_obj = {
        "email": request.json['email'],
        "firstName": request.json['firstName'],
    }
    new_list = []
    for each_item in my_response['users']:
        if each_item["id"] == index:
            json_obj["id"] = index
        else:
            new_list.append(each_item)
    new_list.append(json_obj)
    for each_item in my_response['users']:
        if "id" in json_obj:
            if each_item["id"] == json_obj["id"]:
                temp_response["success"] = True
                temp_response["message"] = "User updated"
                my_response['users'] = new_list
                return temp_response
    temp_response["success"] = False
    temp_response["message"] = "User not found"
    return temp_response


@app.errorhandler(HTTPException)
def handle_errors(err):
    res = err.get_response()
    res.data = json.dumps({
        "success": False,
        "code": err.code,
        "name": err.name,
        "message": err.description,
    })
    res.content_type = "application/json"
    return res


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)

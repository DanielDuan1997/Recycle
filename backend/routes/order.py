import json
from flask import Blueprint, request, make_response
from datetime import datetime

from common.mysql_connector import db
from common.auth import auth

order = Blueprint("order", __name__)

@order.route('/startorder', methods=["POST"])
@auth
def start_order():
    data = json.loads(request.data.decode('utf-8'))
    user = data.get("user")
    description = data.get("description")
    location = data.get("location")
    starttime = datime.now().strftime("%Y%m%d%H%M%S")
    cursor = db.cursor()
    try:
        sql = f"INSERT INTO Item(seller, description, selldate, location) VALUES ('{user}', '{description}', {starttime}, '{location}');"
        cursor.execute(sql)
        cursor.execute(f"SELECT LAST_INSERT_ID();")
        item_id = cursor.fetchone()[0]
        sql = f"INSERT INTO `Relation`(`username`, `item_id`) VALUES ('{user}', {item_id});"
        cursor.execute(sql)
        db.commit()
        response = make_response("success", 200)
    except Exception:
        db.rollback()
        response = make_response("Internal Error", 500)
    cursor.close()
    return response

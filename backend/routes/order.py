import json
from flask import Blueprint, request, make_response
from datetime import datetime

from common.mysql_connector import db
from common.auth import auth
from common.image import save_image, get_image, get_suffix

order = Blueprint("order", __name__)

@order.route('/startorder', methods=["POST"])
@auth
def start_order():
    data = request.form.to_dict()
    user = data.get("user")
    name = data.get("name")
    description = data.get("description")
    contact = data.get("contact")
    price = data.get("price")
    img_file = data.get("imgFile")

    if name is None or description is None or contact is None or price is None or price is None or img_file is None:
        return make_response("Information not complete", 403)

    selltime = datetime.now().strftime("%Y%m%d%H%M%S")
    cursor = db.cursor()
    try:
        sql = f"INSERT INTO Item(name, description, contact, price, seller, selldate) VALUES ('{name}', '{description}', '{contact}', '{price}', '{user}', {selltime});"
        cursor.execute(sql)
        cursor.execute(f"SELECT LAST_INSERT_ID();")
        item_id = cursor.fetchone()[0]
        sql = f"INSERT INTO `Relation`(`username`, `item_id`) VALUES ('{user}', {item_id});"
        cursor.execute(sql)

        img_path = save_image(img_file, item_id)

        sql = f"UPDATE Item SET img_path='{img_path}' WHERE id={item_id};"
        cursor.execute(sql)

        db.commit()
        response = make_response("success", 200)
    except Exception as e:
        db.rollback()
        response = make_response("Internal Error", 500)
        print(e)
    cursor.close()
    return response

@order.route('/getorder', methods=["POST"])
@auth
def get_order():
    cursor = db.cursor()
    sql = f"SELECT id, name, description, img_path FROM Item ORDER BY Item.selldate DESC;"
    cursor.execute(sql)
    rec = cursor.fetchall()
    orders = []
    for each in rec:
        order = dict()
        order["id"] = each[0]
        order["name"] = each[1]
        order["description"] = each[2]
        order["suffix"] = get_suffix(each[3])
        order["img"] = get_image(each[3])
        orders.append(order)
    response = make_response(json.dumps(orders), 200)
    cursor.close()
    return response

@order.route('/getspecificorder', methods=["POST"])
@auth
def get_specific_order():
    data = request.form.to_dict()
    order_id = int(data["order_id"])
    cursor = db.cursor()
    try:
        sql = f"SELECT name, seller, selldate, description, contact, price, img_path FROM Item WHERE Item.id={order_id}"
        cursor.execute(sql)
        rec = cursor.fetchone()
        order = dict()
        order["name"] = rec[0]
        order["seller"] = rec[1]
        order["selldate"] = rec[2].strftime("%Y-%m-%d")
        order["description"] = rec[3]
        order["contact"] = rec[4]
        order["price"] = rec[5]
        order["suffix"] = get_suffix(rec[6])
        order["img"] = get_image(rec[6])
        response = make_response(json.dumps(order), 200)
    except Exception as e:
        response = make_response("Internal Error", 500)
        print(e)
    cursor.close()
    return response
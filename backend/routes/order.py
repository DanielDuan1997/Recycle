import base64
from flask import Blueprint, request, make_response
from datetime import datetime

from common.mysql_connector import db
from common.auth import auth

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

    starttime = datetime.now().strftime("%Y%m%d%H%M%S")
    cursor = db.cursor()
    try:
        sql = f"INSERT INTO Item(name, description, contact, price, seller, selldate) VALUES ('{name}', '{description}', '{contact}', '{price}', '{user}', {starttime});"
        cursor.execute(sql)
        cursor.execute(f"SELECT LAST_INSERT_ID();")
        item_id = cursor.fetchone()[0]
        sql = f"INSERT INTO `Relation`(`username`, `item_id`) VALUES ('{user}', {item_id});"
        cursor.execute(sql)

        split_img_file = img_file.split(';base64,')
        main_data = split_img_file[1]
        suffix = split_img_file[0].split('/')[-1]
        img_path = f"img/{item_id}.{suffix}"
        img_data = base64.b64decode(main_data)
        file = open(img_path, 'wb')
        file.write(img_data)

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

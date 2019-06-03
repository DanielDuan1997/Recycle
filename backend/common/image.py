import base64

def save_image(img_file, item_id):
    split_img_file = img_file.split(';base64,')
    main_data = split_img_file[1]
    suffix = split_img_file[0].split('/')[-1]
    img_path = f"img/{item_id}.{suffix}"
    img_data = base64.b64decode(main_data)
    file = open(img_path, 'wb')
    file.write(img_data)
    return img_path

def get_image(img_path):
    file = open(img_path, "rb")
    img_data = str(base64.b64encode(file.read()), encoding='utf-8')
    file.close()
    return img_data

def get_suffix(img_path):
    return img_path.split('.')[-1]

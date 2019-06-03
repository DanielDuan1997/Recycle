#!/usr/bin/python3

import pymysql

db = pymysql.connect("localhost", "root", "niabbf")

cursor = db.cursor()

cursor.execute("DROP DATABASE IF EXISTS Recycle;")
cursor.execute("CREATE DATABASE Recycle;")
cursor.execute("use Recycle;")

sql = """CREATE TABLE `User` (
    `username` char(20) NOT NULL,
    `password` char(40) NOT NULL,
    PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;"""
cursor.execute(sql)

sql = """INSERT INTO `User` (`username`, `password`) VALUES ('niabbf', '6f7a3a8fe1dc6259b01b49775621fc46')"""
cursor.execute(sql)

sql = """CREATE TABLE `Item` (
    `id` int(10) NOT NULL AUTO_INCREMENT,
    `name` varchar(30) NOT NULL,
    `description` varchar(200) NOT NULL,
    `contact` varchar(50) NOT NULL,
    `price` int NOT NULL,
    `img_path` varchar(50),
    `seller` char(20) NOT NULL,
    `buyer` char(20),
    `selldate` datetime NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`seller`) REFERENCES User(`username`),
    FOREIGN KEY (`buyer`) REFERENCES User(`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;"""
cursor.execute(sql)

sql = """CREATE TABLE `Relation` (
    `username` char(20) NOT NULL,
    `item_id` int(10) NOT NULL,
    PRIMARY KEY (`username`, `item_id`),
    FOREIGN KEY (`username`) REFERENCES User(`username`),
    FOREIGN KEY (`item_id`) REFERENCES Item(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;"""
cursor.execute(sql)

print("Create DataBase `Recycle` tables `User`, `Item`, `Relation`")

db.commit()

print("Create root user `niabbf`")

db.close()

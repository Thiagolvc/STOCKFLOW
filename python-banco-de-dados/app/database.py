import sqlite3
import bcrypt

def create_database():
    conn = sqlite3.connect("almoxarifado.db")
    cursor = conn.cursor()

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        serial_number TEXT NOT NULL,
        expiration_date TEXT NOT NULL,
        image_path TEXT
    );
    ''')
    conn.commit()
    conn.close()

def create_categories_table():
    conn = sqlite3.connect("C:\\Users\\Thiag\\OneDrive\\Programing\\python-banco-de-dados\\PROJETO STOCKFLOW\\almoxarifado.db")
    cursor = conn.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
    );
    ''')
    conn.commit()
    conn.close()

def create_users_table():
    conn = sqlite3.connect("almoxarifado.db")
    cursor = conn.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    );
    ''')
    conn.commit()
    conn.close()

def register_user(username, password):
    try:
        conn = sqlite3.connect("almoxarifado.db")
        cursor = conn.cursor()
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        cursor.execute('''
        INSERT INTO users (username, password)
        VALUES (?, ?);
        ''', (username, hashed_password))
        conn.commit()
        conn.close()
        return True
    except sqlite3.IntegrityError:
        return False

def check_user(username, password):
    conn = sqlite3.connect("almoxarifado.db")
    cursor = conn.cursor()
    cursor.execute('SELECT password FROM users WHERE username = ?', (username,))
    result = cursor.fetchone()
    conn.close()
    if result and bcrypt.checkpw(password.encode('utf-8'), result[0]):
        return True
    return False

def add_product(name, quantity, serial_number, expiration_date, image_path):
    conn = sqlite3.connect("almoxarifado.db")
    cursor = conn.cursor()
    cursor.execute('''
    INSERT INTO products (name, quantity, serial_number, expiration_date, image_path)
    VALUES (?, ?, ?, ?, ?);
    ''', (name, quantity, serial_number, expiration_date, image_path))
    conn.commit()
    conn.close()

def get_all_products(query=None):
    conn = sqlite3.connect("almoxarifado.db")
    cursor = conn.cursor()

    if query:
        cursor.execute("SELECT * FROM products WHERE name LIKE ?", (f"%{query}%",))
    else:
        cursor.execute("SELECT * FROM products")

    products = cursor.fetchall()
    conn.close()
    return products

def update_product(product_id, name, quantity, serial_number, expiration_date, image_path):
    conn = sqlite3.connect("almoxarifado.db")
    cursor = conn.cursor()
    if image_path:
        cursor.execute('''
        UPDATE products
        SET name = ?, quantity = ?, serial_number = ?, expiration_date = ?, image_path = ?
        WHERE id = ?;
        ''', (name, quantity, serial_number, expiration_date, image_path, product_id))
    else:
        cursor.execute('''
        UPDATE products
        SET name = ?, quantity = ?, serial_number = ?, expiration_date = ?
        WHERE id = ?;
        ''', (name, quantity, serial_number, expiration_date, product_id))
    conn.commit()
    conn.close()

def delete_product(product_id):
    conn = sqlite3.connect("almoxarifado.db")
    cursor = conn.cursor()
    cursor.execute('DELETE FROM products WHERE id = ?', (product_id,))
    conn.commit()
    conn.close()

def add_category(name):
    conn = sqlite3.connect("almoxarifado.db")
    cursor = conn.cursor()
    cursor.execute('INSERT INTO categories (name) VALUES (?);', (name,))
    conn.commit()
    conn.close()

def get_all_categories():
    conn = sqlite3.connect("almoxarifado.db")
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM categories')
    categories = cursor.fetchall()
    conn.close()
    return categories

def update_category(category_id, name):
    conn = sqlite3.connect("almoxarifado.db")
    cursor = conn.cursor()
    cursor.execute('UPDATE categories SET name = ? WHERE id = ?;', (name, category_id))
    conn.commit()
    conn.close()

def delete_category(category_id):
    conn = sqlite3.connect("almoxarifado.db")
    cursor = conn.cursor()
    cursor.execute('DELETE FROM categories WHERE id = ?;', (category_id,))
    conn.commit()
    conn.close()
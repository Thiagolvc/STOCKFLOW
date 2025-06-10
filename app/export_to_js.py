import sqlite3
import json

DB_PATH = r"C:\Users\Thiag\OneDrive\Programing\python-banco-de-dados\PROJETO STOCKFLOW\almoxarifado.db"

def get_table_data(table_name):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM {table_name}")
    columns = [desc[0] for desc in cursor.description]
    rows = cursor.fetchall()
    data = []
    for row in rows:
        row_dict = dict(zip(columns, row))
        for k, v in row_dict.items():
            if isinstance(v, bytes):
                row_dict[k] = v.decode('utf-8', errors='ignore')
        data.append(row_dict)
    conn.close()
    return data

tables = [
    ("products", "productsData"),
    ("users", "usersData"),
    ("categories", "categoriesData"),
]

with open("dados_completos.js", "w", encoding="utf-8") as f:
    for table_name, js_var_name in tables:
        data = get_table_data(table_name)
        f.write(f"const {js_var_name} = ")
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write(";\n\n")
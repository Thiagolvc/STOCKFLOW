from flask import Flask, request, redirect, render_template, url_for, session, jsonify
from werkzeug.utils import secure_filename
import os
from database import create_database, add_product, get_all_products, update_product, delete_product, create_users_table, register_user, check_user
from database import create_database, create_users_table, create_categories_table

app = Flask(__name__)
app.secret_key = 'sua_chave_secreta_aqui' 

UPLOAD_FOLDER = os.path.join(os.path.dirname(__file__), 'static', 'uploads')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


create_database()
create_users_table()
create_categories_table()

@app.route("/")
def index():
    if 'username' not in session:
        return redirect(url_for('login'))
    products = get_all_products()
    return render_template("index.html", products=products)

# Rotas de autenticação
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        user = check_user(username, password)
        if user:
            session['username'] = username
            return jsonify({"success": True, "redirect": url_for('index')})
        else:
            return jsonify({"success": False, "message": "Usuário ou senha incorretos"})
    return render_template("login.html")

@app.route("/register", methods=["POST"])
def register():
    username = request.form["username"]
    password = request.form["password"]
    if register_user(username, password):
        return jsonify({"success": True, "message": "Cadastro realizado com sucesso!"})
    else:
        return jsonify({"success": False, "message": "Nome de usuário já existe"})

@app.route("/logout")
def logout():
    session.pop('username', None)
    return redirect(url_for('login'))

# Rotas de produtos
@app.route("/add_product", methods=["POST"])
def add_product_route():
    if 'username' not in session:
        return redirect(url_for('login'))
    
    name = request.form["name"]
    quantity = request.form["quantity"]
    serial_number = request.form["serial_number"]
    expiration_date = request.form["expiration_date"]

    image = request.files.get("image")
    image_path = None
    if image:
        filename = secure_filename(image.filename)
        image_path = f"/static/uploads/{filename}"
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

    add_product(name, quantity, serial_number, expiration_date, image_path)
    return redirect(url_for("index"))

@app.route("/edit_product/<int:product_id>", methods=["POST"])
def edit_product_route(product_id):
    if 'username' not in session:
        return redirect(url_for('login'))
    
    name = request.form["name"]
    quantity = request.form["quantity"]
    serial_number = request.form["serial_number"]
    expiration_date = request.form["expiration_date"]

    image = request.files.get("image")
    image_path = None
    if image and image.filename != "":
        filename = secure_filename(image.filename)
        image_path = f"/static/uploads/{filename}"  # C:\Users\Thiag\OneDrive\Programing\python-banco-de-dados\PROJETO STOCKFLOW/static/uploads
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

    update_product(product_id, name, quantity, serial_number, expiration_date, image_path)
    return redirect(url_for("index"))

@app.route("/delete_product/<int:product_id>", methods=["POST"])
def delete_product_route(product_id):
    if 'username' not in session:
        return redirect(url_for('login'))
    
    delete_product(product_id)
    return redirect(url_for("index"))

@app.route("/search", methods=["GET", "POST"])
def search():
    if 'username' not in session:
        return redirect(url_for('login'))
        
    if request.method == "POST":
        query = request.form["query"]
        products = get_all_products(query)
        return render_template("index.html", products=products, query=query)
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)
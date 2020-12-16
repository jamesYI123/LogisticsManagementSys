from flask import Flask, request, render_template
import utils

app = Flask('user_controller')


@app.route('/users/login')
def users_login():
    return render_template('users/user_login.html')


@app.route('/users/register')
def users_register():
    return render_template('users/user_register.html')


@app.route('/users')
def users_welcome():
    id = request.args.get("user_id")
    if (id != None):
        return render_template('users/user_index.html')
    else:
        return users_login()

import base64


def base64decode(str):
    return base64.b64decode(str).decode()

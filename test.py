import base64

str = 'Y2hlbmdmZW5nZ3Vp'
t = base64.b64decode(str).decode()
print(t)

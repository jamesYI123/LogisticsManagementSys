import base64
import utils

u = '123456'
encode = utils.base64encode(u)
print(encode)
print(utils.base64decode(encode))

str = 'Y2hlbmdmZW5nZ3Vp'
t = base64.b64decode(str).decode()
print(t)

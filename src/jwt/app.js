const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());

const privateKey = `
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEA0w7lmKg1k/tQlFK/V2J4DKJCbbka+WmuqPiIGNa6HQobyjDS
2M+UFZkJJT1ASffbR48sL7dUHfPmvjIfYDwRyhPA3+XBfNYJgQl3guZFhlzUbAIt
viUFwElYJNPA5QgdDMkjcZzLXE1aCXYX187h7YIK0VkSXNZ3Tk2qYXXy5YcP3Hui
5+N6tcTXTU0bHAGzjcUWzKocpCRwAiRZhTBnT+mduCdLAV2xHvTbpONSkJD26frk
ZJgr9ivYKoVXZ5wOILe1dwM0II7K6y2YDreY1fgAGuPtv82UZSF+VPMISbtLxz6b
oBLR8bOQaRGbzp+S77HcDgqd4HWzRRaBY7MsiwIDAQABAoIBABLzYPkyjVECvUr8
HRMfE9FqllVczAe+DgE9A5dbXG20FSez95KhHNZNne0akVWy7B0CRYDpUKO53SuR
u5B8BErlOCnCavunCkZsT69QtshoOGiUT4Aludz4mPIBk23dKyKVQtn2LqpUhbOY
x25ItK+LQCZo/YWZei/tOFG08gDa1Hh+n7Ng2DCUchYLSIURVmMZ6SiYpPQqkxWl
v7E41lta8bAkcAo7GTPrWM0/n5k0HY/4nGXM+5goNOhxhrySF9GH30CuMk3zvFSh
X3zO9Tp9ozzpMFtkWJgXekKdhEDcjyv5KTduCH7QB5rzvQE2T+7mjKj4egwNGIAQ
k2nyklECgYEA7al0KtdthsI46T+cPjkKlkLnjk4B27TjqSQtIkYT9mshHAUvhnle
x8wi1te0G2cX13V6OayzvbxGq4083stlamf3Isg3AqJLCBHb9P+ADl3Z1bTejL/f
hSfD7JBxiDznMCd+kuvsp90xd5waHqMHKIUpqP34fM/CzeqxEklEehECgYEA41fw
NSIT9PocHflFeFrj/w9Lllm7FrjZkvqOHegaAFcTxFJnrJMrl9FZlvigZeoqU0lW
xzIULlABA5rvzUlpJxO2CFvyPQPt6kqNH6tKVUQSK5e/2QCYbBoaMB5aAREfMc9J
IQTAWKLf1H/+NlNz/xUMFF6nshAxOsnJBA9ywNsCgYAIUaQlU8EbtHS1hWp8qxZ5
yAG+83ARNrW5V/DUgEt2lq1kA7J0LI9qwvR9PLOrOeKVwiDzH95yx8JZguocilYU
cWsvJn72cqPZtnZSjxb2acaUOm6H0reKO6gaAbxXnnohL2C419VC0vVGUIqBhAde
HbsllS47gDI7bvmfwDzLYQKBgQDeCFabLesbyOGJDJiikPI3erKx5nToHiSwfXAr
GTG7v0+Y33pNe3aJ0XaUEcJlhqtLqEbOSMSY7p3u7XTio53FAmU4CMSufpXvylvF
4D66w76TQKOnxgMXIO8Oq7XvcM9skCu1ybQpXPkJyu92E08og1/GzSMurs3FwqlG
A+hpHQKBgFLD0zryNuX0ZXNYzxVuu7P0D7GLJhNZeC0CdRg3Yuy4t9drEhkjfZL7
drVEPVYjlQ24WdzRsZZXWDxni3y4zUPLkN0ahVOZpCUNH64Jzu/Jon/2zsat20GH
NmDw7RAmbL3LdVYWV43u57THABp8Y/gZVh19WOl5VW6Lj+YvG97r
-----END RSA PRIVATE KEY-----
`;

app.post('/jwt', (req, res) => {
  // NOTE: Before you proceed with the TOKEN, verify your users' session or access.
  const payload = {
    sub: 'benjamin.flores@scale.com', // Unique user id string
    name: 'Benjamin Flores', // Full name of user

    // Optional custom user root path
    // 'https://claims.tiny.cloud/drive/root': '/johndoe',

    exp: Math.floor(Date.now() / 1000) + (60 * 10) // 10 minutes expiration
  };

  try {
    const token = jwt.sign(payload, privateKey, { algorithm: 'RS256'});
    res.set('content-type', 'application/json');
    res.status(200);
    res.send(JSON.stringify({
      token: token
    }));
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
});

app.listen(3000);
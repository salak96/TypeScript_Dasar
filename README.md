# Buat folder dengan nama Belajar-typeScript-dasar Setup nodeJS
```
npm init
```
# Isi package.json
```
package name    : (belajar-typescript-dasar)
version         : (1.0.0)
description     : Belajar TypeScript Dasar
entry point     : (index.js)
tes command     :
git respository :
keywords        :
author          : Sasangka lambang kurniawan
lisensi         :"ISC"
```
# Buka package.json, dan tambah type module taruh dibawah lisensi ISC

```
"type": "module",
```
# Menambahkan Library Jest untuk Unit Test

```
npm install --save-dev jest @types/jest
```
# Documentasi JEST
```
https://www.npmjs.com/package/jest
```

# Menambahkan Library Babel
```
npm install --save-dev babel-jest @babel/preset-env
```
# Documentasi Babel
```
https://babeljs.io/setup#installation
```

- Tambahkan script babel di package json
```
"scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  },
```
- Buat file babel.config.json
```
babel.config.json
```
- Tambahkan isi babel.config.json
```
{
  "presets": ["@babel/preset-env"]
}
```

# Clone repository ke komputer lain

```
git clone https://github.com/salak96/TypeScript_Dasar.git
```

## Install node modules

```
npm install
```

---

# Setup nodeJS dari awal

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
license         :"ISC"
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

-   Tambahkan script babel di package json

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

-   Buat file babel.config.json

```
babel.config.json
```

-   Tambahkan isi babel.config.json

```
{
  "presets": ["@babel/preset-env"]
}
```

---

# Menambahkan TypeScript

```
npm install --save-dev typescript
```

-   Documentasi TypeScript

```
https://www.npmjs.com/package/typescript
```

# Setup TypeScript Project

```
npx tsc --init
```

-   Ubah "module" dari "commonjs" Menjadi "ES6" di tsconfig.jon

```
/* Modules */
"module": "ES6"
```

-   /_ Visit https://aka.ms/tsconfig to read more about this file _/

# Setup TypeScript untuk Jest

-   https://jestjs.io/docs/getting-started#using-typescript

# Install jest

```
npm install --save-dev @babel/preset-typescript
```

-   Tambahkan di @babel.config.js.

```
  "@babel/preset-typescript"
```

-   Install dependensi Ts-Jest

```
npm install --save-dev ts-jest
```

-   Install Jest Global

```
npm install --save-dev @jest/globals
```

-   Install auto TypeScript

```
npm install --save-dev @types/jest
```

# Buat folder tests di root

```
mkdir tests
```

-   Buat file hello.test.ts di dalam folder tests

```
hello.test.ts
```

-   Buat code test contoh

```
describe ("Hello World", () => {
    it("should say hello", () => {
        const name = "Hello Lambang";
        expect(name).toBe("Hello Lambang");
    });
})
```

-   Jalan tes code diatas

```
npx jest
```

# Buat folder dist diroot buat memisahkan typescript

```
mkdir dist
```

-   Ubah isi tsconfig.json

```
"outDir": "dist/",/* Specify an output folder for all emitted files. */
```

# Test typescript buat ke javascipt

```
npx tsc
```

# Tambahkan iclude dan exclude di tsconfig.json diatas "CompilerOptions" mode developer

```
"include": [
  "src/**/*"
  ],
"exclude": [
  "tests/**/*/*"
  ],
```

# Jika masih belajar maka include exclude

```
  "include": [
    "src/**/*",
    "tests/**/*"
  ],
  // "exclude": [
  // "tests/**/*/*",
  // ],
```

# TypeScript Compiler

-   Untuk menjalankan TypeScript Compiler secara terus menerus

```
npx tsc--watch
```

-   Untuk Berhenti

```
ctrl+C
```

### Підготовчі дії

1. Створіть новий командний репозиторій на [github.com](https://github.com/), оберіть `.gitignore` (node).
2. Склонуйте його собі на локальний комп'ютер.
3. Виконайте стартові налаштування вашого проєкту:

- Створіть `package.json` файл за допомогою команди `npm init -y`. Додайте до нього властивість `"type": "module"`.
- Встановіть npm пакет `eslint` командою `npm init @eslint/config@latest` та в файлі налаштувань `eslint.config.js` вкажіть наступний вміст:

  ```
  import globals from "globals";
  import pluginJs from "@eslint/js";

  export default [
    pluginJs.configs.recommended,
    {
      files: ["src/**/*.js"],
      languageOptions: { globals: globals.node },
      rules: {
        semi: "error",
        "no-unused-vars": "off",
        "no-undef": "error",
      },
    },
  ];
  ```

- В корні проєкту створіть файл `.prettierrc` з наступним вмістом:
  ```
  {
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all",
    "printWidth": 80
  }
  ```
- Переконайтесь, що в файлі `.gitignore` серед виключень є папка `/node_modules`.
- Встановіть пакет `@faker-js/faker` для генерації мокових даних за допомогою команди `npm i -D @faker-js/faker`.

1. Створіть в проєкті структуру згідно наданого прикладу

![image.png](attachment:fc94b393-ee63-43ca-a729-b7c3799ebd48:image.png)

1. У файлі `src/constants/products.js` оголосіть змінну `PATH_DB`. Ініціалізуйте її значенням, яке буде зберігати шлях до файлу `src/db/db.json`.
2. До файлу `createFakeProduct.js` додайте наступний вміст:

   ```
   import { faker } from "@faker-js/faker";

   export const createFakeProduct = () => ({
     name: faker.commerce.productName(),
     price: faker.commerce.price(),
     category: faker.commerce.department(),
     description: faker.commerce.productDescription(),
   });
   ```

### Задача 1

1. Створіть файл `src/scripts/generateProducts.js`.
2. В ньому опишіть функцію `generateProducts`. Вона має за допомогою функції `createFakeProduct`, створювати передану кількість згенерованих продуктів, а потім додавати їх до масиву у файлі `src/db/db.json` і записувати їх назад до файлу `src/db/db.json`.
3. Додайте до файлу `package.json` скрипт `generate` для виконання коду з файлу `src/scripts/generateProducts.js`.
4. Виконавши скрипт `generate`, переконайтесь, що ваша функція `generateProducts` коректно додає нові продукти до вже існуючих. Тобто, якщо масив був порожній, після виклику функції в ньому має бути передана кількість продуктів, наприклад 7. Якщо продуктів було 4 і у виклик передали 7, то після виклику функції їх має стати 11. У файлі `src/db/db.json` мають відбутися відповідні зміни.

### Задача 2

1. Створіть файл `src/scripts/getProductsByMinPrice.js`.
2. В ньому опишіть функцію `getProductsByMinPrice`. Вона має приймати як аргумент значення вартості і повертати масив продуктів із файлу `src/db/db.json` , вартість яких дорівнює або перевищує значення параметра функції. Додайте в цьому файлі логування результату виклику функції `getProductsByMinPrice`.
3. Додайте до файлу `package.json` скрипт `get-products-by-min-price` для виконання коду з файлу `src/scripts/getProductsByMinPrice.js`.
4. Виконавши скрипт `get-products-by-min-price`, переконайтесь, що ваша функція `getProductsByMinPrice` працює коректно.

### Задача 3

1. Створіть файл `src/scripts/getTotalPrice.js`.
2. В ньому опишіть функцію `getTotalPrice`. Вона має повертати загальну вартість продуктів в масиві у файлі `src/db/db.json`. Додайте в цьому файлі логування результату виклику функції `getTotalPrice`.
3. Додайте до файлу `package.json` скрипт `get-total-price` для виконання коду з файлу `src/scripts/getTotalPrice.js`.
4. Виконавши скрипт `get-total-price`, переконайтесь, що ваша функція `getTotalPrice` коректно рахує загальну вартість продуктів з масиву файла.

### Задача 4

1. Створіть файл `src/scripts/getUniqueCategories.js`.
2. В ньому опишіть функцію `getUniqueCategories`. Вона має повертати масив унікальних категорій, які мають продукти в масиві у файлі `src/db/db.json`. Додайте в цьому файлі логування результату виклику функції `getUniqueCategories`.
3. Додайте до файлу `package.json` скрипт `get-unique-categories` для виконання коду з файлу `src/scripts/getUniqueCategories.js`.
4. Виконавши скрипт `get-unique-categories`, переконайтесь, що ваша функція `getUniqueCategories` коректно повертає унікальні категорії, які мають продукти в масиві у файлі `src/db/db.json`.

### Задача 5

1. Створіть файл `src/scripts/modifyProducts.js`.
2. В ньому опишіть функцію `modifyProducts`. Вона має перезаписувати вміст файла `src/db/db.json` таким чином, щоб у файлі в результаті опинився перелік тих самих продуктів, але без поля description.
3. Додайте до файлу `package.json` скрипт `modify-products` для виконання коду з файлу `src/scripts/modifyProducts.js`.
4. Виконавши скрипт `modify-products`, переконайтесь, що ваша функція `modifyProducts` коректно перезаписує вміст файла `src/db/db.json`.

### Задача 6

1. Створіть файл `src/scripts/groupProductsByCategories.js`.
2. В ньому опишіть функцію `groupProductsByCategories`. Вона має повертати об’єкт, в якому назви продуктів будуть згруповані по категоріям. В результаті виконання задачі ви повинні отримати об’єкт схожої структури:

```
{
   category1: [name1, name3, name5],
   category2: [name2, name7],
   category3: [name4, name6],
}
```

1. Додайте до файлу `package.json` скрипт `group-products` для виконання коду з файлу `src/scripts/groupProductsByCategories.js`.
2. Виконавши скрипт `group-products`, переконайтесь, що ваша функція `group-products` коректно групує назви продуктів за категоріями.

### Задача 7\*

1. Створіть в папці `db` папку `files`
2. Створіть файл `src/scripts/createProductsFiles.js`.
3. В файлі `src/constants/products.js` оголосіть змінну `PATH_FILES_DIR`. Ініціалізуйте її значенням, яке буде зберігати шлях до папки `files`.
4. В файлі `src/scripts/createProductsFiles.js` опишіть функцію `createProductsFiles`. Вона має створювати в папці `files` таку кількість файлів, скільки продуктів є в масиві у файлі `src/db/db.json`. В кожному файлі має бути записаний об’єкт продукту. Назва кожного файла повинна бути представлені у вигляді назви продукти (кожне слово через дефіс) з форматом json. Наприклад, luxurious-soft-soap.json
5. Додайте до файлу `package.json` скрипт `create-products-files` для виконання коду з файлу `src/scripts/createProductsFiles.js`.
6. Виконавши скрипт `create-products-files`, переконайтесь, що в папці `files` створились очікувані файли.

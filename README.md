# Api Testing with Playwright

Repositorio de aprendizaje para API testing con Playwright, enfocado en aplicar patrones de diseño como Api Object Model, Builder y Factory.

## 📌 Objetivo

Este proyecto sirve como base para practicar testing de APIs REST usando Playwright Test en TypeScript. Incluye ejemplos de:

- Api Object Model (AOM) para abstraer llamadas HTTP.
- Patrón Builder para crear datos de prueba de forma fluida.
- Patrón Factory para centralizar la generación de objetos de prueba.

## 🧱 Estructura del proyecto

- `api/`
  - `BaseApi.ts` - Clase base con métodos HTTP genéricos (`get`, `post`, `put`, `patch`, `delete`).
  - `ProductsApi.ts` - Api Object Model para el endpoint `products`.
- `builder/`
  - `productBuilder.ts` - Builder que genera datos de producto con Faker y permite personalizar campos.
- `data/`
  - `factory.ts` - Fábrica de datos que utiliza el `ProductBuilder`.
- `fixture/`
  - `apiFixture.ts` - Fixture de Playwright para inyectar la API en los tests.
- `tests/`
  - `products.spec.ts` - Suite de pruebas para operaciones CRUD sobre productos.

## 🚀 Tecnologías

- `@playwright/test`
- `TypeScript`
- `@faker-js/faker`
- `ESLint` + `Prettier`

## 🧪 Qué prueba este repositorio

La suite de pruebas cubre operaciones básicas sobre el recurso `products`:

- Obtener todos los productos
- Obtener un producto por ID
- Crear un producto
- Actualizar un producto
- Eliminar un producto

## ⚙️ Instalación y ejecución

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar tests:

```bash
npm test
```

## 🧠 Patrones implementados

- **Api Object Model**: `ProductsApi` extiende `BaseApi` y expone métodos específicos del recurso.
- **Builder**: `ProductBuilder` genera datos de producto y permite personalizar el objeto con métodos encadenados.
- **Factory**: `DataFactory.product()` centraliza la creación de datos de prueba y facilita la reutilización.

## 📂 Apuntes

- `ProductsApi` usa un enfoque basado en endpoints simplificados para mantener las pruebas legibles.
- `apiFixture.ts` permite usar `productsAPI` directamente dentro de los tests.
- La generación de datos con Faker reduce el acoplamiento a valores estáticos.

## 💡 Ideas para extender el proyecto

- Agregar más endpoints y APIs específicas.
- Introducir validaciones de contrato JSON.
- Implementar pruebas de error y escenarios negativos.
- Añadir reportes personalizados de Playwright.

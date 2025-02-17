# **CRUD Users API - Node.js, Express, TypeScript, Prisma**

## 📜 **Descripción**

Este proyecto es una API RESTful para gestionar usuarios, construida utilizando `Node.js`, `Express` y `TypeScript`. Permite crear, leer, actualizar y eliminar usuarios con un enfoque en autenticación JWT, roles de usuario, y manejo de contraseñas mediante `bcryptjs`.

## ✨ **Características**

- **Autenticación JWT**: Utiliza `JSON Web Tokens (JWT)` para la autenticación de usuarios.
- **Roles de usuario**: Soporta roles de usuario, permitiendo la gestión de accesos con permisos específicos.
- **Soft delete**: Implementa un sistema de eliminación lógica (soft delete) para los usuarios.
- **Restauración de usuarios**: Permite restaurar usuarios eliminados lógicamente.
- **Manejo de contraseñas**: Las contraseñas se cifran con `bcryptjs` para asegurar la seguridad de los datos.
- **Swagger UI**: Documentación de la API accesible a través de `Swagger`.

## 🛠️ **Tecnologías utilizadas**

- **Node.js**: Entorno de ejecución de JavaScript.
- **Express**: Framework para aplicaciones web.
- **TypeScript**: Superset de JavaScript que agrega tipado estático.
- **Prisma**: ORM para interactuar con la base de datos (opcional).
- **JWT (JSON Web Token)**: Autenticación basada en tokens.
- **bcryptjs**: Cifrado y comparación de contraseñas.
- **Swagger UI**: Documentación interactiva de la API.

## 📋 **Requisitos**

- **Node.js** (v16 o superior)
- **npm** (o **yarn** como alternativa)
- **MySQL** (para la base de datos)

## 🚀 **Instalación**

1. Clona este repositorio:

   ```bash
   git clone https://github.com/(usuario)/CRUD-Users-Nodejs-Express-Prisma-TS.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd CRUD-Users-Nodejs-Express-Prisma-TS
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Crea el archivo `.env` con las siguientes variables de entorno (puedes usar el `.env.example` como guia):

   ```env
   # Puerto del servidor
   PORT=3000

   # Configuración de la base de datos MySQL
   DATABASE_URL="mysql://user:password@host:port/database"

   # Configuración de JWT
   JWT_SECRET=yoursecretkey

   # Configuracion de Swagger Server
   BASE_PATH=api
   VERSIONS_API=v1
   BASE_URL=http://localhost
   ```

5. Si es necesario, ejecuta las migraciones de la base de datos (si usas Prisma):

```bash
npx prisma migrate dev
```

## ⚡ **Ejecución**

Ejecuta el siguiente comando para compilar el código TypeScript a JavaScript en la carpeta dist (según la configuración en tsconfig.json):

```bash
npm run build
```

Para iniciar el servidor, ejecuta el siguiente comando:

```bash
npm run start
```

## 📃 **Documentación API (Swagger UI)**

Accede a la documentación interactiva de `Swagger UI` después de iniciar el servidor:

```bash
✅ La base de datos está online.
==================================================
🚀 Servidor corriendo en: http://localhost:3000
📃 Swagger Docs: http://localhost:3000/api-docs
==================================================
```

---

## 📌 Endpoints

### 🔐 Autenticación (`/auth`)

| Método   | Endpoint         | Descripción                |
| -------- | ---------------- | -------------------------- |
| **POST** | `/auth/register` | Registrar un nuevo usuario |
| **POST** | `/auth/login`    | Iniciar sesión             |
| **POST** | `/auth/logout`   | Cerrar sesión              |

### 👨‍💼 Admin (`/admin`)

| Método     | Endpoint                    | Descripción                        |
| ---------- | --------------------------- | ---------------------------------- |
| **GET**    | `/admin/allusers`           | Obtener todos los usuarios         |
| **GET**    | `/admin/users/{id}`         | Obtener usuario por ID             |
| **GET**    | `/admin/search`             | Buscar usuarios con filtros        |
| **PUT**    | `/admin/users/update/{id}`  | Actualizar usuario                 |
| **DELETE** | `/admin/users/delete/{id}`  | Eliminar usuario (borrado lógico)  |
| **PUT**    | `/admin/users/restore/{id}` | Restaurar usuario (borrado lógico) |

### 👤 Usuarios (`/users`)

| Método     | Endpoint        | Descripción                       |
| ---------- | --------------- | --------------------------------- |
| **GET**    | `/users`        | Obtener datos del usuario         |
| **PUT**    | `/users/update` | Actualizar usuario                |
| **DELETE** | `/users/delete` | Eliminar usuario (borrado lógico) |

## 📌 Nuevas Rutas Recomendadas a implementar

### 🔐 Autenticación (`/auth`)

| Método   | Endpoint                | Descripción                          |
| -------- | ----------------------- | ------------------------------------ |
| **POST** | `/auth/refresh-token`   | Generar nuevo token de acceso        |
| **POST** | `/auth/change-password` | Cambiar contraseña autenticado       |
| **POST** | `/auth/reset-password`  | Solicitar recuperación de contraseña |
| **POST** | `/auth/verify-email`    | Verificar email del usuario          |

### 👤 Usuarios (`/users`)

| Método    | Endpoint                  | Descripción                    |
| --------- | ------------------------- | ------------------------------ |
| **PATCH** | `/users/update-role/{id}` | Cambiar rol de usuario (admin) |

### ⚙️ Utilidades

| Método  | Endpoint  | Descripción                |
| ------- | --------- | -------------------------- |
| **GET** | `/health` | Verificar estado de la API |

## 📝 **Licencia**

Este proyecto está bajo la licencia MIT.

## 🌟 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes sugerencias o encuentras errores, no dudes en crear un issue o enviar un pull request.

# 🧪 Rick & Morty Explorer - Angular App

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)

Una aplicación web interactiva (SPA) que permite explorar el multiverso de **Rick and Morty**. Este proyecto consume la API pública oficial para mostrar personajes, filtrar información y navegar entre dimensiones.



---

## 🚀 Demo en Vivo

🔗 **[Ver Proyecto Desplegado aquí]** (todavia no)

---

## ✨ Características Principales

* **Consumo de API REST:** Integración con [The Rick and Morty API](https://rickandmortyapi.com/).
* **Listado de Personajes:** Visualización de tarjetas con imagen, nombre y estado vital.
* **Buscador Inteligente:** Filtrado de personajes por nombre en tiempo real.
* **Paginación:** Navegación fluida a través de los cientos de personajes disponibles.
* **Diseño Responsivo:** Adaptado a móviles, tablets y escritorio.
* **Manejo de Errores:** Feedback visual cuando no se encuentran resultados o falla la API.

## 🛠️ Tecnologías Utilizadas

* **Framework:** Angular (v12+)
* **Lenguaje:** TypeScript
* **Manejo de Datos:** Servicios HTTP y Observables (RxJS)
* **Estilos:** [Bootstrap / Tailwind CSS / CSS3]
* **Control de Versiones:** Git & GitHub

---

## 📸 Capturas de Pantalla

| Vista Principal | Vista Detalle / Móvil |
|:---:|:---:|
| ![Home](https://via.placeholder.com/400x200?text=Captura+Home) | ![Mobile](https://via.placeholder.com/200x400?text=Captura+Mobile) |

*(todavia no subo imgs)*

---

## 🔧 Instalación y Ejecución Local

Sigue estos pasos para correr el proyecto en tu máquina:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/TU-USUARIO/rickandmortyapi.git](https://github.com/TU-USUARIO/rickandmortyapi.git)
    cd rickandmortyapi
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar servidor de desarrollo:**
    ```bash
    ng serve
    ```

4.  **Abrir en el navegador:**
    Navega a `http://localhost:8080 otra opcion 4200`.

## 📂 Estructura del Proyecto

```text
src/
├── app/
│   ├── components/      # Componentes reutilizables (Card, Navbar)
│   ├── pages/           # Vistas principales (Home, CharacterDetail)
│   ├── services/        # Lógica de conexión a la API (HttpClient)
│   ├── interfaces/      # Modelos de TypeScript (Character, Info)
│   └── shared/          # Pipes o directivas compartidas
├── assets/              # Imágenes y recursos estáticos
└── styles.css           # Estilos globales



##🔮 Próximas Mejoras
[ ] Agregar filtro por "Especie" y "Género".

[ ] Implementar modo oscuro (Dark Mode).

[ ] Agregar detalles de Episodios y Locaciones.

[ ] Unit Testing con Jasmine/Karma.

##🤝 Créditos
API proporcionada por Axel Fuhrmann.

Desarrollado con ❤️ por Ingrid Ledesma, Tec desarrollo aplicaciones informaticas.

# Guía básica de GitHub

## 1. ¿Qué es GitHub?

GitHub es una plataforma online que permite **alojar repositorios Git**, colaborar en proyectos de software y controlar versiones del código.

* **Git**: sistema de control de versiones.
* **GitHub**: servicio web que usa Git y añade colaboración, issues, pull requests, etc.

---

## 2. Conceptos fundamentales

### Repositorio (Repository)

Proyecto donde se guarda el código y su historial.

### Commit

Una **instantánea** del estado del proyecto en un momento concreto.

### Rama (Branch)

Copia del proyecto para trabajar sin afectar a la rama principal.

* Rama principal: `main` o `master`

### Merge

Unir los cambios de una rama a otra.

### Clone

Descargar un repositorio remoto a tu ordenador.

### Fork

Copia de un repositorio ajeno en tu propia cuenta.

---

## 3. Crear un repositorio en GitHub

1. Ir a **GitHub → New repository**
2. Elegir:

   * Nombre
   * Público o privado
3. (Opcional) Añadir:

   * README.md
   * .gitignore
4. Crear repositorio

---

## 4. Configuración inicial de Git (local)

```bash
git config --global user.name "Tu nombre"
git config --global user.email "tuemail@email.com"
```

Comprobar configuración:

```bash
git config --list
```

---

## 5. Flujo básico de trabajo

### Clonar un repositorio

```bash
git clone https://github.com/usuario/repositorio.git
```

### Ver estado del repositorio

```bash
git status
```

### Añadir archivos al staging

```bash
git add archivo.txt
git add .
```

### Crear un commit

```bash
git commit -m "Mensaje descriptivo"
```

### Subir cambios a GitHub

```bash
git push origin main
```

---

## 6. Ramas (branches)

### Crear una rama

```bash
git branch nueva-rama
```

### Cambiar de rama

```bash
git checkout nueva-rama
```

### Crear y cambiar a la vez

```bash
git checkout -b nueva-rama
```

### Unir una rama a main

```bash
git checkout main
git merge nueva-rama
```

---

## 7. Pull Requests (PR)

Un **Pull Request** sirve para proponer cambios.

Flujo típico:

1. Crear rama
2. Hacer commits
3. Subir rama a GitHub
4. Abrir Pull Request
5. Revisión y merge

---

## 8. Issues

Los **Issues** se usan para:

* Reportar errores
* Proponer mejoras
* Asignar tareas

Incluyen:

* Título
* Descripción
* Etiquetas
* Asignados

---

## 9. README.md

Archivo principal de documentación del proyecto.

Contenido recomendado:

* Descripción del proyecto
* Tecnologías usadas
* Instalación
* Uso
* Autor

Ejemplo:

```md
# Mi Proyecto

Proyecto de ejemplo en Java

## Instalación
npm install
```

---

## 10. Buenas prácticas

* Commits pequeños y claros
* Mensajes descriptivos
* Usar ramas para nuevas funciones
* No subir claves o contraseñas
* Mantener README actualizado

---

## 11. Comandos útiles

```bash
git log        # Historial
git diff       # Cambios no guardados
git pull       # Descargar cambios remotos
git remote -v  # Ver repositorios remotos
```

---

## 12. GitHub en proyectos académicos (DAM)

* Un repositorio por proyecto
* README bien explicado
* Commits frecuentes
* Uso de issues para organización
* Repositorios privados si es necesario

---

## 13. Recursos recomendados

* Documentación oficial de Git
* GitHub Docs
* GitHub Desktop (interfaz gráfica)

---

**Fin de la guía básica** 🚀

# 📝 To-Do List App  

Este proyecto es una **To-Do List App** desarrollada como parte del **AI Automation Developer Challenge**.  
La aplicación permite gestionar tareas con persistencia en la nube usando **Supabase**, está construida en **Next.js** y desplegada en **Vercel**.  

---

## 🚀 Tecnologías usadas  
- [Next.js](https://nextjs.org) – Framework React  
- [Supabase](https://supabase.com) – Base de datos y autenticación  
- [Vercel](https://vercel.com) – Hosting y despliegue  
- [n8n](https://n8n.io) – Automatización (integración chatbot + Supabase + WhatsApp, bonus)  

---

## ⚡ Funcionalidades  
- Agregar nuevas tareas  
- Editar tareas existentes  
- Marcar tareas como completadas  
- Persistencia de datos en Supabase  
- Identificación básica de usuario (ej. nombre o email)  
- Integración con WhatsApp vía **n8n** (bonus)  

---

## 🚀 Instalación y configuración

1️⃣ Clonar el repositorio
git clone https://github.com/tuusuario/NodeProyectAI.git
cd NodeProyectAI

2️⃣ Inicializar Git (si es necesario)
git init
git config --global --add safe.directory 'C:/Users/example'

3️⃣ Instalar dependencias
npm install

4️⃣ Variables de entorno
Crea un archivo .env.local en la raíz del proyecto y agrega lo siguiente:

NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

5️⃣ Modo desarrollo
npm run dev

Abrir en el navegador:
👉 http://localhost:3000

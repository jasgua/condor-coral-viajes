# Cóndor & Coral Viajes — sitio de ejemplo

Sitio **demo** estático (HTML/CSS/JS) para una agencia de viajes en Colombia. La marca "Cóndor & Coral" es ficticia.

## 1. Completar los datos de la agencia
Edite **solo** `config.js`:
```js
window.AGENCIA = { nombre, rnt, correo, telefono, whatsapp, direccion, whitelabelid, agenciaWidget };
```
- `whatsapp`: solo dígitos con indicativo, p. ej. `573001234567`.
- Los textos legales de `terminos.html` y `privacidad.html` tienen marcadores `[...]` que deben reemplazarse por los documentos definitivos (revisados por un abogado).
- Para cambiar la marca: `logo.svg`, el nombre en el encabezado/pie de cada página y colores en `styles.css` (`:root`). Quite la barra amarilla `.demo-bar` cuando ya no sea demo.

## 2. Activar el motor de reservas (PriceAgencies)
En `index.html`, reemplace el contenido del `<div id="ptw-container">` (la vista previa) por:
```html
<script src="//widgets.priceres.co/<agencia>/jsonpBooker/startWidget?container=ptw-container&IsHorizontal=true" data-url-afiliado="WHITELABELID"></script>
```
con los valores reales entregados por el proveedor.

## 3. Probar localmente
```bash
python3 -m http.server 8080   # y abrir http://localhost:8080
```

## 4. Publicar
- **Netlify**: arrastre la carpeta a https://app.netlify.com/drop, o conecte el repositorio (sin comando de build, carpeta de publicación `/`).
- **GitHub Pages**: suba los archivos a un repositorio, Settings → Pages → Deploy from branch → `main` / root.
- Configure su dominio propio y HTTPS en el panel del servicio.

## Imágenes
Fotos de Unsplash (licencia Unsplash: uso comercial gratuito, sin atribución obligatoria). Eje Cafetero usa un degradado CSS.

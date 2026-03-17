
## 1. Descripció del projecte
Aquest projecte consisteix en una aplicació web per gestionar organitzacions i els seus usuaris.  
Inclou funcionalitats com:

- Llistat d’organitzacions.
- Detall d’organització amb usuaris associats.
- Afegir i eliminar usuaris d’una organització.
- Creació, actualització i eliminació d’organitzacions i usuaris.

El frontend està desenvolupat amb **Angular 17+** amb suport SSR (Server-Side Rendering).  
El backend està fet amb **Node.js**, **Express** i **MongoDB**, utilitzant Mongoose com ORM.

---

## 2. Materials consultats i referències

- Documentació oficial de **Angular 17+**:  
  [https://angular.io/docs](https://angular.io/docs)

- Documentació oficial de **RxJS**:  
  [https://rxjs.dev/](https://rxjs.dev/)

- Documentació de **Express.js**:  
  [https://expressjs.com/](https://expressjs.com/)

- Documentació de **Mongoose**:  
  [https://mongoosejs.com/](https://mongoosejs.com/)

- Guia de **Server-Side Rendering Angular (SSR)**:  
  [https://angular.io/guide/universal](https://angular.io/guide/universal)

- Guia de **OpenAPI / Swagger per documentació d’API**:  
  [https://swagger.io/docs/](https://swagger.io/docs/)

- Altres tutorials i fòrums consultats durant el desenvolupament: StackOverflow, Medium, GitHub.

---

## 3. Ús de IA generativa

Durant el desenvolupament, s’ha utilitzat **ChatGPT (OpenAI)** com assistent per:

1. **Resoldre problemes tècnics de Angular SSR**  
   - Detectar i corregir el problema del `ExpressionChangedAfterItHasBeenCheckedError` en `OrganizacionDetail`.
   - Proposar l’ús de `ChangeDetectorRef` i `isPlatformBrowser()` per compatibilitat SSR.

2. **Migració a nova sintaxi de control flow d’Angular 17**  
   - Convertir directives `*ngIf` i `*ngFor` a la nova sintaxi `@if` i `@for` en `organizacion-detail.html`.

3. **Creació i organització de endpoints de backend**  
   - Afegir funcions per afegir i eliminar usuaris d’una organització.
   - Assegurar l’ordre correcte de les rutes a `Express` per evitar problemes d’interceptació de rutes.

4. **Redacció de documentació**  
   - Preparar README amb referències i detall de l’ús de IA generativa.

**Nota:** tot el codi final ha estat revisat i adaptat manualment per assegurar la coherència amb l’arquitectura del projecte i bones pràctiques. L’IA ha servit com a assistent, no com a substitut del desenvolupador.

https://drive.google.com/file/d/1nBV84SOVPMjolAMfGpz0CzkxcPl1I9Id/view?usp=sharing



# MiniSpa

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

## Structure

```
src/
├── environments/
│   └── environment.ts
│
└── app/
    ├── app.ts
    ├── app.spec.ts
    ├── app.config.ts
    ├── app.config.server.ts
    ├── app.html
    ├── app.css
    ├── app.routes.ts
    ├── app.routes.server.ts
    │
    ├── models/
    │   ├── organizacion.model.ts
    │   └── usuario.model.ts
    │
    ├── services/
    │   ├── organizacion.service.ts
    │   ├── organizacion.spec.ts
    │   ├── usuario.service.ts
    │   └── usuario.spec.ts
    │
    ├── organizacion-list/
    │   ├── organizacion-list.ts
    │   ├── organizacion-list.html
    │   ├── organizacion-list.css
    │   └── organizacion-list.spec.ts
    │
    ├── usuario-list/
    │   ├── usuario-list.ts
    │   ├── usuario-list.html
    │   └── usuario-list.css
    │
    └── confirm-dialog/
        ├── organizacion-list.ts
        ├── organizacion-list.html
        ├── organizacion-list.css
        └── organizacion-list.spec.ts
```

---

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

To generate a new interface (models), run:

```bash
ng generate interface interface-name
```

To generate a new service, run:

```bash
ng generate service service-name
```

To generate a new pipe, run:

```bash
ng generate pipe pipe-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

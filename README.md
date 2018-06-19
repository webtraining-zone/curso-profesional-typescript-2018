# Curso Profesional de TypeScript

¿Vienes del mundo backend y JavaScript como que no es lo tuyo? ¿extrañas trabajar con Programación Orientada a Objetos en JavaScript? ¿has escuchado de un lenguaje llamado TypeScript pero no sabes si te puede servir en tu trabajo diario? 

Si respondiste positivamente al menos a una pregunta entonces este curso introductorio a TypeScript es definitivamente para ti.


**Curso completo disponible en: [Curso Profesional Typescript](https://webtraining.zone/cursos/curso-profesional-de-typescript)**


![Curso Profesional TypeScript](https://webtraining.zone/img/metadata-courses/curso-typescript.jpg)


## Instalación
```
npm install -g typescript
tsc --version
```

## Compilación de archivos fuente
```
tsc src/01-compiler-usage/compiler-usage.ts 
```

### Agregando un "watcher"
```
tsc src/03-special-types/special-types.ts --watch
tsc src/03-special-types/special-types.ts -w
```

### Especificando un "target"
```
tsc src/05-modifiers/modifiers.ts --watch --target "ES2015"
```

## Webpack
```
sudo npm install -g webpack webpack-command
npm init
npm install --save-dev typescript awesome-typescript-loader source-map-loader
npm install --save-dev webpack webpack-command
```


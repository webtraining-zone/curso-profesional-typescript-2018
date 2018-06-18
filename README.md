# Curso Profesional de TypeScript

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

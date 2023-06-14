# module system

## change in `tsconfig.json`

```
"target": "es6" ,
"module": "es2015" 
```

## change in `index.html`

```
<script type = "module" src="./output/index.js"></script>
```
 > `type = "module"` is required to know the browser that we are using module system
 > `index.js` is the entry point of the application


 ## import

 > while `import`-ing from other file file extension is required & it must be `.js`
 > like in our case in `index.ts` 
 ```
 import {Person} from './classes/Person.js'
 ```
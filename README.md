# good Setup

> create folder named `src` and `output` in the root directory
> here `./src` contains all the `ts files` and `./output` contains all the `js files`

## change in tsconfig.json
> uncomment the `rootDir` and `outDir` and change the values to:
```
"rootDir": "./src",
"outDir": "./output",
``` 

## change in index.html
> change the `src` of the `script` tag to:
```
<script src="./output/index.js"></script>
```

## compile
> one time compile
```
tsc.cmd
```

> watch mode compile : activates when code changes are saved e.g `auto compile`
```
tsc.cmd -w
```
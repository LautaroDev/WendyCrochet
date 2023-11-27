const {src,dest, watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"));

/* creando  funciones*/
function css(callback) {
    //identificar archivo de sass
    src("./src/scss/app.scss")
        .pipe( sass() ) //compilarlo
        .pipe( dest("build/css") )//almacenarlo o guardarlo

    callback() //el callback nos dice que hasta aca se ejecuta la funcion
}


function dev(callback) {
    watch("src/scss/app.scss", css) //npx gulp dev

    callback()    
}


/* requerimos node para llamar la funcion */
exports.css = css;  //para llamara la tarea con npx es: npx gulp css
exports.dev = dev;  //para llamara la tarea con npx es: npx gulp dev


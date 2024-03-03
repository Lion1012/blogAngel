# blogAngel

Bienvenido a **blogAngel**. Esta aplicación web te permite visualizar un ejemplo de blog construido con bootstrap, css y html. Ademas te permite crear un equipo de Pokémon de forma aleatoria y utilizar un piano con las teclas de tu teclado.

[Deploy](https://lion1012.github.io/blogAngel/)
## Cómo Funciona 

- Cada grupo tiene dos botones: "Pokemon random X" para generar un Pokémon aleatorio en la sección correspondiente y "limpiar X" para limpiar la sección y eliminar el Pokémon seleccionado.
- Se utiliza la PokeAPI para obtener datos de Pokémon por número de Pokédex.
- La aplicación evita que se repitan los mismos Pokémon en el equipo.

- Cada tecla tiene asignado una nota.
- Se utiliza ToneJS para implementarlas.
- Asignamos una tecla a cada boton para que podamos usarlo sin la necesidad de pulsar en la página.

## Requisitos Previos e instalación

Asegúrate de tener Node.js y npm instalados en tu sistema.

1. Clona este repositorio.

    ``` usando terminal -> dentro de la carpeta donde quieras clonarlo.
    git clone https://github.com/TuUsuario/blogAngel.git
    ```

2. Navega al directorio del proyecto.

    ```bash
    cd creaTuEquipo
    ```

## Uso

1. Abre el archivo `index.html` en tu navegador.

2. Navega libremente por la página revisando el blog y las entradas.

3. Entra en Equipo para poder hacer uso de la PokeApi, con un boton que te genera 6 pokemon y otro que te los borra.

4. Entra en Piano para poder utilizar mediante las teclas que ves en pantalla sus respectivas notas asociadas.
   

## Errores Conocidos

- Puede haber problemas de conexión con la PokeAPI ya que tarda un rato en recorrer los 1025 pokemon.


## Autor

[LionDev](https://github.com/Lion1012)

## Agradecimientos

Agradecimientos a la comunidad de desarrolladores de la PokeAPI y ToneJS.

# P5_CodeChallenge
En este repo se encuentra la práctica 5 de la semana 4

Dependencias usadas:
- Jest : Se uso para realizar las pruebas cada una de las clases del proyecto
- Linter: Se uso para las correciones de estilo 
- Express Server: Para crear el server dentro del cual se llevan a cabo los diferentes endpoints

Componentes:
Para el diseño me basé en el ejemplo realizado en la práctica 4 y que sin darme cuenta es prácticamente el mismo que
se encuentra en la ilustración de la práctica 5
En total tenemos
- Una clase Reader: que sirve para leer el JSON de entrada, el cual contiene la base de datos de los estudiantes
- Una clase StudentService: que incluye las funcionalidades requeridas, en especifico, devuelve los emails de los estudiantes
que tengan haveCertification, así como los estudiantes con creditos mayor a 500. Son métodos muy sencilllos que solo hacen uso de filter
- Una clase Student Controller, la cual une el Reader y el StudentService y que posteriormente será usado en el server
tiene los mismos métodos que StudentService y uno más, el cual devuelve todos los estudiantes 

Cada una de estas clases cuenta con sus respectivas pruebas, las cuales se pueden consultar en la carpeta correspondiente

- Finalmente tenemos el server con la API, y sus respectivos endpoints

API:
Esta API cuenta con 3 endpoints, cada uno con el método GET de HTTP, tiene un funcionamiento muy sencillo, ya que dependiendo de la
URL a la cual se acceda, te devolverá un conjunto de valores u otro, en total se tiene a los tres endpoints que se solicitaron

Si de accede a

- localhost:3000/v1/students/emails. Entonces se mandará a llamar al método getStudentEmails() de la clase StudentController
y el resultado se mostrará con response

- localhost:3000/v1/students. Se llama a su método y se muestran todos los estudiantes que existen en la base de datos

- localhost:3000/v1/students/credits. Funciona igual que las otras dos, llama a su respectivo metodo dek controlador y el 
resultado aparece con response


Por ultimo, el tiempo que me tomó llevar a cabo todo fue de aproximadamente dos horas

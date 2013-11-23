Sistema Tianguis Orgánico Virtual
=================================

## Objetivo

Uso de una Aplicación que facilite la coordinación autogestiva de una
red de comercio entre Consumidores, Locatarios y Productores.

El sistema administrará pedidos de alimentos y otros productos
orgánicos a productores o distribuidores, y sus entregas al Consumidor
en Locales registrados. Se buscará optimizar precios acuerpando la
demana de los Consumidores para comprar a precios de mayoreo.

Objetivos específicos * Gestión de Pedidos del Consumidor a diferentes
Locales * Gestión de Grandes Pedidos de Locatarios a Productores *
Gestión de Entregas para Productores * Herramientas de análisis para
todos * Directorio de Consumidores - Locatarios - Productores


## Actores

Consumidor Yara cuida de comer sólo alimentos orgánicos. A
veces compra shampú y otros cosméticos. Pide todo por internet
y lo recoge en la Condesa los jueves. A veces los martes en la
Roma.

Locatario Nicolasa tiene un local en la Condesa. Está bien
ubicado. Tiene una red de Consumidores organizada en la
internet y surte Pedidos en su Local.  Conoce a varios
Productores de Milpa Alta, algunos le surten a domicilio,
otros allá donde él recolecte en su bicicleta de carga.

Productor Don Ramón trabaja una parcela en Milpa Alta. Produce
acelgas, zanahorias, cilantro. A veces cocecha alpiste y
pipichas. Distribuye en la ciudad de lunes a miércoles por la
mañana surtiendo a varios Locales. Jueves y viernes lo
encuentras en su parcela y normalmente te atiende. Fines de
semana se retira a meditar sobre un promontorio. Prefiere
venderle a sus vecinos que a un autoservicio transnacional.


## Casos de uso del Sistema

* Registro de Usuarios. Se colecta información
elemental como nombre y apellido y datos de
contacto.

### Consumidor

* Armar Pedido El Consumidor elige de un menú
cuánto de qué Productos quiere, elige también la fecha y hora
de entrega, y el Local o punto de entrega, se genera entonces
un Pedido que se envía automáticamente al Local elegido. El
sistema muestra opciones disponibles según la oferta de
horarios de entrega en los Locales registrados.  

* Paga un pedido al recibir su Canasta o en línea: 
    * SPEI 
    * paypal 
* Recoge Pedido

### Productor

 * Surte Grandes Pedidos a diferentes Locales, con o sin entrega a domicilio.  

 * Registra sus Productos con tabla de precios según su volumen de producción.

### Locatario
 * Recibe Pedidos de Consumidores y arma Grandes Pedidos a Productores.

 * Recibe Productos de Productores.

 * Arma Canastas.

 * Entrega Pedidos a Consumidores en su Local.


## Pantallas del Sistema

	Formato de Pedido A entregarse en el Local __________________
	el día Fecha y horas __________

	| cantidad | producto | presentación | precio unitario | importe |

	Subtotales por categoría 
	Total




Futuros Desarrollos

	* Tener listas-plantilla, que puedas re-someter. Basarte en
	* pedidos anteriores para generar nuevos.  Conectar con
	* krecipe o alguno de sus servicios de nutriología-recetas.
	* Surtir a Locatarios, productos empacados no necesariamente
	* de productores regionales, pero sí orgánicos.  De productos
	* empacados permitir filtros a Consumidores: por marca,
	* precio, etc.



## Instalacion en ubuntu

1. nodejs:
    1. sudo apt-get install -y nodejs
    2. sudo apt-get update
    3. sudo apt-get install -y python-software-properties python g++ make
    4. sudo add-apt-repository -y ppa:chris-lea/node.js
    5. sudo apt-get update
    6. sudo apt-get install -y nodejs
2. mongodb: sudo apt-get install -y mongodb
3. dependencias del proyecto (express, mongodb):
    1. cd ./api
    2. npm install

## Instalacion vagrant
1. VirtualBox.
2. Vagrant.
3. creando maquina virtual: vagrant box add tianguis_ubuntu_1204_32 http://files.vagrantup.com/precise32.box
4. vagrant up

#instalacion en debian wheezy
  #install nodejs from wheezy-backports
  #https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#backports

  sudo add-apt-repository 'deb http://ftp.us.debian.org/debian wheezy-backports main'

  #install npm
  sudo apt-get install curl
  curl https://npmjs.org/install.sh | sudo sh

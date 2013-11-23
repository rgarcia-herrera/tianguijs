# MongoDB
sudo apt-get install -y mongodb

# NodeJS
sudo apt-get install -y nodejs
sudo apt-get update
sudo apt-get install -y python-software-properties python g++ make
sudo add-apt-repository -y ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install -y nodejs

# Bower
sudo apt-get install -y git-core # Necesarios
sudo npm install -g bower

# Instalar dependencias del API
cd /vagrant/api
npm install

# Instalar dependencias del cliente
cd /vagrant/estatico
bower install

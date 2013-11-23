# MongoDB
sudo apt-get install -y mongodb

# NodeJS
sudo apt-get install -y nodejs
sudo apt-get update
sudo apt-get install -y python-software-properties python g++ make
sudo add-apt-repository -y ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install -y nodejs

# Instalar dependencias del proyecto
cd /vagrant/api
npm install

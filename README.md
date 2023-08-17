# Webpack Template

Template pour l'utilisation de webpack

Webpack est utilisé pour créer le build
Et express pour faire tourner un serveur sur le port 8080 qui pointe vers le build


# Package principaux et versions

Express : 4.18.2
Webpack : 5.75.0
Webpack-cli : 5.0.1
Webpack-dev-server : 4.11.1


# NPM scripts

## DEV
npm run dev lance la commande 'npx webpack serve --config ./webpack.config.dev.js'

## BUILD
npm run build lance la commande 'npx webpack --config ./webpack.config.js'
# Rails webpack(er) project
Das Projekt dient zur Evaluation des Analyseplugins stylesheet-code-quality-webpack-plugin.

* Konfiguration
Die Applikation kompilieren und den aktuellen SCSS Quellcode analysieren:
```bash
yarn run build:prod
```

Den Webpack-Dev-Server starten, um Assets über Webpack und nicht Sprockets ausliefern zu lassen:
```bash
yarn run start:dev
```

Rails-Server starten:
```bash
rails s
```
* Analysebericht aufrufen
Um den Bericht der Analyse anzusehen, folgende URL im Browser aufrufen:

http://localhost:3000/dashboard/#/
# Rails webpack(er) project
Das Projekt dient zur Evaluation des Analyseplugins stylesheet-code-quality-webpack-plugin.

Das Projekt wurde mit der folgenden Hardware getestet:

macOS Mojave
Version 10.14.5 (18F132)
Modellname:	MacBook Pro
Modell-Identifizierung:	MacBookPro13,1
Prozessortyp:	Intel Core i5
Prozessorgeschwindigkeit:	2 GHz
Anzahl der Prozessoren:	1
Gesamtanzahl der Kerne:	2
L2-Cache (pro Kern):	256 KB
L3-Cache:	4 MB
Hyper-Threading Technologie:	Aktiviert
Speicher:	16 GB

# Konfiguration
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
## Analysebericht aufrufen
Um den Bericht der Analyse anzusehen, folgende URL im Browser aufrufen:

http://localhost:3000/dashboard/#/


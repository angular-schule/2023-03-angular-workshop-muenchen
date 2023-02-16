<img src="https://assets.angular.schule/header-intensivworkshop.png">

#### **mit Ferdinand Malcher**

<hr>

**Herzlich Willkommen – und schön, dass du dabei bist!**  
In diesem Repository findest du alle Infos zur Vorbereitung und während des Workshops den Quelltext unserer Beispielanwendung.



# ✅ Vorbereitung

Damit wir im Workshop gleich durchstarten können, solltest Du ein paar Vorbereitungen treffen.
Die gesamte Installation wird rund 30 Minuten dauern.

> **Der Dozent im vorhergehenden Workshop "Web-Grundlagen" wird bei der Installation unterstützen.**


## 1.) Benötigte Software

1. **Node.js 14, 16 oder 18** (jeweils die aktuelle Nebenversionsnummer): [https://nodejs.org](https://nodejs.org)
2. **Google Chrome:** [https://www.google.com/chrome/](https://www.google.com/chrome/)
3. **Visual Studio Code:** [https://code.visualstudio.com](https://code.visualstudio.com)<br>
4. **Angular Language Service für VS Code:** [Angular Language Service (`Angular.ng-template`)](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
    - Installiere die Extension über den *Extensions Browser* direkt im Editor.


## 2.) Pakete installieren

Die Angular CLI ist das offizielle Build-Tool für Angular. Mit folgendem Befehl kannst Du die CLI auf dem System installieren:

```bash
npm install -g @angular/cli
```

⚠️ Überprüfe bitte anschließend die Versionen, damit wir beim Workshop alle auf dem gleichen Stand sind:

```
node -v
> Erwartet: 14.20.x, 16.13.x, 18.10.x oder höher, aber nicht 19.x!

npm -v
> Erwartet: 6.x oder höher

ng version
> Erwartet: 15.x.x (!)
```

Falls du bereits eine ältere Version der Angular CLI auf deinem System installiert hast, führe die Installation bitte trotzdem durch.
Global sollte stets die neueste Version installiert sein.


## 3.) Angular-Projekt erzeugen

Bitte lege das Übungsprojekt schon vor Beginn des Workshops an.
Die Angular CLI nimmt uns die meisten Schritte schon ab.
Was die Parameter im Einzelnen bedeuten, besprechen wir natürlich im Workshop!

> ⚠️ Bitte erstelle das Projekt nicht auf einem Netzlaufwerk, sondern direkt auf der lokalen Festplatte!

Führe in Deinem Arbeitsverzeichnis die folgenden Befehle aus:

```bash
ng new book-rating --routing --style=scss --prefix=br
cd book-rating
ng serve
```

Die Installation kann bei langsamer Internetverbindung sehr lange dauern.
Warte beim Schritt `Installing packages (npm)` mit Geduld ab!


> Auf http://localhost:4200 sollte nun eine Website mit dem Text *"book-rating app is running!"* erscheinen!

![Screenshot CLI](https://assets.angular.schule/chrome_cli_welcome_new.png)


Beende danach den laufenden Webserver mit Strg + C.


## 4.) Style-Paket installieren

Wir haben ein Paket mit SCSS-Styles vorbereitet, das wir im Workshop verwenden werden.
Bitte führe diesen Befehl **im Projektverzeichnis `book-rating`** aus.

```bash
npm i @angular-schule/workshop-styles
```

Die Warnungen bei der Installation kannst du ignorieren.



### Wir freuen uns schon! 🙂

Wenn bei allen Teilnehmenden das Grundgerüst steht, können wir ohne Zeitverlust loslegen.
Sollte es zu Problemen kommen, melde dich bitte einfach per Mail an [team@angular.schule](mailto:team@angular.schule).

<hr>

<img src="https://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; https://angular.schule | Stand: 16.02.2023


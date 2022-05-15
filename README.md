# DoneWithIt

_______________________________________________________
Runnen:
_______________________________________________________

1) Maak dat expo geïnstalleerd staat op de computer:
    - in terminal, run commando: _npm install --global expo-cli_
 
2) Navigeer naar de map en run installeer de node modules
    - in de map van project, run commando: _npm install_
 
3) start de app door het volgende commando te runnen in de app
    - in map van project, run commando: _npm start_



_______________________________________________________
Structuur van het project:
_______________________________________________________

1) Screens:
    - Componenten die weergave van de app definiëren, met beperkte functionaliteiten die het weergeven bevoordelen
3) Services:
    - DeviceStorage: Alle benodigde functies om waarden op te slaan in persistent geheugen van het device. (Met behulp van AsyncStorage)
    - NetworkService: Alle benodigde functies om de backend aan te spreken. (Met behulp van Axios)
5) Routes:
    - HomeStack: Export een StackNavigator, die alle screens van het project bevat. Deze zorgt ervoor dat eenvoudig tussen screens genavigeerd kan worden.
7) Assets:
    - Media van het project, uiteindelijk weinig gebruikt

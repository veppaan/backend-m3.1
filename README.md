**Vera Kippel veki2400**

Ett API byggt med express och MongoDB. 
API:et hanterar ett cv där en användare lägger till jobberfarenheter.
CRUD(Create, Read, Update och Delete) är implementerad.

Tabellens namn för cv:ts olika jobb heter "resume" som skapats med hjälp av SQLite3.
Tabellens innehåll:
- id(skapas automatiskt)
- companyname(string)
- jobtitle(string)
- location(string)


Användning:

|Metod | Ändpunkt | Beskrivning |
-------|----------|-------------|
|GET | "/jobs" | Hämta alla lagrade jobberfarenheter|
|POST| "/jobs" | Lägg till ett jobb till ditt CV |
|PUT | "/jobs/:id" | Uppdatera ett jobb med angivet id|
|DELETE | "/jobs/:id" | Radera ett jobb med angivet id|

Ett jobb-objekt returneras och skickas som JSON med följande struktur:
```json
{
    "companyname": "Matbutik",
    "jobtitle": "Gruppchef för Frukt och Grönt",
    "location": "Stockholm"
}
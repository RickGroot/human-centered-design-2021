# Human Centered Design @cmda-minor-web 2021
//Interactie ontwerpen: Rapid prototypen en testen met echte mensen

> What distinguishes Human-Centered Design from other problem-solving approaches is its obsessive focus on understanding the perspective of the person who experiences a problem, their needs, and whether the solution that has been designed for them is truly meeting their needs effectively or not. At its most effective, the very people who experience a problem the most are a constant part of the design process and when possible, become part of the design team itself. - [What Is Human-Centered Design?](https://medium.com/dc-design/what-is-human-centered-design-6711c09e2779)

## Link naar live prototype
Ga hier naar de [live site](https://rick-groot-hcd.herokuapp.com/).

## Table of contents
- [Darice](#wie-is-darice)
- [Podcasts](#podcasts)

## User scenario
### Wie is Darice
Darice is 39 jaar oud, ze is doof maar is niet altijd doof geweest. Eerst viel het niet op, maar toen werd het slechter en slechter. Op de middelbare school kreeg ze een gehoorapparaat, en ging ze voor zitten in klas. Ze studeerde in Nederland op haar 19e. Door gebruik van medicijnen heeft ze haar gehele gehoor verloren. Nederlands is haar moedertaal, dus niet gebarentaal zoals veel andere doven. Zelf is ze ook Front-end developer, en ze probeert alles voor iedereen toegankelijk te maken.

### Hoe werkt Darice
Door middel van een typtolk kan Darice communiceren met andere mensen. Wanneer er iemand wat zegt wordt dit door de typtolk vertaald naar Nederlandse tekst. Vervolgens kan ze door middel van normale Nederlandse taal terugpraten tegen die persoon. Omdat ze wel Nederlands kan spreken is de typtolk alleen nodig om gesproken teksten naar Darice te vertalen. Darice kan verder haar computer goed bedienen en heeft geen last met andere dingen uitvoeren, behalve als dit met geluid te maken heeft.

## Podcasts
Darice luisterd graag naar podcasts. Dit doet ze vaak in haar vrije tijd, maar lang niet alle podcasts hebben een (goede) transcriptie. Darice wil graag een leukere ervaring bij het luisteren van podcasts. Hierbij wil ze een overzichtelijke transcriptie waardoor ze alles makkelijk kan volgen. Aan mij de opdracht om een goede pagina te maken waar Darice met plezier en gemak haar podcast kan luisteren/lezen. Ik heb gekozen voor de [podcasts van Vasilis van Gemert](https://vasilis.nl/gbi/), omdat ze deze podcasts leuk vind om naar te luisteren.

## Exclusive design
> Dit product is speciaal gemaakt oor Darice, op basis van meerdere testen met deze gebruiker.

<details>
<summary>
Study situation
</summary>
Darice is doof, en kan dus geen podcasts luisteren. Wel kan ze deze lezen, en ze wil de ervaring van het lezen van podcast graag anders zien. Navigeren van een website gaat net als andere personen, ze heeft hier dus geen last van andere beperkingen. Het gaat dus vooral om de ervaring van het lezen van haar favoriete podcasts. Door middel van een typtolk kan Darice communiceren met andere personen. Nederlands is haar moedertaal, en dus niet gebarentaal. Het toevoegen van iets met gebarentaal heeft dus geen nut.
</details>

<details>
<summary>
Prioritise identity
</summary>
Darice houdt veel van podcasts, maar niet van allemaal. Ze luisterd net waar ze zin in heeft, dit is vaak naar actuele onderwerpen of naar podcasts die te maken hebben bij haar vakgebied. Uit test 1 is naar voren gekomen dat Darice de podcasts van Vasilis erg leuk en interessant vind. Om deze reden heb ik ervoor gekozen om een aantal van deze podcasts uit te werken voor Darice.
</details>

<details>
<summary>
Ignore conventions
</summary>
Een podcast luister je naar, toch? Js, behalve als je dat niet kan, dan wordt het een noodzaak om de transcriptie te lezen. Darice heeft bij het luisteren van een podcast genoeg aan een transcript, en heeft hier geen geluid bij nodig omdat ze dit toch niet kan horen. Dit betekent dat ik deze audio helemaal weg kan halen, wat je normaal nooit zou doen voor een podcast omdat het bedoelt is om naar te luisteren.  

Ook zijn contrast en leesbaarheid geen groot probleem bij Darice, omdat ze alles gewoon goed kan zien. Zelf houd ze wel heel erg van een goed contrast en een goede toegankelijke interface, maar dit kan worden genegeert omdat ze zelf alles wel goed kan zien. (vooral van toepassing bij de closed-captions)

Een conventie die ik niet heb gevolgd is het zelf scrollen van de content. Dit heb ik gedaan omdat Darice zelf minder lange stukken tekst wilt zien, maar alsnog wilt scrollen door de content. Dit is tegenstrijdig, en dus heb ik ervoor gekozen om een volgend stuk tekst te laten zijn bij een button press. Op deze manier kan ze door de podcast heen op haar eigen snelheid en lijkt de lijst tekst wat minder groot.
</details>

<details>
<summary>
Add noncense
</summary>
Noncence toevoegen bij dit project is ingewikkeld. Darice hamert veel op de design principes en wilt het project toch liever voor iedereen toeghankelijk hebben, wat het lastig maakt om leuke dingen toe te voegen die alleen bij haar passen. Toch heb ik ervoor gekozen om twee pratende personen toe te voegen, als een soort van equalizer. De mond van de pratende persoon gaat open op basis van het niveau van praten, en werkt dus tegelijk als een soort van equalizer. Deze optie is leuker en meer gepersonaliseerd als een bijvoorbeeld een simpele balk als equalizer.
</details>

## Testen
Ik heb deze tests gehouden met een team studenten, de tests waren remote door de COVID-19 pandemie. In mijn product heb ik een aantal verschillende ontwerpen gemaakt, die Darice zelf aan en uit kan zetten. Ze geeft op de verschillende ontwerpen haar mening, wat vind ze leuk aan een ontwerp en wat niet. Daarnaast heb ik ook nog per test zelf een aantal vragen gesteld op basis van de ontwerpen.

### Test 1
Bij deze test ging het voornamelijk om het kennismaken met Darice. Wie is ze, waar loopt ze vaak tegenaan en waar ziet ze veel verbeterpunten in? Tijdens deze test zijn er een aantal dingen naar boven komen drijven waar Darice meer waarde aan hecht:  

* Plaats stukken tekst in blokken per persoon
* Gebruik kleur om personen te verduidelijken
* Sans-serif, 22px grootte en 33px interlinie (zelf instelbaar als dat kan)
* Max-width van teksten op 600px
* Verwijzingen van verhaal meteen in de tekst neerzetten
* Geen teksten aanpassen, grammatica fouten houden het menselijk
* Moet werken op firefox, dit is haar go-to browser  

> Voor het volledige testverslag, [check de wiki](https://github.com/RickGroot/human-centered-design-2021/wiki/Testverslag-Week-1)

### Test 2
Tijdens de tweede test ben ik mij vooral gaan focussen op het onderscheiden van verschillende sprekers, en handige knoppen op pagina's. Wanneer valt een knop goed op, en wanneer wordt deze te dominant? Zijn teksten die verschillend uitlijnen een goede toevoeging of maakt dit het juist onoverzichtelijk? Uit deze test heb ik de volgende punten kunnen halen: 

* Ze houdt meer van iconen dan kleuren bij stemvolumes en emoties
* Verhoog line height
* Verhoog lettergrootte
* Combineer kleur onderscheiding met spreker naam
* Darice legt veel nadruk op goed leesbare teksten
* Iinteractie met dark modes en font instellingen is een goede toevoeging  

> Voor het volledige testverslag, [check de wiki](https://github.com/RickGroot/human-centered-design-2021/wiki/Testverslag-Week-2)

### Test 3
Tijdens test 3 heb ik gekeken naar verschillende mogelijkheden in de vormgeving, op de home pagina en de podcast pagina. Ook heb ik gekeken naar verschillende opties van het laten inspringen van teksten, vind ze het fijn om gewoon te scrollen of om de volgende tekst te zijn bij een druk op een knop? Dit zijn mijn samengevatte conclusies van deze test: 

* Kleur is geen goede omschrijving van toon
* Toon geen zinnen woord voor woord, dit werkt heel vermoeiend
* "Less is more", houd alles overzichtelijk
* Gifjes zijn altijd leuk, zolang ze niet constant op het scherm blijven
* Onderscheid door middel van kleur werkt heel goed

> Voor het volledige testverslag, [check de wiki](https://github.com/RickGroot/human-centered-design-2021/wiki/Testverslag-Week-3)

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->

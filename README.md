# 12.04.2021
```
Typy zmiennych (var, let, const)
	var 	tekst = 'test' <- typ danych to 'test', czyli string
	let 	mozna redeklarowac, czyli np. tekst = 'test1', tekst = 'test2'
	const 	stala, mozna tylko raz zadeklarowac
	
Wbudowane funkcje dla string'ow
	.includes('a'); <- taki contains (ale dla string'ów) z cs'a
	.split(' '); 	<- split to split
	.trim();        <- wycina biale znaki z poczatku i konca
	.toUpperCase(); <- ToUpper
	`Ala ma $<zmienna>`
	
Wbudowane funkcje dla number
	=== 		 	<- porownuje typy
	==   		 	<- konwertuje na string i porownuje
	.isFinite(0/0); <- czy jest liczba skonczona
	.toFiexd(2);	<- ucina, ale nie zaokragla 
	
Wbudowane funkcje dla boolean
	Boolean(50) 	<- sprawdza czy to boolean
	
Wbudowane funkcje dla tablic
	.length
	.join() 		<- skleja wszystkie wartosci tablicy w jeden string
	.map((wartsoc, index) => { return wartosc+indeks});
	.forEach((wartosc)=>{ console.log(wartosc) });
	
Obiekty
	let obiekt = {};
	obiekt = {
		autor: 'ktos',
		tytuł: 'jakis'
	};

switch <- jak switch
```

# 19.04.2021
```
npx -v 															- wersja
npx create-react-app <nazwa projektu> --template typescript		- tworzenie nowego projektu 
packages.json 													- paczki
yarn/npm install 												- pobiera paczki z packages.json
app.tsx															- glowny plik, tu sie zaczyna 

Uzywac arrow function
Zwracac tylko jeden tag
typescript a: string itd. 										<- zmienne, argumenty i cala reszta z typami, jak w c#
Wyswietlanie zmiennych w template { <nazwa_zmiennej > }
const [liczba, setLiczba] = React.useState(domyslna_wartosc)  	<- Hook'i
FC/FunctionComponent 											<- przesylanie zmiennych w komponencie (dopisuje sie wartosc w html'u)
? przy nazwie zmiennej, nullabel 								<- tak jak w c#
onNumberChange &&  onNumberchange(num)							<- jezeli istnieje onNumberChange to wykonaj onNumberChange(num), mozna tez if(onNumberchange)
```

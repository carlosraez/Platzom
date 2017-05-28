#PLATZOM

PLATZOM ES UN IDIOMA INVENTADO PARA EL [CURSO DE FUNDAMENTOS DE JAVASCRITP](www.platzi.com/js)


## Descripción del idioma

- Si la palabra termina con "AR" se le quitan esas dos letras
- Si la palabra incia con Z, se le añade una "pe" al final
- Si la palabra traducida tiene 10 o mas letras se debe partir en dos por la mitad y unir con - en medio
- Si la palabra original es un palindromo, ninguna anterior regla cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y letras minusculas

## Instalación

```
npm install platzom

```
## Uso

```
import platzom from 'platzom'

platzom("Programr") //Program
platzom("Zorro")    //Zorrope
platzom("Zarpar")   //>Zarppe
platzom("abecedario") //abece-dario
platzom("sometemos")  //SoMeTeMoS

```
##Creditos

-[Carlos Raez](www.carlosraez.com)

## MIT (https://opensource.org/licenses/MIT)

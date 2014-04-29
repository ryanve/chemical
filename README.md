# chemical
#### JavaScript interface for chemicals

## `require` example

```js
var chemical = require('chemical')
var carbon = chemical({
  formula: 'C'
})

carbon instanceof chemical // true
```

## Proposed interface

No methods are implemented in this version. If you know about JavaScript or chemistry, please [contribute your ideas](../../issues) about how to best implement this interface. Below is a loose example of the proposed interface for future versions. 

```js
var hydrogen = chemical('H')
var oxygen = chemical('O2')
var reaction = hydrogen.react(water)
```

Chemicals ([chemical substances](http://en.wikipedia.org/wiki/Chemical_substance)) include [elements](http://en.wikipedia.org/wiki/Chemical_element), [compounds](http://en.wikipedia.org/wiki/Chemical_compound), and [mixtures](http://en.wikipedia.org/wiki/Mixture). Chemicals are expressed as [formulas](http://en.wikipedia.org/wiki/Chemical_formula). Chemicals react with other chemicals. [Reactions](http://en.wikipedia.org/wiki/Chemical_reaction) are classified into [types](http://misterguch.brinkster.net/6typesofchemicalrxn.html). The API should include such abilities.

## License
MIT
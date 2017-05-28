const expect  = require('chai').expect //el atributo expect esta en chai
const platzom = require('..').default //nos da error y tenemos que poner .default porque nos esta exportando un objeto



describe('#platzom', function ()
    {
      it('Si la palabra termina con "AR" se le quitan esas dos letras', function functionName()
         {
           const translation = platzom('programar')
           expect(translation).to.equal('program')//qeremos que el resultado de translation se igual a program
         })
      it('Si la palabra incia con Z, se le añade una "pe" al final', function functionName()
          {
            const translation = platzom('zorro')
            const translation2 = platzom('zarpar')
            expect(translation).to.equal('zorrope')
            expect(translation2).to.equal('zarppe')
          })
      it('Si la palabra traducida tiene 10 o mas letras se debe partir en dos por la mitad y unir con - en medio', function functionName()
            {
              const translation = platzom('abecedario')
              expect(translation).to.equal('abece-dario')
            })
      it('Si la palabra original es un palindromo, ninguna anterior regla cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y letras minusculas', function functionName()
          {
            const translation = platzom('sometemos')
            expect(translation).to.equal('SoMeTeMoS')
          })


    })

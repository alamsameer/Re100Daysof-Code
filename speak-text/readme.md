# speak-text js

In this project we have made text to speak by your computer.

## concept used :-

Initialising the speaksynthesis constructor
> let utterance=new speechsynthesis()

 * speechsynthesis is web API ,it has different properties,methods,and event

 * methods of this api:- we will use this method to work wih our text .

 we can access the properties 
 like-
 > (speechsynthesis.method_name()  )

     *  cancel() :- to start from begining

     * .pause()
     * .speak()
     * .resume()
     * .getVoices

*properties for read only where api is reading

 accessing the properties
> speechsynthesis.property name

* .paused
* .pending
* .speaking

## we have event :
 * boundary :- boundary of word 
 * end :- when the sentence is finished of speaking.

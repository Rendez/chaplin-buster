buster.spec.expose() # Make some functions global

define ->

  describe 'Hello world', ->

    it "should alert the phrase 'hello world'", ->
      phrase = 'hello world'
      @mock(window).expects('alert').withArgs(phrase)
      window.alert phrase


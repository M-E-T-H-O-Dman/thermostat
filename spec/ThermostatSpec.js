describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it("should begin at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);

  });

  describe('increasing the temperature', function() {
    it('increases if < 25 degress', function() {
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    })
  })
});
 

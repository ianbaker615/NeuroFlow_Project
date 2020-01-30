'use strict';

// AngularJS E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('NeuroFlow Application', function() {

  describe('trackList', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should filter the track list as a user types into the search box', function() {
      var trackList = element.all(by.repeater('track in $ctrl.tracks'));
      var query = element(by.model('$ctrl.query'));

      expect(trackList.count()).toBe(15);

      query.sendKeys('Relaxation');
      expect(trackList.count()).toBe(5);

      query.clear();
      query.sendKeys('Meditation');
      expect(trackList.count()).toBe(7);
    });

    it('should be possible to control track order via the drop-down menu', function() {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var categoryOption = orderSelect.element(by.css('option[value="category"]'));
      var trackLabelColumn = element.all(by.repeater('track in $ctrl.tracks').column('track.label'));

      function getLabels() {
        return trackLabelColumn.map(function(elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('20 min');   // Let's narrow the dataset to make the assertions shorter

      expect(getLabels()).toEqual([
        '20 Min Body Scan',
        '20 Min Seated Meditation',
        'Lucas LeardMann Short Body Scan 20 min',
        'Lucas LeardMann Short Sitting Meditation 20 min'
      ]);

      categoryOption.click();

      expect(getLabels()).toEqual([
        '20 Min Seated Meditation',
        'Lucas LeardMann Short Body Scan 20 min',
        'Lucas LeardMann Short Sitting Meditation 20 min',
        '20 Min Body Scan'
      ]);
    });

    it('should check ngShow', function() {
      var checkbox = element(by.model('checked'));
      var checkElem = element(by.css('.check-element'));

      expect(checkElem.isDisplayed()).toBe(false);
      checkbox.click();
      expect(checkElem.isDisplayed()).toBe(true);
    });



  });
});
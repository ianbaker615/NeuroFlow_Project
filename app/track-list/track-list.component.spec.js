'use strict';

describe('trackList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('trackList'));

  // Test the controller
  describe('TrackListController', function() {
    let ctrl;

    beforeEach(inject(function($componentController) {
      ctrl = $componentController('trackList');
    }));

    it('should create a `tracks` model with 15 phones', function() {
      expect(ctrl.tracks.length).toBe(15);
    });

    it('should set a default value for the `orderProp` model', function() {
      expect(ctrl.orderProp).toBe('lable');
    });

  });

});
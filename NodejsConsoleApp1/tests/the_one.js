var assert = require( 'chai' ).assert;
var sinon = require( 'sinon' );

var useSelection = require( '../src/useSelection' );
var selection = require('../src/Selection');

describe( 'simple test', function () {
    beforeEach(function() {
        selection.prototype.log = sinon.spy();

    });

    afterEach(function() {

    });
    it( 'runs slow', function () {
        useSelection( 'my hidden message' );

        assert( selection.prototype.log.called, ' log was called' );
    });
});
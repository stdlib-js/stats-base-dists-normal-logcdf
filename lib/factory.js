/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var constantFunction = require( '@stdlib/utils-constant-function' );
var degenerate = require( '@stdlib/stats-base-dists-degenerate-logcdf' ).factory;
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var log1p = require( '@stdlib/math-base-special-log1p' );
var abs2 = require( '@stdlib/math-base-special-abs2' );
var erfc = require( '@stdlib/math-base-special-erfc' );
var erfcx = require( '@stdlib/math-base-special-erfcx' );
var ln = require( '@stdlib/math-base-special-ln' );


// VARIABLES //

var INV_SQRT_TWO = 0.7071067811865475; // 1/sqrt(2)


// MAIN //

/**
* Returns a function for evaluating the natural logarithm of the cumulative distribution function (CDF) for a normal distribution.
*
* @param {number} mu - mean
* @param {NonNegativeNumber} sigma - standard deviation
* @returns {Function} logcdf
*
* @example
* var logcdf = factory( 10.0, 2.0 );
* var y = logcdf( 10.0 );
* // returns ~-0.693
*
* y = logcdf( 5.0 );
* // returns ~-5.082
*/
function factory( mu, sigma ) {
	if (
		isnan( mu ) ||
		isnan( sigma ) ||
		sigma < 0.0
	) {
		return constantFunction( NaN );
	}
	if ( sigma === 0.0 ) {
		return degenerate( mu );
	}

	return logcdf;

	/**
	* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a normal distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated logcdf
	*
	* @example
	* var y = logcdf( -3.14 );
	* // returns <number>
	*/
	function logcdf( x ) {
		var z = ( x - mu ) / sigma;
		if ( z < -1.0 ) {
			return ln( erfcx( -z * INV_SQRT_TWO ) / 2.0 ) - ( abs2(z) / 2.0 );
		}
		// Case: z >= -1.0:
		return log1p( -erfc( z * INV_SQRT_TWO ) / 2.0 );
	}
}


// EXPORTS //

module.exports = factory;

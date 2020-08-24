var run = function () {
	var matrix_A = 
	[
		[ 1, 3],
		[ 1, 6]
	];
	var matrix_B = 
	[
		[ 2, 1],
		[ 7, 5]
	];	
	console.log( "Matrix A:" );
	console.table( matrix_A );
	console.log("");
	
	console.log( "Matrix B:" );
	console.table( matrix_B );
	console.log("");
	
	console.log( "Sum of Matrix A + Matrix B:" );
	var matrixResult = sum( matrix_A, matrix_B );
	console.table( matrixResult );
}
function sum( mA, mB ) {
	var result = [];
	result = new Array( mA.length );
	for ( var i = 0; i < result.length; i++ ) {
		
		result[ i ] = new Array( mA[ i ].length );
		for ( var j = 0; j < result[ i ].length; j++ ) {
			
			result[ i ][ j ] = mA[ i ][ j ] + mB[ i ][ j ];
		}
	}
	return result;
}

run();
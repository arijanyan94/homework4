function triangleStars(height){
	let starCount=height*2-1;
	let spaceCount = 0;
	while(starCount>=1){
		console.log(givenCharacter(spaceCount, " ") + givenCharacter(starCount, "*"));
		spaceCount = spaceCount + (starCount - (starCount-2))/2;
		starCount=starCount-2;

	}
}

function givenCharacter(n, character) {
	let counter=0;
	let result="";
	while(counter<n){
		result=result + character;
		counter=counter+1;
	}
	return result;
}



let twoDimArray=[[1,2,3],[4,5,6]];

function multiToSingle(twoDimArray){
	let oneDimArray=[];
	let index=0;
	while(index<twoDimArray.length){		
		let index2=0;
		while(index2<twoDimArray[index].length){
			oneDimArray.push(twoDimArray[index][index2]);
			index2=index2+1;
		}
		index=index+1;

	}
	return oneDimArray;
}



function findMinMax(array,minOrmax){
	let min;
	let max;
	if(minOrmax)
	{	
		max=array[0];
		let index=0;
		while(index<array.length){

			if(max<array[index]){
				max=array[index];			
			}

			index=index+1;
		}

		return max;
	} else
	{
		min=array[0];
		let index=0;
		while(index<array.length){

			if(min>array[index]){
				min=array[index];			
			}

			index=index+1;
		}
		return min;
	}
}


function forEach(array,functionToCall){
	let index=0;
	while(index<array.length){
		functionToCall(array[index]);
		index=index+1;
	}

}
forEach([4, 3, 2], function(val) {

  console.log(val);

});



function sum(array){
	let current=0;
	let result=0;
	while(current<array.length){
		
		result=result+array[current];
		current=current+1;
	}
	return result;
}



function reverse(string){
	let index=0;
	let result="";
	while(index<string.length){
		result=result+string[string.length-(index+1)];
		index=index+1;

	}
	return result;
}


function checkerboard(number){
	
	
	let index2=0;
	while(index2<number){
		if(index2%2==0){
			let star="";
			let index=0;
			while(index<number){
			star=star+"* ";
			index=index+1;
			}
			console.log(star);
		}if(index2%2==1){
			let star="";
			let index=0;
			while(index<number){
				star=star+" *";
				index=index+1;	
			}
			console.log(star);
		}
		index2=index2+1;
	}
	
}

// complete the given function

function palindrome(str){
	var reg = /[\W_]/g;
	var smallStr = str.toLowerCase().replace(reg, "");
   var reversed = smallStr.split("").reverse().join("");
	if(revered === smallStr){
		return true;
	}
	else{
		return false;
}
}
module.exports = palindrome

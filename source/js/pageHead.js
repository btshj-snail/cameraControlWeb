export default class PageHead{
	constructor(){

	}
	create(){
		let pageHeadDom = document.getElementById("pageHead");
		// pageHeadDom.text = "2222";
		// console.log("333");
		// alert(1);
		let otherDiv = document.createElement("div");
		otherDiv.innerText = "333";
		pageHeadDom.appendChild(otherDiv);
	}
}
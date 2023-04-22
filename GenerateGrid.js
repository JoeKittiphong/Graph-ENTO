const createGrid = (addTo, width, height, size, stroke, color) => {
	addTo.setAttribute("width", `${width}`)
	addTo.setAttribute("height", `${height}`)
	let context = addTo.getContext("2d");
	context.lineWidth = stroke

	// Draw vertical lines
	for (let x = 0; x <= addTo.width; x += size) {
		context.moveTo(x, 0);
		context.lineTo(x, addTo.height);
	}

	// Draw horizontal lines
	for (let y = 0; y <= addTo.height; y += size) {
		context.moveTo(0, y);
		context.lineTo(addTo.width, y);
	}

	// Draw addTo lines
	context.strokeStyle = color;
	context.stroke();
}

const createAxis = (addTo, width, height, size, stroke) => {
	addTo.setAttribute("width", `${width}`)
	addTo.setAttribute("height", `${height}`)
	let context = addTo.getContext("2d");
	context.lineWidth = stroke
	context.strokeStyle = "#000";
	

	context.moveTo(width, height - 2);
	context.lineTo(0, height - 2);

	context.moveTo(width / 2, 0);
	context.lineTo(width / 2, height);

	for (let h = height; h >= 0; h -= size) {
		context.moveTo((width / 2)+10, h);
		context.lineTo(width / 2, h);
	}
	
	for(let w=width; w>=0; w-= size){
		context.moveTo(w, height);
		context.lineTo(w, height-10);
	}
	context.stroke()
}
const createText = (addTo, width, height, size, stroke) => {
	addTo.setAttribute("width", `${width}`)
	addTo.setAttribute("height", `${height}`)
	let context = addTo.getContext("2d");
	context.lineWidth = stroke
	context.strokeStyle = "#000";
	context.font = "16px Georgia";
	

	context.moveTo(width, height - 2);
	context.lineTo(0, height - 2);

	context.moveTo(width / 2, 0);
	context.lineTo(width / 2, height);

	for (let h = height; h > 0; h -= size) {
		context.fillText((((h/size)-(height/size))*-1)+1,(width/2)+15,h-(size+5))
	}
	
	for(let w=width; w>=0; w-= size){
		context.fillText(((w/size)-((width/size)/2))*-1,w,height-20)
	}
	context.stroke()
}


const tableGrid = (target, width, height, size, stroke, colorMain, colorSub) => {
	target.setAttribute("style", `position: relative;width:${width};height:${height}`)
	let Xaxis = document.createElement("canvas")
	Xaxis.setAttribute("id", "x-axis")
	Xaxis.setAttribute("style", "position: absolute;")

	let Yaxis = document.createElement("canvas")
	Yaxis.setAttribute("id", "y-axis")
	Yaxis.setAttribute("style", "position: absolute;")

	let axis = document.createElement("canvas")
	axis.setAttribute("id", "axis")
	axis.setAttribute("style", "position: absolute;")

	let numbar = document.createElement("canvas")
	numbar.setAttribute("id", "numbar")
	numbar.setAttribute("style", "position: absolute;")

	target.appendChild(Yaxis)
	target.appendChild(Xaxis)
	target.appendChild(axis)
	target.appendChild(numbar)

	createGrid(Xaxis, width, height, size, stroke, colorMain)
	createGrid(Yaxis, width, height, size / 5, stroke / 2, colorSub)
	createAxis(axis, width, height, size, stroke+(stroke/2))
	createText(numbar, width, height, size, stroke+(stroke/2))
}

tableGrid(
	target = document.getElementById(<element target ID>),
	width = 800,
	height = 900,
	size = 50,
	stroke = 2,
	colorMain = "#AAA",
	colorSub = "#ddd"
);

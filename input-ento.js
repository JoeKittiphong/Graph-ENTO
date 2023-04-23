const inputData = (width, height, size) => {
    const inputArea = document.querySelector("#inputEnto")
    inputArea.setAttribute("style", `
        width:${width}px;
        height:${height}px;
        border:1px solid;
        display:flex;`)

    const colStyle = [
        "style", `
        // border:1px solid;
        width:40px;
        height:100%;
        display : flex;
        flex-direction : column-reverse;
    `
    ]
    // create input column A 
    const columnA = document.createElement("div")
    columnA.setAttribute("id", "columnA")
    columnA.setAttribute(colStyle[0], colStyle[1])
    for (let i = 0; i <= Math.floor(height / size); i++) {
        const A = inputElement(`A${i}`, 30, 20, "upFocus(event,'up')")
        columnA.appendChild(A)
    }
    // create input column B 
    const columnB = document.createElement("div")
    columnB.setAttribute("id", "columnB")
    columnB.setAttribute(colStyle[0], colStyle[1])
    for (let i = 0; i <= Math.floor(height / size) - 1; i++) {
        const B = inputElement(`B${i}`, 30, 20, "upFocus(event,'down')")
        columnB.appendChild(B)
    }
    // create result column A, B operate 
    const resultAB = document.createElement("div")
    resultAB.setAttribute("id", "resultAB")
    resultAB.setAttribute(colStyle[0], colStyle[1])
    for (let i = 0; i <= Math.floor(height / size) - 1; i++) {
        const AB = inputElement(`AB${i}`, 30, 20, "")
        AB.setAttribute("disabled", "true")
        resultAB.appendChild(AB)
    }



    inputArea.appendChild(columnA)
    inputArea.appendChild(columnB)
    inputArea.appendChild(resultAB)


}

const inputElement = (setID, width, height, fn) => {
    const myInput = document.createElement("input")
    myInput.setAttribute("id", `${setID}`)
    myInput.setAttribute("type", "number")
    myInput.setAttribute("value", 0)
    myInput.setAttribute("style", `width:${width}px;height:${height}px`)
    myInput.setAttribute("onkeypress", fn)
    return myInput
}

inputData(120, 600, 40)

const upFocus = (e, mode) => {
    if (e.keyCode == 13) {
        if (mode == "up") {
            if (document.activeElement.nextElementSibling == null) {
                document.querySelector("#columnB").lastChild.focus()
                return
            }
            document.activeElement.nextElementSibling.focus()
        }
        if (mode == "down") {
            if (document.activeElement.previousElementSibling == null) {
                return
            }
            document.activeElement.previousElementSibling.focus()
        }

    };
}



class GlobalManager {
    constructor() {
        this.controlArea = document.getElementById("ControlArea");
        this.dicSel = document.getElementById("DicSel");
        this.tocSel = document.getElementById("TOCSel");
        this.entryField = document.getElementById("EntryField");
        this.enterButton = document.getElementById("EnterButton");
        this.clearButton = document.getElementById("ClearButton");
        this.prevButton = document.getElementById("PrevButton");
        this.nextButton = document.getElementById("NextButton");
        this.imageArea = document.getElementById("ImageArea");
        this.fullSizedImageArea = document.getElementById("FullSizedImageArea");
        this.resourceRoot = "./resources/";
        this.indexFilename = "/index.js";
        this.imagePrefix = "/image-";
        this.currentVolID = 0;
        this.currentPage = 0;
        this.magnifierOn = false;
    }
}

const G = new GlobalManager();
const R = new Regulator();

window.addEventListener("load", function() {
    initialise();
});

function disableMagnifier() {
    let fsi = document.querySelector(".fullsizedimage");
    fsi.style.opacity = 0;
    G.magnifierOn = false;
    document.body.style.cursor = 'auto';
}

function enableMagnifier(evt) {
    let fsi = document.querySelector(".fullsizedimage");
    fsi.style.opacity = 1;
    // set magnifier position
    fsi.style.top = (evt.offsetY - 150) + "px";
    fsi.style.left = (evt.offsetX - 200) + "px";
    // set area offset
    let newLensOffsetY = Math.floor((evt.offsetY * G.fullSizedImageArea.height / G.imageArea.height) * -1 + 150);
    let newLensOffsetX = Math.floor((evt.offsetX * G.fullSizedImageArea.width / G.imageArea.width) * -1 + 200);
    let fsic = document.querySelector(".fsimage");
    fsic.style.top = (newLensOffsetY) + "px";
    fsic.style.left = (newLensOffsetX) + "px";
    document.body.style.cursor = 'none';
}

function dataDebugger() {
    /*
    画面左下を拡大しながら、↓を押す（consoleに次の語が出るため、一致してたらエントリーミス）
    */
    for (let i = indexData[1].length - 1; i >= 0 ; i--) {
        if (G.currentPage > indexData[1][i][1]) {
            console.log(indexData[1][i+2][0]);
            return;
        }
    }
}

function initialise() {
    document.addEventListener("keydown", function(evt) {
        let activeElem = document.activeElement;
        switch (evt.key) {
            case "Escape" :
                disableMagnifier();
                clearField();
                break;
            case "ArrowUp" :
                if ((activeElem != G.dicSel) && (activeElem != G.tocSel)) {
                    prevPage();
                    disableMagnifier();
//                    dataDebugger();
                }
                break;
            case "ArrowDown" :
                if ((activeElem != G.dicSel) && (activeElem != G.tocSel)) {
                    nextPage();
                    disableMagnifier();
//                    dataDebugger();
                }
                break;
            default :
        }
    }, false);

    G.imageArea.addEventListener("mousedown", function(evt) {
        if (G.magnifierOn) {
            disableMagnifier();
        } else {
            G.magnifierOn = true;
            enableMagnifier(evt);
        }
    });

    G.imageArea.addEventListener("mousemove", function(evt) {
        if (G.magnifierOn) {
            enableMagnifier(evt);
        }
    }, false);

    G.imageArea.addEventListener("mouseout", function(evt) {
        disableMagnifier();
    }, false);

    while (G.dicSel.lastChild) {
        G.dicSel.removeChild(G.dicSel.lastElementChild);
    }
    for (let i = 0; i < configInfo.length; i++) {
        let elem = document.createElement("option");
        elem.text = configInfo[i][0];
        elem.value = configInfo[i][1];
        G.dicSel.appendChild(elem);
    }
    G.dicSel.selectedIndex = 0;
    dicChange();
}

function clearField() {
    G.entryField.value ="";
    G.entryField.focus();
}

function dicChange() {
    let oldDicData = document.getElementById("DicData");
    if (oldDicData) oldDicData.remove();
    let script = document.createElement("script");
    script.id = "DicData";
    script.type = "text/javascript";
    script.src = G.resourceRoot + configInfo[G.dicSel.selectedIndex][1] + G.indexFilename;
    script.onload = function() {
        initialiseDic();
    };
    let firstScript = document.getElementsByTagName( 'script' )[ 0 ];
    firstScript.parentNode.insertBefore(script, firstScript);
    G.entryField.focus();
//    document.head.appendChild(script);
}

function constructSelector(array) {
    for (let i = 0; i < array.length; i++) {
        let elem = document.createElement("option");
        elem.text = array[i][0];
        elem.value = array[i][1];
        G.tocSel.appendChild(elem);
    }
}

function initialiseDic() {
    // erase existing entries
    G.entryField.focus();
    while (G.tocSel.lastChild) {
        G.tocSel.removeChild(G.tocSel.lastElementChild);
    }

    G.tocSel.appendChild(document.createElement("option"));
    constructSelector(indexData[0]);
    constructSelector(indexData[2]);
    G.currentPage = 0;
}

function tocChange(pno) {
    if (pno == "")  return;
    G.currentPage = Number(pno);
    loadImage(baseResource, pno);
    if (baseResource != "") {
        G.currentVolID = 0;
    }
    G.entryField.focus();
}

function loadImage(baseRSC, pno) {
    G.magnifierOn = false;
    if (baseRSC == "") {
        G.imageArea.src = G.resourceRoot + configInfo[G.dicSel.selectedIndex][1] + G.imagePrefix + pno + ".jpg";
        G.fullSizedImageArea.src = G.resourceRoot + configInfo[G.dicSel.selectedIndex][1] + G.imagePrefix + pno + ".jpg";
    } else {    // Volume amalgamation
        G.imageArea.src = G.resourceRoot + baseRSC + G.imagePrefix + pno + ".jpg";
        G.fullSizedImageArea.src = G.resourceRoot + baseRSC + G.imagePrefix + pno + ".jpg";
    }
}

function getIndex(targetEntry) {
    let target = targetEntry.trim();
    target = target.replace(/[ァ-ン]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0x60);
    });
    target = R.regulate(target);
    for (let i = 0; i < indexData[1].length; i++) {
        if (indexData[1][i][0] > target) {
            return indexData[1][i-1][1];
        } else if (indexData[1][i][0] == target) {
            return indexData[1][i][1];
        }
    }
    return indexData[1][indexData[1].length - 1][1];
}

function search() {
    G.tocSel.selectedIndex = 0;
    let targetEntry = G.entryField.value;
    if (baseResource == "") {
        let pno = getIndex(targetEntry);
        if (pno >= 1) {
            G.currentPage = pno;
            loadImage("", pno);
        }
    } else {    // stabbing search
        let i = 0;
        target = targetEntry.replace(/[ァ-ン]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) - 0x60);
        });
        target = R.regulate(target);
        while (true) {
            let fromIdx = volDir[i][0];
            let toIdx = volDir[i][1];
            if ((target.substr(0, fromIdx.length) >= fromIdx) &&
                (target.substr(0, toIdx.length) <= toIdx)) {
                break;
            }
            i++;
            if (i >= volDir.length) return -1;
        }
        let pno = getIndex(targetEntry);
        if (pno >= 1) {
            G.currentVolID = i
            G.currentPage = pno;
            loadImage(volDir[i][2], pno);
        }
    }
}

function prevPage() {
    if (baseResource == "") {
        if (G.currentPage > 1) {
            G.currentPage -= 1;
            loadImage("", G.currentPage);
        }
    } else {    // stabbing routine
        if (G.currentPage > volDir[G.currentVolID][3]) {
            G.currentPage -= 1;
        } else if (G.currentVolID > 0) {
            G.currentVolID -= 1;
            G.currentPage = volDir[G.currentVolID][4];
        }
        loadImage(volDir[G.currentVolID][2], G.currentPage);
    }
}

function nextPage() {
    if (baseResource == "") {
        if (G.currentPage < maxPage) {
            G.currentPage += 1;
            loadImage("", G.currentPage);
        }
    } else {    // stabbing routine
        if (G.currentPage < volDir[G.currentVolID][4]) {
            G.currentPage += 1;
        } else if (G.currentVolID < volDir.length - 1) {
            G.currentVolID += 1;
            G.currentPage = volDir[G.currentVolID][3];
        }
        loadImage(volDir[G.currentVolID][2], G.currentPage);
    }
}

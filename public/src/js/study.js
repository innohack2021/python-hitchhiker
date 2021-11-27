'use strict';

if (!sessionStorage.getItem("isLoggedIn")) {
	sessionStorage.setItem("progress", 0);
}

if (!sessionStorage.getItem("page")) {
  let progress = sessionStorage.getItem("progress");
  sessionStorage.setItem("page", progress);
}

let pageId = sessionStorage.getItem("page");


window.addEventListener("load", function (e) {
  if (sessionStorage.getItem("isLoggedIn")) {
    $("#profile").style.display = "block";
    $("#signup").style.display = "none";
    $("#signin").style.display = "none";
  }
  else {
    document.querySelector("#profile").style.display = "none";
    document.querySelector("#signup").style.display = "block";
    document.querySelector("#signin").style.display = "block";
  }
});



function setPage(val) {
  $('#page').value = val;

}

function barMovement(val) {
  // document.getElementById('textInput').value=val;
  sessionStorage.setItem("page", val);
  pageId = val;
  location.reload();
}

function leftBtnClick() {
  if (Number(pageId) > 0) {
    sessionStorage.setItem("page", String(Number(pageId) - 1));
  }
  location.reload();
}


function rightBtnClick() {
  if (Number(pageId) < 29 && sessionStorage.getItem("isLoggedIn")) {
    sessionStorage.setItem("page", String(Number(pageId) + 1));
    pageId = String(Number(pageId) + 1);
    if (Number(pageId) > Number(sessionStorage.getItem("progress"))) {
      sessionStorage.setItem("progress", pageId);
      fetch(`${SERVER}/users/plus`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: sessionStorage.getItem("email"),
        }),
      }).catch((error) => {
        console.log(error);
      });
    }
  }
  location.reload();
}

function example() {
  let pnum;
  if (Number(pageId) > 9) {
    pnum = "0" + String(pageId);
  } else if (Number(pageId) >= 0) {
    pnum = "00" + String(pageId);
  }
  fetch(`${SERVER}/content/description/${pnum}`)
    .then((response) => response.json())
    .then((json) => {
      let content = json.content;
      let code = json.code;
      $('#content').innerHTML = marked.parse(content);
      // Apply content / code to the HTML area
    });
}
//

async function sampleCode() {
  let pnum;
  if (Number(pageId) > 9) {
    pnum = "0" + String(pageId);
  } else if (Number(pageId) >= 0) {
    pnum = "00" + String(pageId);
  }
  const res = await fetch(`${SERVER}/content/code/${pnum}`);
  if (res.ok) {
    const data = await res.json();
    return data.content;
  }
}

// function sampleCode2() {
//     fetch(`${SERVER}/content/code/010`)
//     .then(function(response) {
//     return response.json();
//     })
//     .then(function(myJson) {
//     console.log(myJson);
//     console.log(JSON.stringify(myJson.content));
//     return (JSON.stringify(myJson.content));
//   });
// }

window.onload = async function () {
  let el = $("#editor");
  // var version = "# version: Python3\n\n";
  let codeAreaTip = await sampleCode();
  // var codeStart = "# code start\n\n";
  // var codeEnd = "# code end\n\n";
  // var codeTip = "'''\nThis function is the entry of this program and\nit must be return your answer of current question.\n'''\n";
  // var code = "def solution():\n\tpass";
  let initValue = codeAreaTip;
  let myCodeMirror = CodeMirror.fromTextArea(el, {
    mode: "python", // Language mode
    theme: "xq-light", // theme
    keyMap: "sublime", // Fast key style
    lineNumbers: true, // set number
    smartIndent: true, // smart indent
    indentUnit: 4, // Smart indent in 4 spaces
    indentWithTabs: true, // Smart indent with tabs
    lineWrapping: true, //
    // Add line number display, folder and syntax detector to the slot
    gutters: [
      "CodeMirror-linenumbers",
      "CodeMirror-foldgutter",
      "CodeMirror-lint-markers",
    ],
    foldGutter: true, // Enable code folding in slots
    autofocus: true, // Autofocus
    matchBrackets: true, // Match end symbols, such as "],}"
    autoCloseBrackets: true, // Auto close symbol
    styleActiveLine: true, // Display the style of the selected row
  });
  // Set the initial text, which can also be configured in the fromTextArea
  myCodeMirror.setOption("value", initValue);
  // Editor key listening
  myCodeMirror.setSize("", "25rem");
  let test = $("#test");
  test.onclick = function () {
    let value = myCodeMirror.getValue();
    axios
      .post("http://localhost/api/runcode", {
        code: value,
      })
      .then(function (res) {
        console.log(res);
      });
  };
};

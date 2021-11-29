'use strict';

function isEmpty(str){
  if (str === undefined || str === "null" || str == null || str == "")
    return true;
  else
    return false;
}

if (isEmpty(sessionStorage.getItem("page"))) {
  let progress = 0;
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
    $("#profile").style.display = "none";
    $("#signup").style.display = "block";
    $("#signin").style.display = "block";
  }
});

function setPage(val) {
  $('#page').value = val;
}

function barMovement(val) {
  // document.getElementById('textInput').value=val;
  if (Number(sessionStorage.getItem("progress")) >= Number(val)) {
  sessionStorage.setItem("page", val);
  pageId = val;
  location.reload();
  }
  if (!sessionStorage.getItem("isLoggedIn") && Number(val) > 3) {
    signupmodal.show();
  }
  else {
    location.reload();
  }
}

function leftBtnClick() {
  if (Number(pageId) > 0) {
    sessionStorage.setItem("page", String(Number(pageId) - 1));
  }
  location.reload();
}


function rightBtnClick() {
  if (!sessionStorage.getItem("isLoggedIn")) {
    if (sessionStorage.getItem("page") >= "3") {
      signupmodal.show();
    }
    else {
      sessionStorage.setItem("page", String(Number(pageId) + 1));
      pageId = String(Number(pageId) + 1);
      location.reload();
    }
  }
  else if (Number(pageId) < 29 && sessionStorage.getItem("isLoggedIn")) {
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
      })
	  .then(() => {
		  location.reload();
	  })
	  .catch((error) => {
        console.log(error);
      });
    }
    location.reload();
  }
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

window.onload = async function () {
  let el = $("#editor");
  let codeAreaTip = await sampleCode();
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
};

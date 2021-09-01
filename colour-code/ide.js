var beautify = ace.require("ace/ext/beautify");
var activeWallpaperId = 1;
var maxWallpaperId = 4;

defaultContent = {
    'ace/mode/python': '# ColourCode - the best online IDE\n\
print("ColourCode! Happy coding :)")'
}

function get_default_content(lang) {
    return lang in defaultContent ? defaultContent[lang]: "\nColourCode - the best online IDE";
}

function show_ace_settings() {
    editor.showSettingsMenu();
}

function show_about_popup() {
    document.getElementById("popwrap").classList.add("open");
}

function close_about_popup() {
    document.getElementById("popwrap").classList.remove("open");
}

function toggle_theme() {
    icon = document.getElementById("theme-icon");
    if (icon.getAttribute("class") === "fa fa-moon") {
        icon.setAttribute("class", "fa fa-sun");
        editor.setTheme("ace/theme/dracula");
        localStorage.setItem("theme", "ace/theme/dracula");
    } else {
        icon.setAttribute("class", "fa fa-moon");
        editor.setTheme("ace/theme/textmate");
        localStorage.setItem("theme", "ace/theme/textmate")
    }

    theme = document.getElementById("theme-icon").getAttribute("class") === "fa fa-moon" ? "light": "dark";
    document.querySelector("body").style.backgroundImage = 'url("colour-code/img/' + theme + activeWallpaperId + '.jpg")';
}

function focus_mode() {
    document.getElementById("editor").requestFullscreen();
}

function beautify_file() {
    beautify.beautify(editor.session);
}

function save_file() {
    alert("NOT AVAILABLE YET");
}

function open_file() {
    alert("NOT AVAILABLE YET");
}

function change_wallpaper() {
    theme = document.getElementById("theme-icon").getAttribute("class") === "fa fa-moon" ? "light": "dark";
    activeWallpaperId++;
    if (activeWallpaperId > maxWallpaperId) {activeWallpaperId = 1;}
    document.querySelector("body").style.backgroundImage = 'url("colour-code/img/' + theme + activeWallpaperId + '.jpg")';
}

function show_save_code_modal() {
    
}

function change_tab(tabId) {
    // TabId will be one higher than the editorSession index
    editor.setSession(editorSession[tabId - 1]);
    document.getElementById("tab-identifier").innerHTML = "Tab " + tabId;
}
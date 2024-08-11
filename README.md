![image](HD.png)

<p style="margin: -20px 0 30px">
  <a href="https://www.buymeacoffee.com/migueravila" target="_blank" style='margin-right:0px; margin-top:5px'>
    <img align="center" src="https://raw.githubusercontent.com/FoxStudio24/kinoplus/main/%D0%BF%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82.png" alt="donation" height="50px" />
  </a>
  <a href="https://raw.githubusercontent.com/migueravila/SimpleFox/master/assets/urlbar.png" target="_blank" style='margin-right:0px; margin-top:5px'>
    <img align="center" src="https://raw.githubusercontent.com/FoxStudio24/kinoplus/main/%D1%81%D0%B0%D0%B9%D1%82.png" alt="preview" height="50px" />
  </a>
</p>

<br />


## ⚙️ Устоновка

⏺ На тв (webos/tizen)
1. Устоновить приложение media station x
2.Добавте любой плейлист , нажмите на (+) добавть web приложение вписать (https://kinoplus.vercel.app)


⏺ На тв,телефон (GOGLE TV/ANDROID TV/Телефон)
1. Устоновить приложение lampa
2.Изменить адрес lampa  вписать (https://kinoplus.vercel.app)




### 💛 Colors

In this section of the code you can change the colors, there's a window color and a tabs / urlbar color. 

```css

:root {
  --sfwindow: #19171a;
  --sfsecondary: #201e21;
}


```

### 🚧 URL Bar

![urlbardifference](assets/urlbar.png)

You can show and hide the URL Bar (See the difference above) by commenting / uncomment the following section of code:

```css
/*─────────────────────────────*/
/* Comment this section if you */
/* want to show the URL Bar    */
/*─────────────────────────────*/

.urlbarView {
  display: none !important;
}

/*─────────────────────────────*/

```

### 🔧 Recommended settings

- Right click on toolbar -> Customize.
  - Remove (as you want) all the removable elements including extensions, drag space and buttons.
- Install the [SimpleFox](https://addons.mozilla.org/en-US/firefox/addon/simplerentfox/) add on theme.


### 🍱 Startpage

If anyone has the doubt, in almost all of the screenshots you can see a Startpage made for it. It's called [Bento 🍱](https://github.com/MiguelRAvila/Bento) and It's another project I made. It fits with the Firefox theme because It's done with the same principles: Minimalist, Simple and Elegant.

![bento](https://github.com/migueravila/Bento/blob/master/assets/img/subheader.png)

###  ⛲ One line version: Cascade

[Andreas Grafen](https://github.com/andreasgrafen/) has made an awesome work making a One Line theme inspired by SimpleFox. As it's work is awesome and allows you customization I can totally recomend it. Here you can find his repo: [Link](https://github.com/andreasgrafen/cascade)

![image](assets/oneline.png)
## ⚠️ Notes

- As Firefox changed at version 88 introducing the Proton UI, all the old files and configurations moved to [oldFirefox](https://github.com/migueravila/SimpleFox/tree/oldFirefox) branch.
- Windows and MacOS are currently tested but may not be in the future.
- Some custom themes (And GTK themes in Linux) may break context menus.

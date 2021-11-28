# 🚀 PYTHON HITCHHIKER

Learn python easily: Python practice website (web/app) for end-users and developers.

</br>

## 📌 Role

#### Python-hichhiker focuses to...

 * Serve as desktop app (windows, macOS and Linux) and web service
 * Provide a boilerplate to manage user information based on Express
 * Help developers to build a coding practice website
 * Make learning programming languages easy for everyone
 * Display the result of a code on your browser without any software tools


#### User Features
 * Free membership
    * Sign up
    * Sign in
    * Sign out

 * Education
    * Python code examples
    * Display the result of your python code
    * Progress bar to check how much you have learned


#### Management Features
 * User management
    * User creation
    * User deletion
    * Key management

 * Work with Web server
    * Delegate login to web server
    * Support userid / password login


## 💡 Setup Guide

#### Python-hitchhiker Web UI is built with
 * `npm` as package manager



#### ✅ Initializing & excuting python-hitchhiker

```shell
$ npm install
```

```shell
$ npm run start
```


#### ✅ Initializing backend.ai 

Install on your PC: [Quick start guidelines](https://docs.backend.ai/en/latest/install/guides.html)

Or run on cloud: [Cloud backend.ai](https://cloud.backend.ai/)


#### ✅ Initializing codemirror ( @jasong 코드 미러 셋팅관련 내용 적어주세요. )

         ㅁㅁㅁㅁㅁ
         ㅁㅁㅁㅁㅁ

#### Branches

 * main : Development branch
 * release : Latest release branch   (우리 서비스 release branch 만들 것인가요?)

#### Developing and testing without bundling

```
$ npm run dev
```

## 💡 Adding new examples (@sunghwki @sikang 원래 백엔드닷에이아이에서 언어 추가하는 파트였는데, 문제 추가하는 방법으로 바꿔주세요.)


  1. Copy `en.json` to target language. (e.g. `ko.json`)
  2. Add language identifier to `supportLanguageCodes` in `backend-ai-webui.ts`.
 e.g.
 ```javascript
   @property({type: Array}) supportLanguageCodes = ["en", "ko"];
 ```
  3. Add language information to `supportLanguages` in `backend-ai-usersettings-general-list.ts`.

 Note: DO NOT DELETE 'default' language. It is used for browser language.


##  ✨ Code of conduct

View [Code of conduct](https://github.com/innohack2021/python-hitchhiker/blob/main/CODE_OF_CONDUCT.md) for community guidelines.


## ✨ License

Refer to [LICENSE file](https://github.com/innohack2021/python-hitchhiker/blob/main/LICENSE.md).



## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/S0YKIM"><img src="" width="100px;" alt=""/><br /><sub><b>Soyeon Kim</b></sub></a><br /><a href="https://github.com/S0YKIM" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/swkim12345"><img src="" width="100px;" alt=""/><br /><sub><b>Sunghwan Kim</b></sub></a><br /><a href="https://github.com/swkim12345" title="Code">💻</a></td>
     <td align="center"><a href="https://github.com/jujinesy"><img src="https://user-images.githubusercontent.com/88143547/143767412-2948af4a-2b45-43b0-abad-a2d4d23b8521.png" width="100px;" alt=""/><br /><sub><b>Jujin Bae</b></sub></a><br /><a href="https://github.com/jujinesy" title="Code">💻</a></td>
     <td align="center"><a href="https://github.com/Yaminyam"><img src="" width="100px;" alt=""/><br /><sub><b>Sion Kang</b></sub></a><br /><a href="https://github.com/Yaminyam" title="Code">💻</a></td>
     <td align="center"><a href="https://github.com/ft-jasong"><img src=" " width="100px;" alt=""/><br /><sub><b>Jaeryong Song
</b></sub></a><br /><a href="https://github.com/ft-jasong" title="Code">💻</a></td>
     <td align="center"><a href="https://github.com/toy-k"><img src="" width="100px;" alt=""/><br /><sub><b>Jeonghwan Lee</b></sub></a><br /><a href="https://github.com/toy-k" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->


import type { Lang } from "@/lib/i18n";

export type InstallDict = {
  bar: string;
  barLink: string;
  navInstall: string;
  heroPill: string;
  heroCta: string;
  heroHow: string;
  heroNote: string;
  eyebrow: string;
  h2: string;
  lead: string;
  iphone: string;
  android: string;
  ios: [string, string][];
  and: [string, string][];
  done: string;
  qrTitle: string;
  qrText: string;
  homeLabel: string;
  testEyebrow: string;
  testH: string;
  testItems: [string, string][];
  testCta: string;
  storesNote: string;
  faqQ: string;
  faqA: string;
  bugQ: string;
  bugA: string;
};

const en: InstallDict = {
  bar: "Public beta: ToyScope isn’t on the App Store or Google Play yet.",
  barLink: "Help us test it →",
  navInstall: "Install",
  heroPill: "Public beta · help us test",
  heroCta: "Try the beta free",
  heroHow: "How to install",
  heroNote: "Not on the App Store or Google Play yet. Add it to your home screen from your phone’s browser in 30 seconds.",
  eyebrow: "Install the beta",
  h2: "Put ToyScope on your home screen in 30 seconds",
  lead: "ToyScope isn’t in the app stores yet. You can still install it from your phone’s browser, and it opens full-screen like a regular app. No download, nothing to pay.",
  iphone: "iPhone",
  android: "Android",
  ios: [
    ["Open it in Safari", "On your iPhone, open app.toyscope.app in Safari."],
    ["Tap Share", "Tap the Share button: the square with an arrow pointing up. On newer iPhones, tap ••• first, then Share."],
    ["Tap “Add to Home Screen”", "Scroll down the list and tap Add to Home Screen. You may need to tap “View more” first."],
    ["Tap Add", "Keep the name ToyScope and tap Add in the top-right corner."],
  ],
  and: [
    ["Open it in Chrome", "On your Android phone, open app.toyscope.app in Chrome."],
    ["Tap the ⋮ menu", "Tap the three dots in the top-right corner of Chrome."],
    ["Tap “Add to home screen”", "Tap Add to home screen. On some phones it says Install app."],
    ["Tap Install", "Tap Install or Add. If your phone asks where to put it, choose your home screen."],
  ],
  done: "Done. Open ToyScope from the icon on your home screen, not from the browser.",
  qrTitle: "On a computer?",
  qrText: "Scan this with your phone’s camera to open ToyScope.",
  homeLabel: "ToyScope",
  testEyebrow: "You’re early",
  testH: "Help us test it",
  testItems: [
    ["Scan toys you own", "Try a few: robots, figures, boxed or loose. The more kinds you try, the better."],
    ["Tell us what’s wrong", "Wrong name, odd price, a button that doesn’t work? Email support@toyscope.app with a screenshot."],
    ["Keep your Founder number", "Post 10 photos in your first 30 days and your number and deal are yours for good."],
  ],
  testCta: "Report a bug",
  storesNote: "The App Store and Google Play versions are coming soon.",
  faqQ: "Why isn’t it on the App Store yet?",
  faqA: "ToyScope is in public beta. We’re testing it with collectors before it goes into the App Store and Google Play. Until then, add it to your home screen from your phone’s browser; it works the same way.",
  bugQ: "I found a bug. Where do I send it?",
  bugA: "Email support@toyscope.app with what you tapped, what happened and a screenshot if you can. Every report helps.",
};

const zhHant: InstallDict = {
  bar: "公開測試中：ToyScope 還沒有上架 App Store 和 Google Play。",
  barLink: "幫我們測試 →",
  navInstall: "安裝",
  heroPill: "公開測試中 · 歡迎幫忙測試",
  heroCta: "免費試用測試版",
  heroHow: "安裝教學",
  heroNote: "還沒有上架 App Store 和 Google Play。用手機瀏覽器 30 秒就能加到主畫面。",
  eyebrow: "安裝測試版",
  h2: "30 秒把 ToyScope 放到手機主畫面",
  lead: "ToyScope 還沒上架 App 商店，但你現在就可以從手機瀏覽器安裝，打開後跟一般 App 一樣是全螢幕。不用下載，也不用付錢。",
  iphone: "iPhone",
  android: "Android",
  ios: [
    ["用 Safari 打開", "在 iPhone 上用 Safari 打開 app.toyscope.app。"],
    ["點「分享」", "點分享按鈕，就是方框加一個向上箭頭的圖示。較新的 iPhone 要先點 •••，再點分享。"],
    ["點「加入主畫面」", "把清單往下滑，點加入主畫面。如果沒看到，先點「顯示更多」。"],
    ["點「新增」", "名稱保留 ToyScope，點右上角的新增。"],
  ],
  and: [
    ["用 Chrome 打開", "在 Android 手機上用 Chrome 打開 app.toyscope.app。"],
    ["點 ⋮ 選單", "點 Chrome 右上角的三個點。"],
    ["點「加到主畫面」", "點加到主畫面。有些手機會寫「安裝應用程式」。"],
    ["點「安裝」", "點安裝或新增。如果手機問要放在哪裡，選主畫面。"],
  ],
  done: "完成！之後請從主畫面的 ToyScope 圖示打開，不要從瀏覽器開。",
  qrTitle: "在用電腦嗎？",
  qrText: "用手機相機掃這個 QR code，就能打開 ToyScope。",
  homeLabel: "ToyScope",
  testEyebrow: "你是最早的一批",
  testH: "請幫我們測試",
  testItems: [
    ["掃描你自己的玩具", "多試幾種：機器人、人偶、有盒或裸裝。試得越多種越好。"],
    ["告訴我們哪裡有問題", "名稱錯了、價格怪怪的、按鈕沒反應？請寄 email 和截圖到 support@toyscope.app。"],
    ["保留你的創始編號", "前 30 天內發 10 張照片，你的編號和優惠就永久屬於你。"],
  ],
  testCta: "回報問題",
  storesNote: "App Store 和 Google Play 版本即將推出。",
  faqQ: "為什麼還沒有上架 App Store？",
  faqA: "ToyScope 目前是公開測試版，我們先請收藏家幫忙測試，之後才會上架 App Store 和 Google Play。在那之前，用手機瀏覽器加到主畫面就能用，使用方式完全一樣。",
  bugQ: "我發現問題了，要回報給誰？",
  bugA: "請寄到 support@toyscope.app，告訴我們你點了什麼、發生了什麼事，可以的話附上截圖。每一則回報都很有幫助。",
};

const zhHans: InstallDict = {
  bar: "公开测试中：ToyScope 还没有上架 App Store 和 Google Play。",
  barLink: "帮我们测试 →",
  navInstall: "安装",
  heroPill: "公开测试中 · 欢迎帮忙测试",
  heroCta: "免费试用测试版",
  heroHow: "安装教程",
  heroNote: "还没有上架 App Store 和 Google Play。用手机浏览器 30 秒就能添加到主屏幕。",
  eyebrow: "安装测试版",
  h2: "30 秒把 ToyScope 放到手机主屏幕",
  lead: "ToyScope 还没上架应用商店，但你现在就可以从手机浏览器安装，打开后和普通 App 一样是全屏。不用下载，也不用付费。",
  iphone: "iPhone",
  android: "Android",
  ios: [
    ["用 Safari 打开", "在 iPhone 上用 Safari 打开 app.toyscope.app。"],
    ["点“分享”", "点分享按钮，就是方框加一个向上箭头的图标。较新的 iPhone 要先点 •••，再点分享。"],
    ["点“添加到主屏幕”", "把列表往下滑，点添加到主屏幕。如果没看到，先点“查看更多”。"],
    ["点“添加”", "名称保留 ToyScope，点右上角的添加。"],
  ],
  and: [
    ["用 Chrome 打开", "在安卓手机上用 Chrome 打开 app.toyscope.app。"],
    ["点 ⋮ 菜单", "点 Chrome 右上角的三个点。"],
    ["点“添加到主屏幕”", "点添加到主屏幕。有些手机会显示“安装应用”。"],
    ["点“安装”", "点安装或添加。如果手机询问放在哪里，选择主屏幕。"],
  ],
  done: "完成！以后请从主屏幕的 ToyScope 图标打开，不要从浏览器打开。",
  qrTitle: "在用电脑吗？",
  qrText: "用手机相机扫这个二维码，就能打开 ToyScope。",
  homeLabel: "ToyScope",
  testEyebrow: "你是最早的一批",
  testH: "请帮我们测试",
  testItems: [
    ["扫描你自己的玩具", "多试几种：机器人、人偶、带盒或裸装。试得越多越好。"],
    ["告诉我们哪里有问题", "名称错了、价格奇怪、按钮没反应？请发邮件和截图到 support@toyscope.app。"],
    ["保留你的创始编号", "前 30 天内发 10 张照片，你的编号和优惠就永久属于你。"],
  ],
  testCta: "反馈问题",
  storesNote: "App Store 和 Google Play 版本即将推出。",
  faqQ: "为什么还没有上架 App Store？",
  faqA: "ToyScope 目前是公开测试版，我们先请收藏家帮忙测试，之后才会上架 App Store 和 Google Play。在那之前，用手机浏览器添加到主屏幕就能用，使用方式完全一样。",
  bugQ: "我发现问题了，要反馈给谁？",
  bugA: "请发邮件到 support@toyscope.app，告诉我们你点了什么、发生了什么，可以的话附上截图。每一条反馈都很有帮助。",
};

const es: InstallDict = {
  bar: "Beta pública: ToyScope aún no está en la App Store ni en Google Play.",
  barLink: "Ayúdanos a probarla →",
  navInstall: "Instalar",
  heroPill: "Beta pública · ayúdanos a probarla",
  heroCta: "Prueba la beta gratis",
  heroHow: "Cómo instalarla",
  heroNote: "Aún no está en la App Store ni en Google Play. Añádela a tu pantalla de inicio desde el navegador del móvil en 30 segundos.",
  eyebrow: "Instala la beta",
  h2: "Pon ToyScope en tu pantalla de inicio en 30 segundos",
  lead: "ToyScope todavía no está en las tiendas de apps. Aun así puedes instalarla desde el navegador de tu móvil y se abre a pantalla completa como cualquier app. Sin descargas y sin pagar nada.",
  iphone: "iPhone",
  android: "Android",
  ios: [
    ["Ábrela en Safari", "En tu iPhone, abre app.toyscope.app en Safari."],
    ["Toca Compartir", "Toca el botón Compartir: el cuadrado con una flecha hacia arriba. En iPhones más nuevos, toca ••• primero y luego Compartir."],
    ["Toca “Añadir a pantalla de inicio”", "Desliza la lista hacia abajo y toca Añadir a pantalla de inicio. Puede que antes tengas que tocar “Ver más”."],
    ["Toca Añadir", "Deja el nombre ToyScope y toca Añadir arriba a la derecha."],
  ],
  and: [
    ["Ábrela en Chrome", "En tu Android, abre app.toyscope.app en Chrome."],
    ["Toca el menú ⋮", "Toca los tres puntos arriba a la derecha de Chrome."],
    ["Toca “Añadir a pantalla de inicio”", "Toca Añadir a pantalla de inicio. En algunos móviles dice Instalar aplicación."],
    ["Toca Instalar", "Toca Instalar o Añadir. Si te pregunta dónde ponerla, elige la pantalla de inicio."],
  ],
  done: "¡Listo! Abre ToyScope desde el icono de tu pantalla de inicio, no desde el navegador.",
  qrTitle: "¿Estás en un ordenador?",
  qrText: "Escanea este código con la cámara del móvil para abrir ToyScope.",
  homeLabel: "ToyScope",
  testEyebrow: "Llegas pronto",
  testH: "Ayúdanos a probarla",
  testItems: [
    ["Escanea tus juguetes", "Prueba varios: robots, figuras, en caja o sueltos. Cuantos más tipos, mejor."],
    ["Cuéntanos qué falla", "¿Nombre equivocado, precio raro o un botón que no funciona? Escribe a support@toyscope.app con una captura."],
    ["Conserva tu número de Fundador", "Publica 10 fotos en tus primeros 30 días y tu número y tu oferta serán tuyos para siempre."],
  ],
  testCta: "Reportar un error",
  storesNote: "Las versiones para App Store y Google Play llegan pronto.",
  faqQ: "¿Por qué aún no está en la App Store?",
  faqA: "ToyScope está en beta pública. La estamos probando con coleccionistas antes de publicarla en la App Store y Google Play. Mientras tanto, añádela a tu pantalla de inicio desde el navegador del móvil; funciona igual.",
  bugQ: "Encontré un error. ¿Dónde lo envío?",
  bugA: "Escribe a support@toyscope.app contando qué tocaste, qué pasó y, si puedes, una captura de pantalla. Cada reporte ayuda.",
};

const fr: InstallDict = {
  bar: "Bêta publique : ToyScope n’est pas encore sur l’App Store ni sur Google Play.",
  barLink: "Aidez-nous à la tester →",
  navInstall: "Installer",
  heroPill: "Bêta publique · aidez-nous à tester",
  heroCta: "Essayer la bêta gratuitement",
  heroHow: "Comment l’installer",
  heroNote: "Pas encore sur l’App Store ni sur Google Play. Ajoutez-la à votre écran d’accueil depuis le navigateur de votre téléphone en 30 secondes.",
  eyebrow: "Installer la bêta",
  h2: "ToyScope sur votre écran d’accueil en 30 secondes",
  lead: "ToyScope n’est pas encore dans les stores. Vous pouvez quand même l’installer depuis le navigateur de votre téléphone : elle s’ouvre en plein écran comme une app normale. Rien à télécharger, rien à payer.",
  iphone: "iPhone",
  android: "Android",
  ios: [
    ["Ouvrez-la dans Safari", "Sur votre iPhone, ouvrez app.toyscope.app dans Safari."],
    ["Touchez Partager", "Touchez le bouton Partager : le carré avec une flèche vers le haut. Sur les iPhone récents, touchez d’abord •••, puis Partager."],
    ["Touchez « Sur l’écran d’accueil »", "Faites défiler la liste et touchez Sur l’écran d’accueil. Il faut parfois toucher « Afficher plus » d’abord."],
    ["Touchez Ajouter", "Gardez le nom ToyScope et touchez Ajouter en haut à droite."],
  ],
  and: [
    ["Ouvrez-la dans Chrome", "Sur votre Android, ouvrez app.toyscope.app dans Chrome."],
    ["Touchez le menu ⋮", "Touchez les trois points en haut à droite de Chrome."],
    ["Touchez « Ajouter à l’écran d’accueil »", "Touchez Ajouter à l’écran d’accueil. Sur certains téléphones, c’est Installer l’application."],
    ["Touchez Installer", "Touchez Installer ou Ajouter. Si le téléphone demande où la placer, choisissez l’écran d’accueil."],
  ],
  done: "C’est fait ! Ouvrez ToyScope depuis l’icône de votre écran d’accueil, pas depuis le navigateur.",
  qrTitle: "Sur un ordinateur ?",
  qrText: "Scannez ce code avec l’appareil photo de votre téléphone pour ouvrir ToyScope.",
  homeLabel: "ToyScope",
  testEyebrow: "Vous êtes en avance",
  testH: "Aidez-nous à la tester",
  testItems: [
    ["Scannez vos jouets", "Essayez-en plusieurs : robots, figurines, en boîte ou loose. Plus c’est varié, mieux c’est."],
    ["Dites-nous ce qui cloche", "Mauvais nom, prix bizarre, bouton qui ne marche pas ? Écrivez à support@toyscope.app avec une capture d’écran."],
    ["Gardez votre numéro de Fondateur", "Publiez 10 photos pendant vos 30 premiers jours : votre numéro et votre offre sont à vous pour de bon."],
  ],
  testCta: "Signaler un bug",
  storesNote: "Les versions App Store et Google Play arrivent bientôt.",
  faqQ: "Pourquoi n’est-elle pas encore sur l’App Store ?",
  faqA: "ToyScope est en bêta publique. Nous la testons avec des collectionneurs avant de la publier sur l’App Store et Google Play. En attendant, ajoutez-la à votre écran d’accueil depuis le navigateur de votre téléphone ; elle fonctionne de la même façon.",
  bugQ: "J’ai trouvé un bug. Où l’envoyer ?",
  bugA: "Écrivez à support@toyscope.app en expliquant ce que vous avez touché, ce qui s’est passé, avec une capture d’écran si possible. Chaque signalement nous aide.",
};

const ko: InstallDict = {
  bar: "공개 베타: ToyScope는 아직 App Store와 Google Play에 출시되지 않았습니다.",
  barLink: "테스트에 참여하기 →",
  navInstall: "설치",
  heroPill: "공개 베타 · 테스트에 참여해 주세요",
  heroCta: "베타 무료로 사용하기",
  heroHow: "설치 방법",
  heroNote: "아직 App Store와 Google Play에는 없습니다. 휴대폰 브라우저에서 30초 만에 홈 화면에 추가할 수 있습니다.",
  eyebrow: "베타 설치하기",
  h2: "30초 만에 ToyScope를 홈 화면에",
  lead: "ToyScope는 아직 앱 스토어에 출시되지 않았지만, 지금 휴대폰 브라우저에서 설치할 수 있습니다. 일반 앱처럼 전체 화면으로 열리고, 다운로드나 결제는 필요 없습니다.",
  iphone: "iPhone",
  android: "Android",
  ios: [
    ["Safari에서 열기", "iPhone의 Safari에서 app.toyscope.app을 여세요."],
    ["공유 누르기", "공유 버튼(위쪽 화살표가 있는 네모)을 누르세요. 최신 iPhone에서는 •••를 먼저 누른 뒤 공유를 누르세요."],
    ["‘홈 화면에 추가’ 누르기", "목록을 아래로 내려 홈 화면에 추가를 누르세요. 보이지 않으면 ‘더 보기’를 먼저 누르세요."],
    ["추가 누르기", "이름은 ToyScope 그대로 두고 오른쪽 위의 추가를 누르세요."],
  ],
  and: [
    ["Chrome에서 열기", "Android 휴대폰의 Chrome에서 app.toyscope.app을 여세요."],
    ["⋮ 메뉴 누르기", "Chrome 오른쪽 위의 점 세 개를 누르세요."],
    ["‘홈 화면에 추가’ 누르기", "홈 화면에 추가를 누르세요. 일부 휴대폰에서는 ‘앱 설치’로 표시됩니다."],
    ["설치 누르기", "설치 또는 추가를 누르세요. 위치를 묻는다면 홈 화면을 선택하세요."],
  ],
  done: "완료! 이제 브라우저가 아니라 홈 화면의 ToyScope 아이콘으로 여세요.",
  qrTitle: "컴퓨터로 보고 계신가요?",
  qrText: "휴대폰 카메라로 이 코드를 스캔하면 ToyScope가 열립니다.",
  homeLabel: "ToyScope",
  testEyebrow: "가장 먼저 오셨네요",
  testH: "테스트에 참여해 주세요",
  testItems: [
    ["가진 장난감 스캔하기", "로봇, 피규어, 박스나 박스 없는 것까지 여러 종류를 시도해 보세요. 다양할수록 좋습니다."],
    ["문제점 알려 주기", "이름이 틀렸거나, 가격이 이상하거나, 버튼이 안 되나요? 스크린샷과 함께 support@toyscope.app으로 보내 주세요."],
    ["파운더 번호 유지", "가입 후 30일 안에 사진 10장을 올리면 번호와 혜택이 영구히 내 것이 됩니다."],
  ],
  testCta: "버그 신고하기",
  storesNote: "App Store와 Google Play 버전이 곧 출시됩니다.",
  faqQ: "왜 아직 App Store에 없나요?",
  faqA: "ToyScope는 공개 베타 중입니다. App Store와 Google Play에 출시하기 전에 컬렉터분들과 함께 테스트하고 있습니다. 그때까지는 휴대폰 브라우저에서 홈 화면에 추가해 사용하세요. 사용 방법은 똑같습니다.",
  bugQ: "버그를 발견했어요. 어디로 보내나요?",
  bugA: "무엇을 눌렀고 어떤 일이 일어났는지, 가능하면 스크린샷과 함께 support@toyscope.app으로 보내 주세요. 모든 신고가 큰 도움이 됩니다.",
};

const ja: InstallDict = {
  bar: "パブリックベータ：ToyScope はまだ App Store・Google Play にありません。",
  barLink: "テストに協力する →",
  navInstall: "インストール",
  heroPill: "パブリックベータ · テスト協力募集中",
  heroCta: "無料でベータを試す",
  heroHow: "インストール方法",
  heroNote: "まだ App Store・Google Play にはありません。スマホのブラウザから30秒でホーム画面に追加できます。",
  eyebrow: "ベータをインストール",
  h2: "30秒で ToyScope をホーム画面に",
  lead: "ToyScope はまだアプリストアにありません。でもスマホのブラウザからインストールでき、普通のアプリのように全画面で開きます。ダウンロードも支払いも不要です。",
  iphone: "iPhone",
  android: "Android",
  ios: [
    ["Safari で開く", "iPhone の Safari で app.toyscope.app を開きます。"],
    ["共有をタップ", "共有ボタン（上向き矢印の付いた四角）をタップ。新しい iPhone では先に ••• をタップしてから共有へ。"],
    ["「ホーム画面に追加」をタップ", "リストを下にスクロールして「ホーム画面に追加」をタップ。先に「さらに表示」が必要な場合もあります。"],
    ["追加をタップ", "名前は ToyScope のまま、右上の「追加」をタップします。"],
  ],
  and: [
    ["Chrome で開く", "Android スマホの Chrome で app.toyscope.app を開きます。"],
    ["⋮ メニューをタップ", "Chrome 右上の三点メニューをタップします。"],
    ["「ホーム画面に追加」をタップ", "「ホーム画面に追加」をタップ。機種によっては「アプリをインストール」と表示されます。"],
    ["インストールをタップ", "「インストール」または「追加」をタップ。置き場所を聞かれたらホーム画面を選びます。"],
  ],
  done: "完了。ブラウザではなく、ホーム画面のアイコンから ToyScope を開いてください。",
  qrTitle: "パソコンで見ていますか？",
  qrText: "スマホのカメラでこれを読み取ると ToyScope が開きます。",
  homeLabel: "ToyScope",
  testEyebrow: "いち早く参加",
  testH: "テストに協力してください",
  testItems: [
    ["持っているおもちゃをスキャン", "ロボット、フィギュア、箱入り、箱なし。いろいろ試してもらえるほど助かります。"],
    ["おかしな点を教えてください", "名前が違う、値段が変、ボタンが動かない？ スクリーンショットを付けて support@toyscope.app までメールしてください。"],
    ["ファウンダー番号をキープ", "最初の30日以内に写真を10枚投稿すれば、番号と特典はずっとあなたのものです。"],
  ],
  testCta: "不具合を報告",
  storesNote: "App Store・Google Play 版は近日公開です。",
  faqQ: "なぜまだ App Store にないの？",
  faqA: "ToyScope は現在パブリックベータです。App Store と Google Play に出す前に、コレクターの皆さんとテストしています。それまではスマホのブラウザからホーム画面に追加してください。使い方は同じです。",
  bugQ: "不具合を見つけたら、どこに送ればいい？",
  bugA: "タップした場所、起きたこと、できればスクリーンショットを support@toyscope.app までメールしてください。どの報告も役に立ちます。",
};

export const INSTALL: Record<Lang, InstallDict> = { en, "zh-Hant": zhHant, "zh-Hans": zhHans, ja, es, fr, ko };

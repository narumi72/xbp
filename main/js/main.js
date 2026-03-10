const myData = [
  { img: "img/ELD.png", title: "ELDEN  　LING", desc: "DSでしかゲームをしたことがない自分がPCを買い、steamで初めて購入したゲーム。グラフィックの綺麗さ、ワールドやキャラクタの作りこみ、ストーリーに夢中になり気が付けば2日間幕無しでプレイしていた。道中のモブ敵の攻撃ですら致命傷になってしまうというスリルや、理不尽な攻撃のボスに勝った時の爽快感は、中毒になる。この適度なストレスと脳汁こそ自分がゲーム体験に求めていたものだった。" },
  { img: "img/image2.png", title: "LISA 　 THE  　PAINFUL", desc: "Lisaシリーズ3部作の2作目。女が全員滅んだ数十年後のディストピアが舞台のドット調横スクロールRPG。ある日、主人公は赤子の女の子を拾い育てることになるがその存在を隠しきれず、家を留守にした隙に誘拐されてしまう。そして世界でたった一人の女の子を救い出すゲーム。このゲームの魅力は、BGM・ゲームシステム・ストーリーの3つにある。このゲームはBGMの癖が強く耳に残るものが多く、初めてゲームのサウンドトラックを購入してしまった。特にWork Harderという曲は癖の塊でYouTubeにもあるのでぜひ聞いてみてほしい。次にシステムだ。ゲームでは31人ものキャラを仲間にできるのだが、戦闘で死んでしまったキャラは生き返ることはない。主人公だって怪我をすることはあるが、一度した怪我は治ることはない(設定したゲーム難易度による)。この極限状態での戦闘はいつもハラハラするし、時には仲間を犠牲にするという選択を行うのがとてもつらかった。そして最後のストーリーに関してはネタバレなので書くことはできないため、実際に自分でプレイしてほしい。1部のLisa The Firstはプレイしていなくてもストーリーはわかるがやっていたほうが楽しめる。1部は無料なので気が向いたらプレイすることをお勧めする。" },
  { img: "img/image3.png", title: "STREET    FIGHTER6", desc: "3つ目の説明文♡" },
  { img: "img/image4.png", title: "要素4", desc: "4つ目の説明文♡" },
  { img: "img/image5.png", title: "ジョジョの奇妙な冒険 　 スティール・ボール・ラン", desc: "5つ目の説明文♡" },
  { img: "img/image6.png", title: "GREAT  PRETENDER", desc: "6つ目の説明文♡" },
  { img: "img/image7.png", title: "BREACH", desc: "7つ目の説明文♡" },
  { img: "img/image8.png", title: "ドロヘドロ", desc: "8つ目の説明文♡" },
  { img: "img/image9.png", title: "モブサイコ100", desc: "9つ目の説明文♡" }
];

const gridContainer = document.getElementById('grid-container');
const modalBg = document.getElementById('modal-bg');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');

// 要素をHTMLに展開
myData.forEach((data, index) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'item-wrapper';
  
  let itemClass = 'item';
  if (index >= 6) {
    itemClass += ' is-bottom';
  }

  wrapper.innerHTML = `
    <div class="${itemClass}" onclick="openModal(${index})">
      <img src="${data.img}" class="item-img" alt="${data.title}" onerror="this.src='data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20100%20100%22%3E%3Crect%20fill%3D%22%23e9ecef%22%20width%3D%22100%22%20height%3D%22100%22%2F%3E%3Ctext%20fill%3D%22%23999%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-size%3D%2212%22%3E画像なし♡%3C%2Ftext%3E%3C%2Fsvg%3E'">
      <div class="item-title">${data.title}</div>
    </div>
  `;
  gridContainer.appendChild(wrapper);
});

// ★ローディングからメイン画面への連携アニメーション
const tl = gsap.timeline();

// 1. テキストが0.5秒で上からサクッと降りてくる
tl.to("#loading-text", {
  y: 0,
  duration: 0.5,
  ease: "power2.out"
})
// 2. ローディングバーが最低2秒かけて溜まる
.to("#loading-bar", {
  width: "100%",
  duration: 2,
  ease: "power1.inOut"
})
// 3. 幕が上がるようにローディング画面が上へ消え去る
.to("#loading-screen", {
  y: "-100vh",
  duration: 0.8,
  ease: "power3.inOut"
})
// 4. 【完全に消え去ってから】裏の9要素がパラパラ出現する
.from(".item-wrapper", {
  duration: 0.5,
  scale: 0.8,
  opacity: 0,
  stagger: 0.15,
  ease: "power3.out"
});

// モーダルを開く処理
function openModal(index) {
  modalImg.src = myData[index].img;
  modalTitle.textContent = myData[index].title;
  modalDesc.textContent = myData[index].desc;
  modalBg.classList.add('active');
}

// 外側をクリックしたら閉じる処理
modalBg.addEventListener('click', (e) => {
  if(e.target === modalBg || e.target.classList.contains('modal-close-text')) {
    modalBg.classList.remove('active');
  }
});
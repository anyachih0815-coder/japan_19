// --- 【第 19 課完整單字庫 (依教材)】 ---
const vocabulary = [
    { id: "v1", kana: "のぼります", kanji: "登ります、上ります", zh: "登、上 [山に～]", cat: "第19課 動詞(I)" },
    { id: "v2", kana: "とまります", kanji: "泊まります", zh: "住、住宿 [飯店等，ホテルに～]", cat: "第19課 動詞(I)" },
    { id: "v3", kana: "そうじします", kanji: "掃除します", zh: "打掃", cat: "第19課 動詞(III)" },
    { id: "v4", kana: "せんたくします", kanji: "洗濯します", zh: "洗衣服", cat: "第19課 動詞(III)" },
    { id: "v5", kana: "なります", kanji: "", zh: "變成、成為", cat: "第19課 動詞(I)" },
    { id: "v6", kana: "ねむい", kanji: "眠い", zh: "睏的、想睡的", cat: "第19課 い形容詞" },
    { id: "v7", kana: "つよい", kanji: "強い", zh: "強的", cat: "第19課 い形容詞" },
    { id: "v8", kana: "よわい", kanji: "弱い", zh: "弱的", cat: "第19課 い形容詞" },
    { id: "v9", kana: "れんしゅう", kanji: "練習", zh: "練習 (~を します)", cat: "第19課 名詞" },
    { id: "v10", kana: "ゴルフ", kanji: "", zh: "高爾夫 (~を します)", cat: "第19課 名詞" },
    { id: "v11", kana: "すもう", kanji: "相撲", zh: "相撲 (~を します)", cat: "第19課 名詞" },
    { id: "v12", kana: "おちゃ", kanji: "お茶", zh: "茶、茶道", cat: "第19課 名詞" },
    { id: "v13", kana: "ひ", kanji: "日", zh: "日、日子", cat: "第19課 名詞" },
    { id: "v14", kana: "ちょうし", kanji: "調子", zh: "情形、狀況、狀態", cat: "第19課 名詞" },
    { id: "v15", kana: "いちど", kanji: "一度", zh: "一次", cat: "第19課 副詞" },
    { id: "v16", kana: "いちども", kanji: "一度も", zh: "連一次也 (後接否定)", cat: "第19課 副詞" },
    { id: "v17", kana: "だんだん", kanji: "", zh: "漸漸、逐漸", cat: "第19課 副詞" },
    { id: "v18", kana: "もうすぐ", kanji: "", zh: "馬上、即將", cat: "第19課 副詞" },
    { id: "v19", kana: "おかげさまで", kanji: "", zh: "託您的福 (感謝關心)", cat: "第19課 會話" },
    { id: "v20", kana: "でも", kanji: "", zh: "可是、但是、不過", cat: "第19課 接續詞" },
    { id: "v21", kana: "かんぱい", kanji: "乾杯", zh: "乾杯", cat: "第19課 會話" },
    { id: "v22", kana: "ダイエット", kanji: "", zh: "減肥 (~を します)", cat: "第19課 會話名詞" },
    { id: "v23", kana: "むり[な]", kanji: "無理[な]", zh: "勉強的、勉強", cat: "第19課 會話な形容詞" },
    { id: "v24", kana: "からだに いい", kanji: "体に いい", zh: "對身體好的", cat: "第19課 會話慣用語" },
    { id: "v25", kana: "とうきょうスカイツリー", kanji: "東京スカイツリー", zh: "晴空塔", cat: "第19課 相關單語" },
    { id: "v26", kana: "かつしかほくさい", kanji: "葛飾北斎", zh: "葛飾北齋 (浮世繪畫家)", cat: "第19課 相關單語" }
];

// --- 【第 19 課精選文型與會話例句】 ---
const sentences = [
    { jp: "相撲を 見た ことが あります。", zh: "我曾經看過相撲。" },
    { jp: "休みの 日は テニスを したり、散歩に 行ったり します。", zh: "休假時會打打網球、散散步等。" },
    { jp: "これから だんだん 暑く なります。", zh: "從現在開始會漸漸變熱。" },
    { jp: "北海道へ 行った ことが ありますか。……はい、一度 あります。2年まえに、友達と 行きました。", zh: "你曾經去過北海道嗎？……是的，去過一次。2年前和朋友去的。" },
    { jp: "馬に 乗った ことが ありますか。……いいえ、一度も ありません。ぜひ 乗りたいです。", zh: "你騎過馬嗎？……不，一次也沒有。務必想騎騎看。" },
    { jp: "冬休みは 何を しましたか。……京都の お寺や 神社を 見たり、友達と パーティーを したり しました。", zh: "寒假做了什麼？……參觀了京都的寺廟神社、和朋友開派對等。" },
    { jp: "日本で 何を したいですか。……旅行したり、お茶を 習ったり したいです。", zh: "在日本想做什麼？……想去旅行、學茶道等。" },
    { jp: "体の 調子は どうですか。……おかげさまで よく なりました。", zh: "身體狀況如何？……託您的福，已經好多了。" },
    { jp: "日本語が 上手に なりましたね。……ありがとう ございます。でも、まだまだです。", zh: "日語變厲害了呢！……謝謝。不過還差得遠呢。" },
    { jp: "テレザちゃんは 何に なりたいですか。……医者に なりたいです。", zh: "泰瑞莎想成為什麼？……想成為醫生。" },
    { jp: "マリアさん、あまり 食べませんね。……ええ。きのうから ダイエットを して います。", zh: "瑪麗亞小姐，吃得很少呢。……是的。從昨天開始在減肥。" },
    { jp: "毎日 りんごだけ 食べたり、水を たくさん 飲んだり しました。でも、無理な ダイエットは 体に よくないですね。", zh: "每天只吃蘋果、喝很多水。不過勉強的減肥對身體不好呢。" },
    { jp: "ダイエットは また あしたから します。", zh: "減肥還是從明天開始吧！" }
];

// --- 【第 19 課動詞 た形 變化庫】 ---
const verbs = [
    { id: "vb1", masu: "のぼります (登ります)", dict: "のぼる", ta: "のぼった", group: "I 類動詞", zh: "登、上" },
    { id: "vb2", masu: "とまります (泊まります)", dict: "とまる", ta: "とまった", group: "I 類動詞", zh: "住宿" },
    { id: "vb3", masu: "かきます (書きます)", dict: "かく", ta: "かいた", group: "I 類動詞", zh: "寫" },
    { id: "vb4", masu: "いきます (行きます)", dict: "いく", ta: "いった", group: "I 類動詞 (特例)", zh: "去" },
    { id: "vb5", masu: "いそぎます (急ぎます)", dict: "いそぐ", ta: "いそいだ", group: "I 類動詞", zh: "趕快" },
    { id: "vb6", masu: "のみます (飲みます)", dict: "のむ", ta: "のんだ", group: "I 類動詞", zh: "喝" },
    { id: "vb7", masu: "よびます (呼びます)", dict: "よぶ", ta: "よんだ", group: "I 類動詞", zh: "呼叫" },
    { id: "vb8", masu: "かいます (買います)", dict: "かう", ta: "かった", group: "I 類動詞", zh: "買" },
    { id: "vb9", masu: "まちます (待ちます)", dict: "まつ", ta: "まった", group: "I 類動詞", zh: "等待" },
    { id: "vb10", masu: "はなします (話します)", dict: "はなす", ta: "はなした", group: "I 類動詞", zh: "說話" },
    { id: "vb11", masu: "たべます (食べます)", dict: "たべる", ta: "たべた", group: "II 類動詞", zh: "吃" },
    { id: "vb12", masu: "でかけます (出かけます)", dict: "でかける", ta: "でかけた", group: "II 類動詞", zh: "外出" },
    { id: "vb13", masu: "おきます (起きます)", dict: "おきる", ta: "おきた", group: "II 類動詞", zh: "起床" },
    { id: "vb14", masu: "みます (見ます)", dict: "みる", ta: "みた", group: "II 類動詞", zh: "看" },
    { id: "vb15", masu: "きます (来ます)", dict: "くる", ta: "きた", group: "III 類動詞", zh: "來" },
    { id: "vb16", masu: "します", dict: "する", ta: "した", group: "III 類動詞", zh: "做" },
    { id: "vb17", masu: "せんたくします (洗濯します)", dict: "せんたくする", ta: "せんたくした", group: "III 類動詞", zh: "洗衣服" }
];

// --- 標記儲存邏輯 (LocalStorage) ---
let starredVocabIds = JSON.parse(localStorage.getItem('starred_vocab_19') || '[]');
let starredVerbIds = JSON.parse(localStorage.getItem('starred_verb_19') || '[]');

let vocabMode = 'jp-zh';
let currentVocabIdx = 0;
let currentSentenceIdx = 0;
let currentVerbIdx = 0;

let hwMissedQuestions = [];
let hwCurrentItem = null;

function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    }
}

function switchTab(e, tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    document.getElementById(`${tabId}-section`).classList.add('active');
}

function normalizeText(text) {
    if (!text) return "";
    return text.toString().trim().toLowerCase()
        .replace(/[\s\(\)\[\]（）「」\.\…\。\、\！\？\!\?ー\-]/g, '')
        .replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
}

/* --- 1. 單字卡區塊 (含標記權重抽取) --- */
function setVocabMode(mode) {
    vocabMode = mode;
    renderVocabQuestion();
}

function toggleVocabStar() {
    const item = vocabulary[currentVocabIdx];
    const index = starredVocabIds.indexOf(item.id);
    if (index === -1) {
        starredVocabIds.push(item.id);
    } else {
        starredVocabIds.splice(index, 1);
    }
    localStorage.setItem('starred_vocab_19', JSON.stringify(starredVocabIds));
    updateVocabStarButton();
    renderTable(vocabulary);
}

function updateVocabStarButton() {
    const item = vocabulary[currentVocabIdx];
    const btn = document.getElementById("vocab-star-btn");
    if (starredVocabIds.includes(item.id)) {
        btn.classList.add("starred");
        btn.innerText = "★ 已加入重點複習 (點擊取消)";
    } else {
        btn.classList.remove("starred");
        btn.innerText = "☆ 標記多複習";
    }
}

function renderVocabQuestion() {
    const item = vocabulary[currentVocabIdx];
    document.getElementById("vocab-category").innerText = item.cat;
    document.getElementById("vocab-answer-container").style.display = "none";
    updateVocabStarButton();

    if (vocabMode === 'jp-zh') {
        document.getElementById("vocab-prompt-label").innerText = "請猜出中文意思是：";
        document.getElementById("vocab-question-text").innerText = item.kana;
        document.getElementById("vocab-answer-text").innerText = item.zh;
        document.getElementById("vocab-extra-text").innerText = (item.kanji && item.kanji.trim() !== '') ? `漢字：${item.kanji}` : '';
    } else {
        document.getElementById("vocab-prompt-label").innerText = "請猜出日文唸法是：";
        document.getElementById("vocab-question-text").innerText = item.zh;
        document.getElementById("vocab-answer-text").innerText = item.kana;
        document.getElementById("vocab-extra-text").innerText = (item.kanji && item.kanji.trim() !== '') ? `漢字：${item.kanji}` : '';
    }
}

function nextVocabQuestion() {
    // 演算法：若有標記複習的單字，給予更高的機率抽取到！
    if (starredVocabIds.length > 0 && Math.random() < 0.6) {
        const starPool = vocabulary.filter(v => starredVocabIds.includes(v.id));
        const picked = starPool[Math.floor(Math.random() * starPool.length)];
        currentVocabIdx = vocabulary.findIndex(v => v.id === picked.id);
    } else {
        currentVocabIdx = (currentVocabIdx + 1) % vocabulary.length;
    }
    renderVocabQuestion();
}

function prevVocabQuestion() {
    currentVocabIdx = (currentVocabIdx - 1 + vocabulary.length) % vocabulary.length;
    renderVocabQuestion();
}

function toggleVocabAnswer() {
    const box = document.getElementById("vocab-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakVocab() {
    speakText(vocabulary[currentVocabIdx].kana);
}

/* --- 2. 課文例句測驗 --- */
function renderSentenceQuestion() {
    const item = sentences[currentSentenceIdx];
    document.getElementById("sentence-question-text").innerText = item.zh;
    document.getElementById("sentence-answer-text").innerText = item.jp;
    document.getElementById("sentence-answer-container").style.display = "none";
}

function nextSentenceQuestion() {
    currentSentenceIdx = (currentSentenceIdx + 1) % sentences.length;
    renderSentenceQuestion();
}

function prevSentenceQuestion() {
    currentSentenceIdx = (currentSentenceIdx - 1 + sentences.length) % sentences.length;
    renderSentenceQuestion();
}

function toggleSentenceAnswer() {
    const box = document.getElementById("sentence-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakSentence() {
    speakText(sentences[currentSentenceIdx].jp);
}

/* --- 3. 手寫測驗 --- */
function updateHwBadge() {
    document.getElementById("hw-review-badge").innerText = `待複習錯題：${hwMissedQuestions.length}`;
}

function nextHandwritingQuestion() {
    document.getElementById("hw-user-input").value = "";
    document.getElementById("hw-feedback-container").className = "feedback-box hidden";

    if (hwMissedQuestions.length > 0 && Math.random() < 0.6) {
        hwCurrentItem = hwMissedQuestions[0];
    } else if (starredVocabIds.length > 0 && Math.random() < 0.5) {
        const starPool = vocabulary.filter(v => starredVocabIds.includes(v.id));
        hwCurrentItem = starPool[Math.floor(Math.random() * starPool.length)];
    } else {
        hwCurrentItem = vocabulary[Math.floor(Math.random() * vocabulary.length)];
    }

    document.getElementById("hw-category").innerText = hwCurrentItem.cat;
    document.getElementById("hw-question").innerText = hwCurrentItem.zh;
    updateHwBadge();
}

function checkHandwritingAnswer() {
    const userInput = document.getElementById("hw-user-input").value;
    if (!userInput) return alert("請先輸入答案！");

    const feedbackBox = document.getElementById("hw-feedback-container");
    feedbackBox.classList.remove("hidden");

    const cleanUser = normalizeText(userInput);
    const cleanKana = normalizeText(hwCurrentItem.kana);
    const cleanKanji = hwCurrentItem.kanji ? normalizeText(hwCurrentItem.kanji) : "";
    const isCorrect = (cleanUser === cleanKana || (cleanKanji && cleanUser === cleanKanji));

    if (isCorrect) {
        feedbackBox.className = "feedback-box correct";
        document.getElementById("hw-feedback-status").innerText = "🎉 比對正確！";
        document.getElementById("hw-feedback-detail").innerHTML = `標準答案：<strong>${hwCurrentItem.kana}</strong> ${hwCurrentItem.kanji ? '(' + hwCurrentItem.kanji + ')' : ''}`;
        
        const existIdx = hwMissedQuestions.findIndex(q => q.id === hwCurrentItem.id);
        if (existIdx !== -1) hwMissedQuestions.splice(existIdx, 1);
        speakText(hwCurrentItem.kana);
    } else {
        feedbackBox.className = "feedback-box wrong";
        document.getElementById("hw-feedback-status").innerText = "❌ 答錯了！已加入錯題佇列";
        document.getElementById("hw-feedback-detail").innerHTML = `標準答案：<strong>${hwCurrentItem.kana}</strong> ${hwCurrentItem.kanji ? '(' + hwCurrentItem.kanji + ')' : ''}`;

        const existIdx = hwMissedQuestions.findIndex(q => q.id === hwCurrentItem.id);
        if (existIdx === -1) hwMissedQuestions.push(hwCurrentItem);
    }
    updateHwBadge();
}

/* --- 4. 動詞 た形 變化區塊 (含標記複習) --- */
function toggleVerbStar() {
    const item = verbs[currentVerbIdx];
    const index = starredVerbIds.indexOf(item.id);
    if (index === -1) {
        starredVerbIds.push(item.id);
    } else {
        starredVerbIds.splice(index, 1);
    }
    localStorage.setItem('starred_verb_19', JSON.stringify(starredVerbIds));
    updateVerbStarButton();
}

function updateVerbStarButton() {
    const item = verbs[currentVerbIdx];
    const btn = document.getElementById("verb-star-btn");
    if (starredVerbIds.includes(item.id)) {
        btn.classList.add("starred");
        btn.innerText = "★ 已加入重點複習 (點擊取消)";
    } else {
        btn.classList.remove("starred");
        btn.innerText = "☆ 標記多複習";
    }
}

function renderVerbQuestion() {
    const item = verbs[currentVerbIdx];
    document.getElementById("verb-group").innerText = item.group;
    document.getElementById("verb-masu").innerText = item.masu;
    document.getElementById("verb-meaning").innerText = `中文意思：${item.zh}`;
    
    document.getElementById("verb-ans-dict").innerText = item.dict;
    document.getElementById("verb-ans-ta").innerText = item.ta;
    document.getElementById("verb-ans-exp").innerText = `${item.ta} ことが あります`;
    document.getElementById("verb-ans-tari").innerText = `${item.ta}り します`;
    
    document.getElementById("verb-answer-container").style.display = "none";
    updateVerbStarButton();
}

function nextVerbQuestion() {
    if (starredVerbIds.length > 0 && Math.random() < 0.6) {
        const starPool = verbs.filter(v => starredVerbIds.includes(v.id));
        const picked = starPool[Math.floor(Math.random() * starPool.length)];
        currentVerbIdx = verbs.findIndex(v => v.id === picked.id);
    } else {
        currentVerbIdx = (currentVerbIdx + 1) % verbs.length;
    }
    renderVerbQuestion();
}

function prevVerbQuestion() {
    currentVerbIdx = (currentVerbIdx - 1 + verbs.length) % verbs.length;
    renderVerbQuestion();
}

function toggleVerbAnswer() {
    const box = document.getElementById("verb-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakCurrentVerb() {
    speakText(verbs[currentVerbIdx].dict);
}

/* --- 5. 單字列表與搜尋 --- */
function renderTable(data) {
    const tbody = document.getElementById("word-table-body");
    tbody.innerHTML = "";
    data.forEach(item => {
        const isStarred = starredVocabIds.includes(item.id);
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><button class="btn-sound" onclick="speakText('${item.kana}')">🔊</button></td>
            <td><strong>${item.kana}</strong></td>
            <td>${item.kanji || '-'}</td>
            <td>${item.zh}</td>
            <td>
                <button class="btn-star ${isStarred ? 'starred' : ''}" onclick="toggleListStar('${item.id}')">
                    ${isStarred ? '★ 已標記' : '☆ 標記'}
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function toggleListStar(id) {
    const index = starredVocabIds.indexOf(id);
    if (index === -1) {
        starredVocabIds.push(id);
    } else {
        starredVocabIds.splice(index, 1);
    }
    localStorage.setItem('starred_vocab_19', JSON.stringify(starredVocabIds));
    renderTable(vocabulary);
    updateVocabStarButton();
}

function filterWords() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const filtered = vocabulary.filter(item => 
        item.kana.toLowerCase().includes(query) || 
        item.kanji.toLowerCase().includes(query) || 
        item.zh.includes(query)
    );
    renderTable(filtered);
}

window.onload = function() {
    renderVocabQuestion();
    renderSentenceQuestion();
    nextHandwritingQuestion();
    renderVerbQuestion();
    renderTable(vocabulary);
};
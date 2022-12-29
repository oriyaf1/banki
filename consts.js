
export const templates = {
    userItem: `<div class="user-item" id="[id]">
    <div class="user-avatar">[avatar]</div>
    <div>[firstName]</div>
    <div>[lastName]</div>
</div>`,
    accountItemActive: `<li class="account-item card" id="[id]">
                        <span class="money-bag">💰</span>
                        <div>מספר חשבון:<span class="account-number">[number]</span></div>
                        <span class="is-account-active active">פעיל</span>
                        </li>`,
    accountItemNotActive: `<li class="account-item" id="[id]">
                        <span class="money-bag">💸</span>
                        <div>מספר חשבון:<span class="account-number">[number]</span></div>
                        <span class="is-account-active not-active">לא פעיל</span>
                        </li>`,
    transactionItem: `<li class="transaction-item">
                            <div class="account-number">[displayDate]</div>
                            <div  class="amount">[amount] ₪</div>
                            <ul id="[id]" class="transaction-tags-list"></ul>
                        </li>`,
    tag: `<li class="tag">[name]
            <span>[avatar]</span>
        </li>`,

}


export const lists = {
    firstName: [
        "יהודה", "יובל", "בר", "אסף", "לביא",
        "עומרי", "יגאל", "מתן", "ירון",
        "דניאל", "יורם", "חסד", "סרגיי",
        "בועז", "סער", "לידור", "צוק", "איתן", "גד",
        "לי", "הוד", "יקיר", "לירון",
        "אסף", "חגי", "דור", "רועי",
        "אסיף", "עדן", "אורי", "יעקב",
        "יאיר", "דולב", "זאב", "סיני",
        "נחשון", "בארי", "יחזקאל", "סשה",
        "דורון", "אורי", "זוהר", "נבו",
        "אלון", "דביר", "דניאל", "נדב",
        "עומרי", "רותם", "אלכס"
    ],
    lastName: [
        "חלד", "קדמי", "פורת", "קנת",
        "סלע", "שדר", "פלס", "זכריה",
        "מזא׳׳ה", "גופר", "להבי", "זק׳׳ש",
        "אבן שושן", "שופט", "שמואלי", "קמחי",
        "הר נוי", "בר אור", "שלומי", "שור",
        "דן", "בר אור", "שחם", "אורון",
        "שמעון", "העצני", "ישי", "מאירי",
        "אביעזר", "נוימרק", "בר אור", "ראובני",
        "אחרון", "כנעני", "יהב", "אלרון",
        "צוק", "איילון", "קנר", "רשף",
        "בן יעקב", "לוי", "נחושתן", "תרשיש",
        "בן דיין", "מיכה", "ארז", "כנר",
        "שוער", "סימן טוב"
    ],
    avatar: ['🐢', '🐗', '🐤', '🐵', '🐻',
        '🐼', '🦕', '🐠', '🐅', '🦏', '🦣',
        '🦧', '🐈', '🐑', '🐿', '🦨', '🦚',
        '🐱', '🐭', '🐰', '👨🏾‍🦱', '🤠', '💀',
        '👺', '😨', '😱', '😁', '😁', '👮‍♂️',
        '🧛🏼', '🦸🏻', '👩🏻‍🚒', '👩🏻‍🏭', '🕵🏽‍♀️', '💂🏻',
        '👷🏽', '👳🏽', '👮‍♂️', '👮🏽']
    ,
}
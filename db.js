import {
    uuidv4, randomInRange,
    randomFirstName, randomAvatar,
    randomLastName, randomBalance,
    randomAmount, randomItem,
    randomDate,
} from './helpers.js'

class User {
    id = uuidv4();
    firstName = '';
    lastName = '';
    avatar = '🧔';
}
class Transaction {
    id = uuidv4();
    amount;
    date;
    tags = [];
    accountId;

}
class Tag {
    id = uuidv4();
    name;
    avtar;
}

class Account {
    id = uuidv4();
    isActive = true;
    ownerId;
    balance;
    number;
}
const db = {
    accounts: [],
    users: [],
    tags: [],
    transactions: [],
    API: {
        getAllUsers: () => db.users,
        getUserAccounts: (userId) => db.accounts.filter(a => a.ownerId == userId),
        getAccountTransactions: (accountId) => db.transactions.filter(t => t.accountId == accountId),
        getAccountBalance: (accountId) => db.accounts.filter(a => a.id == accountId)[0].balance,
        // getAccountTags: (tagsIds) => db.tags.filter(tag => tagsIds.includes(tag.id)),
    }
}
const initDataBase = () => {
    db.tags = [
        { name: 'משכורת', avatar: '💰', id: uuidv4() },
        { name: 'דלק', avatar: '⛽', id: uuidv4() },
        { name: 'מוסך', avatar: '💊', id: uuidv4() },
        { name: 'אוכל', avatar: '🍔', id: uuidv4() },
        { name: 'תשלום', avatar: '💳', id: uuidv4() },
        { name: 'קניות', avatar: '🛍️', id: uuidv4() },
        { name: 'בט"ל', avatar: '💵', id: uuidv4() },
        { name: 'צדקה', avatar: '💰', id: uuidv4() },
        { name: 'טלפון', avatar: '📱', id: uuidv4() },
        { name: 'הגרלה', avatar: '🎲', id: uuidv4() },
        { name: 'טיול', avatar: '🏖️', id: uuidv4() },
        { name: 'השכרה', avatar: '🏢', id: uuidv4() },
        { name: 'דירה', avatar: '🏠', id: uuidv4() },
        { name: 'אשראי', avatar: '💳', id: uuidv4() },
        { name: 'מזומן', avatar: '💵', id: uuidv4() },
        { name: "צ'ק", avatar: '💰', id: uuidv4() },
        { name: 'חופשה', avatar: '🏖️', id: uuidv4() },
        { name: 'עבודה', avatar: '🛬', id: uuidv4() },
        { name: 'דיור', avatar: '🏠', id: uuidv4() },
        { name: 'לבית', avatar: '🛋️', id: uuidv4() },
        { name: 'חנות', avatar: '🏬', id: uuidv4() },
        { name: 'רכב', avatar: '🚗', id: uuidv4() },
        { name: 'אבטחה', avatar: '🔒', id: uuidv4() },
        { name: 'כשרות', avatar: '🍽️', id: uuidv4() },
        { name: 'מסעדה', avatar: '🍽️', id: uuidv4() },
    ];
    db.accounts = db.users = db.transactions = [];
    // generate users:
    db.users = [...Array(45).keys()].map(i => {
        let user = new User();
        user.firstName = randomFirstName();
        user.lastName = randomLastName();
        user.avatar = randomAvatar();
        return user;
    });

    db.accounts = [];
    db.users.forEach(user => {
        for (let index = 0; index < randomInRange(1, 5); index++) {
            let account = new Account();
            account.balance = randomBalance();
            account.isActive = (randomInRange(4, 9) % 3) != 0;
            account.ownerId = user.id;
            account.number = randomInRange(1000, 9999).toString() + '-' + randomInRange(1000, 9999).toString();
            db.accounts.push(account);
        }
    })
    var now = new Date();
    const start = new Date(now.getFullYear() - 3, 0, 1); // January 1 of the year before the current year
    db.accounts.forEach(account => {
        for (let index = 0; index < randomInRange(30, 100); index++) {
            let transaction = new Transaction();
            transaction.amount = randomAmount();
            transaction.accountId = account.id;
            transaction.date = randomDate(start, now)
            transaction.tags = [];
            for (let j = 0; j < randomInRange(1, 3); j++)
                transaction.tags.push(randomItem(db.tags));
            db.transactions.push(transaction);
        }
    });
};


initDataBase();
export default db.API;




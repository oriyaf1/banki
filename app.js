import { templates } from './consts.js'
import bankAPI from './db.js'
let elements = {
    userList: undefined,
    accountList: undefined,
    transactionList: undefined,
    transactionBalance: undefined,
}
window.onload = (event) => {
    elements.userList = document.getElementById('users-list');
    elements.accountList = document.getElementById('accounts-list');
    elements.transactionList = document.getElementById('transactions-list');
    elements.transactionBalance = document.getElementById('transactions-content');
    initUserList();
};
const initUserList = () => {
    // TODO: remove user event listener:
    //render users:
    elements.userList.innerHTML = renderList(templates.userItem, bankAPI.getAllUsers())
    //add user event listener:
    for (const userItem of elements.userList.children) {
        userItem.addEventListener('click', userItemClicked)

    }
}

const renderList = (itemTemplate, dataArr) => {
    let listHtml = '';
    dataArr.forEach(item => listHtml += render(itemTemplate, item));
    return listHtml;
}
const render = (itemTemplate, item) => {
    let itemHtml = '';
    let r = /\[(.*)\]/g
    let propsInTemplate = itemTemplate.match(r);
    if (propsInTemplate) {
        itemHtml = itemTemplate;
        propsInTemplate.forEach(prop => {
            let propName = prop.replace('[', '').replace(']', '');
            if (item[propName])
                itemHtml = itemHtml.replace(prop, item[propName])
        });
    }
    return itemHtml;
}



const userItemClicked = (event) => {

    elements.transactionBalance.style.display = 'none'
    elements.transactionBalance.innerHTML = ''
    elements.transactionList.innerHTML = '<li class=" account-number">לא נבחר חשבון</li>'

    initAccountList(event.target.id)

    // handel active class
    let preActive = document.querySelector('.active-user-item')
    if (preActive)
        preActive.classList.remove('active-user-item')
    event.target.classList.add('active-user-item')
}

const initAccountList = (userId) => {
    // TODO: remove account event listener:

    //render account:
    let listHtml = '';
    bankAPI.getUserAccounts(userId).forEach(item => {
        if (item.isActive)
            listHtml += render(templates.accountItemActive, item);
        else
            listHtml += render(templates.accountItemNotActive, item);

    });
    elements.accountList.innerHTML = listHtml

    //add account event listener:
    for (const accountItem of elements.accountList.children) {
        accountItem.addEventListener('click', accountItemClicked)

    }
}

const accountItemClicked = (event) => {
    initTransactionsList(event.target.id)
    let preActive = document.querySelector('.active-account-item')
    if (preActive)
        preActive.classList.remove('active-account-item')
    event.target.classList.add('active-account-item')
    console.log(event.target.classList)
}
const initTransactionsList = (accountId) => {

    // render transactions:
    elements.transactionList.innerHTML = '';
    let transactions = bankAPI.getAccountTransactions(accountId)
    transactions.sort((a, b) => b.date - a.date);
    let balance = bankAPI.getAccountBalance(accountId);
    elements.transactionBalance.style.display = 'flex'
    elements.transactionBalance.innerHTML = ` ${balance >= 0 ? '😃💰' : '😢'} יתרה: ${balance}₪`;
    transactions.forEach(item => {
        item.displayDate = item.date.toLocaleString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        elements.transactionList.innerHTML += render(templates.transactionItem, item);
        let tagUl = document.getElementById(item.id)
        item.amount < 0 ? tagUl.classList.add('minus') : tagUl.classList.add('plus');
        item.tags.forEach(tag => {
            console.log(render(templates.tag, tag))
            tagUl.innerHTML += render(templates.tag, tag);
        })
    });

    // elements.transactionList.innerHTML = listHtml;


}
import Money from "./Money";

let money = new Money(1, new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }));
const tickedCount:number = 3;
const ticketPrice = new Money(2, new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }));

console.log(money.display());

// 上のmoneyが定数にできない + ロジック直書きになってるのでファーストクラスコレクションでカプセル化するべき？
// ticketクラス + あるグループのチケット総料金を表示するくらいのGroupクラス？
[...Array(tickedCount)].map(() => money = money.add(ticketPrice));
console.log(money.display());
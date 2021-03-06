let transactions =[];

class Transaction{
  constructor(payee,amy){
    this.payee=payee;
    this.amt=amt;

  }
}

class Account{
  constructor(name){
    this.name=name;
    this.transactions=[];

  }
  deposit(amt){
    this.transactions.push(new Transaction('deposit',amt));
  }
charge(payee,amt){
  this.transactions.push(new Transaction(payee,-1*amt))
}
  balance(){
    let balance=0;
    for(leti=0;i<this.transactions.length;i++){
      let transaction=this.transactions[i];
      sum=sum+transaction.amt;
    }
    return balance;
  }
}

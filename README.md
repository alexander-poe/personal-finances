


## DB STRUCTURE
  ```sql
  CREATE TABLE Check (
      ID int,
      Amount int,
      DateDeposited DATE,
      Description varchar(255),
      Picture varchar(255),
      Reoccuring BOOLEAN,
      PRIMARY KEY (ID)
  );

  CREATE TABLE CheckTerm (
      ID int NOT NULL AUTO_INCREMENT,
      CheckID int FOREIGN KEY REFERENCES CHECK(ID),
      Twenty int,
      Thirty int,
      Fifty int,
    );

    CREATE TABLE Transactions (
        ID int NOT NULL AUTO_INCREMENT,
        CheckTermID int FOREIGN KEY REFERENCES CheckTerm(ID),
        Transaction int,
        Description varchar(255),
        Photo varchar(255),
        PRIMARY KEY (ID)
    );
```

1. Check

    1. User adds payment
      1. Amount
      2. Picture
      3. Description
      3. Reoccuring (true / false)
    2. Generated Automatically
      1. ID
      2. Date Deposited

2. CheckTerm

  1. For the current status of check amount
  2. Check is added computer calculates
      1. 20% of initial check
      2. 30% of initial check
      3. 50% of initial check


3. Transactions

  1. Adjustment is made to (Twenty / Thirty / Fifty)

    1. User adds transaction
        1. Amount
        2. Description
        3. Photo
    2. Generated Automatically
        1. ID
        2. CheckTermID  

## Routes

1. Check
  1. User adds check
  2. User deletes check

2. CheckTerm
  1. Computer adds term
  2. Computer modifies when user inputs transaction
  3. Computer fetches CheckTerm

3. Transactions
  1. User adds transaction
  2. User fetches transactions
  3. User deletes transactions

## Report Feature

```

Period | Total Income | Total Spent | Total Saved
------------- | -------------  |
March         | 3000.00 | 1200.00 | 2800.00

TransactionID| Amount | Description | Photo
------------- | -------------  |
122  | 30.00 | Groceries | Photo
123  | 20.00 | Gas | Photo
124  | 100.00 | Insurance | Photo


Twenty | Thirty| Fifty | Remaining
------------- | -------------  |
600.00       | 54.23 | 100.10 | 754.23

```


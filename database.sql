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
    CheckID int FOREIGN KEY REFERENCES CHECKS(ID),
    Twenty int,
    Thirty int,
    Fifty int,
  );

  CREATE TABLE TermTransactions (
      ID int NOT NULL AUTO_INCREMENT,
      CheckTermID int FOREIGN KEY REFERENCES CheckTerm(ID),
      Transaction int,
      Description varchar(255),
      Photo varchar(255),
      PRIMARY KEY (ID)
  );

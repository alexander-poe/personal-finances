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
    ID int primary key,
    CheckID int references CHECKS(ID),
    Twenty int,
    Thirty int,
    Fifty int
  );

  CREATE TABLE TermTransactions (
      ID int primary key,
      CheckTermID int references CheckTerm(ID),
      Transaction int,
      Description varchar(255),
      Photo varchar(255),
  );

  CREATE TABLE CheckTerm (
    ID int primary key,
    CheckID int references CHECKS(ID),
    Twenty int,
    Thirty int,
    Fifty int
  );

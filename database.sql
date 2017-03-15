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
    ID int,
    CheckID int FOREIGN KEY REFERENCES CHECKS(ID),
    Twenty int,
    Thirty int,
    Fifty int,
  );

  CREATE TABLE TermTransactions (
      ID int,
      TermID,
      Twenty int,
      Thirty int,
      Fifty int,
    );

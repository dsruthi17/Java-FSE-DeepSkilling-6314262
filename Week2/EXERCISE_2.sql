use tech;

-- Scenario1: Process Monthly Interest for Savings Accounts
DELIMITER $$
CREATE PROCEDURE ProcessMonthlyInterest()
BEGIN
    -- Apply a 1% interest to all balances
    UPDATE customers
    SET balance = balance + (balance * 0.01)
    WHERE balance IS NOT NULL;
END$$

DELIMITER ;

CALL ProcessMonthlyInterest();
SELECT * FROM customers;

-- Scenario 2: Update Employee Bonus

DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    department VARCHAR(50),
    bonus DECIMAL(10, 2)
);

INSERT INTO employees (emp_id, emp_name, department, bonus)
VALUES
    (1, 'John', 'Sales', 1000.00),
    (2, 'Jane', 'HR', 800.00),
    (3, 'Alex', 'Sales', 1200.00),
    (4, 'Sara', 'IT', 900.00),
    (5, 'Chris', 'HR', 1100.00);

DELIMITER $$
CREATE PROCEDURE UpdateEmployeeBonus(
    IN dept_name VARCHAR(50), 
    IN bonus_percent DECIMAL(5, 2)
)
BEGIN
    UPDATE employees
    SET bonus = bonus + (bonus * (bonus_percent / 100))
    WHERE department = dept_name;
END$$
DELIMITER ;
SET SQL_SAFE_UPDATES = 0;
CALL UpdateEmployeeBonus('Sales', 10);
SET SQL_SAFE_UPDATES = 1;

SELECT * FROM employees;

-- Scenario 3: Transfer Funds Between Accounts

DROP TABLE IF EXISTS accounts;
CREATE TABLE accounts (
    account_id INT PRIMARY KEY,
    customer_id INT,
    balance DECIMAL(10, 2)
);
INSERT INTO accounts (account_id, customer_id, balance)
VALUES
    (1, 101, 5000.00),
    (2, 102, 3000.00),
    (3, 103, 7000.00),
    (4, 104, 4000.00),
    (5, 105, 2000.00);

DELIMITER $$
CREATE PROCEDURE TransferFunds(
    IN source_account INT, 
    IN target_account INT, 
    IN transfer_amount DECIMAL(10, 2)
)
BEGIN
    DECLARE insufficient_balance INT DEFAULT 0;
    SELECT CASE WHEN balance < transfer_amount THEN 1 ELSE 0 END
    INTO insufficient_balance
    FROM accounts
    WHERE account_id = source_account;
    IF insufficient_balance = 1 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient balance in the source account';
    ELSE
        UPDATE accounts
        SET balance = balance - transfer_amount
        WHERE account_id = source_account;
        UPDATE accounts
        SET balance = balance + transfer_amount
        WHERE account_id = target_account;
    END IF;
END$$
DELIMITER ;
CALL TransferFunds(1, 2, 500);
SELECT * FROM accounts;

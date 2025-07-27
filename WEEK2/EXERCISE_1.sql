USE tech;

DROP TABLE customers;

CREATE TABLE customers (
    cid INT,
    cname VARCHAR(20),
    age INT,
    cur_loan_interest DECIMAL(5, 2),
    balance DECIMAL(10, 2),
    is_vip CHAR(1) DEFAULT 'N'
);
INSERT INTO customers (cid, cname, age, cur_loan_interest, balance)
VALUES
    (1, 'Alice', 65, 7.5, 12000.00),
    (2, 'Bob', 58, 6.8, 8000.00),
    (3, 'Charlie', 70, 8.2, 15000.00),
    (4, 'Diana', 45, 5.9, 4000.00),
    (5, 'Edward', 62, 6.7, 11000.00);

SELECT 
    *
FROM
    customers;

-- ➡️ Scenario 1: Apply 1% Discount for Customers Above 60

DELIMITER $$
CREATE PROCEDURE ApplyDiscount()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE v_cid INT;
    DECLARE v_age INT;
    DECLARE v_cur_loan_interest DECIMAL(5, 2);
    DECLARE customer_cursor CURSOR FOR
        SELECT cid, age, cur_loan_interest FROM customers;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    OPEN customer_cursor;
    read_loop: LOOP
        FETCH customer_cursor INTO v_cid, v_age, v_cur_loan_interest;
        IF done THEN
            LEAVE read_loop;
        END IF;
        IF v_age > 60 THEN
            UPDATE customers
            SET cur_loan_interest = v_cur_loan_interest * 0.99
            WHERE cid = v_cid;
        END IF;
    END LOOP;
    CLOSE customer_cursor;
END$$
DELIMITER ;

SELECT * FROM CUSTOMERS;

-- Scenario 2: Set VIP Status Based on Balance

SET SQL_SAFE_UPDATES = 0;
UPDATE customers
SET is_vip = CASE
    WHEN balance > 10000 THEN 'Y'
    ELSE 'N'
END;

SET SQL_SAFE_UPDATES = 1;

SELECT * FROM CUSTOMERS;


-- Scenario 3: Send Reminders for Loans Due Within the Next 30 Days

DESC customers;
ALTER TABLE customers DROP loan_due_date;
ALTER TABLE customers ADD loan_due_date DATE;
SET SQL_SAFE_UPDATES = 0;
UPDATE customers
SET loan_due_date = CASE
    WHEN cid = 1 THEN CURDATE() + INTERVAL 25 DAY
    WHEN cid = 2 THEN CURDATE() + INTERVAL 40 DAY
    WHEN cid = 3 THEN CURDATE() + INTERVAL 10 DAY
    WHEN cid = 4 THEN CURDATE() + INTERVAL 5 DAY
    WHEN cid = 5 THEN CURDATE() + INTERVAL 35 DAY
END
WHERE cid IN (1, 2, 3, 4, 5);
DELIMITER $$
DROP PROCEDURE IF EXISTS SendLoanReminders$$
CREATE PROCEDURE SendLoanReminders()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE v_cid INT;
    DECLARE v_cname VARCHAR(20);
    DECLARE v_due_date DATE;
    DECLARE customer_cursor CURSOR FOR
        SELECT cid, cname, loan_due_date
        FROM customers
        WHERE loan_due_date <= CURDATE() + INTERVAL 30 DAY;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    OPEN customer_cursor;
    read_loop: LOOP
        FETCH customer_cursor INTO v_cid, v_cname, v_due_date;
        IF done THEN
            LEAVE read_loop;
        END IF;
        SELECT CONCAT('Reminder: Loan due for ', v_cname, ' on ', v_due_date) AS Reminder_Message;
    END LOOP;
    CLOSE customer_cursor;
END$$
DELIMITER ;
SELECT * FROM customers;

